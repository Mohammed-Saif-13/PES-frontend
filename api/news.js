// api/news.js

/**
 * Vercel Serverless Function
 * Acts as proxy to NewsAPI (bypasses production domain restriction)
 */
export default async function handler(req, res) {
  // CORS headers
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // Handle OPTIONS request
  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }

  try {
    // Get API key from environment (NOT VITE_ prefix)
    const API_KEY = process.env.NEWS_API_KEY;

    if (!API_KEY) {
      throw new Error("API key not configured");
    }

    // PHARMA-ONLY configuration
    const PHARMA_DOMAINS =
      "fiercepharma.com,biopharmadive.com,statnews.com,endpts.com,pharmabiz.com,pharmatimes.com,pharmaceutical-technology.com,pharmavoice.com,thepharmaletter.com";
    const PHARMA_KEYWORDS =
      '(pharmaceutical OR pharma OR "FDA approval" OR "drug approval" OR "clinical trial" OR biotech OR biotechnology OR "drug development" OR "medical device" OR "drug discovery" OR vaccine OR "life sciences")';

    // Call NewsAPI from server-side
    const response = await fetch(
      `https://newsapi.org/v2/everything?` +
        `q=${encodeURIComponent(PHARMA_KEYWORDS)}&` +
        `domains=${PHARMA_DOMAINS}&` +
        `language=en&` +
        `sortBy=publishedAt&` +
        `pageSize=100&` +
        `apiKey=${API_KEY}`,
      {
        headers: {
          "User-Agent": "Mozilla/5.0",
        },
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "NewsAPI Error");
    }

    // Return data to client
    res.status(200).json(data);
  } catch (error) {
    console.error("API Error:", error);
    res.status(500).json({
      status: "error",
      message: error.message,
      articles: [],
    });
  }
}

// api/news.js

/**
 * Vercel Serverless Function for Pharma News
 * Acts as proxy to NewsAPI to bypass production domain restrictions
 */
export default async function handler(req, res) {
  // CORS headers
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // Handle OPTIONS request (preflight)
  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }

  try {
    // Get API key from environment variable
    const API_KEY = process.env.NEWS_API_KEY;

    if (!API_KEY) {
      throw new Error("API key not configured in environment variables");
    }

    // PHARMA-ONLY DOMAINS (All verified pharmaceutical news sources)
    const PHARMA_DOMAINS =
      "fiercepharma.com,biopharmadive.com,statnews.com,endpts.com,pharmabiz.com,pharmatimes.com,pharmaceutical-technology.com,pharmavoice.com,thepharmaletter.com";

    // PHARMA-SPECIFIC KEYWORDS (Comprehensive pharmaceutical terms)
    const PHARMA_KEYWORDS =
      '(pharmaceutical OR pharma OR "FDA approval" OR "drug approval" OR "clinical trial" OR biotech OR biotechnology OR "drug development" OR "medical device" OR "drug discovery" OR vaccine OR "life sciences")';

    // Call NewsAPI from server-side (bypasses domain restriction)
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
          "User-Agent": "Mozilla/5.0 (compatible; PharmaEmpowerBot/1.0)",
        },
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "NewsAPI request failed");
    }

    // Return successful response
    res.status(200).json(data);
  } catch (error) {
    console.error("Pharma News API Error:", error.message);

    // Return error response
    res.status(500).json({
      status: "error",
      message: error.message,
      articles: [],
      totalResults: 0,
    });
  }
}

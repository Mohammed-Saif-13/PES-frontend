import { color } from "framer-motion";

/** @type {import('tailwindcss/postcss').Config} */
export default {
  // Shadcn ne dark mode add kiya hoga
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      color: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
      },
      // Custom theme extensions here
    },
  },
  plugins: [],
};

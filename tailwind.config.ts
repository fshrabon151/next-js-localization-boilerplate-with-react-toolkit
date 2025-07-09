import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ["var(--font-satoshi)", "sans-serif"],
        "avenir-arabic": ["var(--font-avenir-arabic)", "sans-serif"],
      },
      container: {
        center: true, // Center the container by default
        padding: "1rem",
        screens: {
          DEFAULT: "100%",
          xl: "1344px",
        },
      },
      colors: {
        brandBlue: {
          DEFAULT: "#0055FF",
          80: "#0055FFCC", // 80% = CC
          60: "#0055FF99", // 60% = 99
          40: "#0055FF66", // 40% = 66
          20: "#0055FF33", // 20% = 33
          light: "#F6F9FF",
        },
        brandEgyptianBlue: {
          DEFAULT: "#1A32AF",
          80: "#1A32AFCC",
          60: "#1A32AF99",
          40: "#1A32AF66",
          20: "#1A32AF33",
        },
        brandRichBlack: {
          DEFAULT: "#061027",
          80: "#061027CC",
          60: "#06102799",
          40: "#06102766",
          20: "#06102733",
        },

        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;

import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          400: "#22d3ee",
          500: "#06b6d4"
        }
      }
    }
  },
  plugins: []
};

export default config;

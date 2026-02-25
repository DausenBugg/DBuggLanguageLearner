import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const base = process.env.GITHUB_PAGES === "true" ? "/DBuggLanguageLearner/" : "/";

export default defineConfig({
  plugins: [react()],
  base
});

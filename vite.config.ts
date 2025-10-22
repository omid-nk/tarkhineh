import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
export default defineConfig({
  plugins: [tailwindcss()],
  base: "/tarkhineh/", // 👈 برای GitHub Pages خیلی مهمه
});

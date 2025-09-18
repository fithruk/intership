import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { visualizer } from "rollup-plugin-visualizer";
import { defineConfig } from "vite";
import checker from "vite-plugin-checker";
import viteCompression from "vite-plugin-compression";
import Inspect from "vite-plugin-inspect";
import svgr from "vite-plugin-svgr";
import virtualModules from "vite-plugin-virtual";

export default defineConfig({
  plugins: [
    react(),
    virtualModules(),
    tailwindcss(),
    svgr(),
    checker({
      typescript: true,
    }),
    viteCompression({ algorithm: "brotliCompress", ext: ".br" }),
    Inspect(),
    visualizer({ open: true }),
  ],
  build: {
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
      },
      format: {
        comments: false,
      },
    },
  },
});

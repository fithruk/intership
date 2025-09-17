import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import checker from "vite-plugin-checker";
import viteCompression from "vite-plugin-compression";
import Inspect from "vite-plugin-inspect";
import tailwindcss from "@tailwindcss/vite";
import virtualModules from "vite-plugin-virtual";
import { visualizer } from "rollup-plugin-visualizer";

export default defineConfig({
  plugins: [
    react(),
    virtualModules(),
    tailwindcss(),
    svgr(),
    checker({
      typescript: true,
      eslint: { lintCommand: "eslint ./src --ext .ts,.tsx" },
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

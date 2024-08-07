import { fileURLToPath, URL } from "node:url";

import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";
// import mkcert from "vite-plugin-mkcert";

// https://vitejs.dev/config/
export default defineConfig({
  base: "",
  // server: { https: true },
  plugins: [
    vue(),
    // for pwa testing
    // mkcert(),
    VitePWA({
      registerType: "autoUpdate",
      injectRegister: "auto",
      workbox: {
        globPatterns: ["**/*.{js,css,html,ico,png,svg,json,vue,txt,woff2}"],
        cleanupOutdatedCaches: false,
      },
      manifest: {
        name: "Robonomics Sensors CY",
        short_name: "Robonomics Sensors CY",
        description:
          "Decentralized opensource sensors air monitoring map on Cyprus",
        theme_color: "#333",
        background_color: "#333",
        display: "standalone",
        icons: [
          {
            purpose: "maskable",
            src: "app-icon-512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            purpose: "any",
            src: "app-icon-512-rounded.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "app-icon-512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "app-icon-256.png",
            sizes: "256x256",
            type: "image/png",
          },
          {
            src: "app-icon-192.png",
            sizes: "192x192",
            type: "image/png",
          },
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  build: {
    target: ["es2020"],
  },
  optimizeDeps: {
    esbuildOptions: {
      target: ["es2020"],
    },
  },
});

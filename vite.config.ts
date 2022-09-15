import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { Mode, plugin } from "vite-plugin-markdown";
import GitRevision from "vite-plugin-git-revision";
import { imagetools } from "vite-imagetools";
import { VitePWA } from "vite-plugin-pwa";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const GitRevisionPlugin = GitRevision.default;
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    plugin({
      mode: [Mode.VUE],
    }),
    imagetools(),
    GitRevisionPlugin({}),
    VitePWA({
      mode: "production",
      manifest: {
        name: "Maxime Scharwath",
        short_name: "Maxime Scharwath",
        description: "Maxime Scharwath's personal website",
        theme_color: "#031d44",
      },
    }),
  ],
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});

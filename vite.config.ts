import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { Mode, plugin } from "vite-plugin-markdown";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    plugin({
      mode: [Mode.VUE],
    }),
  ],
});

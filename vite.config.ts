import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { Mode, plugin } from "vite-plugin-markdown";
import GitRevision from "vite-plugin-git-revision";
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
    GitRevisionPlugin({}),
  ],
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});

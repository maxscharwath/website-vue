import { createApp } from "vue";
import "./style.scss";
import App from "./App.vue";
import VueFeather from "vue-feather";
import { MotionPlugin } from "@vueuse/motion";
import { createHead } from "@vueuse/head";

createApp(App)
  .component(VueFeather.name, VueFeather)
  .use(MotionPlugin)
  .use(createHead())
  .mount("#app");

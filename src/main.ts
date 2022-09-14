import { createApp } from "vue";
import "./style.scss";
import App from "./App.vue";
import VueFeather from "vue-feather";
import { MotionPlugin } from "@vueuse/motion";

createApp(App)
  .component(VueFeather.name, VueFeather)
  .use(MotionPlugin)
  .mount("#app");

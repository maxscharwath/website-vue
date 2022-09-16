import { createApp } from "vue";
import "./style.scss";
import App from "./App.vue";
import VueFeather from "vue-feather";
import { MotionPlugin } from "@vueuse/motion";
import { createHead } from "@vueuse/head";
import * as VueRouter from "vue-router";

const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes: [],
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
      };
    }
  },
});

createApp(App)
  .component(VueFeather.name, VueFeather)
  .use(router)
  .use(MotionPlugin)
  .use(createHead())
  .mount("#app");

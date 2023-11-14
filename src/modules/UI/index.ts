import { createPinia } from "pinia";
import { createApp } from "vue";
import { router } from "./router";
import App from "./App.vue";

export function createUI() {
  const appUI = createApp(App);
  const pinia = createPinia();

  appUI.use(router);
  appUI.use(pinia);

  return { appUI, router };
}

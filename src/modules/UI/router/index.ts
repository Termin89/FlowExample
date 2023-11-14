import { createRouter, createMemoryHistory } from "vue-router";
import { routes } from "./map";

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

import { RouteRecordRaw } from "vue-router";
import HelloWorldVue from "../components/HelloWorld.vue";
import { MapScreens } from "../../../types";

export const map: MapScreens<RouteRecordRaw> = {
  AUTH: {
    path: "/auth",
    name: "AUTH",
    component: HelloWorldVue,
  },
  CALLING: {
    path: "/calling",
    name: "CALLING",
    component: HelloWorldVue,
  },
  CODE_WORD: {
    path: "/code-word",
    name: "CODE_WORD",
    component: HelloWorldVue,
  },
  DELIVERY: {
    path: "/delivery",
    name: "DELIVERY",
    component: HelloWorldVue,
  },
  DONED: {
    path: "/doned",
    name: "DONED",
    component: HelloWorldVue,
  },
  PASSPORT_FULL: {
    path: "/passport-full",
    name: "PASSPORT_FULL",
    component: HelloWorldVue,
  },
  PASSPORT_NUMBER: {
    path: "/passport-number",
    name: "PASSPORT_NUMBER",
    component: HelloWorldVue,
  },
  WRITE_SMS: {
    path: "/write-sms",
    name: "WRITE_SMS",
    component: HelloWorldVue,
  },
  MK: {
    path: "/mk",
    name: "MK",
    component: HelloWorldVue,
  },
  REJECTED: {
    path: "/rejected",
    name: "REJECTED",
    component: HelloWorldVue,
  },
};

function createRoutesForStates<Route extends object>(map: MapScreens<Route>) {
  return Object.keys(map).reduce((routes, key) => {
    const route = map[key as keyof MapScreens<Route>] as Route & {
      name: string;
    };
    route.name = key;
    routes.push(route);
    return routes;
  }, [] as Route[]);
}

const initDefaultRoute: RouteRecordRaw = {
  path: "/",
  name: "LOADING",
  component: HelloWorldVue,
};
export const routes = [...createRoutesForStates(map), initDefaultRoute];

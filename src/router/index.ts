import Vue from "vue";
import Router, { RouteConfig } from "vue-router";
import index from "../views/index.vue";
import About from "../views/about.vue";
import Home from "../views/Home.vue";

Vue.use(Router);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "index",
    component: index,
  },
  {
    path: "/about",
    name: "about",
    component: About,
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
];

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

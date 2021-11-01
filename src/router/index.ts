import Vue from "vue";
import Router, { RouteConfig } from "vue-router";
// import dashboard from "../layouts/Dashboard.vue";
Vue.use(Router);

let routes = [
  {
    // will match everything
    path: "*",
    component: () => import("../views/404.vue"),
  },
  {
    path: "/",
    name: "Home",
    redirect: "/dashboard",
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    layout: "dashboard",
    component: () => import("../views/Dashboard.vue"),
  },
  {
    path: "/tables",
    name: "Tables",
    layout: "dashboard",
    component: () => import("../views/Tables.vue"),
  },
  {
    path: "/billing",
    name: "Billing",
    layout: "dashboard",
    component: () => import("../views/Billing.vue"),
  },
  {
    path: "/sign-in",
    name: "Sign-In",
    meta: {
      layoutClass: "layout-sign-in",
    },
    component: () => import("../views/Sign-In.vue"),
  },
  {
    path: "/sign-up",
    name: "Sign-Up",
    meta: {
      layoutClass: "layout-sign-up",
    },
    component: () => import("../views/Sign-Up.vue"),
  },
];

//将从每个路线布局属性添加到元
//对象所以以后可以访问它
function addLayoutToRoute(route: any, parentLayout = "default") {
  route.meta = route.meta || {};
  route.meta.layout = route.layout || parentLayout;

  if (route.children) {
    route.children = route.children.map((childRoute: any) =>
      addLayoutToRoute(childRoute, route.meta.layout)
    );
  }
  return route;
}

routes = routes.map((route) => addLayoutToRoute(route));

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        selector: to.hash,
        behavior: "smooth",
      };
    }
    return {
      x: 0,
      y: 0,
      behavior: "smooth",
    };
  },
});

export default router;

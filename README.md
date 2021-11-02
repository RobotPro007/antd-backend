# antd-backend

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/)

# 目录结构说明

``` code

    |-- src
        |-- .DS_Store
        |-- App.vue
        |-- main.ts
        |-- registerServiceWorker.ts
        |-- shims-tsx.d.ts
        |-- shims-vue.d.ts
        |-- api
        |   |-- mock.ts
        |   |-- request.ts
        |-- assets
        |   |-- .DS_Store
        |   |-- images
        |       |-- .DS_Store
        |       |-- bg-signup.jpg
        |       |-- img-signin.jpg
        |-- directive 自定义指令文件
        |-- decorators 装饰器文件
        |-- components (组件层)
        |   |-- Footers 
        |   |   |-- DashboardFooter.vue 
        |   |   |-- DefaultFooter.vue  //这是默认布局底部部展示样子
        |   |-- Headers
        |   |   |-- DashboardHeader.vue
        |   |   |-- DefaultHeader.vue //这是默认布局头部展示样子
        |   |-- Sidebars
        |       |-- DashboardSettingsDrawer.vue
        |       |-- DashboardSidebar.vue //这是默认布局侧边栏展示样子
        |-- layouts (布局页面)
        |   |-- Dashboard.vue  //这是 dashboard 布局
        |   |-- Default.vue  //这是 默认 布局
        |-- router (路由管理)
        |   |-- index.ts
        |-- store (状态管理工具)
        |   |-- index.ts
        |-- style (公共的样式)
        |   |-- app.scss
        |-- utils
        |   |-- config.ts
        |-- views (视图层)
        |   |-- Sign-In.vue 登录页面
        |   |-- Sign-Up.vue 注册页面
        |   |-- Dashboard.vue 这是内容页面
        
       
```

在Vue-router中  实现 登入,注册页面  和 内容页面 不同的布局 

``` js
import Vue from "vue";
import Router, { RouteConfig } from "vue-router";
Vue.use(Router);

let routes = [
  {
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
    layout: "dashboard", //这是 dashboard 布局
    component: () => import("../views/Dashboard.vue"),
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

//将从每个路线布局属性添加到元对象所以以后可以访问它
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

```




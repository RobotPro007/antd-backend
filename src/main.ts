import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
import api from "./api/request";
import mock from "./api/mock";
import configs from "./utils/config";
import DefaultLayout from "./layouts/Default.vue";
Vue.component("layout-default", DefaultLayout);
import DashboardLayout from "./layouts/Dashboard.vue";
Vue.component("layout-dashboard", DashboardLayout);

Vue.prototype.$api = api;
Vue.prototype.$mock = mock;
Vue.prototype.$configs = configs;

import { Component } from "vue-property-decorator";
// 引入公共的样式
import "./style/app.scss";
Vue.config.productionTip = false;
Component.registerHooks([
  "beforeRouteEnter", //进入路由之前
  "beforeRouteLeave", //离开路由之前
  "beforeRouteUpdate",
]);
// 引入字体库 xicon
// <Icon>
//   <AlertTwotone />
// </Icon>
import { Icon } from "@v2icons/utils";
Vue.component("Icon", Icon);

Vue.use(Antd);
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

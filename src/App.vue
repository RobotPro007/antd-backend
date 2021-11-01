<template>
  <div id="app">
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
// 1/监听路由变化
export default class extends Vue {
  get layout(): string {
    return "layout-" + (this.$route.meta?.layout || "default").toLowerCase();
  }
}
</script>

<style lang="scss" scoped></style>

<template>
  <a-layout-header>
    <div class="header-col header-brand">
      <h6>Muse Dashboard</h6>
    </div>
  </a-layout-header>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class DefaultHeader extends Vue {
  collapseNav = 0;
}
</script>

<style scoped lang="scss">
.nav-link svg {
  margin-right: 5px;
  vertical-align: middle;
}
.nav-link span {
  vertical-align: middle;
}
.ant-menu-submenu-popup {
  width: 100%;
}
</style>

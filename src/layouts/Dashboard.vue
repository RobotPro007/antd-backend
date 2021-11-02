<template>
  <!-- Dashboard Layout -->
  <a-layout
    class="layout-dashboard"
    id="layout-dashboard"
    :class="[
      navbarFixed ? 'navbar-fixed' : '',
      !sidebarCollapsed ? 'has-sidebar' : '',
      layoutClass,
    ]"
  >
    <!-- Main Sidebar -->
    <DashboardSidebar
      :sidebarCollapsed="sidebarCollapsed"
      :sidebarColor="sidebarColor"
      :sidebarTheme="sidebarTheme"
      @toggleSidebar="toggleSidebar"
    ></DashboardSidebar>
    <!-- / Main Sidebar -->

    <!-- Layout Content -->
    <a-layout>
      <!-- Layout Header's Conditionally Fixed Wrapper -->
      <DashboardHeader
        :sidebarCollapsed="sidebarCollapsed"
        :navbarFixed="navbarFixed"
        @toggleSettingsDrawer="toggleSettingsDrawer"
        @toggleSidebar="toggleSidebar"
      ></DashboardHeader>
      <!-- / Layout Header's Conditionally Fixed Wrapper -->

      <!-- Page Content -->
      <a-layout-content>
        <router-view />
      </a-layout-content>
      <!-- / Page Content -->

      <!-- Layout Footer -->
      <DashboardFooter></DashboardFooter>
      <!-- / Layout Footer -->

      <!-- Sidebar Overlay -->
      <div
        class="sidebar-overlay"
        @click="sidebarCollapsed = true"
        v-show="!sidebarCollapsed"
      ></div>
      <!-- / Sidebar Overlay -->
    </a-layout>
    <!-- / Layout Content -->
    <!-- Settings Drawer -->
    <DashboardSettingsDrawer
      :showSettingsDrawer="showSettingsDrawer"
      :navbarFixed="navbarFixed"
      :sidebarTheme="sidebarTheme"
      @toggleSettingsDrawer="toggleSettingsDrawer"
      @toggleNavbarPosition="toggleNavbarPosition"
      @updateSidebarTheme="updateSidebarTheme"
      @updateSidebarColor="updateSidebarColor"
    ></DashboardSettingsDrawer>
    <!-- / Settings Drawer -->
  </a-layout>
  <!-- / Dashboard Layout -->
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import DashboardSidebar from "../components/Sidebars/DashboardSidebar.vue";
import DashboardHeader from "../components/Headers/DashboardHeader.vue";
import DashboardFooter from "../components/Footers/DashboardFooter.vue";
import DashboardSettingsDrawer from "../components/Sidebars/DashboardSettingsDrawer.vue";

@Component({
  components: {
    DashboardSidebar,
    DashboardHeader,
    DashboardFooter,
    DashboardSettingsDrawer,
  },
})
export default class dashboard extends Vue {
  sidebarCollapsed = false;
  sidebarColor = "primary";
  sidebarTheme = "light";
  navbarFixed = false;
  showSettingsDrawer = false;

  /*
  @methods
  */
  toggleSidebar(value: boolean): void {
    this.sidebarCollapsed = value;
  }
  toggleSettingsDrawer(value: boolean): void {
    this.showSettingsDrawer = value;
  }
  toggleNavbarPosition(value: boolean): void {
    this.navbarFixed = value;
  }
  updateSidebarTheme(value: string): void {
    this.sidebarTheme = value;
  }
  updateSidebarColor(value: string): void {
    this.sidebarColor = value;
  }
  /*@computed*/
  get layoutClass(): void {
    return this.$route.meta?.layoutClass;
  }
}
</script>

<style scoped></style>

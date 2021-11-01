<template>
  <div>
    <!-- Default Layout -->
    <a-layout class="layout-default" id="layout-default" :class="[layoutClass]">
      <!-- Layout Header ( Navbar ) -->
      <DefaultHeader></DefaultHeader>
      <!-- / Layout Header ( Navbar ) -->

      <!-- Page Content -->
      <a-layout-content>
        <router-view />
      </a-layout-content>
      <!-- / Page Content -->

      <!-- Layout Footer -->
      <DefaultFooter></DefaultFooter>
      <!-- / Layout Footer -->
    </a-layout>
    <!-- / Default Layout -->
  </div>
</template>

<script lang="ts">
import DefaultHeader from "../components/Headers/DefaultHeader.vue";
import DefaultFooter from "../components/Footers/DefaultFooter.vue";
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {
    DefaultHeader,
    DefaultFooter,
  },
})
export default class Default extends Vue {
  get layoutClass(): string {
    return this.$route.meta?.layoutClass;
  }
}
</script>

<style lang="scss" scoped></style>

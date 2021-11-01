<template>
  <a-result
    status="404"
    title="404"
    sub-title="Sorry, the page you visited does not exist."
  >
    <template #extra>
      <router-link class="ant-btn ant-btn-primary" to="/"
        >Back Home</router-link
      >
    </template>
  </a-result>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Error extends Vue {}
</script>

<style scoped></style>

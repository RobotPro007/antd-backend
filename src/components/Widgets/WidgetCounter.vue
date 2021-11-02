<template>
  <a-card :bordered="false" class="widget-1">
    <a-statistic
      :title="title"
      :value="value"
      :prefix="prefix"
      :suffix="suffix"
      :precision="0"
      class="text-success"
      :class="'text-' + status"
    >
    </a-statistic>
    <div class="icon" v-html="icon"></div>
  </a-card>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class WidgetCounter extends Vue {
  @Prop({ type: String, default: "" }) title!: string;
  @Prop({ type: String, default: "success" }) status!: string;
  @Prop({ type: String, default: "" }) icon!: string;
  @Prop({ type: String, default: "" }) suffix!: string;
  @Prop({ type: String, default: "" }) prefix!: string;
  @Prop({ type: Number, default: "" }) value!: number;
}
</script>

<style scoped></style>

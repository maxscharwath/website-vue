<script setup lang="ts">
import type { Component } from "vue";

defineProps<{
  component: string | Component;
}>();
</script>
<template>
  <div>
    <component :is="component" />
  </div>
</template>

<style lang="scss" scoped>
::v-deep(ul) {
  li {
    @apply mb-3 relative pl-6;
    &:before {
      @apply text-primary mr-2 absolute left-0;
      content: "⎊";
    }
  }
}
::v-deep(h1) {
  @apply text-heading-1 font-bold text-blue-200;
}
::v-deep(h2) {
  @apply text-heading-2 font-bold text-blue-200;
}
::v-deep(h3) {
  @apply text-heading-3 font-bold text-blue-200;
}
::v-deep(h4) {
  @apply text-heading-4 font-bold text-blue-200;
}
::v-deep(p) {
  @apply mb-3 last:mb-0 text-blue-300;
}
::v-deep(a) {
  @apply relative text-primary inline-block font-medium;
  &:after {
    @apply block w-0 h-px relative bg-primary transition-all duration-300 ease-in-out bottom-1;
    content: "";
  }
  &:hover {
    &:after {
      @apply w-full;
    }
  }
}
</style>

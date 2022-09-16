<script setup lang="ts">
import { useMotion } from "@vueuse/motion";
import { ref } from "vue";

const target = ref(null);
useMotion(target, {
  initial: { opacity: 0, y: 100 },
  visibleOnce: { opacity: 1, y: 0, transition: { duration: 500, delay: 75 } },
});
</script>

<template>
  <section
    ref="target"
    class="mx-auto flex flex-col items-start justify-center py-12 sm:max-w-5xl sm:py-24"
  >
    <slot />
  </section>
</template>

<style scoped lang="scss"></style>

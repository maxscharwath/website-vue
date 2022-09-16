<script setup lang="ts">
defineProps({
  as: {
    type: String,
    default: "div",
  },
});
</script>

<template>
  <component
    :is="as"
    v-bind="$attrs"
    class="text-primary hover:bg-primary/20 border-primary inline-block rounded-lg border px-8 py-3 font-bold transition duration-200 ease-in-out"
  >
    <slot />
  </component>
</template>

<style scoped lang="scss"></style>

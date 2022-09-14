<script setup lang="ts"></script>

<template>
  <h2>
    <slot />
  </h2>
</template>

<style scoped lang="scss">
h2 {
  @apply relative flex items-center w-full text-heading-3 text-blue-200 font-bold mb-8 mt-3 whitespace-nowrap;
  counter-increment: section-counter 1;
  &::before {
    @apply text-primary relative text-heading-4 mr-2 font-mono;
    content: counter(section-counter, decimal-leading-zero) ".";
  }
  &::after {
    content: "";
    @apply w-60 h-px bg-background-light ml-4;
  }
}
</style>

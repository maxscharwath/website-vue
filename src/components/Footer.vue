<script setup lang="ts">
import SocialBar from "./SocialBar.vue";
</script>

<template>
  <footer class="min-h-10 flex flex-col justify-center p-5">
    <div class="flex flex-col items-center justify-center">
      <social-bar />
      <div class="text-primary text-center font-mono">
        Made with <span class="animate-pulse">❤️</span> by Maxime Scharwath
      </div>
    </div>
  </footer>
</template>
<style lang="scss" scoped></style>

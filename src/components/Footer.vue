<script setup lang="ts">
import SocialBar from "@/components/SocialBar.vue";
const gitRevision = GITVERSION;
</script>

<template>
  <footer class="min-h-10 flex flex-col justify-center p-5">
    <div class="flex flex-col items-center justify-center">
      <social-bar />
      <div class="text-primary font-mono">
        Made with <span class="animate-pulse">❤️</span> by Maxime Scharwath
      </div>
      <a
        class="text-primary my-1 flex items-center font-mono text-xs"
        href="https://github.com/maxscharwath/website"
      >
        <vue-feather type="github" class="mr-1 w-4" /> {{ gitRevision }}
      </a>
    </div>
  </footer>
</template>
<style lang="scss" scoped></style>

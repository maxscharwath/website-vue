<script setup lang="ts">
import { useWindowScroll } from "@vueuse/core";

const { y } = useWindowScroll();
const navLinks = [
  { name: "About", href: "#about" },
  { name: "Education", href: "#education" },
  { name: "Work", href: "#work" },
  { name: "Contact", href: "#contact" },
];
</script>

<template>
  <header
    class="bg-background/75 fixed top-0 left-0 z-10 flex h-16 w-full justify-end backdrop-blur transition duration-300 ease-out [&.unhooked]:shadow-[0_3px_20px_0_rgba(0,0,0,0.5)]"
    :class="{ unhooked: y > 0 }"
  >
    <nav class="flex">
      <ol class="text-primary flex">
        <li
          v-for="(link, index) in navLinks"
          :key="link.name"
          v-motion-slide-top
          :delay="index * 100"
          class="flex h-full items-center justify-center px-4 font-mono"
        >
          <a
            :href="link.href"
            class="hover:text-primary text-blue-200 transition duration-300 ease-out"
          >
            {{ link.name }}
          </a>
        </li>
      </ol>
    </nav>
  </header>
</template>
<style lang="scss" scoped>
li a {
  counter-increment: tab-counter 1;
  &::before {
    @apply mr-1 text-primary font-mono;
    content: counter(tab-counter, decimal-leading-zero) ".";
  }
}
</style>

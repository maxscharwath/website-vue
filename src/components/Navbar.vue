<script setup lang="ts">
import { useWindowScroll } from "@vueuse/core";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
const { y } = useWindowScroll();
const navLinks = [
  { name: "about", href: "#about" },
  { name: "education", href: "#education" },
  { name: "work", href: "#work" },
  { name: "contact", href: "#contact" },
];
</script>

<i18n lang="yaml">
en:
  about: About
  education: Education
  work: Work
  contact: Contact
fr:
  about: Info
  education: Études
  work: Projets
  contact: Contact
</i18n>

<template>
  <header
    class="bg-background/75 fixed bottom-0 left-0 z-10 flex h-24 w-full justify-center backdrop-blur transition duration-300 ease-out print:hidden sm:top-0 sm:h-16 sm:justify-end [&.unhooked]:shadow-[0_0_20px_3px_rgba(0,0,0,0.5)]"
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
          <router-link
            :to="link.href"
            class="hover:text-primary text-blue-200 transition duration-300 ease-out"
          >
            {{ t(link.name) }}
          </router-link>
        </li>
      </ol>
    </nav>
  </header>
</template>
<style lang="scss" scoped>
li a {
  counter-increment: tab-counter 1;
  &::before {
    @apply mr-1 text-primary font-mono block sm:inline text-center text-xs;
    content: counter(tab-counter, decimal-leading-zero) ".";
  }
}
</style>

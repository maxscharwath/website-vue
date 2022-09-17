<script setup lang="ts">
import SectionTitle from "@/components/core/SectionTitle.vue";
import Section from "@/components/core/Section.vue";
import { useI18n } from "vue-i18n";
const { t } = useI18n();
</script>

<i18n lang="yaml">
en:
  title: About Me
  content: >-
    Hello there! I’m Maxime, a software engineer based in Lausanne, Switzerland.
    I enjoy building things, hacking stuff and learning new things.


    My passion for programming started back in 2009, and more than a decade later,
    I’m still as passionate as ever. I love to learn new things, and I’m always looking for new challenges.
    I’m also a big fan of Vue.js and TypeScript.


    Here are a few technologies I like to work with :
fr:
  title: À propos de moi
  content: >-
    Hello! Je suis Maxime, un ingénieur logiciel basé à Lausanne, en Suisse.
    J’aime réaliser des choses, hacker des trucs et apprendre de nouvelles choses.


    Ma passion pour la programmation a débuté en 2009, et plus de dix ans plus tard, je suis toujours aussi passionné.
    J'adore apprendre de nouvelles choses, et je suis toujours à la recherche de nouveaux défis.
    Je suis également un grand fan de Vue.js et de TypeScript.


    Voici quelques technologies avec lesquelles j'aime travailler :
</i18n>

<template>
  <Section class="text-blue-300">
    <SectionTitle>{{ t("title") }}</SectionTitle>
    <div class="md:flex">
      <div class="mb-10 w-fit md:mr-10">
        <p class="whitespace-pre-wrap break-words pb-4">{{ t("content") }}</p>
        <ul>
          <li>TypeScript</li>
          <li>Javascript (ES6+)</li>
          <li>Vue.js</li>
          <li>Node.js</li>
          <li>Java</li>
          <li>Github</li>
          <li>JetBrains</li>
        </ul>
      </div>
      <div class="group mx-auto max-w-xs md:mx-0">
        <div class="relative w-full overflow-hidden rounded-lg bg-blue-200">
          <div
            class="grayscale transition-all duration-500 ease-in-out group-hover:grayscale-0"
          >
            <img
              src="@/assets/background.png?webp"
              alt=""
              class="absolute h-full w-full scale-105 blur-sm transition-all duration-500 ease-in-out group-hover:scale-110"
            />
            <img
              src="@/assets/me.png?webp"
              alt=""
              class="scale-100 transition-all duration-500 ease-in-out group-hover:scale-110"
            />
          </div>
          <div
            class="absolute inset-0 h-full w-full bg-blue-500 opacity-25 transition-all duration-500 ease-in-out group-hover:opacity-0"
          />
        </div>
      </div>
    </div>
  </Section>
</template>

<style scoped lang="scss">
ul {
  @apply grid grid-cols-2 gap-1 font-mono;
  li {
    @apply mb-3 relative pl-6;
    &:before {
      @apply text-primary mr-2 absolute left-0;
      content: "⎊";
    }
  }
}
</style>

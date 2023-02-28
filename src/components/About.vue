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
    Hello There! I am Maxime, a software engineer based in Lausanne, Switzerland.
    I love building innovative projects, finding creative solutions, and tackling complex problems.
    Since I began programming in 2009, I have been constantly seeking new challenges to improve my skills.
    I am also passionate about emerging technologies and enjoy experimenting with new technologies.
    Outside of work, I am an active contributor to open source projects on Github, such as ThreeJs and others, and I appreciate the opportunity to collaborate with developers from around the world.


    Here are a few technologies I like to work with :
fr:
  title: À propos de moi
  content: >-
    Hello ! Je suis Maxime, un ingénieur logiciel basé à Lausanne, en Suisse.
    J'aime réaliser des projets innovants, trouver des solutions créatives et résoudre des problèmes complexes.
    Depuis que j'ai commencé à programmer en 2009, je suis constamment à la recherche de nouveaux défis pour améliorer mes compétences.
    Je suis également un passionné de technologies émergentes et j'aime expérimenter avec de nouvelles technologies.
    En plus de mes activités, je suis un contributeur actif à des projets open source sur Github, tel que ThreeJs, et j'apprécie l'opportunité de travailler avec des développeurs du monde entier.


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
          <li>React</li>
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

<script setup lang="ts">
import SectionTitle from "./core/SectionTitle.vue";
import Section from "./core/Section.vue";
</script>

<template>
  <Section class="text-blue-300">
    <SectionTitle>About Me</SectionTitle>
    <div class="md:flex">
      <div class="mb-10 w-fit md:mr-10">
        <p class="pb-4">
          Hello there! I’m Maxime, a software engineer based in Lausanne,
          Switzerland. I specialize in building (and occasionally designing)
          exceptional websites, applications, and everything in between.
        </p>
        <p class="pb-4">
          My passion for programming started back in 2009, and more than a
          decade later, I’m still as passionate as ever. I love to learn new
          things, and I’m always looking for new challenges. I’m also a big fan
          of Vue.js and TypeScript.
        </p>
        <p class="pb-4">Here are a few technologies I like to work with:</p>
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
          <img
            src="src/assets/background.png"
            alt=""
            class="absolute h-full w-full scale-105 blur-sm grayscale transition-all duration-500 ease-in-out group-hover:scale-110 group-hover:blur group-hover:grayscale-0"
          />
          <img
            src="src/assets/me.png"
            alt=""
            class="scale-100 grayscale transition-all duration-500 ease-in-out group-hover:scale-110 group-hover:grayscale-0"
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
<script setup lang="ts">
import { ref } from "vue";

const socials = ref([
  {
    name: "Github",
    link: "https://github.com/maxscharwath",
    icon: "github",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/maximescharwath/",
    icon: "linkedin",
  },
  {
    name: "NPM",
    link: "https://www.npmjs.com/~maxscharwath",
    icon: "code",
  },
  {
    name: "Twitter",
    link: "https://twitter.com/maximescharwath",
    icon: "twitter",
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/maxscharwath/",
    icon: "instagram",
  },
]);
</script>

<template>
  <div class="left-10 bottom-0 mb-4 xl:fixed xl:mb-0">
    <ul class="social-bar flex list-none items-center xl:flex-col">
      <li
        v-for="social in socials"
        :key="social.name"
        class="hover:text-primary py-2 px-5 text-blue-200 duration-200 ease-in-out hover:translate-y-1 xl:px-0 xl:last:mb-3"
      >
        <a :href="social.link" target="_blank" :aria-label="social.name">
          <vue-feather :type="social.icon" />
        </a>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.social-bar:after {
  @apply hidden xl:block;
  content: "";
  width: 1px;
  height: 90px;
  margin: 0 auto;
  background: #fff;
}
</style>

<script setup lang="ts">
import Hero from "./components/Hero.vue";
import About from "./components/About.vue";
import Education from "./components/Education.vue";
import Contact from "./components/Contact.vue";
import Footer from "./components/Footer.vue";
import Work from "./components/Work.vue";
import Navbar from "./components/Navbar.vue";
import { useHead } from "@vueuse/head";

useHead({
  title: "Maxime Scharwath",
  meta: [
    { name: "description", content: "Maxime Scharwath's personal website" },
    {
      name: "keywords",
      content:
        "Maxime Scharwath, Software Engineer, Vue.js, TypeScript, Java, Javascript, Node.js, Github, JetBrains",
    },
  ],
});
</script>

<template>
  <Navbar />
  <Hero />
  <About id="about" />
  <Education id="education" />
  <Work id="work" />
  <Contact id="contact" />
  <Footer />
</template>

<style scoped></style>

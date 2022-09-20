<script setup lang="ts">
import Btn from "@/components/core/Btn.vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>

<i18n lang="yaml">
en:
  uptitle: Hi, my name is
  title: Maxime Scharwath
  subtitle: I'm Building cool stuff.
  text: >-
    Hello there! I’m Maxime, a software engineer based in Lausanne, Switzerland.
    I enjoy building things, hacking stuff and learning new things.
  action: Get in touch
fr:
  uptitle: Salut, je m'appelle
  title: Maxime Scharwath
  subtitle: Je réalise des trucs cool.
  text: >-
    Hello! Je suis Maxime, un ingénieur logiciel basé à Lausanne, en Suisse.
    J’aime construire des choses, hacker des trucs et apprendre de nouvelles choses.
  action: Contactez-moi
</i18n>

<template>
  <section
    class="mx-auto flex min-h-screen max-w-5xl flex-col items-start justify-center"
  >
    <div v-motion-slide-top :delay="100" class="text-primary">
      {{ t("uptitle") }}
    </div>
    <h1
      v-motion-slide-top
      :delay="200"
      class="text-heading-1 font-sans font-bold leading-tight text-blue-200"
    >
      <span>{{ t("title") }}</span>
      <span v-motion-roll-right :delay="400" class="text-primary inline-block"
        >.</span
      >
    </h1>
    <div
      v-motion-slide-top
      :delay="300"
      class="text-heading-2 font-sans font-bold leading-tight text-blue-300"
    >
      {{ t("subtitle") }}
    </div>
    <p
      v-motion-slide-top
      :delay="400"
      class="mt-4 max-w-md break-words text-blue-300"
    >
      {{ t("text") }}
    </p>
    <div v-motion-slide-top :delay="500" class="mt-8">
      <Btn as="router-link" to="#contact">{{ t("action") }}</Btn>
    </div>
  </section>
</template>

<style scoped></style>

<script setup lang="ts">
import Section from "@/components/core/Section.vue";
import SectionTitle from "@/components/core/SectionTitle.vue";
import Btn from "@/components/core/Btn.vue";
import { useI18n } from "vue-i18n";
const { t } = useI18n();
</script>

<i18n lang="yaml">
en:
  title: Get in touch
  content: >-
    My inbox is always open. Whether you have a question or just want to say hi,
    I'll try my best to get back to you!
  action: Say Hello
fr:
  title: Prenez contact
  content: >-
    Ma boîte mail est toujours ouverte. Que vous ayez une question ou
    que vous vouliez juste dire bonjour, je ferai de mon mieux pour vous répondre!
  action: Dis moi bonjour
</i18n>

<template>
  <Section class="text-blue-300">
    <SectionTitle>{{ t("title") }}</SectionTitle>
    <p class="mb-3">{{ t("content") }}</p>
    <Btn as="a" href="mailto:maxime@scharwath.ch">{{ t("action") }}</Btn>
  </Section>
</template>
<style lang="scss" scoped></style>

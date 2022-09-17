<script setup lang="ts">
import Section from "@/components/core/Section.vue";
import SectionTitle from "@/components/core/SectionTitle.vue";
import SelectTab from "@/components/core/SelectTab.vue";
import Markdown from "@/components/core/Markdown.vue";
import educations from "@/assets/educations";
import { useI18n } from "vue-i18n";

const { t, locale } = useI18n();
</script>

<i18n lang="yaml">
en:
  title: Education
fr:
  title: Éducation
</i18n>

<template>
  <Section class="text-blue-300">
    <SectionTitle>{{ t("title") }}</SectionTitle>
    <SelectTab :list="educations[locale]">
      <template #tab="{ item }">
        {{ item.attributes.title }}
      </template>
      <template #selected="{ item }">
        <div class="flex flex-col">
          <span class="text-lg font-bold text-blue-200">{{
            item.attributes.title
          }}</span>
          <span class="text-sm text-blue-300">{{ item.attributes.range }}</span>
          <span class="text-primary font-mono text-sm">{{
            item.attributes.degree
          }}</span>
          <span class="text-sm text-blue-300">
            {{ item.attributes.location }}
          </span>
          <article class="mt-4">
            <Markdown :component="item.VueComponent" />
          </article>
        </div>
      </template>
    </SelectTab>
  </Section>
</template>
<style lang="scss" scoped></style>

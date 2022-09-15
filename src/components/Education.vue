<script setup lang="ts">
import Section from "./core/Section.vue";
import SectionTitle from "./core/SectionTitle.vue";
import educations from "../assets/educations";
import SelectTab from "./core/SelectTab.vue";
import Markdown from "@/components/core/Markdown.vue";
</script>

<template>
  <Section class="text-blue-300">
    <SectionTitle>Education</SectionTitle>
    <SelectTab :list="educations">
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

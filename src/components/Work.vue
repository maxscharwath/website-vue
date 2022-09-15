<script setup lang="ts">
import Section from "./core/Section.vue";
import SectionTitle from "./core/SectionTitle.vue";
import highlights from "../assets/highlights";
</script>

<template>
  <Section>
    <SectionTitle>Some Projects I've Built</SectionTitle>
    <ul>
      <li
        v-for="(highlight, index) in highlights"
        :key="index"
        class="mb-20 grid grid-cols-12"
      >
        <div
          class="col-[1_/_8] flex items-center"
          style="grid-area: 1 / 1 / -1 / 7"
        >
          <img :src="highlight.cover" alt="" class="rounded-lg" />
        </div>
        <div
          class="col-[7_/_-1] flex flex-col items-end"
          style="grid-area: 1 / 6 / -1 / -1"
        >
          <div class="text-right">
            <h3 class="text-heading-3 font-bold text-blue-200">
              {{ highlight.content.attributes.title }}
            </h3>
            <div class="text-primary mx-2 font-mono text-sm">
              {{ highlight.content.attributes.date }}
            </div>
          </div>
          <p
            class="bg-background-light/90 my-3 rounded-lg p-5 pl-10 text-right text-blue-200 shadow-lg backdrop-blur-sm"
          >
            <component :is="highlight.content.VueComponent" />
          </p>
          <ul class="mb-3 flex">
            <li
              v-for="technology in highlight.content.attributes.technologies"
              :key="technology"
              class="text-primary mx-2 font-mono text-sm"
            >
              {{ technology }}
            </li>
          </ul>
          <div>
            <a
              v-if="highlight.content.attributes.repo"
              :href="highlight.content.attributes.repo"
              class="hover:text-primary ml-3 text-blue-200"
            >
              <vue-feather type="github" />
            </a>
            <a
              v-if="highlight.content.attributes.url"
              :href="highlight.content.attributes.url"
              class="hover:text-primary ml-3 text-blue-200"
            >
              <vue-feather type="external-link" />
            </a>
          </div>
        </div>
      </li>
    </ul>
  </Section>
</template>
<style lang="scss" scoped></style>

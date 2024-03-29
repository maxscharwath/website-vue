<script setup lang="ts">
import Section from "@/components/core/Section.vue";
import SectionTitle from "@/components/core/SectionTitle.vue";
import Markdown from "@/components/core/Markdown.vue";
import highlights from "@/assets/highlights";

import { useI18n } from "vue-i18n";

const { t, locale } = useI18n();
</script>

<i18n lang="yaml">
en:
  title: Some Projects I've Built
fr:
  title: Quelques projets
</i18n>

<template>
  <Section>
    <SectionTitle>{{ t("title") }}</SectionTitle>
    <ul>
      <li
        v-for="(highlight, index) in highlights[locale]"
        :key="index"
        class="mb-20 grid-cols-12 last:mb-0 sm:grid"
      >
        <div v-motion-slide-visible-once-right class="cover">
          <img :src="highlight.cover" alt="" class="rounded-lg" />
        </div>
        <div v-motion-slide-visible-once-left class="content">
          <div>
            <h3 class="text-heading-3 font-bold text-blue-200">
              {{ highlight.content.attributes.title }}
            </h3>
            <div class="text-primary mx-2 font-mono text-sm">
              {{ highlight.content.attributes.date }}
            </div>
          </div>
          <p
            class="bg-background-light/90 relative my-3 overflow-hidden rounded-lg p-8 pl-10 text-blue-200 shadow-lg backdrop-blur-sm"
          >
            <span
              class="absolute top-0 left-0 -z-10 h-full w-full scale-105 bg-cover bg-center opacity-25 blur-sm brightness-50 sm:hidden"
              :style="{ backgroundImage: `url(${highlight.cover})` }"
            ></span>
            <Markdown :component="highlight.content.VueComponent" />
          </p>
          <ul class="mb-3 max-w-md">
            <li
              v-for="technology in highlight.content.attributes.technologies"
              :key="technology"
              class="text-primary mx-2 inline-block max-w-sm font-mono"
            >
              {{ technology }}
            </li>
          </ul>
          <div>
            <a
              v-if="highlight.content.attributes.repo"
              :href="highlight.content.attributes.repo"
              aria-label="Github repository"
              class="hover:text-primary ml-3 text-blue-200"
            >
              <vue-feather type="github" />
            </a>
            <a
                v-if="highlight.content.attributes.npm"
                :href="highlight.content.attributes.npm"
                aria-label="NPM package"
                class="hover:text-primary ml-3 text-blue-200"
            >
              <vue-feather type="package" />
            </a>
            <a
              v-if="highlight.content.attributes.url"
              :href="highlight.content.attributes.url"
              aria-label="project url"
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
<style lang="scss" scoped>
li {
  .cover {
    @apply col-[1_/_8] items-center hidden sm:flex;
    grid-area: 1 / 1 / -1 / 7;
  }
  .content {
    @apply col-[7_/_-1] flex flex-col items-end text-right;
    grid-area: 1 / 6 / -1 / -1;
  }
  &:nth-child(odd) {
    .cover {
      grid-area: 1 / 6 / -1 / -1;
    }
    .content {
      @apply items-start text-left;
      grid-area: 1 / 1 / -1 / 7;
    }
  }
}
</style>

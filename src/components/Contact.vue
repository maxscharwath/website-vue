<script setup lang="ts">
import Section from "./core/Section.vue";
import SectionTitle from "./core/SectionTitle.vue";
import Btn from "./core/Btn.vue";
</script>

<template>
  <Section class="text-blue-300">
    <SectionTitle>Get in touch</SectionTitle>
    <p class="mb-3">
      Although I’m not currently looking for any new opportunities, my inbox is
      always open. Whether you have a question or just want to say hi, I’ll try
      my best to get back to you!
    </p>
    <Btn as="a" href="mailto://maxime@scharwath.ch">Say Hello</Btn>
  </Section>
</template>
<style lang="scss" scoped></style>

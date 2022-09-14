<script setup lang="ts">
import Btn from "./core/Btn.vue";
</script>

<template>
  <section
    class="mx-auto flex min-h-screen max-w-5xl flex-col items-start justify-center"
  >
    <div v-motion-slide-top :delay="100" class="text-primary">
      Hi, my name is
    </div>
    <h1
      v-motion-slide-top
      :delay="200"
      class="text-heading-1 font-sans font-bold leading-tight text-blue-200"
    >
      Maxime Scharwath<span
        v-motion-roll-right
        :delay="400"
        class="text-primary inline-block"
        >.</span
      >
    </h1>
    <div
      v-motion-slide-top
      :delay="300"
      class="text-heading-2 font-sans font-bold leading-tight text-blue-300"
    >
      Building cool stuff.
    </div>
    <p v-motion-slide-top :delay="400" class="mt-4 max-w-md text-blue-300">
      I'm a software engineer based in Lausanne, Switzerland. I specialize in
      building (and occasionally designing) exceptional websites, applications,
      and everything in between.
    </p>
    <div v-motion-slide-top :delay="500" class="mt-8">
      <Btn as="a" href="#contact"> Get In Touch </Btn>
    </div>
  </section>
</template>

<style scoped></style>

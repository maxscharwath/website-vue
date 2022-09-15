<script setup lang="ts">
import { ref } from "vue";

defineProps<{
  list: any[];
}>();
const selected = ref<number>(0);
</script>

<template>
  <div class="flex w-full flex-col sm:flex-row">
    <div class="flex flex-none flex-row overflow-x-auto sm:w-max sm:flex-col">
      <button
        v-for="(item, index) in list"
        :key="index"
        class="hover:border-primary border-background-light hover:bg-background-light [&.active]:border-primary [&.active]:text-primary mb-2 flex h-12 items-center whitespace-nowrap border-b-2 px-4 transition duration-150 ease-out sm:mb-0 sm:border-b-0 sm:border-l-2 sm:pr-20"
        :class="{ active: index === selected }"
        @click="selected = index"
      >
        <slot name="tab" :item="item" />
      </button>
    </div>
    <div class="ml-5">
      <Transition name="fade" mode="out-in">
        <slot :key="selected" name="selected" :item="list[selected]" />
      </Transition>
    </div>
  </div>
</template>

<style scoped lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 150ms ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>

<template>
  <div class="relative grid place-items-center">
    <slot name="progress" :progress_extent
      ><p class="absolute text-sm font-bold">{{ base * progress_extent }}</p>
    </slot>
    <svg
      :width="size"
      :height="size"
      :viewBox="`0 0 ${size} ${size}`"
      class="fill-transparent -rotate-90"
      :style="style"
    >
      <title class="absolute">Arc progress</title>
      <circle
        :cx="center"
        :cy="center"
        :r="radius"
        class="stroke-muted stroke-[7px] fill-none"
        :stroke-dashoffset="0"
      />
      <circle
        :cx="center"
        :cy="center"
        :r="radius"
        class="stroke-primary stroke-[7px] fill-none animated-progress"
        :stroke-dasharray="circumference"
        :stroke-dashoffset="arc_circumference"
        stroke-linecap="round"
      />
    </svg>
  </div>
</template>

<script lang="ts" setup>
const {
  base = 100,
  size = 50,
  progress = 0.5,
} = defineProps<{ base?: number; size?: number; progress?: number }>();

const radius = computed(() => size * 0.5 * 0.95);
const center = computed(() => size / 2);
const circumference = computed(() => 2 * Math.PI * radius.value);
const progress_extent = computed(() => Math.min(1, Math.max(0, progress)));

const arc_circumference = computed(
  () => circumference.value - circumference.value * progress_extent.value
);

const style = {
  "--arc-circumference": `${arc_circumference.value}`,
  "--circumference": `${circumference.value}`,
};
</script>

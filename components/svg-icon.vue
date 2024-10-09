<template>
  <component :is="icon" v-if="icon" />
</template>

<script lang="ts" setup>
const props = withDefaults(defineProps<{ name?: string }>(), {
  name: "spin-logo",
});
const FALLBACK_SVG = "empty";
const icon = computed(() =>
  defineAsyncComponent(() => {
    try {
      return import(`~/assets/svgs/${props.name}.svg`);
    } catch {
      return import(`~/assets/svgs/${FALLBACK_SVG}.svg`);
    }
  })
);
</script>

<template>
  <component :is="icon" v-if="icon" />
</template>

<script lang="ts" setup>
const props = withDefaults(defineProps<{ name?: string }>(), {
  name: "spin-logo",
});
const FALLBACK_SVG = "empty";
const icon = computed(() => {
  try {
    const comp = import(`../assets/svgs/${props.name}.svg`);
    return defineAsyncComponent(() => comp);
  } catch {
    const comp = import(`../assets/svgs/${FALLBACK_SVG}.svg`);
    return defineAsyncComponent(() => comp);
  }
});
</script>

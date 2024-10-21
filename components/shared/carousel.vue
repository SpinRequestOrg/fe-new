<template>
  <div class="overflow-hidden" ref="emblaRef">
    <slot name="container">
      <div class="flex flex-row [&_>_*]:shrink-0 h-full items-center">
        <slot />
      </div>
    </slot>
  </div>
</template>

<script lang="ts" setup>
import type {
  EmblaOptionsType,
  EmblaPluginType,
  EmblaCarouselType,
} from "embla-carousel";
import emblaCarouselVue from "embla-carousel-vue";
const props = withDefaults(
  defineProps<{
    options?: EmblaOptionsType;
    plugins?: EmblaPluginType[];
    onReady?: (embla: EmblaCarouselType) => void;
  }>(),
  { plugins: () => [] }
);
const [emblaRef, embla] = emblaCarouselVue(props.options, props.plugins);

watch(
  () => embla.value,
  (api) => {
    if (api) {
      props.onReady?.(api);
    }
  }
);
</script>

<template>
  <Carousel :options="{ loop: true }" :plugins="[AutoScrollPlugin]">
    <slot />
  </Carousel>
</template>

<script lang="ts" setup>
import AutoScroll from "embla-carousel-auto-scroll";
import Carousel from "./carousel.vue";
const AutoScrollPlugin = AutoScroll({
  stopOnInteraction: false,
  stopOnFocusIn: false,
  stopOnMouseEnter: false,
  startDelay: 10,
});
</script>

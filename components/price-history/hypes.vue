<template>
  <div>
    <LineGraph :history="history" :type="'hype'" />
  </div>
</template>

<script lang="ts" setup>
import type { PriceHistory } from "~/types/event";
import LineGraph from "./line-graph.vue";
defineProps<{
  history?: PriceHistory[];
}>();
</script>

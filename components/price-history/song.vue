<template>
  <div>
    <LineGraph :history="history" :type="'song'" />
  </div>
</template>

<script lang="ts" setup>
import type { PriceHistory } from "~/types/event";
import LineGraph from "./line-graph.vue";
defineProps<{
  history?: PriceHistory[];
}>();
</script>

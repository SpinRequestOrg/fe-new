<template>
  <ListboxRoot>
    <ListboxContent class="space-y-2">
      <ListboxItem
        v-for="request in requests"
        :key="request.id"
        :value="request.id"
        @select="handleSelection"
      >
        <RequestHistoryLineItem :request="request" :onUpdate="onUpdate" />
      </ListboxItem>
    </ListboxContent>
  </ListboxRoot>
</template>

<script lang="ts" setup>
import type { EventRequest } from "~/types/event";
import { eventRequests } from "~/constants/mocks";
import RequestHistoryLineItem from "./request-history-line-item.vue";

withDefaults(
  defineProps<{ requests?: EventRequest[]; onUpdate?: () => void }>(),
  {
    requests: () => eventRequests,
  }
);

const handleSelection = (e: Event) => {
  e.preventDefault();
};
</script>

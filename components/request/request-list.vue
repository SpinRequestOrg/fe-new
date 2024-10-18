<template>
  <ListboxRoot>
    <ListboxContent class="space-y-2">
      <ListboxItem
        v-for="(request, index) in requests"
        :key="request.id"
        :value="request.id"
        @select="handleSelection"
      >
        <RequestCollapsibleItem
          :request="request"
          class="min-[880px]:hidden"
          :index="index + 1"
          :onUpdate="onUpdate"
        />
        <RequestItem
          :request="request"
          class="hidden min-[880px]:grid"
          :index="index + 1"
          :onUpdate="onUpdate"
        />
      </ListboxItem>
    </ListboxContent>
  </ListboxRoot>
</template>

<script lang="ts" setup>
import type { EventRequest } from "~/types/event";
import { eventRequests } from "~/constants/mocks";
import RequestCollapsibleItem from "./request-collapsible-item.vue";
import RequestItem from "./request-line-item.vue";

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

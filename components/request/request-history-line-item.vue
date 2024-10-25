<template>
  <div
    class="grid md:grid-cols-[70px_1fr] gap-2 px-2 sm:px-6 py-4 b-white/5 rounded-2xl text-muted-foreground"
  >
    <div>{{ useDateFormat(new Date(request.created_at), "h:mma") }}</div>
    <div class="grid md:grid-cols-[1fr_200px] gap-2 items-center">
      <div class="space-y-1">
        <div class="flex gap-x-2 items-center">
          <Summary
            :content="request.description"
            class="text-base text-foreground font-medium"
            v-if="request.type === 'hype'"
          />
          <template v-else>
            <div class="text-base text-foreground font-medium">
              {{ request.song_title }}
            </div>
            <div class="text-sm">by {{ request.artist }}</div>
          </template>
        </div>
        <div class="flex gap-x- items-center">
          <div>{{ request.nickname ?? request.audience.name }}</div>
          <Dot />
          <div class="flex items-center gap-x-1">
            <SvgIcon
              class="scale-50"
              :name="request.type == 'song' ? 'music' : 'mic'"
            />
            <div class="uppercase">{{ request.type }}</div>
          </div>
          <Dot />
          <div class="tabular-nums">₦{{ formatMoney(request.price) }}</div>
        </div>
      </div>
      <div class="flex gap-x-1 md:justify-end items-center text-sm">
        <div class="capitalize">{{ request.status }}</div>
        <Tooltip
          message="Return to request list"
          :delay="200"
          v-if="['ignored', 'declined'].includes(request.status)"
        >
          <UiButton
            :size="'icon'"
            :variant="'ghost'"
            :disabled="updating"
            :loading="updating"
            @click="() => updateRequest('new')"
          >
            <RefreshCcw class="text-muted-foreground size-4" />
          </UiButton>
        </Tooltip>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { EventRequest } from "~/types/event";
import { Dot, RefreshCcw } from "lucide-vue-next";
import Tooltip from "../ui/tooltip.vue";
import Summary from "../shared/summary.vue";

const props = defineProps<{
  request: EventRequest;
  index?: number;
  onUpdate?: () => void;
}>();
const { updateEventRequest, updating } = useLiveEvent();

const updateRequest = (status: EventRequest["status"]) => {
  updateEventRequest(props.request.id, status, props.onUpdate);
};
</script>

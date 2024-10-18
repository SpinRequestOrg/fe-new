<template>
  <div
    class="grid md:grid-cols-[70px_1fr] gap-2 px-6 py-3 b-white/5 rounded-2xl text-muted-foreground"
  >
    <div>5:45pm</div>
    <div class="grid md:grid-cols-[1fr_200px] gap-2 items-center">
      <div class="space-y-1">
        <div class="flex gap-x-2 items-center">
          <div class="text-base text-foreground font-medium">
            {{ request.name }}
          </div>
          <div class="text-sm">Adekunle gold</div>
        </div>
        <div class="flex gap-x- items-center">
          <div>Pablo richie</div>
          <Dot />
          <div class="flex items-center gap-x-1">
            <SvgIcon name="music" class="scale-75" />
            <div>SONG</div>
          </div>
          <Dot />
          <div class="tabular-nums">₦{{ formatMoney(4500) }}</div>
        </div>
      </div>
      <div class="flex gap-x-1 md:justify-end items-center">
        <div>Accepted</div>
        <UiButton :size="'icon'" :variant="'ghost'">
          <RefreshCcw class="text-muted-foreground size-4" />
        </UiButton>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { EventRequest } from "~/types/event";
import { Dot, RefreshCcw } from "lucide-vue-next";

const props = defineProps<{
  request: EventRequest;
  index?: number;
  onUpdate?: () => void;
}>();
const { updateEventRequest, update_status, updating } = useLiveEvent();

const updateRequest = (status: EventRequest["status"]) => {
  updateEventRequest(props.request.id, status, props.onUpdate);
};
</script>

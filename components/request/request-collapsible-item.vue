<template>
  <CollapsibleRoot class="bg-white/5 rounded-2xl">
    <CollapsibleTrigger
      class="grid grid-cols-[auto_1fr_auto] gap-x-4 w-full items-center justify-start relative px-6 py-3 [&[data-state='open']_.caret]:rotate-180"
    >
      <div
        :class="
          cn(
            request.status === 'now-playing'
              ? 'text-primary text-base font-medium'
              : 'text-foreground'
          )
        "
      >
        {{ index ?? "-" }}
      </div>
      <div class="space-y-1 text-left">
        <div class="font-medium">{{ request.name }}</div>
        <div class="text-sm text-muted-foreground">by Adekunle gold</div>
      </div>
      <ChevronDown class="size-5 caret transition-transform relative" />
    </CollapsibleTrigger>

    <CollapsibleContent
      class="data-[state=open]:animate-collapsibleSlideDown data-[state=closed]:animate-collapsibleSlideUp overflow-hidden px-6"
    >
      <div class="py-4 mt-4 border-t border-t-white/5">
        <div class="flex gap-x-2">
          <div class="space-y-1 w-full">
            <div class="text-sm text-muted-foreground">Requested by</div>
            <div class="text-white/80">{{ request.audience.name }}</div>
          </div>
          <div class="space-y-1 w-full">
            <div class="text-sm text-muted-foreground">Amount paid</div>
            <div class="tabular-nums text-white/80">
              ₦{{ formatMoney(request.amount) }}
            </div>
          </div>
        </div>

        <div class="flex gap-x-4 mt-8" v-if="request.status === 'new'">
          <Button
            class="w-full"
            :disabled="updating"
            :loading="updating && update_status === 'now-playing'"
            @click="updateRequest('now-playing')"
          >
            Accept
            <Check class="size-4 ml-2" />
          </Button>
          <ConfirmDialog :onConfirm="() => updateRequest('declined')">
            <Button
              :variant="'destructive'"
              class="w-full"
              :disabled="updating"
              :loading="updating && update_status === 'declined'"
            >
              Reject
              <X class="size-4 ml-2" />
            </Button>
          </ConfirmDialog>
        </div>
        <div
          class="py-1 px-6 bg-foreground text-background text-center text-sm mt-8 rounded-3xl animate-pulse"
          v-else-if="request.status === 'now-playing'"
        >
          Now playing
        </div>
      </div>
    </CollapsibleContent>
  </CollapsibleRoot>
</template>

<script setup lang="ts">
import type { EventRequest } from "~/types/event";
import Button from "../ui/button.vue";
import { ChevronDown, Check, X } from "lucide-vue-next";
import ConfirmDialog from "../modals/confirm-dialog.vue";

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

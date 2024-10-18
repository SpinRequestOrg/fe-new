<template>
  <div>
    <div class="fixed left-0 right-0 bg-[#FFEE99] py-2 z-10">
      <div class="container flex justify-between items-center">
        <Button :variant="'outline'"> 00:45:87</Button>
        <ConfirmDialog
          :onConfirm="endLiveEvent"
          message="Are you sure you want to end this event?"
        >
          <Button :variant="'destructive'" :ending="ending">END EVENT</Button>
        </ConfirmDialog>
      </div>
    </div>

    <div class="container py-20">
      <SharedBackButton to="/dashboard" />

      <SharedLoadingArea :error="error" class="mt-8">
        <div class="grid xl:grid-cols-[1fr_auto] items-start gap-4">
          <div class="xl:max-w-[900px]">
            <RequestsTab :event_id="route.params.id as string" />
          </div>

          <div class="max-w-[700px] mx-auto w-full xl:w-[380px] relative">
            <div
              class="absolute inset-0 grid place-items-center bg-background/40"
              v-if="status === 'pending'"
            >
              <Loader class="size-5 animate-spin" />
            </div>
            <EventRateCard
              :services="data?.data?.types ?? []"
              :onUpdate="refresh"
            />
            <ConfirmDialog
              :onConfirm="endLiveEvent"
              message="Are you sure you want to end this event?"
            >
              <Button
                class="w-full mt-6"
                :variant="'destructive'"
                :size="'lg'"
                :ending="ending"
              >
                END EVENT
              </Button>
            </ConfirmDialog>
          </div>
        </div>
      </SharedLoadingArea>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Loader } from "lucide-vue-next";
import ConfirmDialog from "~/components/modals/confirm-dialog.vue";
import Button from "~/components/ui/button.vue";
import EventRateCard from "~/components/cards/event-rate-card.vue";
import RequestsTab from "~/components/request/requests-tab.vue";
import type { ApiResponse } from "~/types";
import type { LiveEvent } from "~/types/event";
import { useLiveEvent } from "~/composables/useLiveEvent";

const route = useRoute();
const { endEvent, ending } = useLiveEvent();
const { data, error, status, refresh } = useCustomFetch<ApiResponse<LiveEvent>>(
  `/events/${route.params.id}`
);

const endLiveEvent = () => {
  endEvent(route.params.id as string);
};
</script>

<template>
  <div>
    <LiveBanner
      :ending="ending"
      :onEndEvent="endLiveEvent"
      :start-date="data?.data.start_date"
      animate
    />

    <div class="container py-20">
      <div class="flex items-center gap-x-2">
        <SharedBackButton to="/dashboard" />
        <div class="text-foreground font-medium text-lg">
          {{ data?.data?.title }}
        </div>
      </div>

      <SharedLoadingArea :error="error" class="mt-8" :loading="ending">
        <div class="grid xl:grid-cols-[1fr_auto] items-start gap-4">
          <div class="xl:max-w-[900px]">
            <RequestsTab :event_id="eventID" />
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
            <ConfirmDialog :onConfirm="endLiveEvent" :message="confirmMessage">
              <Button
                class="w-full mt-6"
                :variant="'destructive'"
                :size="'lg'"
                :loading="ending"
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
import LiveBanner from "~/components/live-banner.vue";
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

const active_tab = computed(
  () => route?.query?.request_tab as "song" | "hype" | "history"
);

const eventID = computed(() => route.params.id as string);

const pendingRequests = computed(() =>
  data.value?.data?.requests
    ? data.value?.data?.requests?.filter((req) => req.status === "new")
    : []
);

const confirmMessage = computed(() => {
  const count = pendingRequests?.value?.length;
  return count
    ? `Ending the event will reject all pending ${count} requests. Are you sure you want to end event?`
    : "Are you sure you want to end event?";
});

useSeoMeta({
  title: () =>
    active_tab.value === "history"
      ? "Request History"
      : "Song and Hype Request List",
});
</script>

<style></style>

<template>
  <div class="container py-20">
    <div class="flex gap-x-2 items-center fixed top-24">
      <SharedBackButton :to="'/dashboard'" />
      <div class="text-2xl font-medium font-display">Previous events</div>
    </div>

    <SharedLoadingArea :loading="status === 'pending'" :error="error">
      <div class="grid grid-cols-[repeat(auto-fill,_minmax(369px,_1fr))] gap-6">
        <div class="bg-white/5 p-6 rounded-2xl border space-y-2">
          <div class="text-muted-foreground">Total Events</div>
          <div class="text-2xl font-semibold">
            {{ totalEventCount }}
          </div>
        </div>
        <div class="bg-white/5 p-6 rounded-2xl border space-y-2">
          <div class="text-muted-foreground">Total Song Requests</div>
          <div class="text-2xl font-semibold">
            {{ totalSongRequestCount }}
          </div>
        </div>
        <div class="bg-white/5 p-6 rounded-2xl border space-y-2">
          <div class="text-muted-foreground">Total Hype Request</div>
          <div class="text-2xl font-semibold">
            {{ totalHypeRequestCount }}
          </div>
        </div>
      </div>

      <div class="bg-white/5 p-6 rounded-2xl border mt-10">
        <EventHistoryTable
          :event_history="data?.data"
          :loading="status === 'pending'"
          disabled
        />
      </div>
    </SharedLoadingArea>
  </div>
</template>

<script lang="ts" setup>
import EventHistoryTable from "~/components/table/event-history-table.vue";
import type { ApiResponse } from "~/types";
import type { EventHistory } from "~/types/event";

const { data, status, error } =
  useCustomFetch<ApiResponse<EventHistory>>("/past/events");

const event = computed(() => data.value?.data);
const totalEventCount = computed(() => event.value?.event_details?.length ?? 0);
const totalSongRequestCount = computed(
  () => event.value?.song_requests_count ?? 0
);
const totalHypeRequestCount = computed(
  () => event.value?.hype_requests_count ?? 0
);

useSeoMeta({
  title: "Previous events",
});
</script>

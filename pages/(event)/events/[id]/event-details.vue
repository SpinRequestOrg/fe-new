<template>
  <div class="container py-20">
    <SharedBackButton to="/dashboard" class="fixed top-20" />
    <SharedLoadingArea :loading="status === 'pending'" :error="error">
      <div
        class="grid sm:grid-cols-[repeat(auto-fit,_minmax(400px,_1fr))] gap-6"
      >
        <div class="space-y-4 rounded-3xl p-6 border bg-white/5">
          <div class="text-muted-foreground">Total earnings</div>
          <div class="text-2xl font-semibold tabular-nums">
            ₦{{ formatMoney(data?.data?.earnings ?? 0) }}
          </div>
        </div>
        <div class="space-y-4 rounded-3xl p-6 border bg-white/5">
          <div class="text-muted-foreground">Total earnings</div>
          <div class="text-2xl font-semibold tabular-nums">
            ₦{{ formatMoney(data?.data?.earnings ?? 0) }}
          </div>
        </div>

        <div class="space-y-4 rounded-3xl p-6 border bg-white/5">
          <div class="text-muted-foreground">Total earnings</div>
          <div class="text-2xl font-semibold tabular-nums">
            ₦{{ formatMoney(data?.data?.earnings ?? 0) }}
          </div>
        </div>
      </div>

      <div class="p-6 border bg-white/5 rounded-3xl mt-8">
        <div class="text-2xl font-semibold mb-6">Event Requests</div>
        <EventRequestsTable :event_id="eventID" />
      </div>
    </SharedLoadingArea>
  </div>
</template>

<script lang="ts" setup>
import EventRequestsTable from "~/components/table/event-requests-table.vue";
import type { ApiResponse } from "~/types";
import type { LiveEvent } from "~/types/event";
const route = useRoute();
const eventID = computed(() => route.params.id as string);
const { data, status, error } = useCustomFetch<ApiResponse<LiveEvent>>(
  `/events/${eventID.value}`
);
</script>

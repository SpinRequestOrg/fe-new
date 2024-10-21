<template>
  <div class="container pt-10 pb-40">
    <div class="flex gap-x-2 items-center mb-8">
      <Avatar
        class="!bg-[#FF99F1] size-[56px] shrink-0 text-background text-xl font-bold"
        :initials="getInitials(auth_user?.stage_name ?? '')"
        :image="auth_user?.profile_picture"
      />
      <div
        class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display tracking-wide"
      >
        Welcome, <b>{{ auth_user?.stage_name }}</b>
      </div>
    </div>

    <div class="sticky mac:hidden w-scree -trnslate-x-[var(--cp)] mb-6 z-20">
      <div
        class="absolute inset-0 border broder-red-500 z-10"
        v-if="status === 'pending'"
      >
        <div class="place-center">
          <Loader class="size-5 animate-spin" />
        </div>
      </div>
      <EventCarousel :events="allEvents" />
    </div>

    <div class="grid mac:grid-cols-[1fr_auto] items-start gap-4">
      <div class="order-2 mac:order-1">
        <div
          class="relative bg-white/5 rounded-2xl p-6 border flex items-center justify-between overflow-hidden"
        >
          <div
            class="bg-sp-purple/50 blur-[200px] size-56 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[2]"
          ></div>
          <div class="space-y-2">
            <div class="text-muted-foreground">Withdrawable balance</div>
            <div class="flex gap-2">
              <div class="text-3xl md:text-4xl font-semibold">$35,243</div>
              <div></div>
            </div>
          </div>
          <Button>MY WALLET</Button>
        </div>
      </div>

      <div
        class="max-w-full w-full hidden mac:grid mac:w-[380px] order-1 mac:order-2 space-y-6"
      >
        <div class="sticky top-[80px] left-0 right-0 z-10 space-y-6">
          <CreateEventCard />
          <EventCard :event="hostLiveEvent" v-if="hostLiveEvent" />
        </div>

        <div class="my-6 grid place-items-center" v-if="status === 'pending'">
          <Loader class="size-5 animate-spin" />
        </div>

        <template v-if="data && !error">
          <EventCard
            v-for="event in hostNewEvents"
            :key="event.id"
            :event="event"
          />
        </template>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Button from "~/components/ui/button.vue";
import type { ApiResponse } from "~/types";
import type { LiveEvent } from "~/types/event";
import { Loader } from "lucide-vue-next";
import EventCard from "~/components/cards/event-card.vue";
import CreateEventCard from "~/components/cards/create-event-card.vue";

definePageMeta({
  middleware: ["host"],
});
const { auth_user } = useAuth();
const { data, status, error } =
  useCustomFetch<ApiResponse<LiveEvent[]>>("/events");

const hostNewEvents = computed(() =>
  data.value?.data?.length
    ? data.value?.data.filter((event) => event.status === "new")
    : []
);

const hostLiveEvent = computed(() =>
  data.value?.data.find((item) => item.status === "live")
);

const allEvents = computed(() =>
  hostLiveEvent.value
    ? [hostLiveEvent.value, ...hostNewEvents.value]
    : [...hostNewEvents.value]
);
</script>

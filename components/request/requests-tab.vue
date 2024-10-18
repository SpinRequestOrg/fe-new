<template>
  <TabsRoot
    class="border bg-white/5 rounded-3xl relative"
    :default-value="active_tab"
  >
    <div
      class="border inset-0 absolute rounded-[inherit] grid place-items-center z-10 bg-background/40"
      v-if="status == 'pending' || error"
    >
      <Loader class="size-5 animate-spin" v-if="status === 'pending'" />
      <div v-else-if="error" class="text-destructive">{{ error }}</div>
    </div>
    <TabsList
      class="p-4 border-b grid grid-cols-[auto_1fr] gap-x-4 items-center min-h-[73px] transition-opacity duration-1000"
      v-if="request_type === 'history'"
    >
      <div class="text-lg font-medium pl-6">Request history</div>
      <TabsTrigger value="song" as-child>
        <NuxtLink
          replace
          :to="{ query: { ...route.query, request_tab: 'song' } }"
          class="flex items-center gap-x-1 ml-auto pr-6"
        >
          <Button :variant="'outline'" :size="'icon'">
            <ArrowLeft />
          </Button>
          <div>Back to live request</div>
        </NuxtLink>
      </TabsTrigger>
    </TabsList>

    
      <TabsList
        class="p-4 border-b grid grid-cols-[auto_auto_1fr] gap-x-4 items-center -z-10"
        v-else=
      >
        <TabsTrigger value="song" as-child>
          <NuxtLink
            replace
            :to="{ query: { ...route.query, request_tab: 'song' } }"
            class="[&[data-state='active']_.count]:hidden"
          >
            <Button
              :variant="request_type === 'song' ? 'primary' : 'outline'"
              class="gap-x-2 min-w-[100px]"
            >
              <div>song</div>
              <div
                class="size-5 text-sm bg-secondary text-destructive rounded-full font-semibold count"
              >
                {{ songRequests.length }}
              </div>
            </Button>
          </NuxtLink>
        </TabsTrigger>
        <TabsTrigger value="hype" as-child>
          <NuxtLink
            replace
            :to="{ query: { ...route.query, request_tab: 'hype' } }"
            class="[&[data-state='active']_.count]:hidden"
          >
            <Button
              :variant="request_type === 'hype' ? 'primary' : 'outline'"
              class="gap-x-2 min-w-[100px]"
            >
              <div>hype</div>
              <div
                class="size-5 text-sm bg-secondary text-destructive rounded-full font-semibold count"
              >
                {{ hypeRequests.length }}
              </div>
            </Button>
          </NuxtLink>
        </TabsTrigger>

        <TabsTrigger value="history" as-child>
          <NuxtLink
            :to="{ query: { ...route.query, request_tab: 'history' } }"
            replace
            class="ml-auto"
          >
            <Button :variant="'ghost'" class="gap-x-2 text-muted-foreground">
              <SvgIcon name="history" />
              <div>Request history</div>
            </Button>
          </NuxtLink>
        </TabsTrigger>
      </TabsList>
 
    <TabsContent value="song">
      <RequestList :requests="songRequests" :onUpdate="refresh" class="p-4" />
    </TabsContent>
    <TabsContent value="hype" class="p-4">
      <RequestList :requests="hypeRequests" :onUpdate="refresh" />
    </TabsContent>
    <TabsContent value="history" class="p-4">
      <RequestHistoryList :requests="hypeRequests" :onUpdate="refresh" />
    </TabsContent>
  </TabsRoot>
</template>

<script lang="ts" setup>
import { Loader, ArrowLeft } from "lucide-vue-next";
import type { EventRequest, ActiveEventRequest } from "~/types/event";
import Button from "../ui/button.vue";
import RequestList from "./request-list.vue";
import RequestHistoryList from "./request-history-list.vue";
import { eventRequests } from "~/constants/mocks";
import { useLiveEvent } from "~/composables/useLiveEvent";

const props = withDefaults(
  defineProps<{ requests?: EventRequest[]; event_id?: string | number }>(),
  {
    requests: () => eventRequests,
    event_id: "1",
  }
);
const route = useRoute();
const active_tab = computed(
  () => route?.query?.request_tab as "song" | "hype" | "history"
);
const request_type = computed(() => active_tab.value ?? "song");
const { fetchEventRequests } = useLiveEvent();
const {
  data: event_requests,
  status,
  error,
  refresh,
} = useAsyncData<EventRequest[]>(
  `EVENT-${props.event_id}-REQUESTS`,
  () => fetchEventRequests(props.event_id),
  {
    transform: (data) => {
      const active_requests = data.filter(
        (item) => item.status === "new" || item.status === "now-playing"
      ) as ActiveEventRequest[];
      const request_order_map = {
        "now-playing": 0,
        new: 1,
      };
      return active_requests.sort(
        (a, b) => request_order_map?.[a.status] - request_order_map[b.status]
      );
    },
  }
);

const songRequests = computed(() => {
  if (!event_requests.value || error.value) return [];
  return event_requests.value.filter((item) => item.type === "song");
});

const hypeRequests = computed(() => {
  if (!event_requests.value || error.value) return [];
  return event_requests.value.filter((item) => item.type === "hype");
});
</script>

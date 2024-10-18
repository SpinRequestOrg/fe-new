<template>
  <div class="w-full rounded-xl relative">
    <div class="py-4 px-6 bg-[#1C1B1F] rounded-t-[inherit]">
      <div class="font-display font-semibold text-2xl mb-2">Request Queue</div>
      <div class="flex items-center gap-4 text-muted-foreground text-sm -ml-1">
        <div class="flex items-center gap-px">
          <SvgIcon name="celebration" class="relative scale-75" />
          <div>{{ event.title }}</div>
        </div>
        <div class="flex items-center gap-px">
          <SvgIcon name="location" class="relative scale-75" />
          <div>{{ event.address }}</div>
        </div>
      </div>
    </div>
    <div class="relative px-6 py-8 bg-white/5 rounded-b-[inherit]">
      <div
        class="bg-sp-purple/50 blur-[200px] size-56 absolute left-1/2 -translate-x-1/2 z-[1]"
      ></div>
      <div class="mx-auto space-y-1 grid justify-center text-center mb-8">
        <NuxtImg
          src="/images/disco.png"
          :class="cn('size-[120px]', activeRequest && 'animate-spin')"
        />
        <div class="font-semibold text-base" v-if="activeRequest">
          {{ activeRequest.name }}
        </div>
        <div class="text-sm text-muted-foreground" v-if="activeRequest">
          Now playing...
        </div>
      </div>
      <div class="text-muted-foreground mb-4">PREVIOUS REQUESTS</div>
      <div class="space-y-6" v-if="event.requests.length">
        <RequestItem
          v-for="item in event.requests"
          :key="item.id"
          :request="item"
          :type="item.type == 'hype' ? 'hype' : 'song'"
        />
      </div>
      <div class="p-6 text-center" v-else>No requests yet</div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import type { HostProfile } from "~/types/user";
const props = defineProps<{ event: HostProfile["live_event"] }>();

const activeRequest = computed(() =>
  props.event.requests.find((item) => item.status === "now-playing")
);
</script>

<template>
  <div
    class="rounded-2xl bg-[#F5F5F50D] px-6 py-4 relative overflow-hidden w-full"
  >
    <div
      class="bg-[#FFEE99] opacity-20 rounded-[1000px] blur-[100px] translate-x-1/2 -translate-y-1/2 size-56 absolute right-0 top-0 z-[2]"
    ></div>
    <div class="mb-1 font-semibold text-2xl">{{ event.title }}</div>
    <div class="flex text-sm text-muted-foreground gap-1 items-center">
      <SvgIcon name="location" />
      <div>{{ event.address }}</div>
    </div>
    <div class="space-y-6 mt-6">
      <div
        class="grid grid-cols-[25px_1fr_auto] gap-x-2"
        v-for="request in event.requests"
        :key="request.id"
      >
        <div :class="avatar_variant({ type: request.type })">
          <SvgIcon :name="request.type == 'song' ? 'music' : 'mic'" />
        </div>
        <div class="capitalize">{{ request.type }} request</div>
        <div></div>
      </div>
    </div>
    <NuxtLink :to="`/events/${event.id}`" v-if="event.status === 'live'">
      <Button
        :size="'lg'"
        class="w-full mt-6 bg-[#38F08D] text-background"
        :variant="'ghost'"
        ><Dot /> BACK TO EVENT <Dot />
      </Button>
    </NuxtLink>

    <Button
      :size="'lg'"
      class="w-full mt-6 animate-pulse bg-gradient-to-r from-[#844AFF] from-[1.28%] via-[#E991DD] via-[58.26%] to-[#FCF0AF] to-[100%]"
      v-else
      @click="goLive"
      :loading="loading"
    >
      GO LIVE</Button
    >
  </div>
</template>

<script lang="ts" setup>
import { cva } from "class-variance-authority";
import type { LiveEvent } from "~/types/event";
import Button from "../ui/button.vue";
import { Dot } from "lucide-vue-next";

const props = defineProps<{ event: LiveEvent }>();

const avatar_variant = cva(
  "aspect-square rounded-full grid place-items-center",
  {
    variants: {
      type: {
        song: "bg-[#FFEE99]/10",
        hype: "bg-[#FF99F1]/10",
      },
    },
    defaultVariants: {
      type: "song",
    },
  }
);

const {
  $repo: { event: eventModule },
} = useNuxtApp();

const loading = ref(false);

const goLive = async () => {
  try {
    loading.value = true;
    const response = await eventModule.goLive(props.event.id);
    showToast({ title: response.message });
    if (response.data) {
      navigateTo(`/request-list/${response.data.id}`);
    }
    loading.value = false;
  } catch (e) {
    loading.value = false;
    console.error("FAILED TO GO LIVE", e);
    showToast({
      title: "Failed",
      description: e?.data?.message ?? "Failed to go live",
      variant: "warning",
    });
  }
};
</script>

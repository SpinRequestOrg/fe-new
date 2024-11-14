<template>
  <div class="container py-10">
    <SharedBackButton
      class="fixed top-20"
      :to="`/${route.params.host}/${route.params.event_id}`"
    />
    <SharedLoadingArea
      :loading="status === 'pending' || walletStatus === 'pending'"
      :error="error ?? walletError"
    >
      <div class="max-w-full w-[400px] mx-auto">
        <div class="text-primary text-center">Payment</div>
        <div class="text-center font-display font-semibold text-3xl my-6">
          Make payment to submit your request
        </div>
        <div class="bg-white/5 border rounded-2xl p-6">
          <div class="pb-6 space-y-1 text-center border-b">
            <div class="text-muted-foreground text-sm">Total amount</div>
            <div class="font-bold text-primary text-4xl">
              ₦{{ formatMoney(request?.price ?? 0) }}
            </div>
          </div>
          <div class="my-6 space-y-4">
            <div class="flex items-center justify-between">
              <div class="text-sm text-muted-foreground">Request</div>
              <div
                :class="
                  cn(
                    'px-1 rounded-[26px] flex items-center gap-x-px text-xs min-w-[120px] max-h-6',
                    request?.type === 'song'
                      ? 'bg-[#FFEE99]/20'
                      : 'bg-[#FF99F1]/20'
                  )
                "
              >
                <SvgIcon
                  :name="request?.type === 'song' ? 'music' : 'mic'"
                  class="scale-50"
                />
                <div>
                  {{ request?.type === "song" ? "SONG" : "HYPE" }} REQUEST
                </div>
              </div>
            </div>
            <div
              class="flex items-center justify-between"
              v-if="request?.type === 'hype'"
            >
              <div class="text-sm text-muted-foreground">Hype</div>
              <SharedSummary
                :content="request?.description ?? ''"
                class="max-w-[50%] text-right"
              />
            </div>
            <div
              class="flex items-center justify-between"
              v-if="request?.type === 'song'"
            >
              <div class="text-sm text-muted-foreground">Title</div>
              <div>{{ request?.song_title ?? "" }}</div>
            </div>
            <div
              class="flex items-center justify-between"
              v-if="request?.type === 'song'"
            >
              <div class="text-sm text-muted-foreground">Artsite</div>
              <div>{{ request?.artist ?? "" }}</div>
            </div>
            <div class="flex items-center justify-between">
              <div class="text-sm text-muted-foreground">Your nickname</div>
              <div>
                {{ request?.nickname ?? request?.audience?.stage_name ?? "" }}
              </div>
            </div>
          </div>
          <div
            class="bg-white/5 border pt-1 pb-8 rounded-tr-3xl rounded-tl-3xl"
          >
            <div class="flex justify-center items-center gap-x-2">
              <div class="text-muted-foreground">Spin request balance</div>
              <div
                :class="cn(sufficient ? 'text-[#38F08D]' : 'text-[#E66840]')"
              >
                ₦{{ formatMoney(wallet?.data.balance ?? 0) }}
              </div>
            </div>
          </div>

          <UiButton
            :size="'lg'"
            class="relative -translate-y-7 w-full"
            @click="makePayment"
            :loading="paying"
          >
            PAY ₦{{ formatMoney(request?.price ?? 0) }}
          </UiButton>
        </div>
      </div>
    </SharedLoadingArea>
  </div>
</template>

<script lang="ts" setup>
import type { ApiResponse } from "~/types";
import type { EventRequest } from "~/types/event";
import SvgIcon from "~/components/svg-icon.vue";

const route = useRoute();
const { status, data, error } = useCustomFetch<ApiResponse<EventRequest>>(
  `/requests/${route.params.request_id}`
);

const {
  status: walletStatus,
  data: wallet,
  error: walletError,
} = useCustomFetch<ApiResponse<{ balance: number }>>("/wallets");

const request = computed(() => {
  return data.value?.data;
});

const sufficient = computed(() => {
  return (
    Number(wallet.value?.data.balance ?? 0) >= Number(request.value?.price ?? 0)
  );
});

const { payForRequest, paying } = useLiveEvent();

const makePayment = () => {
  if (request.value) {
    payForRequest(
      request.value,
      route.params.host as string,
      wallet.value?.data.balance ?? 0
    );
  }
};

useSeoMeta({
  title: "Payment",
});
</script>

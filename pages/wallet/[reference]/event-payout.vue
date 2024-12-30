<template>
  <div class="container py-20">
    <SharedBackButton to="/wallet" class="fixed top-20" />
    <SharedLoadingArea :loading="status === 'pending'" :error="error">
      <div
        class="grid md:grid-cols-3 lg:grid-cols-[1fr,_1fr] gap-6 bg-white/5 border p-6 rounded-3xl"
      >
        <div class="space-y-2">
          <div class="text-[#38F08D]">PAYOUT</div>
          <div class="text-4xl font-semibold">
            ₦{{ formatMoney(data?.data?.amount ?? 0) }}
          </div>
        </div>

        <div
          class="flex items-center gap-2 md:flex-col md:space-x-0 md:items-start relative"
          @click="copyTransactionID(data?.data?.reference ?? '')"
        >
          <div class="absolute left-0 translate-x-full">
            <div
              class="py-2 px-4 bg-background border rounded-full animate-in slide-in-from-top-3"
              v-if="copied"
            >
              Copied
            </div>
          </div>
          <div class="text-muted-foreground">Transaction id</div>
          <div class="flex items-center gap-x-1 cursor-pointer">
            <Copy class="size-4 shrink-0" />
            <div class="shrink-0">{{ data?.data?.reference ?? "" }}</div>
          </div>
        </div>
      </div>

      <div class="bg-white/5 p-6 rounded-3xl grid gap-y-4 gap-x-20 mt-6">
        <div class="space-y-4">
          <div class="flex items-center justify-between">
            <div class="text-muted-foreground">Date</div>

            <div class="font-semibold">
              {{ useDateFormat(data?.data?.date ?? "", "YY-MM-DD") }}
            </div>
          </div>
          <div class="flex items-center justify-between">
            <div class="text-muted-foreground">Time</div>
            <div class="font-semibold">
              {{ data?.data?.time ?? "" }}
            </div>
          </div>
          <div class="flex items-center justify-between">
            <div class="text-muted-foreground">Status</div>
            <div class="font-semibold">{{ data?.data?.status ?? "" }}</div>
          </div>
        </div>
      </div>
    </SharedLoadingArea>
  </div>
</template>

<script lang="ts" setup>
import type { ApiResponse } from "~/types";
import type { EventPayoutDetails } from "~/types/event";
import { Copy } from "lucide-vue-next";
import { promiseTimeout } from "@vueuse/core";
const route = useRoute();
const reference = computed(() => route.params.reference as string);
const { data, status, error } = useCustomFetch<ApiResponse<EventPayoutDetails>>(
  `/transactions/payout/${reference.value}`
);

useSeoMeta({
  title: () => "Payout",
});

const copied = ref(false);
const copyTransactionID = async (id: string) => {
  await navigator.clipboard.writeText(id);
  copied.value = true;
  await promiseTimeout(1200);
  copied.value = false;
};
</script>

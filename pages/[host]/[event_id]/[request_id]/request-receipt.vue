<template>
  <div class="container pb-20">
    <SharedBackButton class="fixed top-20" :to="`/${route.params.host}`" />
    <SharedLoadingArea :loading="loading" :error="pageError">
      <template #error v-if="verification_error">
        <div class="place-center text-center grid place-items-center gap-4">
          <div class="text-destructive">
            {{
              verification_error?.data?.message ?? "Payment verification failed"
            }}
          </div>
          <UiButton :variant="'outline'" @click="refresh" :loading="loading">
            Confirm again
          </UiButton>
        </div>
      </template>
      <div class="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-6 mt-20">
        <div>
          <RequestReceiptItem :request="request" :event="data?.data" />
          <div class="absolute w-[450px] h-0 overflow-hidden">
            <RequestReceiptItem
              :request="request"
              :event="data?.data"
              print
              id="RECEIPT-PRINT"
            />
          </div>
          <div class="flex justify-center my-4">
            <NuxtLink
              :to="`/${route.params.host}`"
              class="underline hover:no-underline"
            >
              CONTINUE
            </NuxtLink>
          </div>
        </div>
      </div>
    </SharedLoadingArea>
  </div>
</template>

<script lang="ts" setup>
import RequestReceiptItem from "~/components/request-receipt-item.vue";
import type { ApiResponse } from "~/types";
import type { LiveEvent } from "~/types/event";
const route = useRoute();
const { data, status, error } = useCustomFetch<ApiResponse<LiveEvent>>(
  `events/${route.params.event_id}`
);

const reference = route?.query?.reference ?? ("" as string);

// const {
//   data: verification,
//   status: verification_status,
//   error: verification_error,
//   refresh,
// } = useCustomFetch<ApiResponse<LiveEvent>>(`transactions/${reference}/verify`);

const verification = ref(null);
const verification_status = ref("idle");
const verification_error = ref(null);
const refresh = async () => {
  console.log("mocked refresh");
};

const loading = computed(
  () => status.value === "pending" || verification_status.value === "pending"
);
const pageError = computed(() => error.value ?? verification_error.value);

const request_id = route.params.request_id as string;

const request = computed(() => {
  return data.value?.data.requests.find(
    (item) => `${item.id}` === `${request_id}`
  );
});

useSeoMeta({
  title: "Request Receipt",
});
</script>

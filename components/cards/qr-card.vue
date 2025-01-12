<template>
  <div>
    <div class="bg-white/5 rounded-3xl border p-6">
      <div class="text-2xl font-semibold">{{ name }}</div>
      <div class="size-[192px] mx-auto my-6 grid place-items-center">
        <Loader class="size-4 animate-spin" v-if="status === 'pending'" />
        <img
          v-else-if="data?.data"
          :src="data?.data"
          alt="QR-CODE"
          class="w-full h-full object-cover"
        />
      </div>
      <div
        class="border rounded-full bg-white/5 relative px-4 py-2 flex justify-between items-center cursor-pointer hover:bg-white/10"
        @click="copyLink"
      >
        <div class="place-center">
          <div
            :class="
              cn(
                'bg-background border py-2 px-4 rounded-3xl text-sm text-center text-foreground',
                copied
                  ? 'animate-in slide-in-from-bottom-2'
                  : 'animate-out slide-out-to-top-2'
              )
            "
            v-if="copied"
          >
            Copied
          </div>
        </div>
        <div class="overflow-hidden text-ellipsis line-clamp-1">
          {{ link }}
        </div>
        <CopyCheck v-if="copied" class="size-4" />
        <Copy v-else class="size-4" />
      </div>
    </div>

    <UiButton :size="'lg'" class="w-full mt-6 relative" :disabled="!data?.data">
      <a
        :download="`${name}-spin-request-QR`"
        :href="data?.data"
        class="inset-0 absolute grid place-items-center"
      >
        DOWNLOAD QR CODE
      </a>
    </UiButton>
  </div>
</template>

<script lang="ts" setup>
import { promiseTimeout } from "@vueuse/core";
import { Copy, CopyCheck, Loader } from "lucide-vue-next";
import type { ApiResponse } from "~/types";
const props = defineProps<{
  id?: string | number;
  name: string;
  link: string;
  qr?: string;
}>();
const copied = ref(false);
const copyLink = async () => {
  await navigator.clipboard.writeText(props.link);
  copied.value = true;
  await promiseTimeout(1200);
  copied.value = false;
};

interface QrResponse {
  id: string | number;
  user_id: string | number;
  data_uri: string;
  created_at: string;
  updated_at: string;
}

const { status, data } = useCustomFetch<ApiResponse<string>>(
  `/qrcode/${props.id}`
);
</script>

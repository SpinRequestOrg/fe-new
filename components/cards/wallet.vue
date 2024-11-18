<template>
  <div
    class="border bg-white/5 p-6 rounded-2xl grid grid-cols-[56px_1fr_40px] lg:grid-cols-[56px_1fr_auto_40px] gap-x-4 items-center relative"
  >
    <div
      class="aspect-square border bg-white/10 rounded-full grid place-items-center"
    >
      <SvgIcon name="wallet" />
    </div>
    <div class="space-y-px">
      <div class="font-medium">Spin credits</div>
      <div class="text-muted-foreground max-w-[350px]">
        Your refunds from failed request are kept here so that you can use it to
        request again
      </div>
      <Loader
        class="size-6 animate-spin lg:hidden"
        v-if="walletStatus === 'pending'"
      />
      <div class="text-xl lg:hidden font-semibold" v-else>
        ₦{{ formatMoney(wallet?.balance ?? 0) }}
      </div>
    </div>
    <Loader
      class="size-6 animate-spin hidden lg:block"
      v-if="walletStatus === 'pending'"
    />
    <div class="text-3xl font-semibold hidden lg:block" v-else>
      ₦{{ formatMoney(wallet?.balance ?? 0) }}
    </div>
    <SvgIcon name="right-caret" v-if="!hideCaret" />
  </div>
</template>

<script lang="ts" setup>
import { Loader } from "lucide-vue-next";
const { data: wallet, status: walletStatus } = useCustomFetch<{
  balance: number;
}>("/wallets");

const { hideCaret = false } = defineProps<{ hideCaret?: boolean }>();
</script>

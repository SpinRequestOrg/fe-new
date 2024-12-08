<template>
  <div class="container py-20">
    <div class="flex gap-x-2 items-center fixed top-24">
      <SharedBackButton :to="'/audience'" />
      <div class="text-2xl font-medium font-display">Order History</div>
    </div>
    <Wallet hide-caret />
    <div class="bg-white/5 border rounded-3xl p-6 mt-8">
      <div class="text-2xl font-semibold mb-6">History</div>
      <OrderHistoryTable />
    </div>
  </div>
</template>

<script lang="ts" setup>
import Wallet from "~/components/cards/wallet.vue";
import OrderHistoryTable from "~/components/table/order-history-table.vue";

useSeoMeta({
  title: "Order History",
});
</script>

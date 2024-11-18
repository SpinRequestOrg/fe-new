<template>
  <TableContainer
    :heading="heading"
    :data="mergedOrders"
    :loading="status === 'pending'"
  >
    <tr
      class="!h-20 text-muted-foreground"
      v-for="order in mergedOrders"
      :key="order.id"
    >
      <td>
        <div
          :class="
            cn(
              ' size-10 rounded-full grid place-items-center',
              order.status === 'refunded'
                ? 'bg-[#38F08D]/15'
                : 'bg-[#F04438]/15'
            )
          "
        >
          <SvgIcon
            :name="
              order.status === 'refunded'
                ? 'dotted-arrow-down'
                : 'dotted-arrow-up'
            "
          />
        </div>
      </td>
      <td>
        <div class="space-y-p">
          <div class="text-foreground font-semibold">
            {{ order.status === "refunded" ? "-" : "" }} ₦{{
              formatMoney(order.amount ?? 0)
            }}
          </div>
          <div
            :class="
              cn(
                'flex items-center gap-x-px  text-xs',
                order.type === 'hype' ? 'text-[#FF99F1]' : 'text-[#FFEE99]'
              )
            "
          >
            <SvgIcon
              :name="order.type === 'hype' ? 'mic' : 'music'"
              class="scale-50 -ml-1.5"
            />
            <div>{{ order.type === "hype" ? "Hype" : "Song" }} request</div>
          </div>
        </div>
      </td>
      <td>{{ order.dj }}</td>
      <td>{{ order.payment_gateway }}</td>
      <td>{{ order.date }}</td>
      <td>
        <div
          class="flex items-center gap-x-2 relative"
          @click="copyText(order.reference)"
        >
          <div
            :class="
              cn(
                'bg-background/30 border py-2 px-4 opacity-0 transition-all -z-10 rounded-3xl text-sm text-center absolute place-center text-foreground',
                copied[order.reference] &&
                  'top-0 -translate-y-full z-10 opacity-100'
              )
            "
          >
            Copied
          </div>
          <div class="w-[220px] overflow-hidden text-ellipsis">
            {{ order.reference }}
          </div>
          <Copy class="size-4" />
        </div>
      </td>
      <td
        :class="{
          'text-[#38F08D]': order.status === 'success',
          'text-[#6DC9FC]': order.status === 'refunded',
          'text-[#E66840]': order.status === 'failed',
        }"
      >
        {{ order.status }}
      </td>
      <td class="w-[50px]">
        <UiButton :size="'icon'" :variant="'outline'">
          <Download class="size-4" />
        </UiButton>
      </td>
    </tr>
    <template #empty>
      <div class="min-h-[297px] grid place-items-center">
        <div class="space-y-4">
          <XCircle class="size-8 block mx-auto" />
          <div class="text-2xl font-semibold text-muted-foreground text-center">
            No Song or Hype Requests Yet
          </div>
          <div class="text-sm text-muted-foreground text-center">
            You haven’t requested a song or hype from the DJ. Once you do, your
            requests will appear here
          </div>
        </div>
      </div>
    </template>
  </TableContainer>
</template>

<script lang="ts" setup>
import TableContainer from "~/components/table/container.vue";
import { XCircle, Copy, Download } from "lucide-vue-next";
import { groupBy } from "lodash-es";
import type { ApiResponse } from "~/types";
import type { Order } from "~/types/payment";
import { promiseTimeout } from "@vueuse/core";
const heading = ref([
  "",
  "TRANSACTION",
  "HOST",
  "PAYMENT METHOD",
  "DATE",
  "TRANSACTION ID",
  "STATUS",
  "",
]);

const { data, status, error } =
  useCustomFetch<ApiResponse<Order[]>>("/transactions");

const copied = ref<Record<string, boolean>>({});

const copyText = async (text: string) => {
  await navigator.clipboard.writeText(text);
  copied.value[text] = true;
  await promiseTimeout(1200);
  copied.value[text] = false;
};

const groupedOrders = computed(() => {
  const orders = data.value?.data ?? [];
  return groupBy(orders, "parent_id");
});

const mergedOrders = computed(() => {
  return Object.values(groupedOrders.value).map((item) => {
    return item.reduce((acc, item) => {
      if (!acc.amount) {
        Object.assign(acc, item);
        return acc;
      }
      acc.amount = Number(acc.amount) + Number(item.amount);
      acc.reference = `${acc.reference}-${item.reference}`;
      acc.payment_gateway = `${acc.payment_gateway} + ${item.payment_gateway}`;
      return acc;
    }, {} as Order);
  });
});
</script>

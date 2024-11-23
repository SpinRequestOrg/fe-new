<template>
  <TableContainer
    :heading="heading"
    :data="requests"
    :loading="status === 'pending'"
    class="hidden md:block"
  >
    <tr v-for="(request, index) in requests" :key="request.id">
      <td>{{ index + 1 }}</td>
      <td>{{ request.audience.name ?? request.audience.stage_name }}</td>
      <td class="text-muted-foreground">
        {{ useDateFormat(request.created_at, "HH:mm") }}
      </td>
      <td class="font-semibold">₦{{ formatMoney(request?.price ?? 0) }}</td>
      <td
        :class="
          cn(
            'flex items-center',
            request.type === 'hype' ? ' text-[#FF99F1]' : 'text-[#FFEE99]'
          )
        "
      >
        <SvgIcon
          :name="request.type === 'hype' ? 'mic' : 'music'"
          class="scale-50 mt-1"
        />
        <span> {{ request?.type }} request</span>
      </td>
    </tr>
    <template #empty>
      <div class="min-h-[297px] grid place-items-center">
        <div class="space-y-4">
          <XCircle class="size-8 block mx-auto" />
          <div class="text-2xl font-semibold text-muted-foreground text-center">
            No requests for this event
          </div>
        </div>
      </div>
    </template>
  </TableContainer>
  <div class="md:hidden space-y-2">
    <div
      class="grid grid-cols-[15px_1fr_auto] gap-4 items-center"
      v-for="(request, index) in requests"
      :key="request.id"
    >
      <div>{{ index + 1 }}</div>
      <div class="space-y-px">
        <div>{{ request.audience.name ?? request.audience.stage_name }}</div>
        <div class="flex items-center gap-x-4">
          <div class="text-muted-foreground">
            {{ useDateFormat(request.created_at, "HH:mm") }}
          </div>
          <div
            :class="
              cn(
                'flex items-center -mt-1 min-w-ful',
                request.type === 'hype' ? ' text-[#FF99F1]' : 'text-[#FFEE99]'
              )
            "
          >
            <SvgIcon
              :name="request.type === 'hype' ? 'mic' : 'music'"
              class="scale-50 mt-1"
            />
            <div class="min-w-fit">{{ request?.type }}</div>
          </div>
        </div>
      </div>
      <div class="font-semibold justify-self-end border">
        ₦{{ formatMoney(request?.price ?? 0) }}
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import TableContainer from "@/components/table/container.vue";
import { XCircle } from "lucide-vue-next";
import type { ApiResponse } from "~/types";
import type { LiveEvent } from "~/types/event";

const props = defineProps<{ event_id: string }>();
const heading = ref(["#", "AUDIENCE NAME", "TIME", "AMOUNT", "REQUEST TYPE"]);
const { data, status } = useCustomFetch<ApiResponse<LiveEvent>>(
  `/events/${props.event_id}`
);
const requests = computed(() => data?.value?.data?.requests ?? []);
</script>

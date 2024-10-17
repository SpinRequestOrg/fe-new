<template>
  <div>
    <div class="fixed left-0 right-0 bg-[#FFEE99] py-2">
      <div class="container flex justify-between items-center">
        <Button :variant="'outline'"> 00:45:87</Button>
        <Button :variant="'destructive'">END EVENT</Button>
      </div>
    </div>

    <div class="container py-20">
      <SharedBackButton to="/dashboard" />

      <SharedLoadingArea :loading="status === 'pending'" :error="error">
        <div class="grid mac:grid-cols-[1fr_auto] items-start gap-4">
          <div class="">LIST WILL BE HERE THEN</div>

          <div class="max-w-full w-full mac:w-[380px]">
            <EventRateCard
              :services="data?.data?.types ?? []"
              :onUpdate="refresh"
            />
            <ConfirmDialog
              :onConfirm="endEvent"
              message="Are you sure you want to end this event?"
            >
              <Button
                class="w-full mt-6"
                :variant="'destructive'"
                :size="'lg'"
                :loading="loading"
              >
                END EVENT
              </Button>
            </ConfirmDialog>
          </div>
        </div>
      </SharedLoadingArea>
    </div>
  </div>
</template>

<script lang="ts" setup>
import ConfirmDialog from "~/components/modals/confirm-dialog.vue";
import Button from "~/components/ui/button.vue";
import EventRateCard from "~/components/cards/event-rate-card.vue";
import type { ApiResponse } from "~/types";
import type { LiveEvent } from "~/types/event";

const route = useRoute();
const { data, error, status, refresh } = useCustomFetch<ApiResponse<LiveEvent>>(
  `/events/${route.params.id}`
);

const {
  $repo: { event },
} = useNuxtApp();

const loading = ref(false);

const endEvent = async () => {
  try {
    console.log("here then");
    loading.value = true;
    const response = await event.endEvent(route.params.id as string);
    loading.value = false;
    if (response.data) {
      navigateTo("/event-earnings");
    }
  } catch (e) {
    loading.value = false;
    showToast({
      title: e?.data?.message ?? "Failed to end event",
      variant: "warning",
    });
  }
};
</script>

import { eventRequests } from "~/constants/mocks";
import type { EventRequest } from "~/types/event";

export const useLiveEvent = () => {
  const {
    $repo: { event },
  } = useNuxtApp();
  const ending = ref(false);
  const update_status = ref<EventRequest["status"] | null>(null);
  const updating = ref(false);

  const fetchEventRequests = async (
    event_id: number | string
  ): Promise<EventRequest[]> => {
    // return await event.getEventRequests(event_id)
    return await new Promise((res, rej) => {
      setTimeout(() => {
        res(eventRequests);
        //   rej("Mocked error");
      }, 2500);
    });
  };

  const endEvent = async (event_id: number | string) => {
    try {
      ending.value = true;
      const response = await event.endEvent(event_id);
      ending.value = false;
      if (response.data) {
        navigateTo("/events/summary");
      }
    } catch (e) {
      ending.value = false;
      showToast({
        title: e?.data?.message ?? "Failed to end event",
        variant: "warning",
      });
    }
  };

  const updateEventRequest = async (
    request_id: number | string,
    status: EventRequest["status"],
    onUpdate?: () => void
  ) => {
    try {
      update_status.value = status;
      updating.value = true;
      const response = await event.updateEventRequest(request_id, status);
      showToast({ title: response.message ?? "Updated" });
      updating.value = false;
      update_status.value = null;
      response.data && onUpdate?.();
    } catch (e) {
      update_status.value = null;
      updating.value = false;
      showToast({
        title: e?.data?.message ?? "Failed to update event",
        variant: "warning",
      });
    }
  };

  return {
    fetchEventRequests,
    endEvent,
    ending,
    updateEventRequest,
    update_status,
    updating,
  };
};

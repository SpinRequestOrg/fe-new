import { eventRequests } from "~/constants/mocks";
import type {
  HypeRequestPayload,
  SongRequestPayload,
} from "~/schemas/request-schema";
import type { EventRequest } from "~/types/event";

export const useLiveEvent = () => {
  const {
    $repo: { event },
  } = useNuxtApp();
  const ending = ref(false);
  const update_status = ref<EventRequest["status"] | null>(null);
  const updating = ref(false);
  const creating = ref(false);

  const fetchEventRequests = async (event_id: number | string) => {
    return await event.getEventRequests(event_id);
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

  const createEventRequest = async (
    request: SongRequestPayload | HypeRequestPayload
  ) => {
    try {
      creating.value = true;
      const response = await event.createRequest(request);
      showToast({
        title: response.message ?? "Request created and added to host list",
      });
      creating.value = false;
      console.log({ response });
    } catch (e) {
      creating.value = false;
      showToast({
        title: e?.data?.message ?? "Failed to create request",
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
    createEventRequest,
    creating,
  };
};

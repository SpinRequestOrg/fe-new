import { eventRequests } from "~/constants/mocks";
import type {
  HypeRequestPayload,
  SongRequestPayload,
} from "~/schemas/request-schema";
import type { EventRequest, RequestPaymentPayload } from "~/types/event";

export const useLiveEvent = () => {
  const {
    $repo: { event },
    $config: {
      public: { APP_BASE_URL },
    },
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
        navigateTo(`/events/${event_id}/event-earnings`);
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
    request: SongRequestPayload | HypeRequestPayload,
    host_slug: string
  ) => {
    try {
      creating.value = true;
      const response = await event.createRequest(request);

      const PAYSTACK_PAYMENT: RequestPaymentPayload = {
        redirect_url: `${APP_BASE_URL}/${host_slug}/${request.event_id}/${response.data.id}/request-receipt`,
        type: "gateway",
        gateway: "paystack",
      };

      if (!Number(response.data.price)) {
        creating.value = false;
        return navigateTo(`/${response.data?.host?.slug}`);
      }
      const payment_response = await event.payForRequest(
        PAYSTACK_PAYMENT,
        response.data.id
      );
      creating.value = false;
      if (payment_response.data.redirect_url) {
        await navigateTo(payment_response.data.redirect_url, {
          external: true,
        });
      }
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

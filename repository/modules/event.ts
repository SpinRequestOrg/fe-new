import type { ApiResponse } from "~/types";
import type { $Fetch, NitroFetchOptions } from "nitropack";
import type { Host } from "~/types/user";
import type { EventPayload } from "~/schemas/event-schema";
import type { LiveEvent } from "~/types/event";
type FetchOptions = NitroFetchOptions<"json">;
type FetchMethods = FetchOptions["method"];

export default class Auth {
  private $fetch: $Fetch;
  CREATE_EVENT = "events";
  GO_LIVE = "events/go-live";
  UPDATE_EVENT_PRICE = "events/type";
  END_EVENT = "events/end";

  constructor(fetcher: $Fetch) {
    this.$fetch = fetcher;
  }

  async call<O>(
    method: FetchMethods,
    route: string,
    data?: object,
    options?: FetchOptions
  ) {
    return this.$fetch<ApiResponse<O>>(route, {
      method,
      body: data,
      ...options,
    });
  }

  async createEvent(event: EventPayload) {
    return await this.call<LiveEvent>("POST", this.CREATE_EVENT, event);
  }

  async goLive(event_id: string | number) {
    return await this.call<LiveEvent>("PUT", `${this.GO_LIVE}/${event_id}`);
  }

  async updateEventPrice(type_id: string | number, price: number) {
    return await this.call<{
      id: number;
      name: "song" | "hype";
      price: number;
    }>("PUT", `${this.UPDATE_EVENT_PRICE}/${type_id}`, { price });
  }

  async endEvent(event_id: string | number) {
    return await this.call<LiveEvent>("PUT", `${this.END_EVENT}/${event_id}`);
  }
}

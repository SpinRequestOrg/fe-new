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
    return this.call<LiveEvent>("POST", this.CREATE_EVENT, event);
  }

  async goLive(event_id: string | number) {
    return this.call<LiveEvent>("PUT", `${this.GO_LIVE}/${event_id}`);
  }
}

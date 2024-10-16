import type { ApiResponse } from "~/types";
import type { $Fetch, NitroFetchOptions } from "nitropack";
import type { Host } from "~/types/user";
type FetchOptions = NitroFetchOptions<"json">;
type FetchMethods = FetchOptions["method"];

export default class Auth {
  private $fetch: $Fetch;
  SEARCH_HOST = "user/search-host";

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

  async searchHost(name: string) {
    return this.call<{ hosts: Host[] }>(
      "GET",
      `${this.SEARCH_HOST}?name=${name}&per_page=100&page=1`
    );
  }
}

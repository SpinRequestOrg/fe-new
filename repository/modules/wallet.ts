import type { ApiResponse } from "~/types";
import type { $Fetch, NitroFetchOptions } from "nitropack";
import type { Wallet } from "~/types/payment";
type FetchOptions = NitroFetchOptions<"json">;
type FetchMethods = FetchOptions["method"];

export default class Auth {
  private $fetch: $Fetch;

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

  async getWallet() {
    return await this.$fetch<Wallet>("/wallets?page=1&per_page=10", {
      method: "GET",
    });
  }
}

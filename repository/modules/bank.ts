import type { ApiResponse } from "~/types";
import type { $Fetch, NitroFetchOptions } from "nitropack";
import type { RequestPaymentResponse } from "~/types/event";
import type {
  Bank,
  BankVerificationPayload,
  BankVerificationResponse,
  PaymentVerificationResponse,
} from "~/types/payment";
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

  async fetchBankList() {
    return await this.call<Bank[]>("GET", "/bankaccount/list");
  }

  async verifyBankAccount(payload: BankVerificationPayload) {
    return await this.call<BankVerificationResponse>(
      "POST",
      "/bankaccount/verification",
      payload
    );
  }
}

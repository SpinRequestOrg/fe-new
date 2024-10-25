import type { ApiResponse } from "~/types";
import type { $Fetch, NitroFetchOptions } from "nitropack";
import type {
  RequestPaymentPayload,
  RequestPaymentResponse,
} from "~/types/event";
import type { PaymentVerificationResponse } from "~/types/payment";
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

  async payForRequest(
    payload: RequestPaymentPayload,
    request_id: string | number
  ) {
    return await this.call<RequestPaymentResponse>(
      "POST",
      `payment/requests/${request_id}/payment/create`,
      payload
    );
  }

  async verifyPayment(reference: string) {
    return await this.call<PaymentVerificationResponse>(
      "GET",
      `transactions/${reference}/verify`
    );
  }
}

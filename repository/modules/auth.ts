import type {
  CreateUser,
  CreateHost,
  LoginForm,
  LoginResponse,
  SignUpResponse,
  AuthUser,
} from "~/types/auth";
import type { ApiResponse } from "~/types";
import type { $Fetch, NitroFetchOptions } from "nitropack";
type FetchOptions = NitroFetchOptions<"json">;
type FetchMethods = FetchOptions["method"];

export default class Auth {
  private $fetch: $Fetch;
  REGISTER_AUDIENCE = "/register";
  REGISTER_HOST = "/registerhost";
  LOGIN_USER = "/login";
  USER_PROFILE = "/user";

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

  async registerAudience(body: CreateUser) {
    return await this.call<SignUpResponse>(
      "POST",
      this.REGISTER_AUDIENCE,
      body
    );
  }

  async registerHost(body: CreateHost) {
    return await this.call("POST", this.REGISTER_HOST, body);
  }

  async loginUser(body: LoginForm) {
    return await this.call<LoginResponse>("POST", this.LOGIN_USER, body);
  }

  async fetchProfile() {
    return await this.call<AuthUser>("GET", this.USER_PROFILE);
  }
}

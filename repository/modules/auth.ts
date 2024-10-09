import type {
  CreateUser,
  CreateHost,
  LoginForm,
  LoginResponse,
} from "~/types/auth";
import type { ApiResponse } from "~/types";
import type { $Fetch } from "nitropack";

export default class Auth {
  private $fetch: $Fetch;
  REGISTER_AUDIENCE = "/register";
  REGISTER_HOST = "/registerhost";
  LOGIN_USER = "/login";
  USER_PROFILE = "/user";

  constructor(fetcher: $Fetch) {
    this.$fetch = fetcher;
  }

  async registerAudience(body: CreateUser) {
    return await this.$fetch<{ name: string }>(this.REGISTER_AUDIENCE, {
      method: "POST",
      body,
    });
  }

  async registerHost(body: CreateHost) {
    return await this.$fetch<{ name: string }>(this.REGISTER_HOST, {
      method: "POST",
      body,
    });
  }

  async loginUser(body: LoginForm) {
    return await this.$fetch<ApiResponse<LoginResponse>>(this.LOGIN_USER, {
      method: "POST",
      body,
    });
  }

  async fetchProfile() {
    return await this.$fetch<ApiResponse<LoginResponse>>(this.USER_PROFILE, {
      method: "GET",
    });
  }
}

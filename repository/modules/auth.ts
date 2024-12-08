import type {
  CreateUser,
  CreateHost,
  LoginForm,
  LoginResponse,
  AuthUser,
  ResetPasswordForm,
  ChangePasswordForm,
  HostProfileUpdate,
  AudienceProfileUpdate,
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
  EMAIL_VERIFICATION = "/email/verify";
  RESEND_VERIFICATION_EMAIL = "/resendverification";
  FORGOT_PASSWORD = "/forgot-password";
  RESET_PASSWORD = "/reset-password";
  CHANGE_PASSWORD = "/change-password";
  UPLOAD_FILE = "/user/profile-picture";
  UPDATE_PROFILE = "/user/profile";

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
    return await this.call<LoginResponse>("POST", this.REGISTER_AUDIENCE, body);
  }

  async registerHost(body: CreateHost) {
    return await this.call<LoginResponse>("POST", this.REGISTER_HOST, body);
  }

  async loginUser(body: LoginForm) {
    return await this.call<LoginResponse>("POST", this.LOGIN_USER, body);
  }

  async fetchProfile() {
    return await this.call<AuthUser>("GET", `${this.USER_PROFILE}?stat=true`);
  }

  async verifyEmail(user_id: string, signature: string) {
    return await this.call<string>(
      "GET",
      `${this.EMAIL_VERIFICATION}/${user_id}/${signature}`
    );
  }

  async resendEmail(user_id: string | number) {
    return await this.call(
      "POST",
      `${this.RESEND_VERIFICATION_EMAIL}/${user_id}`
    );
  }

  async requestResetLink(email: string) {
    return await this.call<boolean>("POST", this.FORGOT_PASSWORD, { email });
  }

  async resetPassword(payload: ResetPasswordForm) {
    return await this.call<boolean>("POST", this.RESET_PASSWORD, payload);
  }

  async changePassword(payload: ChangePasswordForm) {
    return await this.call<{
      id: number | string;
      email: string;
      name: string;
      type: "host" | "audience";
    }>("POST", this.CHANGE_PASSWORD, payload);
  }

  async uploadFile(payload: FormData) {
    return await this.call<string>("POST", this.UPLOAD_FILE, payload);
  }

  async updateProfile(payload: HostProfileUpdate | AudienceProfileUpdate) {
    return await this.call<HostProfileUpdate | AudienceProfileUpdate>(
      "POST",
      this.UPDATE_PROFILE,
      payload
    );
  }
}

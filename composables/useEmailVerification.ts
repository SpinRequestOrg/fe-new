import type { ApiResponse } from "~/types";
import type { LoginResponse } from "~/types/auth";

export const useEmailVerification = (
  user_id?: string | number,
  token?: string
) => {
  const {
    $repo: { auth },
  } = useNuxtApp();

  const resendError = ref<unknown>(null);
  const resendData = ref<unknown>(null);
  const resending = ref(false);
  const immediate = !!user_id && !!token;
  const url = decodeBase64(token, `/email/verify/${user_id}/${token}`);
  const {
    data: authState,
    execute: verifyEmail,
    status,
    error,
  } = useCustomFetch<ApiResponse<LoginResponse>>(url, {
    immediate,
    lazy: true,
  });

  const resendVerificationEmail = async () => {
    try {
      resending.value = true;
      const response = user_id ? await auth.resendEmail(user_id) : null;
      const message = response?.message;
      message && showToast({ title: message });
      resendData.value = response;
      resending.value = false;
    } catch (e) {
      showToast({
        title: "Error",
        description: "Failed to resend email",
        variant: "warning",
      });
      resending.value = false;
      resendError.value = e;
    }
  };

  return {
    authState,
    verifyEmail,
    verificationStatus: status,
    verificationError: error,
    resendData,
    resending,
    resendError,
    resendVerificationEmail,
  };
};

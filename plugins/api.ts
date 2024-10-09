import Auth from "~/repository/modules/auth";

export default defineNuxtPlugin((nuxtApp) => {
  const {
    public: { API_BASE_URL: baseURL },
  } = useRuntimeConfig();

  const api = $fetch.create({
    baseURL,
    onRequest({ request, options, error }) {
      const { auth_token: token } = useAuth();
      if (token.value) {
        options.headers.set("Authorization", `Bearer ${token.value}`);
      }
    },
    async onResponseError({ response }) {
      if (response.status === 401) {
        const path = useRoute()?.path ?? null;
        await nuxtApp.runWithContext(() =>
          navigateTo(`/login?redirect_from=${path}`)
        );
      }
    },
  });

  const AuthModule = new Auth(api);
  const repo = {
    auth: AuthModule,
  };

  return {
    provide: {
      api,
      repo,
    },
  };
});

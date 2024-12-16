import { apiModules } from "~/repository";

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

      if (process.client) {
        options.headers.set("Origin", window.location.origin);
      } else if (process.server) {
        const serverOrigin =
          process.env.APP_BASE_URL ||
          "https://prod.d1yrrs2ihyi11j.amplifyapp.com";
        options.headers.set("Origin", serverOrigin);
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
  const modules = apiModules(api);
  return {
    provide: {
      api,
      repo: { ...modules },
    },
  };
});

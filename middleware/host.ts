export default defineNuxtRouteMiddleware((to) => {
  const nuxtApp = useNuxtApp();
  if (
    import.meta.client &&
    nuxtApp.isHydrating &&
    nuxtApp.payload.serverRendered
  )
    return;
  const { auth_user } = useAuth();
  const role = auth_user.value?.role;
  if (role !== "host" && to.path !== "/") {
    return navigateTo("/");
  }
});

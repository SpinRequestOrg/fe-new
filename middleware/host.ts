export default defineNuxtRouteMiddleware((to) => {
  const { auth_user } = useAuth();
  const role = auth_user.value?.role;
  if (role !== "host" && to.path !== "/") {
    return navigateTo("/");
  }
});

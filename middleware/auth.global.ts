export default defineNuxtRouteMiddleware((to) => {
  const AUTH_PAGES = ["login", "signup"];
  const { isLoggedIn, isEmailVerified } = useAuth();
  const isAuthPage = AUTH_PAGES.some((page) => to.path.includes(page));
  const isEmailConfirmationPage = to.path.includes("email-confirmation");
  if (!isLoggedIn.value && !isAuthPage) {
    return navigateTo("/login");
  }
  if (
    isLoggedIn.value &&
    !isEmailVerified.value &&
    !isEmailConfirmationPage &&
    !isAuthPage
  ) {
    return navigateTo("/email-confirmation");
  }
});

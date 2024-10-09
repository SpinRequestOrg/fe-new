import type { UseFetchOptions } from "#app";

export const useCustomFetch = <T>(
  route: string,
  options: UseFetchOptions<T> = {}
) => {
  return useFetch(route, {
    ...options,
    $fetch: useNuxtApp().$api,
  });
};

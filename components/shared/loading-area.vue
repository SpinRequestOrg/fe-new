<template>
  <div
    :class="cn(loading || error ? 'min-h-[60vh] grid place-items-center' : '')"
  >
    <Loader class="size-5 animate-spin" v-if="loading" />
    <slot name="error" v-else-if="error">
      <div class="text-destructive">
        {{ error?.data?.message ?? fallback_error_message }}
      </div>
    </slot>
    <slot v-else />
  </div>
</template>

<script lang="ts" setup>
import { Loader } from "lucide-vue-next";

withDefaults(
  defineProps<{
    loading?: boolean;
    error?: unknown;
    fallback_error_message?: string;
  }>(),
  { fallback_error_message: "Failed" }
);
</script>

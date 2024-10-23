<template>
  <div :class="cn(loading || error ? 'min-h-[60vh]' : '')">
    <div v-if="loading" class="inset-0 absolute bg-black/40 z-[50]">
      <div class="place-center">
        <Loader class="size-5 animate-spin" />
      </div>
    </div>
    <slot name="error" v-else-if="error">
      <div class="text-destructive place-center text-center">
        <div>{{ error?.data?.message ?? fallback_error_message }}</div>
      </div>
    </slot>
    <slot v-if="!error" />
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

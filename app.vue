<template>
  <ConfigProvider :use-id="useIdFunction" >
    <NuxtLayout>
      <Toast
        :open="store.open"
        :title="store.toast_title"
        :description="store.toast_description"
        :variant="store.toast_variant"
        :action="store.toast_action"
        :onAction="toastOnAction"
        :update-open="toggleToast"
      />
      <NuxtPage />
    </NuxtLayout>
  </ConfigProvider>
</template>

<script setup lang="ts">
import { ConfigProvider } from "radix-vue";
const useIdFunction = () => useId();
import Toast from "./components/shared/toast.vue";
const store = useToastStore();
const { toastOnAction, toggleToast } = store;
</script>

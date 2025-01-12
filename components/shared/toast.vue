<template>
  <ToastProvider>
    <ToastRoot
      :open="open"
      @update:open="updateOpen"
      :duration="duration"
      :class="
        cn(
          description
            ? `[grid-template-areas:_'title_action'_'description_action']`
            : `[grid-template-areas:_'title_action'_'title_action']`,
          variant === 'warning' ? `bg-destructive` : `bg-primary`,
          `rounded-md relative border border-input gap-1.5 p-[15px] grid grid-cols-[auto_max-content] gap-x-[15px] items-center data-[state=open]:animate-slideIn data-[state=closed]:animate-hide data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=cancel]:translate-x-0 data-[swipe=cancel]:transition-[transform_200ms_ease-out] data-[swipe=end]:animate-swipeOut`
        )
      "
    >
      <ToastClose class="absolute right-2 top-2 text-white/80">
        <X class="size-4" />
      </ToastClose>
      <ToastTitle
        class="[grid-area:_title] font-medium text-foreground text-[17px]"
      >
        {{ title }}
      </ToastTitle>
      <ToastDescription as-child v-if="description">
        <div
          class="[grid-area:_description] m-0 text-foreground text-[16px] leading-[1.3]"
        >
          {{ description }}
        </div>
      </ToastDescription>
      <ToastAction
        class="[grid-area:_action]"
        as-child
        :alt-text="action"
        v-if="action"
      >
        <UiButton @click="onAction?.()" :variant="'secondary'">
          {{ action }}
        </UiButton>
      </ToastAction>
    </ToastRoot>
    <ToastViewport
      class="[--viewport-padding:_25px] fixed top-0 right-0 flex flex-col p-[var(--viewport-padding)] gap-[10px] w-[390px] max-w-[100vw] m-0 list-none z-[100] outline-none"
    />
  </ToastProvider>
</template>

<script setup lang="ts">
import { X } from "lucide-vue-next";
withDefaults(
  defineProps<{
    open?: boolean;
    updateOpen?: (state: boolean) => void;
    title: string;
    description?: string;
    action?: string;
    onAction?: () => void;
    variant?: "normal" | "warning";
    duration?: number;
  }>(),
  {
    open: false,
    description: "",
    action: "",
    variant: "normal",
    duration: 5000,
  }
);
</script>

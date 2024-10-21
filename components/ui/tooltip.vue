<template>
  <TooltipProvider :delay-duration="delay" :disabled="disabled">
    <TooltipRoot>
      <TooltipTrigger as-child>
        <slot />
      </TooltipTrigger>
      <TooltipPortal>
        <TooltipContent
          class="z-50 overflow-hidden rounded-md bg-foreground px-3 py-2 text-sm text-muted animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2"
          :side-offset="1"
        >
          {{ message }}
          <TooltipArrow class="fill-foreground" :width="8" />
        </TooltipContent>
      </TooltipPortal>
    </TooltipRoot>
  </TooltipProvider>
</template>

<script lang="ts" setup>
withDefaults(
  defineProps<{ message?: string; delay?: number; disabled?: boolean }>(),
  {
    message: "title",
    delay: 300,
    disabled: false,
  }
);
</script>

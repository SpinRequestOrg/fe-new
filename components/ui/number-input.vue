<template>
  <NumberFieldRoot
    :id="id"
    class="text-sm text-white"
    :min="min"
    :step="step"
    :default-value="model"
    @update:model-value="model = $event"
  >
    <div class="grid items-center grid-cols-[auto_1fr_auto] gap-2">
      <NumberFieldDecrement as-child>
        <Button
          class="h-full aspect-square rounded-full"
          :size="'icon'"
          :variant="'secondary'"
        >
          -
        </Button>
      </NumberFieldDecrement>
      <div class="relative w-full">
        <div
          class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"
        >
          <span class="text-muted-foreground sm:text-sm">₦</span>
        </div>
        <NumberFieldInput
          class="outline-none ring-[0.5px] max-w-28 rounded-md focus:ring-primary pr-4 pl-6 py-2 bg-white/5 border-none tabular-nums"
        />
      </div>
      <NumberFieldIncrement as-child>
        <Button
          class="h-full aspect-square rounded-full"
          :size="'icon'"
          :variant="'secondary'"
        >
          +
        </Button>
      </NumberFieldIncrement>
    </div>
  </NumberFieldRoot>
</template>

<script lang="ts" setup>
import Button from "./button.vue";
const model = defineModel<number>();
withDefaults(defineProps<{ min?: number; step?: number; id: string }>(), {
  min: 0,
  step: 1,
});
</script>

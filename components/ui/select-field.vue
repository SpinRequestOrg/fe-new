<template>
  <SelectRoot
    v-model="selected_option"
    @update:model-value="model = $event"
    :disabled="disabled"
    :name="name"
  >
    <SelectTrigger
      :class="
        cn(
          `inline-flex border [&[data-state='open']_.trigger-icon]:rotate-180 w-full rounded-lg min-w-[160px] items-center justify-between px-[15px] text-[14px] leading-none h-[58px] gap-[5px] bg-white/5 shadow-[0_2px_10px] shadow-black/10 focus:shadow-[0_0_0_2px] focus:shadow-primary outline-none`,
          state === 'error' ? `border-destructive` : `border-border`
        )
      "
    >
      <SelectValue :placeholder="placeholder" />
      <ChevronDown class="trigger-icon size-4 relative transition-transform" />
    </SelectTrigger>

    <SelectPortal>
      <SelectContent
        class="min-w-[160px] max-h-[300px] overflow-auto w-[var(--radix-select-trigger-width)] bg-background rounded shadow-lg will-change-[opacity,transform] animate-in data-[side=bottom]:slide-in-from-top-1 data-[side=left]:slide-in-from-right-1 data-[side=top]:slide-in-from-bottom-1 data-[side=right]:slide-in-from-left-1 z-[100]"
        :position="'popper'"
        :side="'bottom'"
      >
        <SelectViewport class="p-[5px]">
          <SelectItem
            v-for="(option, index) in options"
            :key="index"
            :value="option"
            class="text-[14px] leading-none rounded-[3px] flex items-center h-[30px] pr-[35px] pl-[25px] relative select-none data-[disabled]:text-muted-foreground data-[disabled]:pointer-events-none data-[highlighted]:outline-none data-[highlighted]:bg-primary"
          >
            <SelectItemIndicator
              class="absolute left-0 w-[25px] inline-flex items-center justify-center"
            >
              <Check class="size-3 text-muted-foreground" />
            </SelectItemIndicator>
            <SelectItemText>
              {{ option }}
            </SelectItemText>
          </SelectItem>
        </SelectViewport>
      </SelectContent>
    </SelectPortal>
  </SelectRoot>
</template>

<script setup lang="ts">
import { ChevronDown, Check } from "lucide-vue-next";

const model = defineModel<string>();
const selected_option = ref(model.value);

withDefaults(
  defineProps<{
    options?: string[];
    placeholder?: string;
    name?: string;
    disabled?: boolean;
    state?: "normal" | "error";
  }>(),
  {
    options: () => [],
    disabled: false,
    state: "normal",
  }
);
</script>

<template>
  <div class="flex flex-col gap-2.5">
    <label
      class="flex flex-row gap-4 items-center [&>.checkbox]:hover:bg-neutral-100"
    >
      <CheckboxRoot
        :default-checked="model"
        @update:checked="model = $event"
        class="shadow-white/10 hover:bg-white/80 flex size-[25px] appearance-none items-center justify-center rounded-[4px] bg-foreground shadow-[0_2px_10px] outline-none focus-within:shadow-[0_0_0_2px_black]"
      >
        <CheckboxIndicator
          class="bg-foreground h-full w-full rounded flex items-center justify-center"
        >
          <Check class="size-3.5 text-primary" />
        </CheckboxIndicator>
      </CheckboxRoot>
      <span class="select-none text-white" v-if="label">{{ label }}</span>
    </label>
  </div>
</template>

<script lang="ts" setup>
import { Check } from "lucide-vue-next";
const model = defineModel<boolean>();
defineProps<{ label?: string }>();
</script>

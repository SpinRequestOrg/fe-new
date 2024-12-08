<template>
  <div :class="inputVariant({ state })">
    <textarea
      v-bind="{ ...props, type, placeholder: props.placeholder || '' }"
      :value="model"
      @input="handleInput"
      @blur="emit('blur', $event)"
      :rows="rows ?? 2"
      class="flex rounded-[inherit] [&:focus_~_span.label-text]:!top-3 [&:placeholder-shown_~_span.label-text]:top-1/2 px-3 leading-6 w-full text-base pt-6 bg-transparent text-foreground transition-colors placeholder:text-transparent focus-visible:placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 autofill:bg-transparent relative z-10"
    />
    <span :class="labelVariant({ state: state })">{{ label }}</span>
  </div>
</template>

<script lang="ts" setup>
import { cva, type VariantProps } from "class-variance-authority";
import type { InputTypeHTMLAttribute } from "vue";

interface InputAttributes {
  type?: InputTypeHTMLAttribute;
  name?: string;
  id?: string;
  placeholder?: string;
  disabled?: boolean;
  rows?: number;
}

const inputVariant = cva(
  "relative rounded-lg border shadow-sm transition-colors bg-white/5 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground focus-within:outline-none focus-within:ring-1",
  {
    variants: {
      state: {
        normal: "border-input focus-within:ring-ring",
        valid: "border-input focus-within:ring-input",
        error: "border-destructive focus-within:ring-destructive",
      },
    },
    defaultVariants: {
      state: "normal",
    },
  }
);

const labelVariant = cva(
  "absolute text-sm font-medium top-3 left-3 -translate-y-1/2 label-text transition-all",
  {
    variants: {
      state: {
        normal: "text-muted-foreground",
        valid: "text-muted-foreground",
        error: "text-destructive",
      },
    },
    defaultVariants: {
      state: "normal",
    },
  }
);

type InputVariant = VariantProps<typeof inputVariant>;

interface InputProps extends InputAttributes {
  label?: string;
  state?: InputVariant["state"];
}

const model = defineModel<string>();
const emit = defineEmits<{ change: [value: Event]; blur: [value: Event] }>();

const handleInput = (e: Event) => {
  model.value = (e.target as HTMLInputElement).value;
  emit("change", e);
};

const props = defineProps<InputProps>();
</script>

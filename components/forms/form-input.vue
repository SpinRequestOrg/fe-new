<template>
  <Field
    :name="name"
    v-slot="{ value, handleChange, handleBlur, errorMessage, meta }"
    class="relative"
    as="div"
  >
    <InputField
      :model-value="value"
      @change="handleChange"
      @blur="handleBlur"
      :name="name"
      :type="type"
      :disabled="disabled"
      :placeholder="placeholder"
      :id="id"
      :label="label"
      :state="errorMessage && meta.touched ? 'error' : 'normal'"
    />
    <div
      class="text-sm text-destructive animate-in slide-in-from-top-1 absolute -bottom-4"
      v-if="meta.touched || showErrorOnTouch"
    >
      {{ errorMessage }}
    </div>
  </Field>
</template>

<script lang="ts" setup>
//USE ONLY WITHIN A VEE-FORM
import { Field } from "vee-validate";
import InputField from "../ui/input-field.vue";
import type { InputTypeHTMLAttribute } from "vue";

withDefaults(
  defineProps<{
    name: string;
    label?: string;
    type?: InputTypeHTMLAttribute;
    id?: string;
    placeholder?: string;
    disabled?: boolean;
    showErrorOnTouch?: boolean;
  }>(),
  {
    showErrorOnTouch: false,
  }
);
</script>

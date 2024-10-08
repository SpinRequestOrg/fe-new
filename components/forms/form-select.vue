<template>
  <Field
    :name="name"
    v-slot="{ value, handleChange, errorMessage, meta }"
    class="relative"
    as="div"
  >
    <SelectField
      :model-value="value"
      @update:model-value="handleChange"
      :name="name"
      :disabled="disabled"
      :placeholder="placeholder"
      :id="id"
      :options="options"
      :state="errorMessage ? 'error' : 'normal'"
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
import SelectField from "../ui/select-field.vue";

withDefaults(
  defineProps<{
    name: string;
    id?: string;
    placeholder?: string;
    disabled?: boolean;
    options?: string[];
    showErrorOnTouch?: boolean;
  }>(),
  {
    showErrorOnTouch: false,
    options: () => [],
  }
);
</script>

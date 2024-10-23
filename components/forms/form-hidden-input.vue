<template>
  <Field
    :name="name"
    v-slot="{ value }"
    class="relative h-0 invisible"
    as="div"
  >
    <input type="hidden" :name="name" :value="value" />
  </Field>
</template>

<script lang="ts" setup>
//USE ONLY WITHIN A VEE-FORM
import { Field } from "vee-validate";

defineProps<{
  name: string;
}>();
</script>

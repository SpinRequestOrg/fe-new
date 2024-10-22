<template>
  <Form
    :validation-schema="simpleValidation"
    @submit="handleSubmit"
    class="space-y-7"
  >
    <FormInput
      name="description"
      placeholder="Enter hype description"
      label="Tell us about your hype"
      type=""
    />
    <FormTextarea
      name="nickname"
      placeholder="Enter your nickname"
      label="nickname (optional)"
    />
    <Button
      type="submit"
      :size="'lg'"
      class="max-w-full w-[400px] mx-auto !flex uppercase"
    >
      Request Hype For ₦{{ formatMoney(request.price) }}
    </Button>
  </Form>
</template>

<script lang="ts" setup>
import { Form } from "vee-validate";
import FormInput from "./form-input.vue";
import FormTextarea from "./form-textarea.vue";
import Button from "../ui/button.vue";
import type { EventType } from "~/types/event";

const props = defineProps<{ request: EventType }>();
const simpleValidation = {
  description: (desc: string) => (desc ? true : "Enter hype description"),
  nickname: true,
};

const handleSubmit = async (data: {
  nickname: string;
  description: string;
}) => {
  console.log({ data });
};
</script>

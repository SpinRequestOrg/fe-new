<template>
  <Form
    :validation-schema="AudienceSchema"
    @submit="handleSubmit"
    class="space-y-7"
  >
    <FormInput
      name="email"
      placeholder="Enter your email"
      label="Email"
      type="email"
    />

    <FormInput
      name="password"
      placeholder="Enter your password"
      type="password"
      label="Password"
    />

    <Button type="submit" :size="'lg'" class="w-full">Submit</Button>
  </Form>
</template>

<script lang="ts" setup>
import { Form } from "vee-validate";
import Button from "../ui/button.vue";
import FormInput from "./form-input.vue";
import { AudienceSchema } from "~/schemas/user-schema";

const handleSubmit = (data) => {
  console.log({ data });
};
</script>

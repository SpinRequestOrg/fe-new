<template>
  <Form
    :validation-schema="HostSchema"
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
      name="stage_name"
      placeholder="Enter your stage name"
      label="Stage name"
    />
    <FormSelect
      :options="[...PROFESSIONAL_TYPES]"
      name="profession"
      placeholder="Choose your profession"
      label="Profession"
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
import FormSelect from "./form-select.vue";
import { PROFESSIONAL_TYPES } from "~/types/auth";
import { HostSchema, type Host } from "~/schemas/user-schema";

const { saveAuthUser } = useAuth();
const handleSubmit = (data: Host) => {
  // saveAuthUser("token", data);
  console.log({ data });
};
</script>

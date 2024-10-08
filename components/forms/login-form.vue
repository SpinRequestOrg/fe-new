<template>
  <Form
    @submit="handleSubmission"
    :validation-schema="simpleNameSchema"
    class="space-y-6"
    :initial-values="{ gender: 'Male', password: 'Random', email: 'rilwan' }"
  >
    <FormInput name="email" placeholder="Enter your email here" label="Email" />
    <FormInput
      name="password"
      placeholder="Enter your password here"
      type="password"
      label="Password"
    />
    <FormSelect :options="gender" name="gender" placeholder="Gender" />

    <Button class="w-full flex" type="submit" :size="'lg'">Submit</Button>
  </Form>
</template>

<script lang="ts" setup>
import { Form } from "vee-validate";
import FormInput from "./form-input.vue";
import FormSelect from "./form-select.vue";
import Button from "../ui/button.vue";

const handleSubmission = (data: any) => {
  console.log({ data });
};

const test = ref([
  { name: "Rilwan", id: "reelee" },
  { name: "Yusuf", id: "yusuf" },
]);

const gender = ref(["Male", "Female", "Others"]);

const simpleNameSchema = {
  email: (name: string) => {
    return name === "Rilwan" ? true : "Test error message";
  },
  password: (pass: string) => {
    return pass?.length > 4 ? true : "Password not long enough";
  },
  gender: (gender: string) => {
    const valid = ["Male", "Female", "Others"].includes(gender);
    return valid ? valid : "Choose good gender";
  },
};
</script>

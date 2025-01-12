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

    <Button class="w-full" type="submit" :size="'lg'" :disabled="loading">
      <Loader v-if="loading" class="animate-spin mr-2" />
      <span>{{ loading ? "Please wait..." : "Submit" }}</span>
    </Button>
  </Form>
</template>

<script lang="ts" setup>
import { Form } from "vee-validate";
import Button from "../ui/button.vue";
import FormInput from "./form-input.vue";
import FormSelect from "./form-select.vue";
import { PROFESSIONAL_TYPES } from "~~/types/auth";
import { HostSchema, type Host } from "~~/schemas/user-schema";
import { Loader } from "lucide-vue-next";
import type { ApiError } from "~/types";

const {
  $repo: { auth },
} = useNuxtApp();

const { saveAuthUser } = useAuth();

const loading = ref(false);
const handleSubmit = async (data: Host) => {
  loading.value = true;

  const payload = {
    ...data,
    password_confirmation: data.password,
  };

  try {
    loading.value = true;
    const response = await auth.registerHost(payload);
    const message = response?.message;
    const next_action_message =
      "Follow the link in your email to verify your email";
    showToast({
      title: message,
      description: next_action_message,
      variant: "normal",
      duration: 80000,
    });
    loading.value = false;
    saveAuthUser(response.data.token, response.data.user);
    const destination =
      response?.data?.role === "host" ? "/dashboard" : "/search";
    useRouter().push(destination);
  } catch (error) {
    const e = error as ApiError;
    loading.value = false;
    showToast({
      title: "Failed",
      description: e?.data?.message ?? "Sign up failed. Please try again",
      variant: "warning",
    });
    console.error("ERROR LOGGING IN", e?.data?.message);
  }
};
</script>

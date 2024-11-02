<template>
  <Modal :size="'md'">
    <template #trigger>
      <slot>
        <Button :variant="'secondary'" class="self-center">CHANGE</Button>
      </slot>
    </template>
    <template #heading>
      <div class="font-display text-2xl font-medium">Change password</div>
    </template>
    <div class="p-6">
      <Form
        class="space-y-6 mt-2"
        :validation-schema="ChangePasswordSchema"
        @submit="handlePasswordChange"
      >
        <FormInput
          name="old_password"
          label="Old password"
          placeholder="Enter your old password"
          type="password"
        />
        <FormInput
          name="password"
          label="New password"
          placeholder="Enter your new password"
          type="password"
        />
        <FormInput
          name="password_confirmation"
          label="Confirm password"
          placeholder="Confirm your new password"
          type="password"
        />
        <div class="pt-6">
          <Button :size="'lg'" type="submit" class="w-full" :loading="loading">
            SAVE PASSWORD
          </Button>
        </div>
      </Form>
    </div>
  </Modal>
</template>

<script lang="ts" setup>
import { Form } from "vee-validate";
import FormInput from "../forms/form-input.vue";
import Button from "../ui/button.vue";
import { ChangePasswordSchema } from "~/schemas/user-schema";
import type { ApiError } from "~/types";

const {
  $repo: { auth },
} = useNuxtApp();

const { logOut } = useAuth();
const loading = ref(false);
const handlePasswordChange = async (payload: {
  old_password: string;
  password: string;
  password_confirmation: string;
}) => {
  try {
    loading.value = true;
    const response = await auth.changePassword(payload);
    const message = response?.message;
    showToast({ title: "Success", description: message, variant: "normal" });
    loading.value = false;
    logOut(() => {
      return navigateTo("/login");
    });
  } catch (e) {
    loading.value = false;
    showToast({
      title: "Failed",
      description: (e as ApiError)?.data?.message ?? "Invalid credentials",
      variant: "warning",
    });
    console.error("ERROR LOGGING IN", (e as ApiError)?.data?.message);
  }
};
</script>

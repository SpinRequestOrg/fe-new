<template>
  <div class="container pt-8">
    <SharedBackButton to="/login" />
    <div
      class="text-4xl lg:text-5xl font-semibold my-4 text-center max-w-[595px] mx-auto"
    >
      Forgot password?
    </div>
    <div class="text-muted-foreground text-center mb-6">
      Enter your email and we will send you a reset link
    </div>

    <div class="w-[400px] max-w-full mx-auto">
      <Form :validation-schema="simpleEmailSchema" @submit="handleSubmit">
        <FormInput
          type="email"
          name="email"
          placeholder="Enter your email"
          label="Email"
        />
        <Button class="w-full flex mt-6" :size="'lg'" :disabled="requesting">
          <Loader class="size-4 animate-spin mr-2" v-if="requesting" />
          <span>{{ requesting ? "Please wait" : "Send link" }}</span>
        </Button>
        <div
          class="flex justify-center gap-x-1 items-center mt-2 text-muted-foreground"
        >
          <span>Didn't receive the mail?</span>
          <button
            class="outline-none underline hover:no-underline"
            :disabled="requesting"
          >
            RESEND
          </button>
        </div>
      </Form>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Form } from "vee-validate";
import Button from "~/components/ui/button.vue";
import FormInput from "~/components/forms/form-input.vue";
import { Loader } from "lucide-vue-next";
import { string, object } from "yup";

const simpleEmailSchema = object({
  email: string().required("Email is required").email("Enter a valid email"),
});

const {
  $repo: { auth },
} = useNuxtApp();

const requesting = ref(false);
const handleSubmit = async ({ email }: { email: string }) => {
  try {
    requesting.value = true;
    const response = await auth.requestResetLink(email);
    const message = response?.message;
    showToast({ title: "Success", description: message, variant: "normal" });
    useRouter().push("/login");
    requesting.value = false;
  } catch (e) {
    requesting.value = false;
    showToast({
      title: "Failed",
      description: e?.data?.message ?? "Failed to send reset link",
      variant: "warning",
    });
    console.error("ERROR", e?.data?.message);
  }
};

useSeoMeta({
  title: "Forget Password",
});
</script>

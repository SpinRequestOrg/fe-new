<template>
  <div class="h-full">
    <NuxtLayout :name="'auth'">
      <BackButton to="/signup" />
      <div class="pt-2">
        <div class="text-primary text-center my-2 text-xl">
          Create your account
        </div>
        <div
          class="text-4xl lg:text-5xl font-semibold my-4 text-center max-w-[595px] mx-auto"
        >
          Create your free host account
        </div>
        <div class="w-[400px] max-w-full mx-auto">
          <HostSignupForm />
          <div class="text-center mt-2">
            Already a user?
            <NuxtLink to="/login" class="underline hover:no-underline ml-1"
              >LOGIN</NuxtLink
            >
          </div>
        </div>
      </div>
    </NuxtLayout>
  </div>
</template>

<script lang="ts" setup>
import BackButton from "~/components/shared/back-button.vue";
import HostSignupForm from "~/components/forms/host-signup-form.vue";
</script>

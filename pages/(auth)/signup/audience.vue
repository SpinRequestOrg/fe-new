<template>
  <div class="h-full">
    <NuxtLayout :name="'auth'">
      <BackButton to="/signup" />
      <div class="mt-8">
        <LoginForm />
      </div>
    </NuxtLayout>
  </div>
</template>
<script lang="ts" setup>
import BackButton from "~/components/shared/back-button.vue";
import LoginForm from "~/components/forms/login-form.vue";
</script>

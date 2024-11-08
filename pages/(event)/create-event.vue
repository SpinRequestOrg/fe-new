<template>
  <div class="container pt-4 pb-20">
    <SharedBackButton to="/dashboard" />
    <div class="text-3xl md:text-4xl text-center font-semibold font-display">
      Create event
    </div>
    <div class="max-w-full w-[640px] mx-auto mt-10">
      <CreateEventForm />
    </div>
  </div>
</template>

<script lang="ts" setup>
import CreateEventForm from "~/components/forms/event-form.vue";
definePageMeta({
  middleware: ["host"],
});

useSeoMeta({
  title: "Create Event",
});
</script>

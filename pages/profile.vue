<template>
  <div>
    <div
      v-if="status === 'pending'"
      class="h-full w-full grid place-items-center pt-8"
    >
      <Loader class="size-6 animate-spin" />
    </div>
    <div class="container pt-8" v-else>
      <div class="flex gap-x-2 items-center">
        <Avatar
          class="!bg-[#FF99F1] size-[56px] text-background text-xl font-bold"
          :initials="initials"
          :image="profilePicture"
        />
        <div class="text-5xl font-display tracking-wide">
          Welcome, <b>{{ name }}</b>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Loader } from "lucide-vue-next";
const { $repo } = useNuxtApp();
const { data, status, error } = useAsyncData("FETCH-USER-PROFILE", () => {
  return $repo.auth.fetchProfile();
});

const name = computed(
  () => data.value?.data?.stage_name ?? data.value?.data?.email
);
const initials = computed(() => getInitials(name.value ?? ""));
const profilePicture = computed(() => data.value?.data?.profile_picture);
</script>

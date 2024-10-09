<template>
  <div>
    <div v-if="status === 'pending'">LOADING</div>
  </div>
</template>

<script lang="ts" setup>
const { $repo } = useNuxtApp();
const { data, status, error } = useAsyncData("FETCH-USER-PROFILE", () => {
  return $repo.auth.fetchProfile();
});
</script>

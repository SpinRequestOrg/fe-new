<template>
  <div class="container pt-20 h-full relative">
    <div
      class="bg-sp-purple/50 blur-[200px] size-56 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[2]"
    ></div>
    <div class="max-w-full w-[600px] mx-auto">
      <div
        class="font-display text-3xl md:text-4xl font-semibold text-center mb-12"
      >
        Who do you want to request a song from?
      </div>

      <HostSearchInput />
    </div>
  </div>
</template>

<script lang="ts" setup>
useSeoMeta({ title: "Request A Song or Hype" });
</script>

<template>
  <div class="h-full">
    <NuxtLayout :name="'auth'">
      <div>
        <h4 class="text-center text-primary text-xl md:text-2xl">
          Create account
        </h4>
        <p class="text-4xl text-center font-semibold my-4 font-display">
          How do you want to use SpinRequest?
        </p>
        <div
          class="grid grid-cols-[repeat(auto-fill,_minmax(265px,_1fr))] gap-4 mt-8"
        >
          <NuxtLink
            to="/signup/host"
            class="border py-10 px-8 relative z-10 rounded-2xl transition-colors hover:border-primary bg-background"
          >
            <div class="text-2xl font-semibold">As a show host</div>
            <div class="text-muted-foreground leading-5 mt-4">
              For DJs MCs, Artists, radio hosts or others
            </div>
          </NuxtLink>

          <NuxtLink
            class="border py-10 px-8 relative z-10 rounded-2xl transition-colors hover:border-primary bg-background"
            to="/signup/audience"
          >
            <div class="text-2xl font-semibold">To request songs</div>
            <div class="text-muted-foreground leading-5 mt-4">
              To request songs or hypes from a host
            </div>
          </NuxtLink>
        </div>
      </div>
    </NuxtLayout>
  </div>
</template>

<script lang="ts" setup>
useSeoMeta({
  title: "Create An Account",
});
</script>

<style scoped>
.card {
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: radial-gradient(
    circle,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 0) 100%
  );
}
</style>

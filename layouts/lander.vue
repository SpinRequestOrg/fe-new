<template>
  <main class="debu-screens">
    <div class="fixed py-4 left-0 right-0 border-b bg-background z-[100]">
      <Navigation />
    </div>
    <div class="pt-[72px] h-screen">
      <slot />
      <Footer />
    </div>
  </main>
</template>

<script lang="ts" setup>
import Footer from "~/components/lander/footer.vue";
</script>

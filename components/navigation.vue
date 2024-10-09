<template>
  <header class="flex items-center justify-between container">
    <NuxtLink class="flex items-center gap-x-px" to="/">
      <SvgIcon class="scale-75" />
      <div class="text-lg font-semibold font-display hidden sm:block">
        SpinRequest
      </div>
    </NuxtLink>

    <nav class="flex items-center gap-x-2">
      <NuxtLink to="/login"> <Button> LOGIN </Button> </NuxtLink>

      <NuxtLink to="/signup">
        <Button :variant="'secondary'"> SIGN UP </Button>
      </NuxtLink>
      <ProfileMenu />
    </nav>
  </header>
</template>

<script lang="ts" setup>
import Button from "./ui/button.vue";
</script>

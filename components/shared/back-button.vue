<template>
  <Button :size="'icon'" :variant="'outline'">
    <slot>
      <NuxtLink v-if="to" :to="to">
        <ArrowLeft class="szie-4" />
      </NuxtLink>
      <ArrowLeft class="szie-4" v-else @click="$router.back()" />
    </slot>
  </Button>
</template>

<script lang="ts" setup>
import Button from "../ui/button.vue";
import { ArrowLeft } from "lucide-vue-next";
defineProps<{ to?: string; history?: boolean }>();
</script>

<template>
  <div
    class="relative rounded-full border border-input focus-within:ring-ring shadow-sm transition-colors bg-white/5 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground focus-within:outline-none focus-within:ring-1 pl-12 pr-8 py-6 h-[56px]"
  >
    <input
      type="text"
      placeholder="Search DJs MCs, Hypeman name"
      class="focus-visible:outline-none bg-transparent text-base absolute inset-0 p-[inherit] z-[3]"
      v-model="search"
    />
    <Search
      class="absolute left-4 top-1/2 -translate-y-[52%] size-5 text-muted-foreground"
    />
    <div class="absolute right-4 top-1/2 -translate-y-[52%] z-[4]">
      <Button
        :size="'icon'"
        :variant="'outline'"
        class="animate-in slide-in-from-left-1 fade-out-0"
        v-if="search"
      >
        <ArrowRight />
      </Button>
    </div>
    <div class="absolute left-0 translate-y-[35px] z-[5] w-full">
      <HostSearchList
        class="animate-in slide-in-from-top-1 fade-in-20"
        v-if="search"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Search, ArrowRight } from "lucide-vue-next";
import Button from "./ui/button.vue";

const search = ref("");
</script>

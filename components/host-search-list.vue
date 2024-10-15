<template>
  <ListboxRoot class="w-full rounded-2xl bg-[#252528]" highlight-on-hover>
    <ListboxContent class="max-h-[296px] overflow-auto w-full p-2">
      <ListboxItem v-for="i in fruits" :key="i" :value="i" as-child>
        <NuxtLink
          to="/mohbad"
          class="w-full grid grid-cols-host-item gap-2 items-center py-[8px] px-[12px] h-[56px] leading-none text-[13px] relative select-none outline-none ring-1 ring-transparent hover:bg-white/5 data-[highlighted]:bg-white/5 [&[data-highlighted]_.goto]:block focus:ring-input data-[state=checked]:ring-ring data-[state=checked]:text-white data-[disabled]:opacity-50 rounded-lg cursor-pointer"
        >
          <Avatar initials="DJ" />
          <span class="text-base font-semibold">{{ i }}</span>
          <div
            class="inline-flex gap-1 items-center bg-white/10 rounded-2xl px-2 py-1"
          >
            <span>LIVE</span>
            <span class="size-2 rounded-full bg-destructive"></span>
          </div>
          <ArrowUpLeft
            class="goto size-4 text-muted-foreground hidden animate-in slide-in-from-bottom-2"
          />
        </NuxtLink>
      </ListboxItem>
    </ListboxContent>
  </ListboxRoot>
</template>

<script setup lang="ts">
import { ArrowUpLeft } from "lucide-vue-next";
const fruits = ["Apple", "Banana", "Blueberry", "Grapes", "Pineapple"];
const vegetables = ["Aubergine", "Broccoli", "Carrot", "Courgette", "Leek"];
</script>

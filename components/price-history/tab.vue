<template>
  <TabsRoot default-value="all">
    <div class="flex items-center justify-between">
      <div class="text-lg font-semibold">Price history</div>
      <TabsList class="rounded-full flex text-sm p-1 bg-background/20">
        <TabsTrigger
          value="all"
          class="rounded-[inherit] min-w-[45px] px-2 py-1 hover:bg-secondary data-[state='active']:bg-primary"
        >
          All
        </TabsTrigger>
        <TabsTrigger
          value="songs"
          class="rounded-[inherit] min-w-[45px] px-2 py-1 hover:bg-secondary data-[state='active']:bg-primary"
        >
          Songs
        </TabsTrigger>
        <TabsTrigger
          value="hypes"
          class="rounded-[inherit] min-w-[45px] px-2 py-1 hover:bg-secondary data-[state='active']:bg-primary"
        >
          Hypes
        </TabsTrigger>
      </TabsList>
    </div>

    <TabsContent value="all">
      <All :history="history" />
    </TabsContent>
    <TabsContent value="songs">
      <Song :history="history" />
    </TabsContent>
    <TabsContent value="hypes">
      <Hypes :history="history" />
    </TabsContent>
  </TabsRoot>
</template>
<script lang="ts" setup>
import All from "./all.vue";
import Hypes from "./hypes.vue";
import Song from "./song.vue";
import type { PriceHistory } from "~/types/event";
defineProps<{ history?: PriceHistory[] }>();
</script>

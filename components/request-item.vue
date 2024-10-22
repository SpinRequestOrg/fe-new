<template>
  <div class="flex gap-3 items-center">
    <div :class="avatar_variant({ type })">
      <SvgIcon :name="type == 'song' ? 'music' : 'mic'" />
    </div>
    <div class="space-y-1">
      <div class="flex items-center gap-2 text-base">
        <div class="text-muted-foreground">From</div>
        <div class="font-medium">
          {{ request?.nickname ?? request.audience.name }}
        </div>
      </div>
      <div class="flex items-center text-muted-foreground">
        <div class="flex items-center gap-1 text-primary-foreground">
          <SvgIcon :name="'money'" />
          <div class="text-primary-foreground font-medium">
            ${{ request.amount }}
          </div>
        </div>
        <Dot />
        <div class="text-muted-foreground text-sm">
          {{ request.type == "hype" ? "HYPE" : "SONG" }} REQUEST
        </div>
        <!-- <Dot /> -->
        <!-- <div class="text-muted-foreground text-sm">From Pablo</div> -->
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Dot } from "lucide-vue-next";
import { cva, type VariantProps } from "class-variance-authority";
import type { HostProfile } from "~/types/user";

const avatar_variant = cva("size-12 rounded-full grid place-items-center", {
  variants: {
    type: {
      song: "bg-[#FFEE99]/10",
      hype: "bg-[#FF99F1]/10",
    },
  },
  defaultVariants: {
    type: "song",
  },
});

type AvatarVariant = VariantProps<typeof avatar_variant>;
withDefaults(
  defineProps<{
    type: AvatarVariant["type"];
    request: HostProfile["live_event"]["requests"][number];
  }>(),
  { type: "song" }
);
</script>

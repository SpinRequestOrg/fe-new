<template>
  <div class="flex gap-1 items-center">
    <div :class="avatar_variant({ type })">
      <SvgIcon
        :name="type == 'song' ? 'music' : 'mic'"
        :class="cn(request.status === 'now-playing' ? 'animate-bounce' : '')"
      />
    </div>
    <div class="space-y-1">
      <SharedSummary
        :content="request.description"
        class="font-medium"
        v-if="request.type === 'hype'"
      />
      <div class="flex items-center gap-2 text-base" v-else>
        <div class="text-foreground font-medium">{{ request.song_title }}</div>
        <div class="text-muted-foreground">by {{ request.artist }}</div>
      </div>
      <div class="flex items-center text-muted-foreground">
        <div class="flex items-center gap-1 text-primary-foreground">
          <SvgIcon :name="'money'" />
          <div class="text-primary-foreground font-medium">
            ₦{{ formatMoney(request.price) }}
          </div>
        </div>
        <Dot />
        <div class="text-muted-foreground text-sm">
          {{ request.type == "hype" ? "HYPE" : "SONG" }}
        </div>
        <Dot />
        <div
          class="text-primary text-sm"
          v-if="authEmail === request.audience.email"
        >
          Your request
        </div>
        <div class="text-muted-foreground text-sm" v-else>
          From {{ request.nickname ?? request.audience.name }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Dot } from "lucide-vue-next";
import { cva, type VariantProps } from "class-variance-authority";
import type { HostProfile } from "~/types/user";

const { authEmail } = useAuth();

const avatar_variant = cva(
  "size-16 scale-75  shrink-0 rounded-full grid place-items-center",
  {
    variants: {
      type: {
        song: "bg-[#FFEE99]/10",
        hype: "bg-[#FF99F1]/10",
      },
    },
    defaultVariants: {
      type: "song",
    },
  }
);

type AvatarVariant = VariantProps<typeof avatar_variant>;
withDefaults(
  defineProps<{
    type: AvatarVariant["type"];
    request: HostProfile["live_event"]["requests"][number];
  }>(),
  { type: "song" }
);
</script>

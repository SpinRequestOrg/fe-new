<template>
  <div class="container pt-10">
    <div class="flex gap-x-2 items-center mb-8">
      <Avatar
        class="!bg-[#FF99F1] size-[56px] shrink-0 text-background text-xl font-bold"
        :initials="getInitials(auth_user?.stage_name ?? '')"
        :image="auth_user?.profile_picture"
      />
      <div class="text-3xl md:text-4xl lg:text-5xl font-display tracking-wide">
        Welcome, <b>{{ auth_user?.stage_name }}</b>
      </div>
    </div>

    <div class="grid mac:grid-cols-[1fr_auto] items-start gap-4">
      <div class="order-2 mac:order-1">
        <div
          class="relative bg-white/5 rounded-2xl p-6 border flex items-center justify-between overflow-hidden"
        >
          <div
            class="bg-sp-purple/50 blur-[200px] size-56 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[2]"
          ></div>
          <div class="space-y-2">
            <div class="text-muted-foreground">Withdrawable balance</div>
            <div class="flex gap-2">
              <div class="text-3xl md:text-4xl font-semibold">$35,243</div>
              <div></div>
            </div>
          </div>
          <Button>MY WALLET</Button>
        </div>
      </div>

      <div
        class="max-w-full w-full mac:w-[380px] order-1 mac:order-2 grid space-y-6"
      >
        <div
          class="rounded-2xl bg-[#F5F5F50D]/5 px-6 py-4 relative overflow-hidden w-full"
        >
          <div
            class="bg-[#FFEE99] opacity-20 rounded-[1000px] blur-[100px] translate-x-1/2 -translate-y-1/2 size-56 absolute right-0 top-0 z-[2]"
          ></div>
          <div class="mb-4 font-semibold text-2xl">Events</div>
          <div class="text-muted-foreground">
            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
            consectetur, adipisci velit, sed qu
          </div>
          <NuxtLink to="/create-event">
            <Button :size="'lg'" class="w-full mt-6"> CREATE AN EVENT </Button>
          </NuxtLink>
        </div>

        <div
          class="rounded-2xl bg-[#F5F5F50D]/5 px-6 py-4 relative overflow-hidden w-full"
        >
          <div
            class="bg-[#FFEE99] opacity-20 rounded-[1000px] blur-[100px] translate-x-1/2 -translate-y-1/2 size-56 absolute right-0 top-0 z-[2]"
          ></div>
          <div class="mb-1 font-semibold text-2xl">The Quisine</div>
          <div class="flex text-sm text-muted-foreground gap-1 items-center">
            <SvgIcon name="location" />
            <div>Quilox bar, elegushi</div>
          </div>
          <div class="spece-y-6 mt-6">
            <div class="flex">Song request</div>
            <div class="flex">Hype request</div>
          </div>
          <NuxtLink to="/create-event">
            <Button :size="'lg'" class="w-full mt-6 animate-pulse">
              GO LIVE</Button
            >
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Button from "~/components/ui/button.vue";
definePageMeta({
  middleware: ["host"],
});
const { auth_user } = useAuth();
</script>

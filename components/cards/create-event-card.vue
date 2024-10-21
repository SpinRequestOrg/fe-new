<template>
  <div
    class="rounded-2xl bg-background border border-foreground/20 px-4 sm:px-6 py-4 relative overflow-hidden grid"
  >
    <div
      class="bg-[#FFEE99] opacity-20 rounded-[1000px] blur-[100px] translate-x-1/2 -translate-y-1/2 size-56 absolute right-0 top-0 z-[2]"
    ></div>
    <div class="mb-4 font-semibold text-2xl">Events</div>
    <div class="text-muted-foreground">
      Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
      consectetur, adipisci velit, sed qu
    </div>
    <NuxtLink to="/create-event" class="mt-auto">
      <UiButton :size="'lg'" class="w-full mt-6 uppercase">
        ✨ Create an event ✨
      </UiButton>
    </NuxtLink>
  </div>
</template>

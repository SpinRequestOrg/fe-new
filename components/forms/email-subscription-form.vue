<template>
  <div
    class="border border-muted rounded-2xl sm:w-[335px] w-full p-3 mx-auto md:mx-0"
  >
    <h5 class="text-lg font-semibold text-muted-foreground mb-5">
      Get news and updates
    </h5>
    <div
      class="relative rounded-full border border-input focus-within:ring-ring shadow-sm transition-colors bg-white/5 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground focus-within:outline-none focus-within:ring-1 px-4 py-4 h-[46px]"
    >
      <input
        type="text"
        placeholder="@youremail.com"
        class="focus-visible:outline-none bg-transparent text-base absolute inset-0 p-[inherit] z-[3]"
      />

      <div class="absolute right-1 top-1/2 -translate-y-[52%] z-[4]">
        <UiButton :variant="'secondary'"> SUBSCRIBE </UiButton>
      </div>
    </div>
  </div>
</template>

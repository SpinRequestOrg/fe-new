<template>
  <div class="grid md:grid-cols-2 gap-10 h-full">
    <div class="relative container mx-auto z-10">
      <div
        class="bg-sp-purple/50 blur-[200px] size-56 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[2]"
      ></div>
      <div class="relative z-[3]">
        <slot />
      </div>
    </div>
    <div
      class="md:h-full min-h-[300px] md:min-h-0 bottom-0 w-full absolute md:relative bg-background rounded-tl-3xl rounded-tr-3xl md:rounded-tr-none md:rounded-l-3xl"
    >
      <NuxtImg
        src="/images/night-life.png"
        class="object-fill md:object-cover w-full h-full absolute rounded-[inherit]"
      />
    </div>
  </div>
</template>

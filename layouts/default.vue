<template>
  <main class="debug-screens">
    <div class="fixed py-4 left-0 right-0 border-b bg-background z-[100]">
      <Navigation />
    </div>
    <div class="pt-[72px] h-screen">
      <slot />
    </div>
  </main>
</template>

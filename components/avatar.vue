<template>
  <AvatarRoot
    class="bg-muted inline-flex size-[40px] select-pointer items-center justify-center overflow-hidden rounded-full align-middle"
  >
    <AvatarImage :src="image" class="h-full w-full object-cover" />
    <AvatarFallback
      class="leading-1 flex h-full w-full items-center justify-center text-[15px] font-medium uppercase"
    >
      {{ initials }}
    </AvatarFallback>
  </AvatarRoot>
</template>
<script lang="ts" setup>
withDefaults(defineProps<{ initials?: string; image?: string }>(), {
  image: "",
  initials: "",
});
</script>

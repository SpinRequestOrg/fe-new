<template>
  <PopoverRoot v-model:open="open" @update:open="model = $event">
    <PopoverTrigger aria-label="Read more" as-child>
      <slot>
        <div class="text-sm">Read more</div>
      </slot>
    </PopoverTrigger>
    <PopoverPortal>
      <PopoverContent
        :side="side"
        :side-offset="0"
        class="rounded-md w-[35rem] sm:w-[40rem] max-w-[97vw] max-h-52 overflow-auto border bg-popover-foreground p-4 text-popover shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2"
      >
        <slot :toggle name="content">
          <div>
            {{ content }}
          </div>
        </slot>
        <PopoverClose
          class="rounded-full h-[20px] w-[20px] inline-flex items-center justify-center text-background/50 absolute top-[5px] right-[5px] focus:shadow-[0_0_0_2px] outline-none cursor-default"
          aria-label="Close"
        >
          <X class="size-4" />
        </PopoverClose>
        <!-- <PopoverArrow class="fill-foreground border size-4" /> -->
      </PopoverContent>
    </PopoverPortal>
  </PopoverRoot>
</template>

<script lang="ts" setup>
import { X } from "lucide-vue-next";

withDefaults(
  defineProps<{
    side?: "top" | "bottom" | "right" | "left";
    content?: string;
  }>(),
  {
    side: "top",
    content: "",
  }
);

const model = defineModel<boolean>();
const open = ref(model.value);
const toggle = () => {
  open.value = !open.value;
};
</script>

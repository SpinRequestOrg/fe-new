<template>
  <DialogRoot :open="controlled ? model : modal_open" @update:open="updateOpen">
    <DialogTrigger as-child>
      <slot name="trigger">
        <Button :variant="'outline'">Open</Button>
      </slot>
    </DialogTrigger>
    <DialogPortal>
      <DialogOverlay
        class="fixed inset-0 z-50 bg-black/70 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"
      />
      <DialogContent
        class="[&[data-state='open']_.content]:animate-contentShow [&[data-state='open']_.header]:slide-in-from-top-1"
      >
        <div :class="modal_variants({ size })">
          <div
            class="px-6 py-4 flex justify-between relative border-b border-input"
          >
            <slot name="heading"></slot>
            <DialogClose
              class="text-foreground/60 hover:bg-foreground/10 focus:shadow-foreground/50 ml-auto inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
              aria-label="Close"
              v-if="showClose"
            >
              <X />
            </DialogClose>
          </div>
          <div>
            <DialogTitle>
              <slot name="title">
                <div class="sr-only">Modal Title</div>
              </slot>
            </DialogTitle>

            <DialogDescription>
              <slot name="description">
                <div class="sr-only">Modal Description</div>
              </slot>
            </DialogDescription>

            <slot :toggle>Modal Content</slot>
          </div>
        </div>
      </DialogContent>
    </DialogPortal>
  </DialogRoot>
</template>

<script setup lang="ts">
import { X } from "lucide-vue-next";
import Button from "./ui/button.vue";
import { cva, type VariantProps } from "class-variance-authority";

const modal_variants = cva(
  "content fixed bg-gray-900 top-[50%] left-[50%] w-[90vw] translate-x-[-50%] translate-y-[-50%] rounded-xl bg-background shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none z-[100]",
  {
    variants: {
      size: {
        xl: "max-w-[4xl] max-h-[95vh]",
        lg: "max-w-3xl max-h-[85vh]",
        md: "max-w-xl max-h-[75vh]",
        sm: "max-w-[500px] max-h-[55vh]",
      },
    },
    defaultVariants: {
      size: "lg",
    },
  }
);

type ModalVariant = VariantProps<typeof modal_variants>;

const {
  showClose = true,
  size = "md",
  controlled = false,
} = defineProps<{
  showClose?: boolean;
  size?: ModalVariant["size"];
  controlled?: boolean;
}>();

const model = defineModel<boolean>();
const modal_open = ref(false);

const updateOpen = (open: boolean) => {
  if (controlled) {
    model.value = open;
    return;
  }
  modal_open.value = open;
};

const toggle = () => {
  modal_open.value = !modal_open.value;
};
</script>

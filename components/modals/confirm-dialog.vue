<template>
  <Modal :size="'sm'">
    <template #trigger>
      <slot>
        <Button :variant="'destructive'">Confirm</Button>
      </slot>
    </template>
    <template v-slot="{ toggle }">
      <div>
        <div class="py-10 text-2xl font-medium text-center font-display">
          {{ message }}
        </div>
        <div class="flex items-center gap-4">
          <Button
            :variant="'destructive'"
            class="w-full"
            @click="handleConfirmation(toggle)"
          >
            Yes
          </Button>
          <Button :variant="'outline'" class="w-full" @click="toggle">
            No
          </Button>
        </div>
      </div>
    </template>
  </Modal>
</template>

<script lang="ts" setup>
import Button from "../ui/button.vue";

const props = withDefaults(
  defineProps<{
    message?: string;
    closeOnConfirm?: boolean;
    onConfirm?: () => void;
  }>(),
  { message: "Are you sure you want to continue?", closeOnConfirm: true }
);
const handleConfirmation = (toggle?: () => void) => {
  props.onConfirm?.();
  if (props.closeOnConfirm) toggle?.();
};
</script>

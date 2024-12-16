<template>
  <Modal :size="'lg'" v-model="open" controlled>
    <template #heading>
      <div class="font-display text-2xl font-medium">Edit event</div>
    </template>
    <template #trigger>
      <slot>
        <UiButton :variant="'ghost'" :size="'icon'">
          <Edit2 class="size-5 text-muted-foreground" />
        </UiButton>
      </slot>
    </template>
    <div class="p-6">
      <EditEventForm v-bind="props" edit :id="id" @done="done" />
    </div>
  </Modal>
</template>

<script lang="ts" setup>
import { Edit2 } from "lucide-vue-next";
import EditEventForm from "../forms/event-form.vue";
import type { EventFormDetails } from "../../types/event";
interface EditProps extends EventFormDetails {
  id: string | number;
}
const props = defineProps<EditProps>();
const emit = defineEmits(["done"]);
const open = ref(false);
const done = () => {
  emit("done");
  open.value = false;
};
</script>

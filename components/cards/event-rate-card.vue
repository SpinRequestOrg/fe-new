<template>
  <div class="w-full border rounded-3xl bg-white/5 px-6 py-4 relative">
    <div
      class="absolute inset-0 grid place-items-center bg-background/65 rounded-[inherit] z-10"
      v-if="updating"
    >
      <Loader class="size-5 animate-spin" />
    </div>
    <div class="text-2xl font-medium">Live prices</div>
    <div class="space-y-6 my-8">
      <div
        class="flex justify-between items-center"
        v-for="service in host_services"
        :key="service.id"
      >
        <div class="text-lg text-muted-foreground capitalize min-w-fit">
          {{ service.name }} <span class="hidden md:inline">request</span>
        </div>

        <NumberInput
          v-model="service.price"
          :id="`PRICE-FOR-${service.name}-${service.id}`"
          :step="100"
        />

        <NumberFieldRoot
          v-if="false"
          id="age"
          class="text-sm text-white"
          :min="0"
          :default-value="18"
        >
          <div class="grid items-center grid-cols-[auto_1fr_auto] gap-2">
            <NumberFieldDecrement class="disabled:opacity-20">
              <Button
                class="h-full aspect-square rounded-full"
                :size="'icon'"
                :variant="'secondary'"
              >
                -
              </Button>
            </NumberFieldDecrement>
            <div class="relative w-full">
              <div
                class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"
              >
                <span class="text-gray-500 sm:text-sm">$</span>
              </div>
              <NumberFieldInput
                class="outline-none ring-[0.5px] max-w-28 rounded-md focus:ring-primary pr-4 pl-6 py-2 bg-white/5 border-none tabular-nums"
              />
            </div>
            <NumberFieldIncrement class="disabled:opacity-20">
              <Button
                class="h-full aspect-square rounded-full"
                :size="'icon'"
                :variant="'secondary'"
              >
                +
              </Button>
            </NumberFieldIncrement>
          </div>
        </NumberFieldRoot>
      </div>
    </div>
    <Button class="w-full" @click="updateAllPrice">Update price</Button>
  </div>
</template>

<script lang="ts" setup>
import type { LiveEvent } from "~/types/event";
import Button from "../ui/button.vue";
import NumberInput from "../ui/number-input.vue";
import { Loader } from "lucide-vue-next";

const props = defineProps<{
  services: LiveEvent["types"];
  onUpdate?: () => void;
}>();

const updating = ref(false);
const host_services = ref<LiveEvent["types"]>([]);

watch(
  () => props.services,
  (services) => {
    host_services.value = services;
  },
  {
    immediate: true,
  }
);
const {
  $repo: { event },
} = useNuxtApp();

const updatePrice = async (id: string | number, price: number) => {
  return await event.updateEventPrice(id, price);
};

const updateAllPrice = async () => {
  try {
    updating.value = true;
    const result = await Promise.all(
      host_services.value.map((service) =>
        updatePrice(service.id, service.price)
      )
    );
    updating.value = false;
    showToast({ title: "Prices updated" });
  } catch (e) {
    updating.value = false;
    showToast({
      title: e?.data?.message ?? "Failed to update prices",
      variant: "warning",
    });
    console.error("FAILED TO UPDATE PRICES", e);
  }
};
</script>

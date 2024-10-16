<template>
  <div class="container pt-4 pb-20">
    <SharedBackButton to="/dashboard" />
    <div class="text-3xl md:text-4xl text-center font-semibold font-display">
      Create event
    </div>
    <div class="max-w-full w-[640px] mx-auto mt-10">
      <Form
        class="space-y-6"
        :validation-schema="EventSchema"
        @submit="handleSubmit"
      >
        <FormInput
          name="title"
          placeholder="Enter event title"
          label="Event title"
        />

        <FormInput
          name="address"
          placeholder="Enter event address"
          label="Address"
        />
        <div class="flex flex-col sm:flex-row gap-4 w-full">
          <FormSelect
            :options="countries"
            name="country"
            placeholder="Choose event country"
            label="Country"
            class="w-full"
          />
          <FormSelect
            :options="states"
            name="state"
            placeholder="Choose event state"
            label="State"
            class="w-full"
          />
        </div>
        <div>
          <div class="mb-3 font-medium">
            What type of request are you taking
          </div>
          <RadioGroupRoot
            class="grid grid-cols-2 sm:grid-cols-3 gap-4 text-muted-foreground"
            name="type"
            required
            v-model="type"
          >
            <RadioGroupItem as-child value="song">
              <Button
                type="button"
                :variant="'outline'"
                :size="'lg'"
                class="ring-transparent bg-white/5 transition-colors ring-[1px] data-[state='checked']:ring-primary"
              >
                Song
              </Button>
            </RadioGroupItem>
            <RadioGroupItem as-child value="hype">
              <Button
                type="button"
                :variant="'outline'"
                :size="'lg'"
                class="ring-transparent bg-white/5 transition-colors ring-[1px] data-[state='checked']:ring-primary"
              >
                Hype
              </Button>
            </RadioGroupItem>
            <RadioGroupItem as-child value="both">
              <Button
                type="button"
                :variant="'outline'"
                :size="'lg'"
                class="col-span-2 sm:col-span-1 bg-white/5 ring-transparent transition-colors ring-[1px] data-[state='checked']:ring-primary"
              >
                Song & Hype
              </Button>
            </RadioGroupItem>
          </RadioGroupRoot>
        </div>

        <div
          class="bg-white/5 rounded-2xl p-4 !mt-8 border animate-in slide-in-from-top-1"
          v-if="type"
        >
          <div class="text-sm text-muted-foreground">
            Set your starting prices
          </div>

          <div class="my-4 space-y-4">
            <div
              class="flex justify-between items-center"
              v-if="type == 'both' || type == 'song'"
            >
              <div class="text-2xl font-semibold">
                Song <span class="hidden sm:inline">request</span>
              </div>
              <input
                v-model="song_price"
                type="number"
                :min="100"
                :step="100"
                placeholder="Enter price"
                class="outline-none ring-[0.5px] rounded-full focus:ring-primary px-4 py-2 bg-white/5 border-none"
              />
            </div>
            <div
              class="flex justify-between items-center"
              v-if="type == 'both' || type == 'hype'"
            >
              <div class="text-2xl font-semibold">
                Hype <span class="hidden sm:inline">request</span>
              </div>
              <input
                type="number"
                :min="100"
                :step="100"
                placeholder="Enter price"
                class="outline-none ring-[0.5px] rounded-full focus:ring-primary px-4 py-2 bg-white/5 border-none"
                v-model="hype_price"
              />
            </div>
          </div>

          <div
            class="py-1 px-2 mt-8 border border-destructive bg-[#64200A] flex items-center rounded-md justify-between"
            v-if="show_tip"
          >
            <div class="text-sm sm:text-base">
              You can always change the price at any time during the event
            </div>
            <X class="size-4 cursor-pointer" @click="show_tip = false" />
          </div>
        </div>
        <Button
          class="max-w-full w-[450px] !flex !mt-8 mx-auto border"
          :size="'lg'"
          :disabled="disabled"
          :loading="loading"
        >
          Create event
        </Button>
      </Form>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { X } from "lucide-vue-next";
import { Form } from "vee-validate";
import FormInput from "~/components/forms/form-input.vue";
import FormSelect from "~/components/forms/form-select.vue";
import Button from "~/components/ui/button.vue";
import { EventSchema, type HostEvent } from "~/schemas/event-schema";
definePageMeta({
  middleware: ["host"],
});

const countries = ref(["Nigeria"]);
const states = ref([
  "Abia",
  "Oyo",
  "Osun",
  "Ekiti",
  "Lagos",
  "Taraba",
  "Adamawa",
  "Imo",
  "Kaduna",
]);

const type = ref<"song" | "hype" | "both" | undefined>(undefined);
const song_price = ref(100);
const hype_price = ref(100);
const show_tip = ref(true);
const disabled = computed(
  () =>
    !type.value ||
    Number(song_price.value) <= 0 ||
    Number(hype_price.value) <= 0
);
const loading = ref(false);

const types = computed<{ name: "hype" | "song"; price: number }[]>(() => {
  switch (type.value) {
    case "both":
      return [
        {
          name: "song",
          price: Number(song_price.value),
        },
        {
          name: "hype",
          price: Number(hype_price.value),
        },
      ];
    case "hype":
      return [
        {
          name: "hype",
          price: Number(hype_price.value),
        },
      ];
    case "song":
      return [
        {
          name: "song",
          price: Number(song_price.value),
        },
      ];
    default:
      return [];
  }
});

const {
  $repo: { event: eventModule },
} = useNuxtApp();

const handleSubmit = async (event: HostEvent) => {
  const payload = {
    ...event,
    types: types.value,
  };

  try {
    loading.value = true;
    const response = await eventModule.createEvent(payload);
    loading.value = false;
    showToast({ title: response.message, variant: "normal" });
    if (response.data.id) {
      navigateTo("/dashboard");
    }
  } catch (e) {
    loading.value = false;
    showToast({
      title: e.data?.message ?? "Failed to create event",
      variant: "warning",
    });
    console.error("FAILED TO CREATE EVENT", e);
  }
};
</script>

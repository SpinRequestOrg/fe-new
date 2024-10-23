<template>
  <Form
    :validation-schema="SongRequestSchema"
    :initial-values="formInitialValue"
    @submit="handleSubmit"
    class="space-y-7"
  >
    <FormHiddenInput name="event_id" />
    <FormHiddenInput name="type" />
    <FormInput
      name="song_title"
      placeholder="Enter song title"
      label="Song title"
      type="text"
    />
    <FormInput
      name="artist"
      placeholder="Enter artiste name"
      label="Artiste"
      type="text"
    />
    <FormInput
      name="nickname"
      placeholder="Enter your nickname"
      label="nickname (optional)"
    />
    <Button
      type="submit"
      :size="'lg'"
      class="max-w-full w-[400px] mx-auto !flex uppercase"
      :loading="creating"
    >
      Request Song For ₦{{ formatMoney(request.price) }}
    </Button>
  </Form>
</template>

<script lang="ts" setup>
import { Form } from "vee-validate";
import FormInput from "./form-input.vue";
import FormHiddenInput from "./form-hidden-input.vue";
import Button from "../ui/button.vue";
import type { EventType } from "~/types/event";
import {
  SongRequestSchema,
  type SongRequestPayload,
} from "~/schemas/request-schema";
const props = defineProps<{ request: EventType; event_id: string }>();

const formInitialValue = computed(() => ({
  type: props.request.name,
  event_id: Number(props.event_id),
}));

const { createEventRequest, creating } = useLiveEvent();

const handleSubmit = (data: SongRequestPayload) => {
  createEventRequest(data);
};
</script>

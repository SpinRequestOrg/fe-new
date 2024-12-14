<template>
  <Modal
    :size="'md'"
    controlled
    hide-trigger
    :model-value="modelValue"
    @update:model-value="model = $event"
  >
    <template v-slot="{ toggle }">
      <div class="p-[25px]">
        <div class="grid place-items-center gap-4">
          <div class="mx-auto"><SvgIcon name="sad" /></div>
          <div class="text-2xl font-display font-semibold text-center">
            Sorry, your request was rejected
          </div>
          <div class="text-muted-foreground text-center">
            We are sorry your request was rejected by the DJ. It may not have
            fit their flow, event, or capacity. We have sent a refund to your
            Spin Request wallet here
          </div>
        </div>
        <div
          class="grid grid-cols-2 items-center gap-2 [&_>_button]:w-full mt-8"
        >
          <NuxtLink to="order-history" class="block w-full">
            <UiButton :variant="'secondary'" class="w-full">
              Go to My wallet
            </UiButton>
          </NuxtLink>
          <UiButton @click="model = false"> OKAY </UiButton>
        </div>
      </div>
    </template>
  </Modal>
</template>

<script lang="ts" setup>
const model = defineModel<boolean>();
</script>

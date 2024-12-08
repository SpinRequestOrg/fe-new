<template>
  <div class="overflow-auto">
    <div v-if="loading || data.length">
      <table class="w-full text-base">
        <thead class="border-b border- b-muted/10">
          <tr>
            <th
              v-for="(head, index) in heading"
              class="h-14 px-4 text-left align-middle font-medium text-muted-foreground whitespace-nowrap"
              :key="head + index"
            >
              {{ head }}
            </th>
          </tr>
        </thead>

        <tbody v-if="loading">
          <tr v-for="i in 4" :key="i" class="border-b">
            <td
              class="h-12 animate-pulse bg-muted/50"
              v-for="(head, index) in heading"
              :key="head + index"
            ></td>
          </tr>
        </tbody>

        <tbody
          v-else
          class="[&_tr]:h-14 [&_tr]:borde-b [&_td]:whitespace-nowrap [&_td:last]:min-w-0 [&_td]:min-w-[170px] [&_tr]:align-middle [&_td]:px-4 [&_tr:hover]:bg-muted/50 [&_tr]:cursor-pointer"
        >
          <slot></slot>
        </tbody>
      </table>
    </div>

    <slot name="empty" v-else />
  </div>
</template>

<script lang="ts" setup>
withDefaults(
  defineProps<{
    loading?: boolean;
    heading: string[];
    data: unknown[];
  }>(),
  {
    loading: false,
    data: () => [],
    heading: () => [],
  }
);
</script>

<style>
table td:first-child,
table td:last-child {
  min-width: 0 !important;
}
</style>

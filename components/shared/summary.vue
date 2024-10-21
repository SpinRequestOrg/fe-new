<template>
  <div class="space">
    <div
      class="max-h-12 overflow-hidden text-ellipsis line-clamp-2"
      ref="content_ref"
    >
      {{ content }}
    </div>
    <Popover :content="content" v-if="yOverflow">
      <button
        class="outline-0 p-0 text-sm text-primary underline hover:no-underline"
        @click.stop
      >
        Show more
      </button>
    </Popover>
  </div>
</template>

<script lang="ts" setup>
import Popover from "../ui/popover.vue";
import { LONG_ARTICLE } from "~/constants/mocks";
withDefaults(defineProps<{ content?: string }>(), { content: LONG_ARTICLE });
const content_ref = ref();
const { yOverflow } = useNodeContent(content_ref);
</script>

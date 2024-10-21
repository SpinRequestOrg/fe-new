import { useResizeObserver } from "@vueuse/core";

export const useNodeContent = (node: Ref<HTMLElement | null>) => {
  const height = ref(0);
  const width = ref(0);
  const scrollHeight = ref(0);
  const scrollWidth = ref(0);
  const xOverflow = ref(false);
  const yOverflow = ref(false);

  useResizeObserver(node, (entries) => {
    for (const entry of entries) {
      const { width: cWidth, height: cHeight } = entry.contentRect;
      width.value = cWidth;
      height.value = cHeight;
      scrollWidth.value = entry.target.scrollWidth;
      scrollHeight.value = entry.target.scrollHeight;
      xOverflow.value = width.value < scrollWidth.value;
      yOverflow.value = height.value < scrollHeight.value;
    }
  });

  return {
    width,
    height,
    scrollWidth,
    scrollHeight,
    xOverflow,
    yOverflow,
  };
};

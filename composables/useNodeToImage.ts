import domtoimage from "dom-to-image";

export const useNodeToImage = (
  nodeSelector: string,
  onConversion?: (blob: Blob) => void,
  ignoredNodes: string[] = []
) => {
  const converting = ref(false);
  const blob = ref<Blob>();

  const convertNodeToImage = async () => {
    try {
      converting.value = true;
      const node = document.querySelector(nodeSelector);
      const response = node
        ? await domtoimage.toBlob(node, {
            filter(node) {
              return !ignoredNodes?.includes((node as HTMLElement)?.id);
            },
          })
        : null;
      converting.value = false;
      if (response) {
        blob.value = response;
        onConversion?.(response);
      }
    } catch (e) {
      converting.value = false;
      console.error("FAILED TO CONVERT NODE", e);
    }
  };

  return {
    blob,
    converting,
    convertNodeToImage,
  };
};

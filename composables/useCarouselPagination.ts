import type { EmblaCarouselType } from "embla-carousel";

export const useCarouselPagination = (
  emblaApi: Ref<EmblaCarouselType | undefined>
) => {
  const selected_index = ref(0);
  const control_list = ref<number[]>([]);
  const goTo = (index: number) => {
    if (!emblaApi.value) return;
    emblaApi.value.scrollTo(index);
  };

  const onInit = (emblaApi: EmblaCarouselType) => {
    control_list.value = emblaApi.scrollSnapList();
  };

  const onSelect = (emblaApi: EmblaCarouselType) => {
    selected_index.value = emblaApi.selectedScrollSnap();
  };

  watch(emblaApi, (api) => {
    if (!api) return;
    onInit(api);
    onSelect(api);
    api.on("reInit", onInit).on("reInit", onSelect).on("select", onSelect);
  });

  return {
    selected_index,
    control_list,
    goTo,
  };
};

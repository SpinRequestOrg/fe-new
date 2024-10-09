type ToastVariant = "normal" | "warning";
type ToastAction = {
  title: string;
  description?: string;
  variant?: ToastVariant;
  duration?: number;
  action?: string;
  onAction?: () => void;
};
export const useToastStore = defineStore("Toast-Store", () => {
  const open = ref(false);
  const toast_title = ref("");
  const toast_description = ref("");
  const toast_duration = ref(5000);
  const toast_action = ref("");
  const toastOnAction = ref(() => {});
  const toast_variant = ref<ToastVariant>("normal");
  const openToast = ({
    title,
    description = "",
    duration = 5000,
    variant = "normal",
    action = "",
    onAction = () => {},
  }: ToastAction) => {
    toast_title.value = title;
    toast_description.value = description;
    toast_variant.value = variant;
    toast_duration.value = duration;
    toast_action.value = action;
    toastOnAction.value = onAction;
    open.value = true;
  };

  const resetToast = () => {
    toast_title.value = "";
    toast_description.value = "";
    toast_action.value = "";
    toast_duration.value = 5000;
    toastOnAction.value = () => {};
  };

  const closeToast = () => {
    open.value = false;
    resetToast();
  };

  const toggleToast = (state: boolean) => {
    open.value = state;
  };

  return {
    open,
    toast_title,
    toast_description,
    toast_variant,
    toast_action,
    toastOnAction: toastOnAction.value,
    openToast,
    closeToast,
    toggleToast,
  };
});

export const showToast = (action: ToastAction) => {
  const { openToast } = useToastStore();
  openToast(action);
};

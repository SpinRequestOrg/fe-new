import type { ApiError } from "~/types";

export const useFileUpload = () => {
  const {
    $repo: { auth },
  } = useNuxtApp();

  const uploading = ref(false);
  const uploaded_url = ref<string>();
  const upload_error = ref<ApiError>();
  const upload_preview = ref<string>();
  const previewed_file = ref<File>();

  const uploadFile = async (onUpload?: (url: string) => void, _file?: File) => {
    try {
      const file = _file ? _file : previewed_file.value;
      if (!file || !file.type.startsWith("image/")) {
        showToast({
          title: file ? "Upload only image" : "Upload a file",
          variant: "warning",
        });
        return;
      }
      const reader = new FileReader();
      reader.onload = (e) => {
        upload_preview.value = e.target?.result as string;
      };
      reader.readAsDataURL(file);
      const formdata = new FormData();
      formdata.append("profile_picture", file, file.name);
      uploading.value = true;
      const response = await auth.uploadFile(formdata);
      uploading.value = false;
      if (response.data) {
        uploaded_url.value = response.data;
        onUpload?.(response.data);
      }
    } catch (e) {
      uploaded_url.value = undefined;
      uploading.value = false;
      const error = e as ApiError;
      upload_error.value = error;
      showToast({
        title: "Upload Error",
        description: error?.data?.message ?? "Failed to upload",
        variant: "warning",
      });
    }
  };

  const previewFile = (file: File) => {
    try {
      if (!file.type.startsWith("image/")) {
        showToast({ title: "Upload only image", variant: "warning" });
        return;
      }

      const reader = new FileReader();
      reader.onload = (e) => {
        previewed_file.value = file;
        upload_preview.value = e.target?.result as string;
      };
      reader.onerror = (e) => {
        previewed_file.value = undefined;
        showToast({
          title: "Preview Error",
          description: e.target?.error?.message ?? "Failed to preview",
          variant: "warning",
        });
      };
      reader.readAsDataURL(file);
    } catch (e) {
      previewed_file.value = undefined;
      uploaded_url.value = undefined;
      uploading.value = false;
      const error = e as ApiError;
      upload_error.value = error;
      showToast({
        title: "Preview Error",
        description: error?.data?.message ?? "Failed to preview",
        variant: "warning",
      });
    }
  };

  return {
    previewFile,
    uploadFile,
    uploading,
    upload_error,
    upload_preview,
    uploaded_url,
  };
};

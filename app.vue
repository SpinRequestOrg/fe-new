<template>
  <ConfigProvider :use-id="useIdFunction">
    <NuxtLayout>
      <Toast
        :open="store.open"
        :title="store.toast_title"
        :description="store.toast_description"
        :variant="store.toast_variant"
        :action="store.toast_action"
        :onAction="toastOnAction"
        :update-open="toggleToast"
      />
      <NuxtPage />
    </NuxtLayout>
  </ConfigProvider>
</template>

<script setup lang="ts">
import { ConfigProvider } from "radix-vue";
const useIdFunction = () => useId();
import Toast from "./components/shared/toast.vue";
const store = useToastStore();
const { toastOnAction, toggleToast } = store;
const {
  $config: {
    public: { APP_BASE_URL },
  },
} = useNuxtApp();

useHead({
  titleTemplate: "%s | Spin Request",
  link: [
    {
      id: "canonical",
      rel: "canonical",
      href: APP_BASE_URL,
    },
  ],
});

useSeoMeta({
  ogTitle: "Spin Request",
  ogDescription:
    "Spin Request is a platform bridging the gap between DJs, Hosts and their audiences by facilitating song requests or hypes during live performances.",
  keywords: "DJ, hype man, hosts, song request, hype request",
  ogSiteName: "Spin Request",
  ogUrl: () => APP_BASE_URL,
  ogImage: () => `${APP_BASE_URL}/images/spin-logo.png`,
  ogImageSecureUrl: () => `${APP_BASE_URL}/images/spin-logo.png`,
  ogImageAlt: "Spin Request",
  ogImageWidth: 48,
  ogImageHeight: 39,
  ogImageType: "image/png",
  twitterSite: "@spinrequest",
  twitterImage: () => `${APP_BASE_URL}/images/spin-logo.png`,
  twitterImageAlt: "Spin Request",
  twitterCard: "summary",
});

useJsonld({
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Spin Request",
  alternateName: "SpinRequest",
  url: APP_BASE_URL,
  description:
    "Spin Request is a platform bridging the gap between DJs, Hosts and their audiences by facilitating song requests or hypes during live performances.",
  sameAs: [
    "https://www.facebook.com/spinrequest",
    "https://www.linkedin.com/company/spinrequest",
    "https://www.twitter.com/spinrequest",
    "https://www.instagram.com/spinrequest/",
    "https://www.tiktok.com/@spinrequest",
    "https://www.youtube.com/@spinrequest",
  ],
  logo: `${APP_BASE_URL}/images/spin-logo.png`,
  keywords: ["DJ", "hype man", "hosts", "song request", "hype request"],
  foundingDate: "June 2023",
  address: "Nigeria",
});
</script>

<template>
  <div></div>
</template>

<script setup lang="ts">
useHead({
  titleTemplate: "Spin Request",
});

useSeoMeta({
  ogTitle: () => "About SpinRequest",
  ogDescription: () => "Make your requests and take spotlight of that event",
  ogImage: () =>
    "https://cdn.pixabay.com/photo/2018/05/10/11/34/concert-3387324_1280.jpg",
  ogImageAlt: () => "Live Event",
  ogImageSecureUrl: () =>
    "https://cdn.pixabay.com/photo/2018/05/10/11/34/concert-3387324_1280.jpg",
  twitterImage: () =>
    "https://cdn.pixabay.com/photo/2018/05/10/11/34/concert-3387324_1280.jpg",
  twitterTitle: () => "SpinRequest",
  ogType: "article",
  ogUrl: () => "https://dev.spinrequest.com",
  ogSiteName: "SpinRequest",
});
</script>

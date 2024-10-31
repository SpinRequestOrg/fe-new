<template>
  <div class="container pt-6 pb-20">
    <LiveBanner
      class="-translate-y-6"
      :user="'audience'"
      :start-date="data?.data?.live_event?.start_date"
      animate
      v-if="data?.data.live_event"
    >
      <NuxtLink
        :to="`/${route.params.host}/${data?.data?.live_event?.id}/make-a-request`"
      >
        <Button>
          Make {{ hasPendingRequest ? "another" : "a" }} request
        </Button>
      </NuxtLink>
    </LiveBanner>
    <SharedBackButton
      to="/search"
      :class="cn(data?.data.live_event ? 'mt-10' : '')"
    />
    <SharedLoadingArea :loading="status === 'pending'" :error="error">
      <div
        class="grid grid-cols-1 md:grid-cols-[1fr_400px] justify-between gap-6 mt-10"
        v-if="host"
      >
        <div>
          <div class="grid lg:grid-cols-[auto_1fr] items-start gap-4">
            <Avatar
              class="!size-[120px] md:!size-[180px] xl:!size-[200px] !rounded-3xl !text-4xl"
              :initials="getInitials(host?.stage_name)"
              :image="host.profile_picture"
            />
            <div class="py-2">
              <div class="font-display text-3xl md:text-4xl font-semibold">
                {{ host.stage_name }}
              </div>
              <div class="flex flex-wrap gap-4 items-center my-4 mb-6">
                <div class="flex items-center gap-2">
                  <SvgIcon name="account_circle" />
                  <div class="flex items-center gap-1">
                    <span class="font-semibold">{{
                      data?.data?.total_followers?.length
                    }}</span>
                    <span class="text-muted-foreground">FOLLOWERS</span>
                  </div>
                </div>
                <div class="flex items-center gap-2">
                  <SvgIcon name="celebration" />
                  <div class="flex items-center gap-1">
                    <span class="font-semibold">{{
                      data?.data.total_events
                    }}</span>
                    <span class="text-muted-foreground">EVENTS</span>
                  </div>
                </div>
                <div class="flex items-center gap-2">
                  <SvgIcon name="genres" />
                  <div class="flex items-center gap-1">
                    <span class="font-semibold">{{
                      data?.data.total_requests
                    }}</span>
                    <span class="text-muted-foreground">REQUESTS</span>
                  </div>
                </div>
                <div class="flex items-center gap-2">
                  <SvgIcon name="genres" />
                  <div class="flex items-center gap-1">
                    <span class="font-semibold">{{
                      data?.data.total_fulfilled_requests
                    }}</span>
                    <span class="text-muted-foreground">FUFILLED</span>
                  </div>
                </div>
              </div>
              <div class="flex flex-col md:flex-row items-center gap-4">
                <Button
                  :variant="'secondary'"
                  class="w-full md:w-auto"
                  :size="'lg'"
                >
                  Follow
                </Button>
                <NuxtLink
                  v-if="data?.data.live_event"
                  :to="`/${route.params.host}/${data?.data?.live_event?.id}/make-a-request`"
                  class="w-full md:w-auto"
                >
                  <Button :size="'lg'" class="w-full">
                    Make {{ hasPendingRequest ? "another" : "a" }} request
                  </Button>
                </NuxtLink>

                <Button class="w-full md:w-auto" :size="'lg'" v-else>
                  Notify me when DJ goes live
                </Button>
              </div>
            </div>
          </div>
          <div class="mt-10 space-y-2 text-muted-foreground hidden md:block">
            <div>ABOUT ME</div>
            <div class="max-w-[550px]">
              {{ host.bio }}
            </div>
            <div
              class="inline-flex bg-white/10 items-center rounded-xl py-4 px-6 gap-4"
            >
              <SvgIcon name="badge" />
              <div>
                <div class="text-lg font-semibold text-foreground">
                  {{ data?.data.total_fulfilled_requests }} of
                  {{ data?.data.total_requests }}
                </div>
                <div class="text-muted-foreground">Request fufilled</div>
              </div>
            </div>
          </div>
        </div>

        <RequestQueueCard
          :event="data?.data.live_event"
          v-if="data?.data.live_event"
        />

        <div class="mt-4 space-y-4 text-muted-foreground md:hidden">
          <div>ABOUT ME</div>
          <div class="max-w-[550px]">
            {{ host.bio }}
          </div>
          <div
            class="inline-flex bg-white/10 items-center rounded-xl py-4 px-6 gap-4"
          >
            <SvgIcon name="badge" />
            <div>
              <div class="text-lg font-semibold text-foreground">
                {{ data?.data.total_fulfilled_requests }} of
                {{ data?.data.total_requests }}
              </div>
              <div class="text-muted-foreground">Request fufilled</div>
            </div>
          </div>
        </div>
      </div>
    </SharedLoadingArea>
  </div>
</template>

<script lang="ts" setup>
import Button from "~/components/ui/button.vue";
import type { ApiResponse } from "~/types";
import type { HostProfile } from "~/types/user";

const route = useRoute();
const { data, error, status } = useCustomFetch<ApiResponse<HostProfile>>(
  `/user/host/${route.params.host}`
);
const host = computed(() => data?.value?.data?.user);

const { authEmail } = useAuth();

const liveEventRequests = computed(
  () => data.value?.data?.live_event?.requests
);

const hasPendingRequest = computed(() => {
  return liveEventRequests.value?.some(
    (item) => item.audience.email === authEmail.value
  );
});

const {
  $config: {
    public: { APP_BASE_URL },
  },
} = useNuxtApp();

useSeoMeta({
  title: () => `${host.value?.stage_name}`,
  ogTitle: () =>
    `${data.value?.data?.live_event?.title ?? ""} | ${
      host.value?.stage_name ?? ""
    }`,
  ogDescription: () => "Make your requests and take spotlight of this event",
  ogImage: () =>
    `${
      host.value?.profile_picture ??
      "https://cdn.pixabay.com/photo/2018/05/10/11/34/concert-3387324_1280.jpg"
    }`,
  ogImageAlt: () => "Live Event",
  ogImageSecureUrl: () =>
    `${
      host.value?.profile_picture ??
      "https://cdn.pixabay.com/photo/2018/05/10/11/34/concert-3387324_1280.jpg"
    }`,
  twitterImage: () =>
    `${
      host.value?.profile_picture ??
      "https://cdn.pixabay.com/photo/2018/05/10/11/34/concert-3387324_1280.jpg"
    }`,
  twitterTitle: () =>
    `${data.value?.data?.live_event?.title ?? ""} | ${
      host.value?.stage_name ?? ""
    }`,
  ogType: "article",
  ogUrl: () => `${APP_BASE_URL}/${host.value?.slug ?? ""}`,
  ogSiteName: "SpinRequest",
});
</script>

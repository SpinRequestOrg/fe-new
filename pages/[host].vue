<template>
  <div class="container pt-6">
    <SharedBackButton to="/search" />
    <div
      class="flex flex-col sm:flex-row justify-between gap-x-2 gap-y-6 mt-10"
    >
      <div class="">
        <div class="grid lg:grid-cols-[auto_1fr] items-center gap-4">
          <Avatar
            class="size-[120px] md:size-[180px] xl:size-[200px] !rounded-3xl !text-4xl"
            initials="FG"
          />
          <div class="space-y-6">
            <div class="font-display text-2xl font-semibold">DJ Chicken</div>
            <div class="flex flex-wrap gap-4 items-center">
              <div class="flex items-center gap-2">
                <SvgIcon name="account_circle" />
                <div class="flex items-center gap-1">
                  <span class="font-semibold">234</span>
                  <span class="text-muted-foreground">FOLLOWERS</span>
                </div>
              </div>
              <div class="flex items-center gap-2">
                <SvgIcon name="celebration" />
                <div class="flex items-center gap-1">
                  <span class="font-semibold">23</span>
                  <span class="text-muted-foreground">EVENTS</span>
                </div>
              </div>
              <div class="flex items-center gap-2">
                <SvgIcon name="genres" />
                <div class="flex items-center gap-1">
                  <span class="font-semibold">142</span>
                  <span class="text-muted-foreground">REQUESTS</span>
                </div>
              </div>
              <div class="flex items-center gap-2">
                <SvgIcon name="genres" />
                <div class="flex items-center gap-1">
                  <span class="font-semibold">4</span>
                  <span class="text-muted-foreground">FUFILLED</span>
                </div>
              </div>
            </div>
            <div class="flex flex-col md:flex-row items-center gap-4">
              <Button :variant="'secondary'" class="w-full md:w-auto">
                Follow
              </Button>
              <Button class="w-full md:w-auto"> Make a request </Button>
            </div>
          </div>
        </div>
        <div class="mt-10 space-y-4 text-muted-foreground">
          <div>ABOUT ME</div>
          <div class="max-w-[550px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            con Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatu.
          </div>
          <div
            class="inline-flex bg-white/10 items-center rounded-xl py-4 px-6 gap-4"
          >
            <SvgIcon name="badge" />
            <div>
              <div class="text-lg font-semibold text-foreground">90 of 98</div>
              <div class="text-muted-foreground">Request fufilled</div>
            </div>
          </div>
        </div>
      </div>
      <div class="max-w-full min-w-[400px]"></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Button from "~/components/ui/button.vue";
</script>

<template>
  <div class="bg-background py-[50px]">
    <div class="container">
      <div
        class="flex flex-col md:flex-row md:flex-wrap justify-between gap-8 sm:gap-6 pb-[40px] border-b mb-[40px]"
      >
        <div class="space-y-4 mx-auto md:mx-0">
          <SvgIcon name="spin-request" />
          <div class="text-primary font-medium text-center md:text-left">
            Contact us
          </div>
        </div>
        <div
          class="flex items-center gap-x-6 [&_>_div]:size-[24px] mx-auto md:mx-0"
        >
          <div
            class="size-[24px] grid place-items-center hover:scale-105 transition-transform"
          >
            <NuxtLink
              to="https://www.facebook.com/spinrequest"
              external
              target="_blank"
            >
              <SvgIcon name="facebook" />
            </NuxtLink>
          </div>
          <div
            class="size-[24px] grid place-items-center hover:scale-105 transition-transform"
          >
            <NuxtLink
              to="https://www.twitter.com/spinrequest"
              external
              target="_blank"
            >
              <SvgIcon name="twitter" />
            </NuxtLink>
          </div>
          <div
            class="size-[24px] grid place-items-center hover:scale-105 transition-transform"
          >
            <NuxtLink
              to="https://www.instagram.com/spinrequest/"
              external
              target="_blank"
            >
              <SvgIcon name="instagram" />
            </NuxtLink>
          </div>
          <div
            class="size-[24px] grid place-items-center hover:scale-105 transition-transform"
          >
            <NuxtLink
              to="https://www.tiktok.com/@spinrequest"
              external
              target="_blank"
            >
              <SvgIcon name="tiktok" />
            </NuxtLink>
          </div>
        </div>
        <EmailSubscriptionForm />
      </div>

      <div
        class="flex flex-col sm:flex-row gap-4 text-center sm:text-left sm:justify-between sm:items-center text-muted-foreground"
      >
        <div>
          © {{ new Date().getFullYear() }} SpinRequest - All Rights Reserved
        </div>
        <div
          class="[&_>_a:hover]:underline flex items-center gap-x-1 justify-center"
        >
          <NuxtLink to="/privacy-policy">Privacy Policy</NuxtLink>
          <span>|</span>
          <NuxtLink to="/terms"> Terms of Use </NuxtLink>
          <span>|</span>
          <NuxtLink to="/community-guidelines"> Guidelines </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import EmailSubscriptionForm from "../forms/email-subscription-form.vue";
</script>

<template>
  <header class="flex items-center justify-between container">
    <NuxtLink class="flex items-center gap-x-px" :to="homeRoute">
      <SvgIcon class="scale-75" />
      <div class="text-lg font-semibold font-display hidden sm:block">
        SpinRequest
      </div>
    </NuxtLink>

    <nav class="flex items-center gap-x-2">
      <template v-if="isLoggedIn">
        <NuxtLink to="/audience" v-if="auth_user?.role === 'audience'">
          <UiTooltip message="Search host" :delay="50">
            <Button :size="'icon'" class="!size-[40px]" :variant="'ghost'">
              <Search class="size-5" />
            </Button>
          </UiTooltip>
        </NuxtLink>
        <ProfileMenu />
      </template>

      <template v-else>
        <NuxtLink to="/login"> <Button> LOGIN </Button> </NuxtLink>

        <NuxtLink to="/signup">
          <Button :variant="'secondary'"> SIGN UP </Button>
        </NuxtLink>
      </template>
    </nav>
  </header>
</template>

<script lang="ts" setup>
import Button from "./ui/button.vue";
import { Search } from "lucide-vue-next";

const { isLoggedIn, auth_user } = useAuth();
const homeRoute = computed(() => {
  if (!isLoggedIn.value) return "/";
  auth_user.value?.role === "audience" ? "/audience" : "/dashboard";
});
</script>

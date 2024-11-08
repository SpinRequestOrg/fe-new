<template>
  <div class="container pb-20">
    <div class="flex gap-x-2 items-center fixed top-24">
      <SharedBackButton to="/" />
      <div class="text-2xl font-medium font-display">My Profile</div>
    </div>
    <SharedLoadingArea :loading="status === 'pending'" :error="error">
      <div
        :class="
          cn(
            'grid gap-6 mt-20',
            isHost
              ? 'md:grid-cols-[1fr_348px]'
              : 'md:grid-cols-[1fr_250px] lg:grid-cols-[1fr_348px]'
          )
        "
      >
        <div :class="cn('space-y-4')">
          <div
            class="border bg-white/5 p-6 rounded-2xl grid lg:grid-cols-[150px_1fr_126px] xl:grid-cols-[200px_1fr_126px] gap-6"
          >
            <div class="font-semibold">Details</div>
            <div class="space-y-6">
              <div class="flex items-center gap-x-2">
                <Avatar
                  :image="profile_picture"
                  :initials="initials"
                  class="!rounded-xl !size-[64px]"
                >
                </Avatar>
                <div class="space-y-2">
                  <div class="font-semibold">{{ data?.data?.email }}</div>
                  <div class="text-foreground/80">
                    {{ data?.data?.stage_name ?? "Add a username" }}
                  </div>
                </div>
              </div>
              <div class="lg:hidden">
                <UploadPhoto @uploaded="profile_picture = $event" />
              </div>

              <UiTextarea
                v-if="isHost"
                label="Bio"
                placeholder="Tell your audience about yourself"
                class="min-h-[80px]"
                v-model="profile.user.bio"
              />
              <UiInputField
                v-else
                label="Username"
                placeholder="Enter your username"
                v-model="audience_profile.user.user_name"
              />
            </div>
            <div class="hidden lg:block">
              <UploadPhoto @uploaded="profile_picture = $event" />
            </div>
          </div>

          <div
            class="border bg-white/5 p-6 rounded-2xl grid grid-cols-[56px_1fr_40px] lg:grid-cols-[56px_1fr_auto_40px] gap-x-4 items-center"
            v-if="!isHost"
          >
            <div
              class="aspect-square border bg-white/10 rounded-full grid place-items-center"
            >
              <SvgIcon name="wallet" />
            </div>
            <div class="space-y-px">
              <div class="font-medium">Spin credits</div>
              <div class="text-muted-foreground max-w-[350px]">
                Your refunds from failed request are kept here so that you can
                use it to request again
              </div>
              <div class="text-xl lg:hidden font-semibold">
                ₦{{ formatMoney(565.5) }}
              </div>
            </div>
            <div class="text-3xl font-semibold hidden lg:block">
              ₦{{ formatMoney(565.5) }}
            </div>
            <SvgIcon name="right-caret" />
          </div>

          <div
            class="border bg-white/5 p-6 rounded-2xl grid lg:grid-cols-[150px_1fr_126px] xl:grid-cols-[200px_1fr_126px] gap-4"
            v-if="isHost"
          >
            <div class="font-semibold">Stats</div>
            <div class="flex flex-wrap gap-4 items-center">
              <div class="flex items-center gap-2">
                <SvgIcon name="account_circle" />
                <div class="flex items-center gap-1">
                  <span class="font-semibold">{{ 0 }}</span>
                  <span class="text-muted-foreground">FOLLOWERS</span>
                </div>
              </div>
              <div class="flex items-center gap-2">
                <SvgIcon name="celebration" />
                <div class="flex items-center gap-1">
                  <span class="font-semibold">{{ 12 }}</span>
                  <span class="text-muted-foreground">EVENTS</span>
                </div>
              </div>
              <div class="flex items-center gap-2">
                <SvgIcon name="genres" />
                <div class="flex items-center gap-1">
                  <span class="font-semibold">{{ 4 }}</span>
                  <span class="text-muted-foreground">REQUESTS</span>
                </div>
              </div>
              <div class="flex items-center gap-2">
                <SvgIcon name="genres" />
                <div class="flex items-center gap-1">
                  <span class="font-semibold">{{ 2 }}</span>
                  <span class="text-muted-foreground">FUFILLED</span>
                </div>
              </div>
            </div>
          </div>

          <div
            class="border bg-white/5 p-6 rounded-2xl grid lg:grid-cols-[150px_1fr_126px] xl:grid-cols-[200px_1fr_126px] gap-4"
          >
            <div class="font-semibold">Bio Data</div>
            <div class="space-y-4">
              <div
                class="grid grid-cols-[repeat(auto-fit,_minmax(266px,_1fr))] gap-4"
              >
                <UiInputField
                  v-if="isHost"
                  type="date"
                  label="Date of birth"
                  v-model="profile.user.dob"
                />
                <UiInputField
                  v-else
                  type="date"
                  label="Date of birth"
                  v-model="audience_profile.user.dob"
                />
                <UiSelectField
                  v-if="isHost"
                  :options="['male', 'female']"
                  placeholder="Select your gender"
                  label="Gender"
                  v-model="profile.user.gender"
                />
                <UiSelectField
                  v-else
                  :options="['male', 'female']"
                  placeholder="Select your gender"
                  label="Gender"
                  v-model="audience_profile.user.gender"
                />
              </div>
              <UiSelectField
                v-if="isHost"
                :options="['Nigeria']"
                placeholder="Select your country of residence"
                label="Country"
                v-model="profile.user.country"
              />
              <UiSelectField
                v-else
                :options="['Nigeria']"
                placeholder="Select your country of residence"
                label="Country"
                v-model="audience_profile.user.country"
              />
            </div>
          </div>

          <div
            class="border bg-white/5 p-6 rounded-2xl grid lg:grid-cols-[150px_1fr_126px] xl:grid-cols-[200px_1fr_126px] gap-6"
          >
            <div class="font-semibold">Password</div>
            <UiInputField
              placeholder="Your password"
              label="Password"
              type="password"
            />
            <PasswordChange />
          </div>
          <div
            class="border bg-white/5 p-6 rounded-2xl grid lg:grid-cols-[150px_1fr_126px] xl:grid-cols-[200px_1fr_126px] gap-4"
            v-if="isHost"
          >
            <div class="space-y-2">
              <div class="font-semibold">Bank Account</div>
              <div class="text-muted-foreground">
                This is where we will transfer your withdrawals to, make sure
                its a valid account
              </div>
            </div>
            <div class="space-y-4">
              <UiSelectField
                placeholder="Select your bank"
                label="Bank"
                :options="['GT Bank', 'Access PLC']"
                v-model="profile.bank_account.bank_name"
              />
              <UiInputField
                placeholder="Enter your bank account"
                label="Account Number"
                v-model="profile.bank_account.account_number"
              />
              <UiInputField
                label="Account Name"
                disabled
                v-model="profile.bank_account.account_name"
              />
            </div>
          </div>
          <div class="flex justify-end">
            <UiButton :size="'lg'" @click="updateProfile" :loading="updating">
              Save Changes
            </UiButton>
          </div>
        </div>

        <div v-if="isHost">
          <div
            class="w-full aspect-square rounded-3xl grid place-items-center border bg-white/5"
            v-if="status === 'pending'"
          >
            <Loader class="size-5 animate-spin" />
          </div>
          <QrCard
            :name="hostName"
            :link="hostLink"
            :id="data?.data?.id"
            v-else-if="data?.data?.id"
          />
        </div>
      </div>
    </SharedLoadingArea>
  </div>
</template>

<script lang="ts" setup>
import PasswordChange from "~/components/modals/password-change.vue";
import UploadPhoto from "~/components/modals/upload-photo.vue";
import QrCard from "~/components/cards/qr-card.vue";
import { Loader } from "lucide-vue-next";
import type { ApiError, ApiResponse } from "~/types";
import type { AudienceProfileUpdate, AuthUser } from "~/types/auth";
import type { HostProfileUpdate } from "~/types/auth";
import SvgIcon from "~/components/svg-icon.vue";
import { UsernameSchema } from "~/schemas/user-schema";
const {
  $config: {
    public: { APP_BASE_URL },
  },
  $repo: { auth },
} = useNuxtApp();

const { auth_user, auth_token, saveAuthUser } = useAuth();

const isHost = computed(() => auth_user.value?.role === "host");

const { data, status, error, refresh } =
  useCustomFetch<ApiResponse<AuthUser>>("/user?stat=true");

const name = computed(
  () => data.value?.data?.stage_name ?? data.value?.data?.email
);
const initials = computed(() => getInitials(name.value ?? ""));
const profile_picture = ref(data.value?.data?.profile_picture ?? "");
const hostName = computed(() => data.value?.data?.stage_name ?? "");
const hostLink = computed(
  () => `${APP_BASE_URL}/${data.value?.data?.slug ?? ""}`
);

const profile = useState<HostProfileUpdate>("HOST-PROFILE", () => {
  return {
    user: {
      name: data.value?.data?.stage_name ?? "",
      bio: data.value?.data?.bio ?? "",
      dob: data.value?.data?.dob ?? "",
      gender: data.value?.data?.gender ?? "",
      country: data.value?.data?.country ?? "",
    },
    bank_account: {
      bank_name: data.value?.data?.bank_account?.bank_name ?? "",
      account_name: data.value?.data?.bank_account?.account_name ?? "",
      account_number: data?.value?.data?.bank_account?.account_number ?? "",
      country: data?.value?.data?.bank_account?.country ?? "",
    },
  };
});

const audience_profile = useState<AudienceProfileUpdate>(
  "AUDEINCE-PROFILE",
  () => {
    return {
      user: {
        user_name: data.value?.data?.user_name ?? "",
        dob: data.value?.data?.dob ?? "",
        gender: data.value?.data?.gender ?? "",
        country: data.value?.data?.country ?? "",
      },
    };
  }
);

watchEffect(() => {
  const user = data.value?.data;
  if (user) {
    if (auth_user.value && auth_token.value) {
      const updated_user: AuthUser = {
        ...auth_user.value,
        bio: user.bio,
        country: user.country,
        dob: user.dob,
        gender: user.gender,
        profession: user.profession,
        stage_name: user.stage_name,
        user_name: user.user_name,
        profile_picture: user.profile_picture,
      };
      saveAuthUser(auth_token.value, updated_user);
    }
    profile_picture.value = user?.profile_picture ?? "";
    profile.value.user.bio = user?.bio ?? "";
    profile.value.user.country = user.country ?? "";
    audience_profile.value.user.country = user.country ?? "";
    profile.value.user.dob = user.dob ?? "";
    audience_profile.value.user.dob = user.dob ?? "";
    profile.value.user.gender = user.gender ?? "";
    audience_profile.value.user.gender = user.gender ?? "";
    // audience_profile.value.user.name = user.stage_name ?? "";
    profile.value.user.name = user.stage_name ?? "";
    profile.value.bank_account.account_name =
      user.bank_account?.account_name ?? "Rilwan";
    profile.value.bank_account.account_number =
      user.bank_account?.account_number ?? "";
    profile.value.bank_account.bank_name = user.bank_account?.bank_name ?? "";
    profile.value.bank_account.country =
      user.bank_account?.country ?? "Nigeria";
  }
});

const updating = ref(false);

const customBankVerification = () => {
  const fields = [
    {
      field: "bank_name",
      message: "Select your bank name to continue",
    },
    {
      field: "account_number",
      message: "Enter your account_number to continue",
    },
    {
      field: "account_name",
      message: "Enter your account name to continue",
    },
  ] as const;

  for (const item of fields) {
    if (!profile.value.bank_account[item.field]) {
      showToast({ title: item.message, variant: "warning" });
      return false;
    }
  }
  return true;
};

const updateProfile = async () => {
  try {
    if (!isHost.value) {
      const valid = await UsernameSchema.isValid(
        audience_profile.value.user.user_name
      );
      if (!valid) {
        showToast({ title: "Username not valid", variant: "warning" });
        return;
      }
    }

    const verified = isHost.value ? customBankVerification() : true;
    if (!verified) return;
    updating.value = true;
    const response = await auth.updateProfile(
      isHost.value ? profile.value : audience_profile.value
    );
    updating.value = false;
    if (response.data) {
      showToast({
        title: "Updated",
        description: response.message,
      });
      refresh();
    }
  } catch (e) {
    updating.value = false;
    const error = e as ApiError;
    showToast({
      title: "Failed",
      description: error.data?.message ?? "Failed to update profile",
      variant: "warning",
    });
  }
};

useSeoMeta({
  title: "My Profile",
});
</script>

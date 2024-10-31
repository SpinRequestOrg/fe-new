import type { EventRequest, LiveEvent } from "./event";

export interface Host {
  id: number;
  email: string;
  profile_picture: string;
  slug: string;
  profession: string;
  stage_name: string;
  is_live: boolean;
  bio: string;
  dob: string;
  gender: string;
  country: string;
  email_verified: boolean;
  role: "host";
}

export interface HostProfile {
  total_events: number;
  total_requests: number;
  total_fulfilled_requests: number;
  total_followers: [];
  user: {
    id: number;
    email: string;
    profile_picture: string;
    bio: string;
    dob: string;
    gender: string;
    country: string;
    email_verified: boolean;
    role: "host";
    slug: string;
    profession: string;
    stage_name: string;
    is_live: boolean;
    bank_account: null;
  };
  live_event?: LiveEvent;
}

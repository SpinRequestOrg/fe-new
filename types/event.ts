export interface EventRequest {
  id: number;
  host: {
    id: number;
    name: string;
    email: string;
    type: string;
    stage_name: string;
    profession: string;
    slug: string;
    qrcode: string;
    profile_picture: string;
    bio: string;
    gender: string;
    dob: string;
    country: string;
    created_at: string;
    updated_at: string;
  };
  name: string;
  audience: {
    id: number;
    name: string;
    email: string;
    type: string;
    stage_name: string;
    profession: string;
    slug: string;
    qrcode: string;
    profile_picture: string;
    bio: string;
    gender: string;
    dob: string;
    country: string;
    created_at: string;
    updated_at: string;
  };
  type: "song" | "hype";
  status:
    | "new"
    | "payment-pending"
    | "now-playing"
    | "declined"
    | "completed"
    | "ignored";
  hype_message: string;
  artist: null;
  song: null;
  amount: string;
  created_at: string;
}

export interface ActiveEventRequest extends Omit<EventRequest, "status"> {
  status: "new" | "now-playing";
}

export interface InActiveEventRequest extends Omit<EventRequest, "status"> {
  status: "payment-pending" | "declined" | "completed" | "ignored";
}

export interface LiveEvent {
  id: number;
  title: string;
  address: string;
  country: string;
  state: string;
  status: "live" | "new" | "ended";
  start_date: string;
  end_date: null;
  earnings: number;
  types: {
    id: number;
    name: "song" | "hype";
    price: number;
  }[];
  requests: EventRequest[];
}

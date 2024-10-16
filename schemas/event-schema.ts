import type yup from "yup";
import { object, string } from "yup";

export const EventSchema = object({
  title: string()
    .required("Event title required")
    .min(5, "Title should be at least 5 characters long"),
  address: string().required("Event address required"),
  country: string().required("Event country required"),
  state: string().required("Event state required"),
});

export interface HostEvent extends yup.InferType<typeof EventSchema> {}

export interface EventPayload extends HostEvent {
  types: { name: "hype" | "song"; price: number }[];
}

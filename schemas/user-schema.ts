import type yup from "yup";
import { object, string } from "yup";

export const AudienceSchema = object({
  name: string().optional().min(3, "Name should be at least 3 characters long"),
  email: string().required("Email is required").email("Enter a valid email"),
  password: string()
    .required("Enter your password")
    .min(8, "Password should be at least 8 characters long")
    .matches(/[0-9]/, "Password should contain at least one number")
    .matches(/[a-z]/, "Password should contain at least one lowercase letter")
    .matches(/[A-Z]/, "Password should contain at least one uppercase letter")
    .matches(
      /[!@#$%^&*(),.?":{}|<>]/,
      "Password should contain at least a special character"
    ),
});

export const HostSchema = object({
  name: string().optional().min(3, "Name should be at least 3 characters long"),
  email: string().required("Email is required").email("Enter a valid email"),
  stage_name: string()
    .required("Stage name is required")
    .min(2, "Stage name should be at least 2 characters long"),
  profession: string().required("Profession is required"),
  password: string()
    .required("Enter your password")
    .min(8, "Password should be at least 8 characters long")
    .matches(/[0-9]/, "Password should contain at least one number")
    .matches(/[a-z]/, "Password should contain at least one lowercase letter")
    .matches(/[A-Z]/, "Password should contain at least one uppercase letter")
    .matches(
      /[!@#$%^&*(),.?":{}|<>]/,
      "Password should contain at least one special character"
    ),
});

export type Audience = yup.InferType<typeof AudienceSchema>;
export type Host = yup.InferType<typeof HostSchema>;

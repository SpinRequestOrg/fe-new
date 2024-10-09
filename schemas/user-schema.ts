import yup, { object, string } from "yup";

export const AudienceSchema = object({
  name: string().optional().min(3, "Name should be at least 3 characters long"),
  email: string().required("Email is required").email("Enter a valid email"),
  password: string()
    .required("Enter your password")
    .min(5, "Password should be at least 5 characters long")
    .matches(/[a-z]/, "Password should contain at least a lowercase letter")
    .matches(/[A-Z]/, "Password should contain at least a uppercase letter")
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
    .min(5, "Password should be at least 5 characters long")
    .matches(/[a-z]/, "Password should contain at least one lowercase letter")
    .matches(/[A-Z]/, "Password should contain at least one uppercase letter")
    .matches(
      /[!@#$%^&*(),.?":{}|<>]/,
      "Password should contain at least one special character"
    ),
});

export type Host = yup.InferType<typeof HostSchema>;

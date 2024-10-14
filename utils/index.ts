import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getInitials = (...name: string[]) => {
  const [firstname, lastname] = name;
  return `${firstname ? firstname.at(0) : ""}${
    lastname ? lastname.at(0) : firstname ? firstname.at(1) : ""
  }`;
};

export const decodeBase64 = (data?: string | null, fallback = "") => {
  try {
    if (!data) return fallback;
    return atob(data);
  } catch {
    return fallback ?? null;
  }
};

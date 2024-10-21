import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getInitials = (...name: string[]) => {
  const [firstname, lastname] = name?.length > 1 ? name : name[0].split(" ");
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

export const formatMoney = (_number: number | string) => {
  const number = Number(_number);
  return number.toLocaleString("en-US", {
    minimumFractionDigits: 2,
  });
};

export const timeDifference = (
  startDate: Date | string,
  endDate: Date | string
) => {
  const start = new Date(startDate).getTime();
  const end = new Date(endDate).getTime();
  let diffInSeconds = Math.floor((end - start) / 1000);

  const hours = Math.floor(diffInSeconds / 3600);
  diffInSeconds %= 3600;

  const minutes = Math.floor(diffInSeconds / 60);
  const seconds = diffInSeconds % 60;

  return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
    2,
    "0"
  )}:${String(seconds).padStart(2, "0")}`;
};

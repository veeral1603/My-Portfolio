import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatTime = (ms: number) => {
  const totalSeconds = Math.floor(ms / 1000);
  const minutes =
    Math.floor(totalSeconds / 60) > 0 ? Math.floor(totalSeconds / 60) : 0;
  const seconds = totalSeconds % 60 > 0 ? totalSeconds % 60 : 0;
  return `${minutes}:${seconds.toString().padStart(2, "0")}`;
};

import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatTime = (ms: number) => {
  const totalSeconds = Math.floor(ms / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutesNum = Math.floor((totalSeconds % 3600) / 60);

  const minutes =
    days > 0
      ? `${days}:${hours.toString().padStart(2, "0")}:${minutesNum
          .toString()
          .padStart(2, "0")}`
      : hours > 0
      ? `${hours}:${minutesNum.toString().padStart(2, "0")}`
      : `${minutesNum > 0 ? minutesNum : 0}`;
  const seconds = totalSeconds % 60 > 0 ? totalSeconds % 60 : 0;
  return `${minutes}:${seconds.toString().padStart(2, "0")}`;
};

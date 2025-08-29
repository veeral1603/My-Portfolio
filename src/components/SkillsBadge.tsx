import React from "react";
import SkillsIcon from "./SkillsIcon";
import { skillsBadgeType } from "@/types";

export default function SkillsBadge({
  children,
  icon,
  size = "base",
}: skillsBadgeType) {
  return (
    <div
      className={`px-3 py-1 border hover:-translate-y-0.5  border-zinc-900 hover:bg-white/5 rounded-lg transition duration-300 cursor-pointer flex items-center justify-center gap-2  ${
        size === "sm" ? "font-normal text-xs" : "font-medium text-sm"
      } `}
    >
      {size === "base" && (
        <div className="p-1.5 rounded-md bg-white/10 size-6">
          <SkillsIcon icon={icon} />
        </div>
      )}
      {children}
    </div>
  );
}

import React from "react";
import SkillsIcon from "./SkillsIcon";
import { IconsType } from "@/types";

export default function SkillsBadge({
  children,
  icon,
}: {
  children: React.ReactNode;
  icon: IconsType;
}) {
  return (
    <div className="px-3 py-1 border border-zinc-900 hover:bg-white/5 rounded-lg transition duration-300 cursor-pointer flex items-center justify-center gap-2 text-sm font-medium">
      <div className="p-1.5 rounded-md bg-white/10 size-7">
        <SkillsIcon icon={icon} />
      </div>
      {children}
    </div>
  );
}

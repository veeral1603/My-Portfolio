import React from "react";

export default function StatusCard({
  isDiscordActive,
}: {
  isDiscordActive: boolean | null;
}) {
  return (
    <div className="flex items-center gap-2 md:gap-4 flex-wrap">
      <div className="flex items-center gap-2 px-2 md:px-3 py-1.5 md:py-2 text-xs rounded-full md:text-sm text-secondaryText border border-zinc-900 bg-neutral-900">
        <div className="size-[18px] flex items-center justify-center bg-green-700/50 rounded-full animate-pulse">
          <div className="size-[10px] bg-green-300/70 rounded-full" />
        </div>
        <p>Open To Work</p>
      </div>

      {isDiscordActive && (
        <div className="flex items-center gap-2 px-2 md:px-3 py-1.5 md:py-2 text-xs rounded-full md:text-sm text-secondaryText border border-zinc-900 bg-neutral-900">
          <div className="size-[18px] flex items-center justify-center bg-green-700/50 rounded-full animate-pulse">
            <div className="size-[10px] bg-green-300/70 rounded-full" />
          </div>
          <p>Currently Online</p>
        </div>
      )}

      {!isDiscordActive && (
        <div className="flex items-center gap-2 px-2 md:px-3 py-1.5 md:py-2 text-xs rounded-full md:text-sm text-secondaryText border border-zinc-900 bg-neutral-900">
          <div className="size-[18px] flex items-center justify-center bg-red-700/40 rounded-full animate-pulse">
            <div className="size-[10px] bg-red-300/70 rounded-full" />
          </div>
          <p>Currently Offline</p>
        </div>
      )}
    </div>
  );
}

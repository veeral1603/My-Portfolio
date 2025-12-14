"use client";
import { formatTime } from "@/lib/utils";
import { IconBrandSpotifyFilled } from "@tabler/icons-react";
import Image from "next/image";
import React from "react";
import FadeIn from "./FadeIn";
import { SpotifySong } from "@/types";

export default function SpotifyCard({
  spotify,
}: {
  spotify: SpotifySong | null;
}) {
  const [progress, setProgress] = React.useState(0);
  React.useEffect(() => {
    if (!spotify?.timestamps) return;

    const updateProgress = () => {
      const now = Date.now();
      const { start, end } = spotify.timestamps;

      const percent = ((now - start) / (end - start)) * 100;
      setProgress(Math.min(Math.max(percent, 0), 100));
    };

    updateProgress();
    const interval = setInterval(updateProgress, 1000);

    return () => clearInterval(interval);
  }, [spotify]);
  return (
    spotify && (
      <FadeIn>
        <div className="w-full sm:w-120">
          <div className="text-xs  mb-1 flex items-center gap-2">
            <p>Listening To Spotify </p>
            <IconBrandSpotifyFilled size={18} />
          </div>
          <div className="p-2 border border-zinc-900  text-xs rounded-[10px] flex items-center gap-4 mt-2 hover:border-zinc-800 transition duration-300">
            <div className="overflow-hidden rounded-[6px]  size-25   aspect-square relative">
              <Image
                src={spotify?.album_art_url}
                fill
                alt="Album Art"
                className="object-cover"
              />
            </div>

            <div className="flex flex-col flex-1 ">
              <p className="text-sm">{spotify?.song}</p>
              <p className="text-secondaryText">
                {spotify?.artist
                  .split(";")
                  .map((a) => a.trim())
                  .join(", ")}{" "}
              </p>

              <div className="h-1 bg-neutral-700 rounded overflow-hidden mt-2 mb-1">
                <div
                  className="h-full bg-white transition-all"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <div className="flex justify-between text-xs text-neutral-400">
                <span>{formatTime(Date.now() - spotify.timestamps.start)}</span>
                <span>
                  {formatTime(
                    spotify.timestamps.end - spotify.timestamps.start
                  )}
                </span>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    )
  );
}

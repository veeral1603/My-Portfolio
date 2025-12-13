"use client";
import { formatTime } from "@/lib/utils";
import { SpotifySong } from "@/types";
import { IconBrandSpotifyFilled } from "@tabler/icons-react";
import Image from "next/image";
import React, { useCallback } from "react";
import FadeIn from "./FadeIn";

const DISCORD_ID = "720931125052047431";

export default function SpotifyCard() {
  const [spotify, setSpotify] = React.useState<SpotifySong | null>(null);
  const [progress, setProgress] = React.useState(0);

  const wsRef = React.useRef<WebSocket | null>(null);
  const heartbeatRef = React.useRef<NodeJS.Timeout | null>(null);
  const reconnectTimeoutRef = React.useRef<NodeJS.Timeout | null>(null);
  const isManuallyClosed = React.useRef(false);

  const connect = useCallback(() => {
    isManuallyClosed.current = false;
    const ws = new WebSocket("wss://api.lanyard.rest/socket");
    wsRef.current = ws;

    ws.onopen = () => {
      ws.send(
        JSON.stringify({
          op: 2,
          d: {
            subscribe_to_ids: [DISCORD_ID],
          },
        })
      );
    };

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);

      if (data.t === "INIT_STATE") {
        setSpotify(data.d[DISCORD_ID].spotify);
      } else if (data.t === "PRESENCE_UPDATE") {
        setSpotify(data.d.spotify);
      }

      if (data.op === 1 && data.d?.heartbeat_interval) {
        if (heartbeatRef.current) return;

        heartbeatRef.current = setInterval(() => {
          ws.send(JSON.stringify({ op: 3 }));
        }, data.d.heartbeat_interval);
      }
    };

    ws.onclose = () => {
      if (isManuallyClosed.current) return;
      reconnectTimeoutRef.current = setTimeout(connect, 3000);
    };

    ws.onerror = () => {
      ws.close();
    };
  }, []);

  React.useEffect(() => {
    connect();
    return () => {
      isManuallyClosed.current = true;

      if (wsRef.current?.readyState === WebSocket.OPEN) {
        wsRef.current.close();
      }

      if (heartbeatRef.current) clearInterval(heartbeatRef.current);
    };
  }, [connect]);

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

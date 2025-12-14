"use client";
import React from "react";
import SpotifyCard from "./SpotifyCard";
import StatusCard from "./StatusCard";
import { SpotifySong } from "@/types";

const DISCORD_ID = "720931125052047431";
export default function Activity() {
  const [spotify, setSpotify] = React.useState<SpotifySong | null>(null);
  const [isDiscordActive, setIsDiscordActive] = React.useState<boolean | null>(
    null
  );

  const wsRef = React.useRef<WebSocket | null>(null);
  const heartbeatRef = React.useRef<NodeJS.Timeout | null>(null);
  const reconnectTimeoutRef = React.useRef<NodeJS.Timeout | null>(null);
  const isManuallyClosed = React.useRef(false);

  const connect = React.useCallback(() => {
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
        setIsDiscordActive(
          data.d[DISCORD_ID].active_on_discord_mobile ||
            data.d[DISCORD_ID].active_on_discord_desktop ||
            data.d[DISCORD_ID].active_on_discord_web ||
            false
        );
      } else if (data.t === "PRESENCE_UPDATE") {
        setSpotify(data.d.spotify);
        setIsDiscordActive(
          data.d.active_on_discord_mobile ||
            data.d.active_on_discord_desktop ||
            data.d.active_on_discord_web ||
            false
        );
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

  return (
    <div className="flex flex-col gap-6 md:gap-8">
      <StatusCard isDiscordActive={isDiscordActive} />
      <SpotifyCard spotify={spotify} />
    </div>
  );
}

import { VsCodeActivity } from "@/types";
import React from "react";
import FadeIn from "./FadeIn";
import Image from "next/image";
import { Code } from "lucide-react";
import { formatTime } from "@/lib/utils";

export default function VsCodeCard({
  vsCode,
}: {
  vsCode: VsCodeActivity | null;
}) {
  const [elapsed, setElapsed] = React.useState(0);

  React.useEffect(() => {
    if (!vsCode || !vsCode.timestamps) return;
    const update = () => {
      setElapsed(Date.now() - vsCode.timestamps.start);
    };
    const interval = setInterval(update, 1000);

    return () => clearInterval(interval);
  }, [vsCode]);

  return (
    vsCode && (
      <FadeIn>
        <div className="w-full sm:w-100">
          <div className="p-2 border border-zinc-900  text-xs rounded-[10px] flex items-center gap-4 mt-2 hover:border-zinc-800 transition duration-300">
            <div className="rounded-[6px] size-25   aspect-square relative">
              <Image
                src={`https://cdn.discordapp.com/app-assets/${vsCode.application_id}/${vsCode.assets.large_image}.png`}
                fill
                alt="File Extension Icon"
                className="object-cover rounded-[6px]"
                title={vsCode.assets.large_text || "VSCode Image"}
              />

              <div
                className="w-7 h-7 rounded-full flex items-center justify-center  -bottom-2 -right-2 absolute  border-2 border-background overflow-hidden"
                title={"Visual Studio Code"}
              >
                <Image
                  src={`https://cdn.discordapp.com/app-assets/${vsCode.application_id}/${vsCode.assets.small_image}.png`}
                  alt="VSCode Icon"
                  width={24}
                  height={24}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
            <div className="flex flex-col flex-1 ">
              <p className="text-sm">{vsCode.name}</p>
              <p className="text-secondaryText">{vsCode.details}</p>
              <p className="text-secondaryText">{vsCode.state}</p>
              <div className="flex items-center gap-1 mt-1 text-xs text-green-600">
                <Code size={14} strokeWidth={3} />
                <p>{formatTime(elapsed)}</p>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    )
  );
}

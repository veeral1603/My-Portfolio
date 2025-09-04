import React from "react";

export default function SectionHeadingPill({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="text-sm font-medium animate-shine bg-linear-[-60deg,transparent,transparent,transparent,rgba(255,255,255,0.3),transparent,transparent,transparent] [background-size:200%_200%] text-center px-3 py-1 w-max rounded-sm  border-2 border-zinc-900  flex items-center gap-2">
      {children}
    </div>
  );
}

import React from "react";

export default function SectionHeading({
  children,
  subText,
}: {
  children: React.ReactNode;
  subText?: string;
}) {
  return (
    <div>
      <h3 className="text-3xl font-semibold">{children}</h3>
      {subText && <p className="text-sm text-secondaryText mt-3">{subText}</p>}
    </div>
  );
}

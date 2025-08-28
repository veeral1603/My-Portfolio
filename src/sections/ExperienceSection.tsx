import SectionDivider from "@/components/SectionDivider";
import SectionHeading from "@/components/SectionHeading";
import SectionHeadingPill from "@/components/SectionHeadingPill";
import { BriefcaseBusiness, Calendar } from "lucide-react";
import React from "react";

export default function ExperienceSection() {
  return (
    <>
      <section className="w-full scroll-m-27.5" id="experience">
        <div className="container space-y-6 md:space-y-8">
          <SectionHeadingPill>
            <BriefcaseBusiness size={18} className="text-amber-500" />
            <p>Experience</p>
          </SectionHeadingPill>

          <SectionHeading subText="Applying my skills in real-world projects to deliver scalable and impactful solutions.">
            Professional Experience
          </SectionHeading>

          <div className="flex flex-col gap-4">
            <div className="p-4 border border-zinc-900 rounded-md cursor-pointer hover:-translate-y-0.5 transition duration-300">
              <div className="flex items-center justify-between gap-4">
                <div className="max-w-sm">
                  <h4 className="text-lg font-semibold">Freelance Developer</h4>
                  <p className="text-sm text-secondaryText">
                    Worked as a freelance developer, delivering responsive,
                    user-friendly, and efficient web solutions for various
                    clients.
                  </p>
                </div>
                <div className="px-3 py-1 rounded-full bg-white/20 text-xs font-medium flex items-center gap-2">
                  <Calendar size={14} />
                  <p>2024 - Present</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />
    </>
  );
}

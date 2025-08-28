import SectionDivider from "@/components/SectionDivider";
import SectionHeading from "@/components/SectionHeading";
import SectionHeadingPill from "@/components/SectionHeadingPill";
import { FolderGit2 } from "lucide-react";
import React from "react";

export default function ProjectsSection() {
  return (
    <>
      <section className="w-full scroll-m-27.5" id="projects">
        <div className="container space-y-6 md:space-y-8">
          <SectionHeadingPill>
            <FolderGit2 size={18} className="text-pink-400" />
            <p>Projects</p>
          </SectionHeadingPill>

          <SectionHeading subText="Projects that reflect my skills, problem-solving mindset, and passion for building impactful digital experiences.">
            Things I&apos;ve Built
          </SectionHeading>

          <div className="flex flex-col gap-4"></div>
        </div>
      </section>

      <SectionDivider />
    </>
  );
}

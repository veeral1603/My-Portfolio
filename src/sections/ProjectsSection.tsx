import SectionHeading from "@/components/SectionHeading";
import SectionHeadingPill from "@/components/SectionHeadingPill";
import { Code } from "lucide-react";
import React from "react";

export default function ProjectsSection() {
  return (
    <section className="w-full scroll-m-27.5" id="projects">
      <div className="container space-y-6 md:space-y-8">
        <SectionHeadingPill>
          <Code size={18} color="green" />
          <p>Projects</p>
        </SectionHeadingPill>

        <SectionHeading subText="Projects that reflect my skills, problem-solving mindset, and passion for building impactful digital experiences.">
          Things I&apos;ve Built
        </SectionHeading>
      </div>
    </section>
  );
}

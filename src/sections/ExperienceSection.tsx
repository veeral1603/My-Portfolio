import SectionDivider from "@/components/SectionDivider";
import SectionHeading from "@/components/SectionHeading";
import SectionHeadingPill from "@/components/SectionHeadingPill";
import ExperienceCard from "@/components/ExperienceCard";
import { BriefcaseBusiness } from "lucide-react";
import React from "react";
import { ExperienceType } from "@/types";

const experience: ExperienceType[] = [
  {
    title: "Freelance Developer",
    duration: "2024 - Present",
    description:
      "Worked as a freelance developer, delivering responsive, user-friendly, and efficient web solutions for various clients.",
    technologies: ["Wordpress", "React", "Next.js", "Node.js", "Tailwind CSS"],
    company: "Self-Employed",
  },
];

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
            {experience.map((exp) => (
              <ExperienceCard key={exp.title} experience={exp} />
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />
    </>
  );
}

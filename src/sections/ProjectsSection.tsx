import ProjectCard from "@/components/ProjectCard";
import SectionDivider from "@/components/SectionDivider";
import SectionHeading from "@/components/SectionHeading";
import SectionHeadingPill from "@/components/SectionHeadingPill";
import { ProjectType } from "@/types";
import { FolderGit2 } from "lucide-react";
import React from "react";

const projects: ProjectType[] = [
  {
    image: "/coursa.png",
    title: "Coursa",
    description:
      "Coursa.me is a productivity-focused web application that transforms YouTube playlists into structured, distraction-free courses. It helps learners organize tutorials, track progress, and stay consistent with features like streaks, timestamped notes, and built-in focus timers. Designed for self-learners who struggle with half-watched playlists, Coursa.me makes online learning more effective and engaging.",
    status: "In Progress",
    technologies: ["Next.js", "Prisma", "MongoDB", "Tailwind"],
    liveLink: "https://coursa.me",
  },
  {
    image: "/zaplink.png",
    title: "Zaplink",
    description:
      "Zaplink is a powerful URL shortening and tracking platform that simplifies link management for individuals and businesses. It allows users to convert long, complex URLs into branded short links, generate smart QR codes, and track detailed analytics for every click. With built-in encryption, custom link options, and an all-in-one dashboard, Zaplink empowers users to share links securely while making smarter marketing and growth decisions.",
    status: "Completed",
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind"],
    liveLink: "https://zplnk.in",
  },
  {
    image: "/aniquest.png",
    title: "AniQuest",
    description:
      "AniQuest is a React-based web application designed to help users explore and discover anime. It provides a clean and modern interface where users can browse trending titles, search for specific anime, and view detailed information such as synopsis, release date, episode duration, and trailers.",
    status: "Completed",
    technologies: ["React", "Jikan Api"],
    liveLink: "https://aniquest-eta.vercel.app",
    repoLink: "https://github.com/veeral1603/Aniquest",
  },
];

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

          <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-1 gap-4">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />
    </>
  );
}

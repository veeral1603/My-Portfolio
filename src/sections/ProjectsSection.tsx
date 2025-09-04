"use client";
import ProjectCard from "@/components/ProjectCard";
import SectionDivider from "@/components/SectionDivider";
import SectionHeading from "@/components/SectionHeading";
import SectionHeadingPill from "@/components/SectionHeadingPill";
import { ProjectType } from "@/types";
import { FolderGit2 } from "lucide-react";
import React from "react";

const projects: ProjectType[] = [
  {
    image: "/projects/coursa.png",
    title: "Coursa",
    description:
      "Coursa.me is a productivity-focused web application that transforms YouTube playlists into structured, distraction-free courses. It helps learners organize tutorials, track progress, and stay consistent with features like streaks, timestamped notes, and built-in focus timers. Designed for self-learners who struggle with half-watched playlists, Coursa.me makes online learning more effective and engaging.",
    status: "In Progress",
    technologies: ["Next.js", "Prisma", "MongoDB", "Tailwind"],
    liveLink: "https://coursa.me",
  },
  {
    image: "/projects/zaplink.png",
    title: "Zaplink",
    description:
      "Zaplink is a powerful URL shortening and tracking platform that simplifies link management for individuals and businesses. It allows users to convert long, complex URLs into branded short links, generate smart QR codes, and track detailed analytics for every click. With built-in encryption, custom link options, and an all-in-one dashboard, Zaplink empowers users to share links securely while making smarter marketing and growth decisions.",
    status: "Completed",
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind"],
    liveLink: "https://zplnk.in",
  },
  {
    image: "/projects/aniquest.png",
    title: "AniQuest",
    description:
      "AniQuest is a React-based web application designed to help users explore and discover anime. It provides a clean and modern interface where users can browse trending titles, search for specific anime, and view detailed information such as synopsis, release date, episode duration, and trailers.",
    status: "Completed",
    technologies: ["React", "Jikan Api"],
    liveLink: "https://aniquest-eta.vercel.app",
    repoLink: "https://github.com/veeral1603/Aniquest",
  },
  {
    image: "/projects/essence.png",
    title: "Essence Fashion",
    description:
      "Essence is a modern e-commerce frontend application built with React.js that showcases a fully functional shopping experience using a dummy JSON API. The project demonstrates essential e-commerce features such as product listings, category filtering, search, and cart management, all within a clean and responsive user interface. Designed to replicate real-world online shopping platforms, Essence focuses on performance, usability, and scalability.",
    status: "Completed",
    technologies: ["React", "Tailwind", "Dummy JSON"],
    liveLink: "https://essence-phi.vercel.app",
    repoLink: "https://github.com/veeral1603/Essence",
  },
  {
    image: "/projects/foodify.png",
    title: "Foodify",
    description:
      "Foodify is a web app built with HTML, CSS, and JavaScript that helps users discover and organize recipes with ease. It allows users to search from millions of recipes, filter based on meal type, dietary needs, or cuisine, and bookmark their favorite dishes for quick access. The app also features a clean, responsive design with light/dark mode support for a smooth user experience.",
    status: "Completed",
    technologies: ["HTML", "CSS", "JavaScript"],
    liveLink: "https://foodifyyy.netlify.app",
    repoLink: "https://github.com/veeral1603/foodify",
  },
  {
    image: "/projects/weathersome.png",
    title: "Weathersome",
    description:
      "WeatherSome is a responsive web app built with HTML, CSS, and JavaScript that provides real-time weather updates and forecasts using the OpenWeather API. It displays detailed insights like temperature, air quality, humidity, visibility, and sunrise/sunset times with a modern, minimal design.",
    status: "Completed",
    technologies: ["HTML", "CSS", "JavaScript", "OpenWeather API"],
    liveLink: "https://weathersome.netlify.app",
    repoLink: "https://github.com/veeral1603/Weather-",
  },
];

export default function ProjectsSection() {
  const [showAll, setShowAll] = React.useState(false);
  const visibleProjects = showAll ? projects : projects.slice(0, 2);
  return (
    <>
      <section className="w-full scroll-m-27.5" id="projects">
        <div className="container space-y-6 md:space-y-8">
          <SectionHeadingPill>
            <FolderGit2 size={18} className="text-pink-400" />
            <p>Projects</p>
          </SectionHeadingPill>

          <SectionHeading subText="Projects that reflect my skills, problem-solving mindset, and passion for building impactful digital experiences.">
            My Creations
          </SectionHeading>

          <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-1 gap-3">
            {visibleProjects.map((project, idx) => (
              <ProjectCard key={project.title} project={project} idx={idx} />
            ))}

            <div>
              <button
                onClick={() => setShowAll(!showAll)}
                className="mt-2 text-sm text-zinc-400 hover:text-zinc-200 cursor-pointer transition px-3 py-2 border border-zinc-900 hover:border-zinc-800 rounded-md flex items-center gap-2"
              >
                {showAll ? "Show Less" : "Show More"}
              </button>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />
    </>
  );
}

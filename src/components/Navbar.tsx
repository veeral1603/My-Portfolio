"use client";
import React from "react";
import scrollToSection from "@/helpers/scrollToSection";
import { MenuIcon } from "lucide-react";

type navLinkType = {
  label: string;
  id: string;
};

const navLinks: navLinkType[] = [
  { label: "Intro", id: "intro" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Experience", id: "experience" },
  { label: "Contact", id: "contact" },
];

export default function Navbar() {
  return (
    <nav className="fixed top-5  -translate-x-1/2 left-1/2  z-50 border border-zinc-900 rounded-md w-[95%] max-w-[728px] backdrop-blur-sm bg-background/60">
      <div className=" px-5 py-2 flex items-center justify-between">
        <div className="rounded-full size-8 overflow-hidden bg-stone-200 aspect-square flex items-center justify-center text-stone-800 font-medium text-lg">
          <p>V</p>
        </div>

        <div className="hidden md:block">
          <ul className="flex items-center text-sm text-secondaryText">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className="px-4 py-1 cursor-pointer hover:text-foreground transition duration-300"
                onClick={() => scrollToSection(link.id)}
              >
                {link.label}
              </li>
            ))}
          </ul>
        </div>

        <button className="md:hidden cursor-pointer p-1 hover:bg-white/10  rounded-lg transition duration-200">
          <MenuIcon />
        </button>
      </div>
    </nav>
  );
}

import SectionDivider from "@/components/SectionDivider";
import SectionHeadingPill from "@/components/SectionHeadingPill";
import { Handshake } from "lucide-react";
import React from "react";

export default function IntroSection() {
  return (
    <>
      <section id="intro" className="w-full">
        <div className="container w-full">
          <div className="space-y-6 md:space-y-8">
            <SectionHeadingPill>
              <Handshake size={18} className="text-purple-400" />
              <p>Introduction</p>
            </SectionHeadingPill>

            <div className="text-5xl font-bold tracking-tight">
              <h1>
                Hi, I&apos;m Veeral{" "}
                <span className="font-medium text-3xl">aka Veer</span>
              </h1>
            </div>

            <div className="text-zinc-400 text-xl md:text-2xl leading-6 md:leading-8">
              <h2>
                A{" "}
                <span className="text-white font-medium">
                  Full-Stack Developer
                </span>{" "}
                from{" "}
                <span className="text-white font-medium">Delhi, India</span>,
                passionate about building modern, scalable, and impactful
                digital experiences.
              </h2>
            </div>

            <div className="text-zinc-400 text-sm md:text-base ">
              <p>
                I specialize in creating web apps using{" "}
                <span className="text-white font-medium">
                  Next.js, React, Tailwind CSS, Express.js, Node.js, and MongoDB
                </span>
                .I&apos;m Always eager to learn, grow, and take on new
                challenges.
              </p>
              <p>
                If my skills can be of value to you,{" "}
                <span className="text-white font-medium">
                  let&apos;s connect
                </span>{" "}
                and create something impactful together. 🚀
              </p>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />
    </>
  );
}

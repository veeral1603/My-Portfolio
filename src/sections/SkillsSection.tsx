import SectionDivider from "@/components/SectionDivider";
import SectionHeading from "@/components/SectionHeading";
import SectionHeadingPill from "@/components/SectionHeadingPill";
import SkillsBadge from "@/components/SkillsBadge";
import { Code } from "lucide-react";
import React from "react";

export default function SkillsSection() {
  return (
    <>
      <section className="w-full scroll-m-27.5" id="skills">
        <div className="container space-y-6 md:space-y-8">
          <SectionHeadingPill>
            <Code size={18} className="text-blue-400" />
            <p>Skills</p>
          </SectionHeadingPill>

          <SectionHeading subText="From crafting responsive UIs to building scalable backends, here are the technologies I work with.">
            My Toolkit
          </SectionHeading>

          <div className=" flex  flex-col gap-4">
            <div>
              <h4 className="text-xl font-semibold">Languages</h4>

              <div className="mt-4 flex items-center flex-wrap gap-3">
                <SkillsBadge icon="js">JavaScript</SkillsBadge>
                <SkillsBadge icon="ts">TypeScript</SkillsBadge>
                <SkillsBadge icon="html">HTML</SkillsBadge>
                <SkillsBadge icon="css">CSS</SkillsBadge>
                <SkillsBadge icon="cpp">C++</SkillsBadge>
                <SkillsBadge icon="python">Python</SkillsBadge>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-semibold">Frameworks</h4>

              <div className="mt-4 flex items-center flex-wrap gap-3">
                <SkillsBadge icon="react">React</SkillsBadge>
                <SkillsBadge icon="nextjs">Next.js</SkillsBadge>
                <SkillsBadge icon="nodejs">Node.js</SkillsBadge>
                <SkillsBadge icon="expressjs">Express</SkillsBadge>
                <SkillsBadge icon="tailwind">Tailwind CSS</SkillsBadge>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-semibold">Database</h4>

              <div className="mt-4 flex items-center flex-wrap gap-3">
                <SkillsBadge icon="mongodb">MongoDB</SkillsBadge>
                <SkillsBadge icon="postgre">PostgreSQL</SkillsBadge>
                <SkillsBadge icon="supabase">Supabase</SkillsBadge>
                <SkillsBadge icon="firebase">Firebase</SkillsBadge>
                <SkillsBadge icon="prisma">Prisma</SkillsBadge>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-semibold">Tools</h4>

              <div className="mt-4 flex items-center flex-wrap gap-3">
                <SkillsBadge icon="git">Git</SkillsBadge>
                <SkillsBadge icon="github">GitHub</SkillsBadge>
                <SkillsBadge icon="figma">Figma</SkillsBadge>
                <SkillsBadge icon="vercel">Vercel</SkillsBadge>
                <SkillsBadge icon="npm">npm</SkillsBadge>
                <SkillsBadge icon="bun">Bun</SkillsBadge>
                <SkillsBadge icon="vscode">VS Code</SkillsBadge>
                <SkillsBadge icon="wordpress">WordPress</SkillsBadge>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />
    </>
  );
}

import SectionDivider from "@/components/SectionDivider";
import SectionHeading from "@/components/SectionHeading";
import SectionHeadingPill from "@/components/SectionHeadingPill";
import { MessageCircle } from "lucide-react";
import React from "react";

export default function ContactSection() {
  return (
    <>
      <section className="w-full scroll-m-27.5" id="skills">
        <div className="container space-y-6 md:space-y-8">
          <SectionHeadingPill>
            <MessageCircle size={18} className="text-green-400" />
            <p>Contact</p>
          </SectionHeadingPill>

          <SectionHeading subText="Feel free to reach out for collaborations or just a chat!">
            Get in Touch
          </SectionHeading>

          <div></div>
        </div>
      </section>
      <SectionDivider />
    </>
  );
}

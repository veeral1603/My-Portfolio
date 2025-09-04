import SectionHeading from "@/components/SectionHeading";
import SectionHeadingPill from "@/components/SectionHeadingPill";
import { MessageCircle } from "lucide-react";
import React from "react";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
  IconMail,
} from "@tabler/icons-react";
import Link from "next/link";

export default function ContactSection() {
  return (
    <>
      <section className="w-full scroll-m-27.5 pb-10  " id="contact">
        <div className="container space-y-6 md:space-y-8">
          <SectionHeadingPill>
            <MessageCircle size={18} className="text-green-400" />
            <p>Contact</p>
          </SectionHeadingPill>

          <SectionHeading subText="Feel free to reach out for collaborations or just a chat!">
            Get in Touch
          </SectionHeading>

          <div className="border border-zinc-900 rounded-md flex items-center justify-center flex-col space-y-3 p-4">
            <div className="flex items-center gap-3">
              <Link
                href="https://x.com/veeerzzz"
                target="_blank"
                className="p-2 flex items-center bg-stone-100/5 rounded-full hover:bg-stone-100/10 transition duration-300"
              >
                <IconBrandX className="w-5 h-5" />
              </Link>
              <Link
                href="https"
                target="_blank"
                className="p-2 flex items-center bg-stone-100/5 rounded-full hover:bg-stone-100/10 transition duration-300"
              >
                <IconBrandGithub className="w-5 h-5" />
              </Link>
              <Link
                href="http://x.com/veeerzzz"
                target="_blank"
                className="p-2 flex items-center bg-stone-100/5 rounded-full hover:bg-stone-100/10 transition duration-300"
              >
                <IconBrandLinkedin className="w-5 h-5" />
              </Link>
            </div>

            <Link href={"mailto:veeralnarang@gmail.com"} target="_blank">
              <div className="flex items-center mt-2 rounded-md overflow-hidden border border-zinc-900 hover:border-zinc-800 transition duration-300 cursor-pointer">
                <div className="flex items-center justify-center bg-white/10 p-2">
                  <IconMail className="w-5 h-5" />
                </div>
                <div className="flex-1 text-sm p-2">veeralnarang@gmail.com</div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

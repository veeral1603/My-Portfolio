import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import FadeIn from "@/components/FadeIn";
import { FloatingDockWrapper } from "@/components/FloatingDockWrapper";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Veeral Narang | Full-Stack Developer",
  description:
    "Hi, I'm Veeral — a Full-Stack Developer from Delhi, India. I build modern, scalable, and impactful web applications using Next.js, React, Tailwind CSS, Express.js, Node.js, and MongoDB. Always eager to learn, grow, and take on new challenges. Let's connect and create something impactful together! 🚀",
  keywords: [
    "Veeral Narang",
    "Veer",
    "Full-Stack Developer",
    "Web Developer India",
    "Next.js Developer",
    "React Developer",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Tailwind CSS",
    "Portfolio",
  ],
  openGraph: {
    title: "Veeral Narang | Full-Stack Developer",
    description:
      "Building modern, scalable, and impactful web apps with Next.js, React, Tailwind CSS, Node.js, and MongoDB.",
    url: "https://yourdomain.com",
    siteName: "Veeral Narang Portfolio",

    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Veeral Narang | Full-Stack Developer",
    description:
      "Full-Stack Developer from Delhi, India | Next.js, React, Node.js, MongoDB | Let's create something impactful 🚀",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${geist.variable} antialiased relative `}>
        <Navbar />
        <div className="flex flex-col min-h-screen ">
          <FadeIn>
            <main className="main-container  flex-1 ">{children}</main>
          </FadeIn>
        </div>
        <FloatingDockWrapper />
      </body>
    </html>
  );
}

"use client";
import React from "react";
import { navLinks } from "./Navbar";
import { ChevronRight } from "lucide-react";
import scrollToSection from "@/helpers/scrollToSection";
import { AnimatePresence, motion } from "framer-motion";

export default function MobileNav({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="p-2 border-zinc-900 rounded-md  border bg-background absolute z-100 mt-3 right-0 w-68 md:hidden "
            initial={{ opacity: 0, scale: 0.95, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.95, x: 20 }}
            transition={{ duration: 0.2 }}
          >
            <ul className="flex flex-col text-base text-secondaryText gap-3">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className="px-4 py-3 cursor-pointer hover:text-white  transition duration-300 hover:bg-white/10 rounded-sm flex items-center justify-between"
                  onClick={() => {
                    scrollToSection(link.id);
                    setIsOpen(false);
                  }}
                >
                  <span>{link.label}</span>
                  <ChevronRight size={20} />
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

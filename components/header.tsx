"use client";

import { useActiveSectionContext } from "@/context/active-section";
import { links } from "@/lib/data";
import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

export default function Header() {
  const { activeSection, setActiveSection } = useActiveSectionContext();
  return (
    <header className="z-[999] relative">
      <motion.div
        className="fixed left-1/2 flex justify-center items-center w-full -translate-x-1/2 h-16
          rounded-none border-white border-opacity-40
        bg-white bg-opacity-80 shadow-lg shadow-black/[0.3] backdrop-blur-[0.5rem]
          sm:top-6 sm:rounded-full sm:w-[36rem] sm:text-sm sm:h-14"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div>

      <nav className="fixed top-[0.3rem] left-1/2 -translate-x-1/2 w-full sm:h-[initial] sm:top-6 sm:w-[36rem] sm:px-3 sm:py-2">
        <ul
          className="text-[0.8em] flex flex-row gap-x-3 flex-wrap justify-center items-center center w-full font-medium text-gray-500
            sm:justify-evenly sm:gap-3 sm:w-[inital] sm:flex-nowrap sm:text-base "
        >
          {links.map((link, index) => (
            <motion.li
              className="relative h-3/4 flex items-center justify-center"
              key={index}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                href={link.hash}
                className={clsx(
                  "flex w-full items-center justify-center px-2 py-1 sm:px-3 sm:py-2 hover:text-gray-950 transition",
                  { "text-gray-950": activeSection === link.name }
                )}
                onClick={() => setActiveSection(link.name)}
              >
                {link.name}

                <AnimatePresence>
                  {link.name === activeSection && (
                    <motion.span
                      className="rounded-full bg-gray-100 absolute inset-0 -z-10"
                      layoutId="activeSection"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    ></motion.span>
                  )}
                </AnimatePresence>
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

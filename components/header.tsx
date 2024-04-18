"use client";

import { links } from "@/lib/data";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Header() {
  return (
    <header className="z-[999] relative">
      <motion.div
        className="fixed left-1/2 flex justify-center items-center w-full -translate-x-1/2
          rounded-none border-white border-opacity-40
        bg-white bg-opacity-80 shadow-lg shadow-black/[0.3] backdrop-blur-[0.5rem]
          sm:top-6 sm:rounded-full sm:w-[36rem] sm:text-sm"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      >
        <nav className="flex flex-wrap justify-around w-full sm:px-3 sm:py-1">
          <ul className="flex flex-row flex-wrap justify-evenly center w-full gap-3 font-medium text-gray-500 sm:w-[inital] ">
            {links.map((link, index) => (
              <motion.li
                key={index}
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
              >
                <Link
                  className="flex w-full items-center justify-center p-3 hover:text-gray-950 transition"
                  href={link.hash}
                >
                  {link.name}
                </Link>
              </motion.li>
            ))}
          </ul>
        </nav>
      </motion.div>
    </header>
  );
}

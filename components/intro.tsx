"use client";

import avatarImg from "@/public/images/avatar/fabio-choi.png";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRightCircle, BsBoxArrowInUpRight, BsGithub, BsLinkedin } from "react-icons/bs";
import Section from "./section";

export default function Intro() {
  return (
    <Section>
      <div className="py-2 flex items-center justify-center">
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "tween", duration: 0.2 }}
        >
          <Image
            className="rounded-full h-[5rem] w-[5rem] border-[0.35rem] border-white object-cover shadow-xl sm:h-[7rem] sm:w-[7rem]"
            src={avatarImg}
            alt="Fabio Protrait"
            priority={true}
            quality="95"
          />
          <motion.span
            className="absolute bottom-0 right-0 text-3xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              delay: 0.1,
              duration: 0.7,
              stiffness: 125,
            }}
          >
            👋
          </motion.span>
        </motion.div>
      </div>

      <div className=" mb-4 mt-4 sm:mb-10">
        <motion.h1
          className="text-lg sm:text-3xl"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="font-bold">Hey there! I'm Fabio</span> I am a{" "}
          <span className="font-bold">Software Developer</span> and I build things for the web.
          Sculpting elegant solutions and crafting delightful user experiences. Let's join forces
          and engineer digital marvels together!
        </motion.h1>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="flex flex-col items-center justify-center p-2 gap-1 font-normal text-xs sm:font-medium sm:text-lg sm:gap-4 sm:flex-row"
      >
        <Link
          href="#contact"
          className="
            group
            outline-none focus:scale-110 hover:scale-110 hover:bg-gray-150 active:scale-105 transition
            flex items-center justify-center px-7 py-3 rounded-full space-x-3 bg-gray-900 text-white"
        >
          <span>Contact me here </span>{" "}
          <BsArrowRightCircle className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>
        <a
          href="/CV.pdf"
          target="_blank"
          className="
            group border border-black/30
            outline-none focus:scale-110 hover:scale-110 hover:bg-gray-150 active:scale-105 transition
            flex items-center justify-center px-7 py-3 rounded-full space-x-3 bg-white"
        >
          <span>View Resume</span>{" "}
          <BsBoxArrowInUpRight className="opacity-60 group-hover:-translate-y-1 transition" />
        </a>
        <div className="flex text-sm gap-2 sm:gap-4 sm:text-lg">
          <a
            href="https://www.linkedin.com/in/fchoi1/"
            target="_blank"
            className="p-4 rounded-full text-gray-700 bg-white border border-black/30 cursor-pointer
          outline-none focus:scale-[1,15] hover:scale-[1.15] hover:bg-gray-150 active:scale-105 hover:text-gray-950 transition"
          >
            <BsLinkedin />
          </a>
          <a
            href="https://github.com/fchoi1"
            target="_blank"
            className="p-4 rounded-full text-gray-700 bg-white border border-black/30 cursor-pointer
          outline-none focus:scale-[1.15] hover:scale-[1.15] hover:bg-gray-150 active:scale-105 hover:text-gray-950 transition"
          >
            <BsGithub />
          </a>
        </div>
      </motion.div>
    </Section>
  );
}

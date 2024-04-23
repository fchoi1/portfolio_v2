"use client";

import { useActiveSectionContext } from "@/context/active-section";
import { useSectionInView } from "@/lib/hooks";
import avatarImg from "@/public/images/avatar/fabio-choi.png";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRightCircle, BsBoxArrowInUpRight, BsGithub, BsLinkedin } from "react-icons/bs";

export default function Intro() {
  const { ref } = useSectionInView("Home");
  const { setActiveSection, setLastClickTime } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="px-2 mt-10 mb-28 max-w-[20rem] text-center scroll-mt-60
      sm:px-10 sm:mb-0 sm:max-w-[30rem] md:max-w-[40rem] lg:max-w-[50rem] box-content"
    >
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
          <span className="font-bold">Hey there!</span> My name is{" "}
          <span className="font-bold">Fabio</span> and I am a{" "}
          <span className="font-bold">Software Developer</span> and I build things for the web.
          Sculpting elegant solutions and crafting delightful user experiences. Let's join forces
          and engineer digital marvels together!
        </motion.h1>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="flex flex-col items-center justify-center p-2 gap-1 font-normal text-sm sm:font-medium md:text-lg sm:gap-4 sm:flex-row"
      >
        <Link
          href="#contact"
          onClick={() => {
            setActiveSection("Contact");
            setLastClickTime(Date.now());
          }}
          className="
            group
            outline-none pseudoEffects transition hover:bg-gray-950
            flex items-center justify-center px-5 sm:px-3 md:px-7 py-2 md:py-3 rounded-full space-x-3 bg-gray-900 text-white dark:bg-gray-950"
        >
          <span>Contact me here</span>{" "}
          <BsArrowRightCircle className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>
        <a
          href="/Fabio_Choi_SW.pdf"
          target="_blank"
          className="
            group border border-black/30
            outline-none pseudoEffects transition 
            flex items-center justify-center px-5 sm:px-3 md:px-7 py-2 md:py-3 rounded-full space-x-3 bg-white dark:bg-white/10 dark:hover:text-white"
        >
          <span>View Resume</span>{" "}
          <BsBoxArrowInUpRight className="opacity-60 group-hover:-translate-y-1 transition" />
        </a>
        <div className="flex text-sm gap-2 md:gap-4 md:text-lg">
          <a
            href="https://www.linkedin.com/in/fchoi1/"
            target="_blank"
            className="p-3 md:p-4 rounded-full text-gray-700 bg-white border border-black/30 cursor-pointer
          outline-none focus:scale-[1,15] hover:scale-[1.15] hover:bg-gray-150 active:scale-105 hover:text-gray-950 transition dark:bg-white/10 dark:text-white/60 dark:hover:text-white"
          >
            <BsLinkedin />
          </a>
          <a
            href="https://github.com/fchoi1"
            target="_blank"
            className="p-3 md:p-4 rounded-full text-gray-700 bg-white border border-black/30 cursor-pointer
          outline-none focus:scale-[1.15] hover:scale-[1.15] hover:bg-gray-150 active:scale-105 hover:text-gray-950 transition dark:bg-white/10 dark:text-white/60 dark:hover:text-white"
          >
            <BsGithub />
          </a>
        </div>
      </motion.div>
    </section>
  );
}

"use client";

import { skillsData } from "@/lib/data";

import { motion } from "framer-motion";
import Section from "./section";

const fadeInAnimationVariants = {
  initial: { opacity: 0, y: 100 },
  animate: (index: number) => ({ opacity: 1, y: 0, transition: { delay: 0.05 * index } }),
};

export default function Skills() {
  return (
    <Section title="My skills" id="Skills">
      <ul className="flex flex-wrap gap-2 justify-center items-center text-lg text-gray-800">
        {skillsData.map(({ skill, Icon }, index) => (
          <motion.li
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
            key={index}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
            whileTap={{ scale: 0.9 }}
            className="flex items-center gap-2 bg-white border-black/10 border p-2 rounded-xl  hover:bg-gray-100"
          >
            <span>{skill}</span> <Icon className="hidden sm:block" />
          </motion.li>
        ))}
      </ul>
    </Section>
  );
}

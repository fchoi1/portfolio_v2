"use client";

import { skillsData } from "@/lib/data";

import { motion } from "framer-motion";
import React from "react";
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
            className="flex items-center gap-2 bg-white border-black/10 border p-2 rounded-xl hover:scale-105"
          >
            {skill} <Icon />
          </motion.li>
        ))}
      </ul>
    </Section>
  );
}

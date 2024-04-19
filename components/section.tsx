"use client";

import { useActiveSectionContext } from "@/context/active-section";
import { links } from "@/lib/data";
import { motion } from "framer-motion";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

type SectionProps = {
  children: React.ReactNode;
  title: string;
  id: (typeof links)[number]["name"];
};

export default function Section({ children, id, title }: SectionProps) {
  const { ref, inView } = useInView({ threshold: 0.75 });
  const { setActiveSection } = useActiveSectionContext();
  useEffect(() => {
    if (inView) {
      setActiveSection(id);
    }
  }, [inView, setActiveSection]);

  return (
    <motion.section
      id={id}
      ref={ref}
      className="px-2 mt-10 mb-28 max-w-[20rem] text-center scroll-mt-28 
        sm:mb-40 sm:px-10 sm:max-w-[30rem] md:max-w-[40rem] lg:max-w-[50rem] box-content"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      {title ? (
        <div className="leading-8">
          <h2 className="text-3xl font-semibold capitalize mb-8">{title}</h2>
        </div>
      ) : null}
      {children}
    </motion.section>
  );
}

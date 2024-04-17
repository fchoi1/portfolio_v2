"use client";

import { motion } from "framer-motion";
import React from "react";

type SectionProps = {
  children: React.ReactNode;
  addBottom?: boolean;
  title?: string;
};

export default function Section({ children, addBottom, title }: SectionProps) {
  return (
    <motion.section
      className={`px-2 mt-10 mb-28 max-w-[20rem] text-center sm:px-10 
      ${addBottom ? "sm:mb-40" : "sm:mb-0"} 
       sm:mb-0 sm:max-w-[50rem] box-content`}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      {title ? (
        <div className="leading-8">
          <h2 className="text-3xl font-bold capitalize mb-8">{title}</h2>
        </div>
      ) : null}
      {children}
    </motion.section>
  );
}

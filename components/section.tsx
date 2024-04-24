"use client";

import { useSectionInView } from "@/lib/hooks";
import type { SectionName } from "@/lib/types";
import clsx from "clsx";
import { motion } from "framer-motion";
import React from "react";

type SectionProps = {
  children?: React.ReactNode;
  title: string;
  id: SectionName;
  threshold?: number;
  wide?: boolean;
};

export default function Section({ children, id, title, threshold, wide }: SectionProps) {
  const { ref } = useSectionInView(id, threshold);

  return (
    <motion.section
      id={id.toLowerCase()}
      ref={ref}
      className={clsx(
        "flex flex-col items-center justify-center scroll-mt-28 px-2 mt-10 mb-32 max-w-[20rem] text-center sm:mb-40 sm:px-10 sm:max-w-[30rem] md:max-w-[40rem] box-content",
        { "lg:max-w-[min(80%,100rem)] lg:w-full": wide },
        { "lg:max-w-[50rem]": !wide }
      )}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <div className="leading-8">
        <h2 className="text-3xl font-semibold capitalize mb-8">{title}</h2>
      </div>
      {children}
    </motion.section>
  );
}

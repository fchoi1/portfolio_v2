"use client";

import { useTheme } from "@/context/theme-context";
import { useMousePosition } from "@/lib/hooks";
import { motion } from "framer-motion";
import React from "react";

export default function Background() {
  const { x, y } = useMousePosition();
  const { theme } = useTheme();
  return (
    <motion.div
      className="w-screen h-screen fixed -z-[100]"
      style={{
        backgroundImage: `radial-gradient( circle closest-side at ${x}px ${y}px in hsl shorter hue,
            ${theme === "light" ? "#d4d4d4" : "#374151"},
            ${theme === "light" ? "#f9fafb" : "#111827"} 10rem)`,
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    ></motion.div>
  );
}

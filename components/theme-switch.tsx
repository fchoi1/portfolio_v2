"use client";

import { useTheme } from "@/context/theme-context";
import { BsMoonFill, BsSun } from "react-icons/bs";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();
  return (
    <button
      className="fixed bottom-5 right-5 w-10 h-10 rounded-full
    bg-white bg-opacity-80 backdrop-blur-sm border border-black border-opacity-40 shadow-xl
      flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all
      sm:w-12 sm:h-12 dark:bg-gray-950 dark:border-white"
      onClick={toggleTheme}
    >
      {theme === "light" ? <BsSun /> : <BsMoonFill />}
    </button>
  );
}

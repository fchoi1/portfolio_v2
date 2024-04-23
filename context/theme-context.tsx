"use client";

import type { Theme } from "@/lib/types";
import React, { createContext, useContext, useEffect, useState } from "react";

type ThemeProviderProps = {
  children: React.ReactNode;
};

type ThemeContextType = {
  theme: Theme;
  setTheme: React.Dispatch<React.SetStateAction<Theme>>;
  toggleTheme: () => void;
};

export const themeContext = createContext<ThemeContextType | null>(null);
const { Provider } = themeContext;

export default function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(() => {
    const localTheme = window.localStorage.getItem("theme") as Theme | null;
    return (
      localTheme || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
    );
  });

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    window.localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  return <Provider value={{ theme, setTheme, toggleTheme }}>{children}</Provider>;
}

export const useTheme = () => {
  const context = useContext(themeContext);
  if (context === null) {
    throw new Error("useTheme must be within ThemeProvider");
  }
  return context;
};

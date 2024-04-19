"use client";

import { links } from "@/lib/data";
import React, { createContext, useContext, useState } from "react";

type SectionName = (typeof links)[number]["name"];
type ActiveSectionProviderProps = {
  children: React.ReactNode;
};

type ActiveSectionContextType = {
  activeSection: SectionName;
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
};

export const activeSectionContext = createContext<ActiveSectionContextType | null>(null);
const { Provider } = activeSectionContext;

export default function ActiveSectionProvider({ children }: ActiveSectionProviderProps) {
  const [activeSection, setActiveSection] = useState<SectionName>("Home");
  return <Provider value={{ activeSection, setActiveSection }}>{children}</Provider>;
}

export const useActiveSectionContext = () => {
  const context = useContext(activeSectionContext);
  if (context === null) {
    throw new Error("useActiveSectionContext must be within ActiveSectionProvider");
  }
  return context;
};

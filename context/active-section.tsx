"use client";

import type { SectionName } from "@/lib/types";
import React, { createContext, useContext, useState } from "react";

type ActiveSectionProviderProps = {
  children: React.ReactNode;
};

type ActiveSectionContextType = {
  activeSection: SectionName;
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
  lastClickTime: number;
  setLastClickTime: React.Dispatch<React.SetStateAction<number>>;
};

export const activeSectionContext = createContext<ActiveSectionContextType | null>(null);
const { Provider } = activeSectionContext;

export default function ActiveSectionProvider({ children }: ActiveSectionProviderProps) {
  const [activeSection, setActiveSection] = useState<SectionName>("Home");
  const [lastClickTime, setLastClickTime] = useState(0); // Disable observer temporarily

  return (
    <Provider value={{ activeSection, setActiveSection, lastClickTime, setLastClickTime }}>
      {children}
    </Provider>
  );
}

export const useActiveSectionContext = () => {
  const context = useContext(activeSectionContext);
  if (context === null) {
    throw new Error("useActiveSectionContext must be within ActiveSectionProvider");
  }
  return context;
};


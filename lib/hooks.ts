import { useActiveSectionContext } from "@/context/active-section";
import type { MousePosition, SectionName } from "@/lib/types";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

export function useSectionInView(id: SectionName, threshold = 0.75) {
  const { ref, inView } = useInView({ threshold });
  const { setActiveSection, lastClickTime } = useActiveSectionContext();
  useEffect(() => {
    if (inView && Date.now() - lastClickTime > 1000) setActiveSection(id);
  }, [id, inView, setActiveSection, lastClickTime]);

  return { ref };
}

export function useMousePosition() {
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });

  const updateMousePostion = (e: MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    window.addEventListener("mousemove", updateMousePostion);
    return () => {
      window.removeEventListener("mousemove", updateMousePostion);
    };
  }, []);

  return mousePosition;
}
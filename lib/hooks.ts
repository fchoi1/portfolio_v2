import { useActiveSectionContext } from "@/context/active-section";
import type { SectionName } from "@/lib/types";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export function useSectionInView(id: SectionName, threshold = 0.75) {
  const { ref, inView } = useInView({ threshold });
  const { setActiveSection, lastClickTime } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - lastClickTime > 1000) setActiveSection(id);
  }, [id, inView, setActiveSection, lastClickTime]);

  return { ref };
}

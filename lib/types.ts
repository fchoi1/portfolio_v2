import { links, experiencesData} from "@/lib/data";

export type SectionName = (typeof links)[number]["name"];
export type ExperienceItem = (typeof experiencesData)[number];

export type Theme = "light" | "dark";

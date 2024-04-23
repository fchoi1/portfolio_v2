import { links } from "@/lib/data";

export type SectionName = (typeof links)[number]["name"];

export type Theme = "light" | "dark";

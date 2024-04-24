import { useTheme } from "@/context/theme-context";
import type { ExperienceItem } from "@/lib/types";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import { useInView } from "react-intersection-observer";
import { VerticalTimelineElement } from "react-vertical-timeline-component";

export default function ExperienceItem({
  title,
  company,
  location,
  description,
  descriptionShort,
  date,
  type,
}: ExperienceItem) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const icon = type === "job" ? <CgWorkAlt /> : <LuGraduationCap />;
  const { theme } = useTheme();

  return (
    <div ref={ref} className="vertical-timeline-element">
      <VerticalTimelineElement
        visible={inView}
        contentStyle={{
          background: theme === "light" ? "#f3f4f6" : "rgba(255,255,255,0.05)",
          boxShadow: "none",
          border:
            theme === "light" ? "1px solid rgba(0,0,0,0.05)" : "1px solid rgba(255,255,255,0.5)",
          textAlign: "left",
          padding: "1.3rem 1.3rem",
        }}
        contentArrowStyle={{ borderRight: "0.4rem solid #9ca3af" }}
        icon={icon}
        iconStyle={{
          background: theme === "light" ? "white" : "#383838",
          boxShadow: theme === "light" ? "0 0 0 2px darkgray" : "0 0 0 2px WhiteSmoke",
          fontSize: "1.5rem",
        }}
        date={date}
      >
        <h3 className="font-semibold captitalize text-base sm:text-lg">{title}</h3>

        <div className="flex justify-between text-xs flex-col sm:flex-row sm:text-base font-semibold">
          <h4 className="mt-1">{company}</h4>
          <h4 className="mt-1">{location}</h4>
        </div>

        <ul className="list-[circle] list-outside pl-2 hidden sm:block">
          {description.map((line, index) => (
            <li className="!mt-1 font-normal !text-sm text-gray-600 dark:text-white/50" key={index}>
              {line}
            </li>
          ))}
        </ul>
        <p className="sm:hidden font-normal !text-xs text-gray-600 dark:text-white/50">
          {descriptionShort}
        </p>
      </VerticalTimelineElement>
    </div>
  );
}

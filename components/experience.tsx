"use client";

import { useTheme } from "@/context/theme-context";
import { experiencesData } from "@/lib/data";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import { useInView } from "react-intersection-observer";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Section from "./section";

export default function experience() {
  const { theme } = useTheme();

  return (
    <Section title="Experience" id="Experience" wide>
      <VerticalTimeline lineColor="" className="!max-w-[100rem]">
        {experiencesData.map(({ title, company, location, description, date, type }, index) => {
          const { ref, inView } = useInView({
            triggerOnce: true,
            threshold: 0.5,
          });
          const position = type === "job" ? "right" : "left";
          const icon = type === "job" ? <CgWorkAlt /> : <LuGraduationCap />;

          return (
            <div ref={ref} key={index} className="vertical-timeline-element">
              <VerticalTimelineElement
                visible={inView}
                contentStyle={{
                  background: theme === "light" ? "#f3f4f6" : "rgba(255,255,255,0.05)",
                  boxShadow: "none",
                  border:
                    theme === "light"
                      ? "1px solid rgba(0,0,0,0.05)"
                      : "1px solid rgba(255,255,255,0.5)",
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
                // position={position}
              >
                <h3 className="font-semibold captitalize text-lg">{title}</h3>

                <div className="flex justify-between text-xs flex-col sm:flex-row sm:text-base font-semibold">
                  <h4 className="mt-1">{company}</h4>
                  <h4 className="mt-1">{location}</h4>
                </div>
                <ul className="list-[circle] list-outside pl-2">
                  {description.map((line, index) => (
                    <li
                      className="!mt-1 font-normal !text-sm text-gray-500 dark:text-white/50"
                      key={index}
                    >
                      {line}
                    </li>
                  ))}
                </ul>
                {/* <p className="!mt-1 font-normal !text-sm text-gray-500 dark:text-white/50">
                  {description}
                </p> */}
              </VerticalTimelineElement>
            </div>
          );
        })}
      </VerticalTimeline>
    </Section>
  );
}

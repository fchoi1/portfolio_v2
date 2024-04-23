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
      <VerticalTimeline lineColor={theme === "light" ? "gray" : "DimGray"}>
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
                  padding: "1.3rem 2rem",
                }}
                contentArrowStyle={{ borderRight: "0.4rem solid #9ca3af" }}
                icon={icon}
                iconStyle={{
                  background: theme === "light" ? "white" : "#383838",
                  boxShadow: theme === "light" ? "0 0 0 3px darkgray" : "0 0 0 3px WhiteSmoke",
                  fontSize: "1.5rem",
                }}
                date={date}
                position={position}
              >
                <h3 className="font-semibold captitalize">{title}</h3>

                <div className="flex justify-between">
                  <h4 className="font-normal">{company}</h4>
                  <h4>{location}</h4>
                </div>
                <p className="!mt-1 font-normal text-gray-500 dark:text-white/50">{description}</p>
              </VerticalTimelineElement>
            </div>
          );
        })}
      </VerticalTimeline>
    </Section>
  );
}

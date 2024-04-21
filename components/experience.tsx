"use client";

import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import { useInView } from "react-intersection-observer";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { experiencesData } from "@/lib/data";
import Section from "./section";

export default function experience() {
  return (
    <Section title="Experience" id="Experience" wide>
      <VerticalTimeline lineColor="">
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
                  background: "#f3f4f6",
                  boxShadow: "none",
                  border: "1px solid rgba(0,0,0,0.05)",
                  textAlign: "left",
                  padding: "1.3rem 2rem",
                }}
                contentArrowStyle={{ borderRight: "0.4rem solid #9ca3af" }}
                icon={icon}
                iconStyle={{ background: "white", fontSize: "1.5rem" }}
                date={date}
                position={position}
              >
                <h3 className="font-semibold captitalize">{title}</h3>

                <div className="flex justify-between">
                  <h4 className="font-normal">{company}</h4>
                  <h4>{location}</h4>
                </div>
                <p className="!mt-1 font-normal text-gray-500">{description}</p>
              </VerticalTimelineElement>
            </div>
          );
        })}
      </VerticalTimeline>
    </Section>
  );
}

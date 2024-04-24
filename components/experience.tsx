"use client";

import { experiencesData } from "@/lib/data";
import React from "react";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import ExperienceItem from "./experience-item";
import Section from "./section";

export default function Experience() {
  return (
    <Section title="Experience" id="Experience" wide threshold={0.1}>
      <VerticalTimeline lineColor="" className="!max-w-[100rem]">
        {experiencesData.map((item, index) => {
          return (
            <React.Fragment key={index}>
              <ExperienceItem {...item} />
            </React.Fragment>
          );
        })}
      </VerticalTimeline>
    </Section>
  );
}

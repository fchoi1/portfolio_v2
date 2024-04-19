"use client";

import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { experiencesData } from "@/lib/data";
import Section from "./section";

export default function experience() {
  return (
    <Section title="Experience" id="Experience">
      <VerticalTimeline>
        {experiencesData.map(
          ({ title, company, location, description, icon, date, type }, index) => (
            <React.Fragment key={index}>
              <VerticalTimelineElement contentStyle={{}} visible icon={icon} date={date}>
                <h3 className="vertical-timeline-element-title">{title}</h3>
                <h4>{company}</h4>
                <p>{description}</p>
              </VerticalTimelineElement>
            </React.Fragment>
          )
        )}
      </VerticalTimeline>
    </Section>
  );
}

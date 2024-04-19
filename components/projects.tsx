import { projectsData } from "@/lib/data";

import React from "react";
import Project from "./project";
import Section from "./section";

export default function projects() {
  return (
    <Section title="My projects" id="Projects">
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project}></Project>
          </React.Fragment>
        ))}
      </div>
    </Section>
  );
}

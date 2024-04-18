import { projectsData } from "@/lib/data";
import React from "react";
import Project from "./project";
import Section from "./section";

export default function projects() {
  console.log(projectsData);
  return (
    <Section addBottom title="My projects">
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project project={project}></Project>
          </React.Fragment>
        ))}
      </div>
    </Section>
  );
}

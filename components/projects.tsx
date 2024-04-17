import { projectsData } from "@/lib/data";
import Section from "./section";

export default function projects() {
  console.log(projectsData);
  return (
    <Section addBottom title="My projects">
      <div>Test</div>
    </Section>
  );
}

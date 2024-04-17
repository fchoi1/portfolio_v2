import About from "@/components/about";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-32 sm:pt-28">
      <Intro />
      <SectionDivider />
      <About />
      <Projects />
    </main>
  );
}

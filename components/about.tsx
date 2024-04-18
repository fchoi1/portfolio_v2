import Section from "./section";

export default function About() {
  return (
    <Section addBottom title="About me">
      <div className="leading-8">
        <p className="mb-3 text-sm sm:text-base">
          After graduating with a Bachelor of Applied Science in{" "}
          <span className="font-semibold">Mechanical Engineering</span>, I decided to pursue my
          passion for programming. I completed a coding bootcamp and learned{" "}
          <span className="font-semibold">full-stack web development</span>.I enjoy being able{" "}
          <span className="italic"> solve complex problems </span> and{" "}
          <span className="italic"> develop efficient solutions</span>. There's something special
          about the 'aha' moment when everything clicks into place. Some notable technologies I've
          used includes <area shape="" coords="" href="" alt="" />{" "}
          <span className="font-semibold">
            Node.js, TypeScript, Python, React, Next.js, PostgreSQL and MongoDB
          </span>
          . As an AI enthusiast, I am always looking to learn new technologies and collaborate on
          new projects!
        </p>

        <p className="text-sm sm:text-base">
          <span className="italic">When I'm not coding</span>, I enjoy playing video games, working
          out, and playing with my dog. I also enjoy{" "}
          <span className="font-semibold">solving puzzles</span>; wordle, chess, crosswords, you
          name it! I am currently pursuing a Masters Degree in CS at{" "}
          <span className="font-semibold">Georgia Institute of Technology</span> in Machine
          Learning.
        </p>
      </div>
    </Section>
  );
}

import { projectsData } from "@/lib/data";
import { promises as fs } from "fs";
import Image from "next/image";
import path from "path";
import { use } from "react";

type Project = (typeof projectsData)[number];

type ProjectProps = {
  project: Project;
};

const getImages = async (dir: string) => {
  const imageDirectory = path.join(process.cwd(), "public/images/projects/", dir);
  const imageFilenames = await fs.readdir(imageDirectory);
  return imageFilenames.map((name) => `/images/projects/${dir}/` + name);
};
export default function Project({ project }: ProjectProps) {
  const { title, description, tags, link, imageDir, image } = project;

  const images = use(getImages(imageDir));
  console.log(images);
  return (
    <section>
      <h3>{title}</h3>
      <p>{description}</p>
      <ul>
        {tags.map((tag, index) => (
          <li key={index}>{tag}</li>
        ))}
      </ul>
      <div>
        <a href={link} target="_blank">
          Link
        </a>
      </div>
      <Image src={image} alt={`${title} Image`} quality={95} />

      {images.map((image, index) => (
        <div key={index}>
          <Image src={image} alt="additional" width={200} height={200} quality={90} />
        </div>
      ))}
    </section>
  );
}

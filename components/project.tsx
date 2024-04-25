"use client";

import { projectsData } from "@/lib/data";
// import { getImages } from "@/lib/utils";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { BsGithub } from "react-icons/bs";
import { TbExternalLink } from "react-icons/tb";

type ProjectProps = (typeof projectsData)[number];

export default function Project({ title, description, tags, link, image }: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.7, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  const scaleY = useSpring(scaleProgress, {
    stiffness: 200,
    damping: 40,
    restDelta: 0.001,
  });

  // const [images, setImages] = useState<string[]>([]);

  // useEffect(() => {
  //   const fetchImages = async () => {
  //     const fetchedImages = await getImages(imageDir);
  //     setImages(fetchedImages);
  //   };
  //   fetchImages();
  // }, [imageDir]);

  return (
    <motion.div
      className="group mb-3 sm:mb-8 last:mb-0"
      ref={ref}
      style={{ scale: scaleY, opacity: opacityProgress }}
    >
      <section
        className="flex flex-col justify-center items-center sm:hover:bg-gray-200 transition
      bg-gray-100 max-w-[50rem] borderBlack overflow-hidden rounded-lg sm:hover:shadow-lg
        sm:block sm:relative sm:max-h-96 sm:min-h-72
        dark:bg-white/10 dark:sm:hover:bg-white/30"
      >
        <div
          className="p-4 pb-0 flex flex-col pl-4 sm:min-h-72
          lg:min-h-[22rem] md:pl-6 md:pr-8 sm:pr-4 sm:pt-8 sm:max-w-[55%]  sm:pb-7 sm:text-left
          sm:group-even:pr-6 sm:group-even:pl-8 sm:group-even:ml-[47%] dark:bg:text-white"
        >
          <h3 className="text-xl gap-4 font-semibold flex justify-center items-center md:text-2xl sm:justify-normal sm:items-start">
            <span>{title}</span>
            {link && (
              <a
                className="outline-none transition hover:scale-110 focus:scale-110 border border-black/35 rounded-full p-1"
                href={link}
                target="_blank"
              >
                {link.includes("github") ? <BsGithub /> : <TbExternalLink />}
              </a>
            )}
          </h3>
          <p className="mt-2 leading-relaxed text-gray-700 h-full text-xs lg:text-base dark:text-white/70">
            {description}
          </p>
          <ul className="py-3 flex flex-wrap justify-center text-xs lg:text-sm sm:justify-normal sm:mt-auto gap-2 ">
            {tags.map((tag, index) => (
              <li
                className="bg-black/[0.7] px-3 py-1 tracking-wider text-white rounded-full dark:text-white/70"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>

        <Image
          className="sm:absolute top-8 left-[55%] w-72 h-auto sm:h-full sm:w-auto rounded-t-2xl shadow-2xl  
        group-even:left-auto group-even:right-[55%]  transition
        sm:group-even:group-hover:-translate-x-3 sm:group-even:group-hover:translate-y-3 sm:group-even:group-hover:rotate-2 
        sm:group-hover:translate-x-3 sm:group-hover:translate-y-3 sm:group-hover:-rotate-2 sm:group-hover:scale-105"
          src={image}
          alt={`${title} Image`}
          quality={95}
        />

        {/* {images.map((image, index) => (
        <div key={index}>
          <Image src={image} alt="additional" width={200} height={200} quality={90} />
        </div>
      ))} */}
      </section>
    </motion.div>
  );
}

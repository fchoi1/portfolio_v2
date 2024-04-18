"use client";

import { projectsData } from "@/lib/data";
import { getImages } from "@/lib/utils";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { BsGithub } from "react-icons/bs";

type ProjectProps = (typeof projectsData)[number];

export default function Project({ title, description, tags, link, imageDir, image }: ProjectProps) {
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
        className="flex flex-col justify-center items-center hover:bg-gray-200 transition
      bg-gray-100 max-w-[50rem] border border-black/5 overflow-hidden rounded-lg hover:shadow-lg
        sm:block sm:relative"
      >
        <div
          className="p-4 pb-0 flex flex-col 
        sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[55%] sm:max-h-80 sm:pb-7 sm:text-left sm:group-even:ml-[48%]"
        >
          <h3 className="text-2xl font-semibold flex gap-4 justify-center items-center sm:justify-normal sm:items-start">
            <span>{title}</span>
            {link ? (
              <a
                className="outline-none transition hover:scale-110 focus:scale-110 border border-black/35 rounded-full p-1"
                href={link}
                target="_blank"
              >
                <BsGithub />
              </a>
            ) : null}
          </h3>
          <p className="mt-2 leading-relaxed text-gray-700 h-full">{description}</p>
          <ul className="py-3 flex flex-wrap justify-center sm:justify-normal sm:mt-4 gap-2 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                className="bg-black/[0.7] px-3 py-1 text-sm tracking-wider text-white rounded-full"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>

        <Image
          className="sm:absolute top-8 left-[55%] w-3/4 rounded-t-xl shadow-2xl  
        group-even:left-auto group-even:right-[55%]  transition
        group-even:group-hover:-translate-x-3 group-even:group-hover:translate-y-3 group-even:group-hover:rotate-2 
        group-hover:translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 group-hover:scale-105"
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

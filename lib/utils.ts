"use server";

import { promises as fs } from "fs";
import path from "path";

export const getImages = async (dir: string) => {
  const imageDirectory = path.join(process.cwd(), "public/images/projects/", dir);
  const imageFilenames = await fs.readdir(imageDirectory);
  return imageFilenames.map((name) => `/images/projects/${dir}/` + name);
};

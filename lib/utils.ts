import { promises as fs } from "fs";
import path from "path";

export const getImages = async (dir: string) => {
  const imageDirectory = path.join(process.cwd(), "public/images/projects/", dir);
  const imageFilenames = await fs.readdir(imageDirectory);
  return imageFilenames.map((name) => `/images/projects/${dir}/` + name);
};

export const validateString = (value: unknown, maxLen: number) => {
  return !(!value || typeof value !== "string" || value.length > maxLen);
};

export const getErrorMessage = (error: unknown): string => {
  let message: string;

  if (error instanceof Error) message = error.message;
  else if (error && typeof error === "object" && "message" in error)
    message = String(error.message);
  else if (typeof error === "string") message = error;
  else message = "Something went wrong";

  return message;
};


import bikeHavenStroe from '@/assets/images/projects/Bike_Haven_Store/Bike_Haven_Store_1.avif';
import budgetTracker from '@/assets/images/projects/Budget_Tracker/Budget_Tracker_1.avif';
import jibberJabber from '@/assets/images/projects/Jibber_Jabber/Jibber_Jabber_1.avif';
import lidarRobot from '@/assets/images/projects/LIDAR_Robot/LIDAR_Robot_1.avif';
import pvzRPG from '@/assets/images/projects/PvZ_RPG/PvZ_RPG_1.avif';
import stewardPlatformMazeSolver from '@/assets/images/projects/Steward_Platform_Maze_Solver/Steward_Platform_Maze_Solver_1.avif';
import techBlog from '@/assets/images/projects/Tech_Blog/Tech_Blog_1.avif';
import warehouseAerialManipulator from '@/assets/images/projects/Warehouse_Aerial_Manipulator/Warehouse_Aerial_Manipulator_1.avif';

import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    company: "University",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
    type: 'academic'
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    company: "Test Company 2",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
    type: 'job'
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    company: "Test Company 2",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
    type: 'job'
  },
] as const;

export const projectsData = [
  {
    title: "Jibber Jabber",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageDir: 'Jibber_Jabber',
    image: jibberJabber
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageDir: 'Bike_Haven_Store',
    image:  jibberJabber
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageDir: 'Bike_Haven_Store',
    // imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;

import bikeHavenStroe from "@/assets/images/projects/Bike_Haven_Store/Bike_Haven_Store_1.png"
import budgetTracker from "@/assets/images/projects/Budget_Tracker/Budget_Tracker_1.png"
import jibberJabber from "@/assets/images/projects/Jibber_Jabber/Jibber_Jabber_1.png"
import lidarRobot from "@/assets/images/projects/LIDAR_Robot/LIDAR_Robot_1.png"
import pvzRPG from "@/assets/images/projects/PvZ_RPG/PvZ_RPG_1.png"
import stewardPlatformMazeSolver from "@/assets/images/projects/Steward_Platform_Maze_Solver/Steward_Platform_Maze_Solver_1.png"
import techBlog from "@/assets/images/projects/Tech_Blog/Tech_Blog_1.png"
import warehouseAerialManipulator from "@/assets/images/projects/Warehouse_Aerial_Manipulator/Warehouse_Aerial_Manipulator_1.png"

import React from "react"
import { CgWorkAlt } from "react-icons/cg"
import { FaReact } from "react-icons/fa"
import { LuGraduationCap } from "react-icons/lu"
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
] as const

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    company: "University",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
    type: "academic",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    company: "Test Company 2",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
    type: "job",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    company: "Test Company 2",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
    type: "job",
  },
] as const

export const projectsData = [
  {
    title: "Jibber Jabber",
    description:
      "This is a simple chat app where users can register/login to message other users online. The homepage contains a custom designed logo and the option to signup or login. Once authenticated, you will be redirected to the dashboard page. This will contain all of our recent chats where you can click on any of the chats and then you get redirected to the personal chat room where you send and receive the messages. ",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    link: "https://github.com/fchoi1/Jibber-Jabber",
    imageDir: "Jibber_Jabber",
    image: jibberJabber,
  },
  {
    title: "PvZ RPG Game",
    description:
      "This is a simple chat app where users can register/login to message other users online. The homepage contains a custom designed logo and the option to signup or login. Once authenticated, you will be redirected to the dashboard page. This will contain all of our recent chats where you can click on any of the chats and then you get redirected to the personal chat room where you send and receive the messages. ",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    link: "https://github.com/fchoi1/Java-RGP-PVZ",
    imageDir: "Jibber_Jabber",
    image: jibberJabber,
  },
] as const

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
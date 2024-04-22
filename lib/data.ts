import bikeHavenStroe from "@/public/images/projects/Bike_Haven_Store/Bike_Haven_Store_1.png";
import budgetTracker from "@/public/images/projects/Budget_Tracker/Budget_Tracker_1.png";
import jibberJabber from "@/public/images/projects/Jibber_Jabber/Jibber_Jabber_1.png";
import lidarRobot from "@/public/images/projects/LIDAR_Robot/LIDAR_Robot_1.png";
import pvzRPG from "@/public/images/projects/PvZ_RPG/PvZ_RPG_1.png";
import stewardPlatformMazeSolver from "@/public/images/projects/Steward_Platform_Maze_Solver/Steward_Platform_Maze_Solver_1.png";
import techBlog from "@/public/images/projects/Tech_Blog/Tech_Blog_1.png";
import warehouseAerialManipulator from "@/public/images/projects/Warehouse_Aerial_Manipulator/Warehouse_Aerial_Manipulator_1.png";

import { BiLogoMongodb, BiLogoTypescript } from "react-icons/bi";
import { DiBackbone, DiRedis } from "react-icons/di";
import {
  FaAtlassian,
  FaAws,
  FaBootstrap,
  FaCss3Alt,
  FaDocker,
  FaGithub,
  FaHtml5,
  FaJava,
  FaNodeJs,
  FaPython,
} from "react-icons/fa";
import { FaGolang } from "react-icons/fa6";
import { GrGraphQl } from "react-icons/gr";
import { IoLogoJavascript } from "react-icons/io5";
import {
  SiElasticsearch,
  SiJquery,
  SiMicrosoftazure,
  SiMui,
  SiPostgresql,
  SiTailwindcss,
} from "react-icons/si";

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
    company: "University of Toronto",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    date: "2019",
    type: "academic",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    company: "Test Company 2",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    date: "2019 - 2021",
    type: "job",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    company: "Test Company 2",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    date: "2021 - present",
    type: "job",
  },
] as const;

export const projectsData = [
  {
    title: "Jibber Jabber",
    description:
      "This is a simple chat app where users can send messages to other online users in realtime. New users can create accouns view all their chats via the home dashboard page.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    link: "https://github.com/fchoi1/Jibber-Jabber",
    imageDir: "Jibber_Jabber",
    image: jibberJabber,
  },
  {
    title: "PvZ RPG Game",
    description:
      "This was my first RPG Game created in Java. It uses keyboard controls to play. Contains animated fighting scenes, boss fights, and upgradable player. This project taught me the fundamentals of any programming language and this is where the journey began!",
    tags: ["Java", "Animations", "OOP", "RPG"],
    link: "https://github.com/fchoi1/Java-RGP-PVZ",
    imageDir: "PvZ_RPG",
    image: pvzRPG,
  },
  {
    title: "Warehouse Aerial Manipulator",
    description:
      "This was my first RPG Game created in Java. It uses keyboard controls to play. Contains animated fighting scenes, boss fights, and upgradable player. This project taught me the fundamentals of any programming language and this is where the journey began!",
    tags: ["Java", "Animations", "OOP", "RPG"],
    link: "https://github.com/fchoi1/Java-RGP-PVZ",
    imageDir: "PvZ_RPG",
    image: warehouseAerialManipulator,
  },
] as const;

export const skillsData = [
  { skill: "HTML", Icon: FaHtml5 },
  { skill: "CSS", Icon: FaCss3Alt },
  { skill: "JavaScript", Icon: IoLogoJavascript },
  { skill: "TypeScript", Icon: BiLogoTypescript },
  { skill: "React", Icon: FaHtml5 },
  { skill: "Backbone.js", Icon: DiBackbone },
  { skill: "Next.js", Icon: FaHtml5 },
  { skill: "Node.js", Icon: FaNodeJs },
  { skill: "Git", Icon: FaGithub },
  { skill: "Tailwind", Icon: SiTailwindcss },
  { skill: "MongoDB", Icon: BiLogoMongodb },
  { skill: "Redux", Icon: FaHtml5 },
  { skill: "GraphQL", Icon: GrGraphQl },
  { skill: "Express", Icon: FaHtml5 },
  { skill: "PostgreSQL", Icon: SiPostgresql },
  { skill: "Python", Icon: FaPython },
  { skill: "Elasticsearch", Icon: SiElasticsearch },
  { skill: "Redis", Icon: DiRedis },
  { skill: "Docker", Icon: FaDocker },
  { skill: "Azure Web Services", Icon: SiMicrosoftazure },
  { skill: "AWS", Icon: FaAws },
  { skill: "JIRA", Icon: FaAtlassian },
  { skill: "Bootstrap", Icon: FaBootstrap },
  { skill: "JQuery", Icon: SiJquery },
  { skill: "Material UI", Icon: SiMui },
  { skill: "Golang", Icon: FaGolang },
  { skill: "Java", Icon: FaJava },
] as const;

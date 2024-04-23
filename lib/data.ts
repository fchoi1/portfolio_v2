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
    title: "Technical Analyst - DevOps",
    company: "CGI Group",
    location: "Toronto, ON",
    descriptionShort: "",
    description: [
      "Configured tools such as JIRA, Bamboo, confluence for task management, deployments and documentation",
      "Ensure environement stability and up time and programmed anisible scripts for automated setup and deployments",
      "Deployed a proof of concept application for automatic alerts and log reading using Sumologic and iMacros.",
    ],
    date: "2016",
    tags: [],
    type: "job",
  },
  {
    title: "Softwre Development Co-op",
    company: "Flex LTD",
    location: "Toronto, ON",
    descriptionShort: "",
    description: [
      "Intergrated SVN code versioning tool with existing task management software with Eclipse IDE support to automatically link code commits to issue.",
      "Introduced JIRA as a new task management software as a cost-effective and efficient solution compared to SBM.",
      "Documented instructions for initial user setup for the software integration",
    ],
    date: "2016",
    tags: [],
    type: "job",
  },
  {
    title: "Engineering Intern",
    company: "Linamar",
    location: "Guelph, ON",
    descriptionShort: "",
    description: [
      "Implemented Robert Operating System (ROS) for autonomous navigation for proof of concept on a Roomba Bot",
      "Integrated Raspberry Pi with iRobot Roomba and ssh for wireless configuration",
      " Created simple web app for autonomous navigation using ROSJS and HTML",
    ],
    date: "2017",
    tags: [],
    type: "job",
  },
  {
    title: "Innovation Developer",
    location: "Toronto, ON",
    company: "Zero Gravity Labs",
    description: [
      "Researched data and performed market research for face recognition technology applications",
      "Developed an IoT video streaming device using Raspberry Pi system to implement computer vision techniques on face data",
      "Designed cloud infrastructure for sending, processing and storing data to cloud use ECS instances and blob storage on AWS",
    ],
    tags: ["python", "openCV", "AWS"],
    date: "2018",
    type: "job",
  },
  {
    title: "ITS Analyst",
    location: "Toronto, ON",
    company: "Sanofi",
    description: [
      "Tested and qualified benchtop equipment to ensure correct and stable data transfer into PI Historian Database",
      "Setup and configured data integration between MES and PI Historian software",
      "Managed 20,000+ PI Tags used for reading equipment data and ensure constant uptime and proper configuration",
    ],
    tags: [],
    date: "2021 - 2022",
    type: "job",
  },
  {
    title: "Coding Bootcamp",
    location: "Remote",
    company: "Univeristy of Toronto Continuing Studies",
    description: [
      "Learned fundamentals, techniques and best practices in web development.",
      "Developed strong coding practices incuding MERN stack (MongoDB, Express, React, NodeJS) and GIT",
      "Implemented varrious Front-end and Back-end systems for full stack applications and incorporating custom libraries such as Bootstrap, Socket IO, and JQuery",
    ],
    tags: ["MongoDB", "Express", "React", "NodeJS"],
    date: "2021 - 2022",
    type: "academic",
  },

  {
    title: "Software Application Developer",
    location: "Ottawa, ON",
    company: "Case IQ",
    description: [
      "Integrated Seneca, Knex.js, and PostgreSQL to establish a secure data access framework with granular Access Control List (ACL)",
      "Designed, and maintained REST APIs with robust error handling to facilitate scalable solutions for data exchange between backend services.",
      "Created, and managed frontend views using DustJS, Bootstrap, and LESS, resulting in responsive and dynamic user interface.",
      "Optimized Case submission efficiency by 5% through the removal of unnecessary services in business logic.",
      "Integrated Azure and OpenAI services to automatically summarize case details from various data sources, enhancing user experience.",
      "Implemented azure blob and vector storage functionalities tailored to automatically summarize files",
    ],
    tags: ["NodeS, BackboneJS, Docker, Redis, Elasticsearch", "Azure", "PostgreSQL"],
    date: "2022 - present",
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
  {
    title: "Portfolio Website V1",
    description: "First official website portfolio created",
    tags: ["Java", "Animations", "OOP", "RPG"],
    link: "https://github.com/fchoi1/my-portfolio",
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

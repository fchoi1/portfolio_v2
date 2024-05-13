import bikeHavenStroe from "@/public/images/projects/Bike_Haven_Store/Bike_Haven_Store_1.png";
// import budgetTracker from "@/public/images/projects/Budget_Tracker/Budget_Tracker_1.png";
import jibberJabber from "@/public/images/projects/Jibber_Jabber/Jibber_Jabber_1.png";
import lidarRobot from "@/public/images/projects/LIDAR_Robot/LIDAR_Robot_1.png";
import pvzRPG from "@/public/images/projects/PvZ_RPG/PvZ_RPG_1.png";
import stewardPlatformMazeSolver from "@/public/images/projects/Steward_Platform_Maze_Solver/Steward_Platform_Maze_Solver_1.png";
// import techBlog from "@/public/images/projects/Tech_Blog/Tech_Blog_1.png";
import warehouseAerialManipulator from "@/public/images/projects/Warehouse_Aerial_Manipulator/Warehouse_Aerial_Manipulator_1.png";
import myPortfolioV1 from "@/public/images/projects/my_portfolio_v1/my_portfolio_v1_1.png";

import { BiLogoMongodb, BiLogoTypescript } from "react-icons/bi";
import { DiBackbone, DiMysql, DiRedis } from "react-icons/di";
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
  FaReact,
  FaJenkins,
} from "react-icons/fa";
import { FaGolang } from "react-icons/fa6";
import { GrGraphQl } from "react-icons/gr";
import { IoLogoJavascript } from "react-icons/io5";
import {
  SiElasticsearch,
  SiExpress,
  SiJquery,
  SiMicrosoftazure,
  SiMui,
  SiPostgresql,
  SiTailwindcss,
  SiTravisci,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

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
    descriptionShort:
      "Streamlined operations at CGI Group by configuring tools like JIRA, Bamboo, and Confluence. Automated deployments with Ansible. Implemented innovative solutions for log analysis.",
    description: [
      "Configured tools such as JIRA, Bamboo, confluence for task management, deployments and documentation",
      "Ensure environement stability and up time and programmed anisible scripts for automated setup and deployments",
      "Deployed a proof of concept application for automatic alerts and log reading using Sumologic and iMacros.",
    ],
    date: "2016",
    tags: ["Ansible", "JIRA", "Bash"],
    type: "job",
  },
  {
    title: "Softwre Development Co-op",
    company: "Flex LTD",
    location: "Toronto, ON",
    descriptionShort:
      "Enhanced workflow by integrating SVN with Eclipse IDE, introduced JIRA for efficient task management, and documented software setup instructions.",
    description: [
      "Intergrated SVN code versioning tool with existing task management software with Eclipse IDE support to automatically link code commits to issue.",
      "Introduced JIRA as a new task management software as a cost-effective and efficient solution compared to SBM.",
      "Documented instructions for initial user setup for the software integration",
    ],
    date: "2016",
    tags: ["SVN", "Eclipse", "JIRA"],
    type: "job",
  },
  {
    title: "Engineering Intern",
    company: "Linamar",
    location: "Guelph, ON",
    descriptionShort:
      "Implemented ROS for autonomous navigation on a Roomba Bot, integrated Raspberry Pi for wireless configuration, and developed a web app for navigation.",
    description: [
      "Implemented Robert Operating System (ROS) for autonomous navigation for proof of concept on a Roomba Bot",
      "Integrated Raspberry Pi with iRobot Roomba and ssh for wireless configuration",
      " Created simple web app for autonomous navigation using ROSJS and HTML",
    ],
    date: "2017",
    tags: ["ROS", "ROSJS", "Python"],
    type: "job",
  },
  {
    title: "Innovation Developer",
    location: "Toronto, ON",
    company: "Zero Gravity Labs",
    descriptionShort:
      "Researched face recognition tech, developed IoT video streaming with Raspberry Pi, and designed AWS cloud infrastructure.",
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
    title: "B.A.Sc in Mechanical Engineering",
    location: "Waterloo, ON",
    company: "University of Waterloo",
    descriptionShort: "Graduated with an Bachelor's of Applied Science in Mechanical Engineering",
    description: ["Graduated with an Bachelor's of Applied Science in Mechanical Engineering"],
    tags: [],
    date: "2020",
    type: "academic",
  },
  {
    title: "ITS Analyst",
    location: "Toronto, ON",
    company: "Sanofi",
    descriptionShort:
      "Ensured data integrity with PI Historian, configured MES integration, and managed 20,000+ PI Tags for equipment data.",
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
    company: "Univeristy of Toronto",
    descriptionShort:
      "Learned web development, data structures, and algorithms, and practiced with MERN stack and GIT.",
    description: [
      "Learned fundamentals, techniques and best practices in web development.",
      "Enhanced knowledge on data structures and algorithms along with strong coding practices incuding MERN stack and GIT",
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
    descriptionShort:
      "Integrated secure data access with Seneca and Knex.js, designed REST APIs, managed frontend with DustJS and Bootstrap, optimized case submission efficiency, and integrated Azure and OpenAI services.",
    description: [
      "Integrated Seneca, Knex.js, and PostgreSQL to establish a secure data access framework with granular Access Control List (ACL)",
      "Designed, and maintained REST APIs with robust error handling to facilitate scalable solutions for data exchange between backend services.",
      "Created, and managed frontend views using DustJS, Bootstrap, and LESS, resulting in responsive and dynamic user interface.",
      "Optimized Case submission efficiency by 5% through the removal of unnecessary services in business logic.",
      "Integrated Azure and OpenAI services to automatically summarize case details from various data sources, enhancing user experience.",
      "Implemented azure blob and vector storage functionalities tailored to automatically summarize files",
    ],
    tags: ["NodeJS, BackboneJS, Docker, Redis, Elasticsearch", "Azure", "PostgreSQL"],
    date: "2022 - present",
    type: "job",
  },
  {
    title: "M.S. in Computer Science",
    location: "Remote",
    company: "Georgia Institute of Technology",
    descriptionShort:
      "Part-time master's specializing in Machine Learning, completed courses including Machine Learning for Trading.",
    description: [
      "Ongoing part-time master's program specializing in Machine Learning",
      "Courses completed: Machine Learning for Trading",
    ],
    tags: ["MongoDB", "Express", "React", "NodeJS"],
    date: "2024 - Present",
    type: "academic",
  },
] as const;

export const projectsData = [
  {
    title: "Portfolio Website V1",
    description:
      "First official website portfolio created to show case newly learned skills. Deployed on Heroku",
    tags: ["NodeJS", "React", "Material UI", "Express"],
    link: "https://github.com/fchoi1/my-portfolio",
    imageDir: "my_portfolio_v1",
    image: myPortfolioV1,
  },
  {
    title: "Jibber Jabber",
    description:
      "This is a simple chat app where users can send messages to other online users in realtime. With JWT authentication support, new users can create accouns view all their chats via the home dashboard page.",
    tags: ["React", "GraphQL", "Express", "MongoDB", "Socket IO", "Material UI", "JWT"],
    link: "https://github.com/fchoi1/Jibber-Jabber",
    imageDir: "Jibber_Jabber",
    image: jibberJabber,
  },
  {
    title: "PvZ RPG Game",
    description:
      "This was my first RPG Game created in Java. It uses keyboard controls to play. Contains animated fighting scenes, boss fights, and upgradable player. This project taught me the fundamentals of any programming language and this is where the journey began!",
    tags: ["Java", "Game", "OOP", "Animation"],
    link: "https://github.com/fchoi1/Java-RGP-PVZ",
    imageDir: "PvZ_RPG",
    image: pvzRPG,
  },
  {
    title: "Bike Haven Store",
    description:
      "A full stack application that sells bikes online. Users login/register accounts and browse the bike catalogs and add items to their wishlist.",
    tags: ["HandleBars", "HTML", "CSS", "REST API", "Express", "bcrypt", "SQL"],
    link: "https://github.com/fchoi1/Bike-Haven",
    imageDir: "Bike_Haven_Store",
    image: bikeHavenStroe,
  },
  {
    title: "Lidar Live streaming Robot",
    description:
      "A project I worked on at Linamar to design an autonomous robot that can deliver tool changes using path finding and localization",
    tags: ["ROS", "ROSJS", "Linux", "Python"],
    link: "https://github.com/fchoi1/Linabot",
    imageDir: "LIDAR_Robot",
    image: lidarRobot,
  },
  {
    title: "Warehouse Aerial Manipulator",
    description:
      "Designed a drone-mounted manipulator for efficient handling and inventory tracking of small packages in factory settings. Enhanced productivity through aerial coverage and automated inventory scanning",
    tags: ["C++", "Arduino", "3D Design", "Image Detection"],
    link: "https://1drv.ms/p/s!Ap-4bV5caE3xdK1LdPpFxN_whmI?e=Gb9zD0",
    imageDir: "Warehouse_Aerial_Manipulator",
    image: warehouseAerialManipulator,
  },
  {
    title: "Steward Platform Maze Game",
    description:
      "A project that uses a microcontroller to control a steward platform which is a platform held by 6 actuators which enables this system to have 6 degrees of freedom. This was program in C++ and uses sensor data from an IMU (inertial measurement unit) to control tilt and z axis movement.",
    tags: ["C++", "Arduino", "OOP", "IMU"],
    link: "https://github.com/fchoi1/stewart-platform",
    imageDir: "LIDAR_Robot",
    image: stewardPlatformMazeSolver,
  },
  // {
  //   title: "QLearner Trading Bot",
  //   description:
  //     "A project I worked on at Linamar to design an autonomous robot that can deliver tool changes using path finding and localization",
  //   tags: ["Python", "Reinforcement Learning", "Pandas", "Numpy"],
  //   link: "https://github.com/fchoi1/Linabot",
  //   imageDir: "LIDAR_Robot",
  //   image: lidarRobot,
  // },
] as const;

export const skillsData = [
  [
    { skill: "Golang", Icon: FaGolang },
    { skill: "Java", Icon: FaJava },
    { skill: "Node.js", Icon: FaNodeJs },
    { skill: "Python", Icon: FaPython },
  ],
  [
    { skill: "HTML", Icon: FaHtml5 },
    { skill: "CSS", Icon: FaCss3Alt },
    { skill: "JavaScript", Icon: IoLogoJavascript },
    { skill: "TypeScript", Icon: BiLogoTypescript },
    { skill: "React", Icon: FaReact },
    { skill: "Backbone.js", Icon: DiBackbone },
    { skill: "Next.js", Icon: TbBrandNextjs },
  ],
  [
    { skill: "Bootstrap", Icon: FaBootstrap },
    { skill: "JQuery", Icon: SiJquery },
    { skill: "Material UI", Icon: SiMui },
    { skill: "Tailwind", Icon: SiTailwindcss },
  ],
  [
    { skill: "MongoDB", Icon: BiLogoMongodb },
    { skill: "GraphQL", Icon: GrGraphQl },
    { skill: "Express", Icon: SiExpress },
    { skill: "PostgreSQL", Icon: SiPostgresql },
    { skill: "MySQL", Icon: DiMysql },
    { skill: "Elasticsearch", Icon: SiElasticsearch },
    { skill: "Redis", Icon: DiRedis },
  ],
  [
    { skill: "Docker", Icon: FaDocker },
    { skill: "Azure Web Services", Icon: SiMicrosoftazure },
    { skill: "AWS", Icon: FaAws },
    { skill: "JIRA", Icon: FaAtlassian },
    { skill: "Git", Icon: FaGithub },
    { skill: "Jenkins", Icon: FaJenkins },
    { skill: "Travis", Icon: SiTravisci },
  ],
] as const;

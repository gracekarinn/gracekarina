import React from "react";
import sbfImg from "@/public/sbf.png"

export const links = [
  {
    name: "Intro",
    hash: "#intro",
  },
  {
    name: "About Me!^__^",
    hash: "#aboutme",
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
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const projectsData = [
  {
    title: "SBF Project",
    description:
      "I contributed to the development of a website for a BEM project.",
    tags: ["Next.js", "Tailwind"],
    imageUrl: sbfImg,
  },
] as const;

export const skillsData = [
  "HTML (Beginner)",
  "CSS (Beginner)",
  "JavaScript (Beginner)",
  "R (Beginner)",
  "Python (Beginner)",
  "Framer Motion (Beginner)",
  "Tailwind (Beginner)"
] as const;
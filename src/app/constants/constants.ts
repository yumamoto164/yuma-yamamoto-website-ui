import { GraduationCap, Award, Briefcase, Rocket } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export const GITHUB_URL = "https://github.com/yumamoto164";
export const LINKEDIN_URL = "https://linkedin.com/in/yumamoto164";
export const EMAIL_URL = "mailto:yumamoto164@gmail.com";

// ─── Skills ──────────────────────────────────────────────────────────────────

const DEVICONS_BASE =
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

export interface Technology {
  name: string;
  logo: string;
}

export interface SkillGroup {
  category: string;
  technologies: Technology[];
}

export const skills: SkillGroup[] = [
  {
    category: "Frontend",
    technologies: [
      { name: "HTML", logo: `${DEVICONS_BASE}/html5/html5-original.svg` },
      { name: "CSS", logo: `${DEVICONS_BASE}/css3/css3-original.svg` },
      {
        name: "JavaScript",
        logo: `${DEVICONS_BASE}/javascript/javascript-original.svg`,
      },
      {
        name: "TypeScript",
        logo: `${DEVICONS_BASE}/typescript/typescript-original.svg`,
      },
      { name: "React", logo: `${DEVICONS_BASE}/react/react-original.svg` },
      { name: "Next.js", logo: `${DEVICONS_BASE}/nextjs/nextjs-original.svg` },
    ],
  },
  {
    category: "Backend & Data",
    technologies: [
      { name: "Python", logo: `${DEVICONS_BASE}/python/python-original.svg` },
      {
        name: "Express.js",
        logo: `${DEVICONS_BASE}/express/express-original.svg`,
      },
      {
        name: "SQL",
        logo: `${DEVICONS_BASE}/azuresqldatabase/azuresqldatabase-original.svg`,
      },
    ],
  },
  {
    category: "AI & ML",
    technologies: [
      {
        name: "LangChain/LangGraph",
        logo: "https://cdn.simpleicons.org/langchain",
      },
      {
        name: "PyTorch",
        logo: `${DEVICONS_BASE}/pytorch/pytorch-original.svg`,
      },
      {
        name: "TensorFlow",
        logo: `${DEVICONS_BASE}/tensorflow/tensorflow-original.svg`,
      },
      { name: "MLFlow", logo: "https://cdn.simpleicons.org/mlflow" },
    ],
  },
];

// ─── Experience ───────────────────────────────────────────────────────────────

export interface Experience {
  year: string;
  title: string;
  company: string;
  description: string;
  Icon: LucideIcon;
  color: string;
}

export interface ColorClasses {
  bg: string;
  text: string;
  ring: string;
}

// Ordered oldest → newest (left to right on timeline)
export const experiences: Experience[] = [
  {
    year: "May '21 - July '21",
    title: "Data Analytics Intern",
    company: "Western Mass Pioneers",
    description:
      "Built and deployed an expected goals (xG) model in Python to quantify shot quality for a USL League 2 team; used Binomial Distribution analysis to inform player personnel decisions.",
    Icon: GraduationCap,
    color: "slate",
  },
  {
    year: "Aug '21 - Dec '21",
    title: "Data Science Intern",
    company: "UMass Women's Soccer",
    description:
      "Built Python visualizations and k-means clustering models for opponent analysis; weekly reports contributed to the program's first conference championship appearance in 10 years.",
    Icon: Award,
    color: "slate",
  },
  {
    year: "Jan '22 - July '22",
    title: "Data Science Co-op",
    company: "Liberty Mutual",
    description:
      "Built a CNN-based OCR model reducing odometer recognition error by 76% and latency by 87.5%; created an in-house library for training and deploying CNN models with MLflow.",
    Icon: Briefcase,
    color: "slate",
  },
  {
    year: "Jul '23 - Present",
    title: "Associate Software Engineer",
    company: "Optum",
    description:
      "Architecting an AI agent evaluation framework for pre-deployment LLM validation; built a production React platform for healthcare brokers and delivered CopilotKit/AGUI AI integration POCs.",
    Icon: Rocket,
    color: "slate",
  },
];

export const colorClasses: Record<string, ColorClasses> = {
  orange: {
    bg: "bg-orange-500",
    text: "text-orange-600",
    ring: "ring-orange-300",
  },
  green: { bg: "bg-green-500", text: "text-green-600", ring: "ring-green-300" },
  purple: {
    bg: "bg-purple-500",
    text: "text-purple-600",
    ring: "ring-purple-300",
  },
  blue: { bg: "bg-blue-500", text: "text-blue-600", ring: "ring-blue-300" },
  slate: { bg: "bg-slate-500", text: "text-slate-600", ring: "ring-slate-300" },
};

// ─── Projects ─────────────────────────────────────────────────────────────────

export interface Project {
  title: string;
  description: string;
  image: string;
  techStack: string[];
  github: string;
  demo: string;
}

export const projects: Project[] = [
  {
    title: "AI-Powered Analytics Dashboard",
    description:
      "A comprehensive analytics platform with AI-driven insights and real-time data visualization. Built for enterprise clients to make data-driven decisions.",
    image:
      "https://images.unsplash.com/photo-1759661966728-4a02e3c6ed91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwdmlzdWFsaXphdGlvbiUyMGFuYWx5dGljc3xlbnwxfHx8fDE3NzE2NDcyMTR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    techStack: ["React", "TypeScript", "Python", "PyTorch", "Pandas"],
    github: "https://github.com/yourusername/analytics-dashboard",
    demo: "https://analytics-demo.example.com",
  },
  {
    title: "Smart Task Management App",
    description:
      "An intelligent task management application that uses AI to prioritize tasks and optimize workflow. Features real-time collaboration and smart notifications.",
    image:
      "https://images.unsplash.com/photo-1665470909939-959569b20021?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBhcHBsaWNhdGlvbiUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NzE2OTEzMTZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    techStack: ["Next.js", "TypeScript", "LangChain", "React"],
    github: "https://github.com/yourusername/task-manager",
    demo: "https://tasks-demo.example.com",
  },
  {
    title: "Mobile Fitness Companion",
    description:
      "A cross-platform mobile application for fitness tracking with personalized workout recommendations powered by machine learning algorithms.",
    image:
      "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ258ZW58MXx8fHwxNzcxNjQ3MjEzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    techStack: ["React", "Python", "PyTorch", "LangGraph"],
    github: "https://github.com/yourusername/fitness-app",
    demo: "https://fitness-demo.example.com",
  },
];

// ─── Navigation ───────────────────────────────────────────────────────────────

export interface NavItem {
  id: string;
  label: string;
}

export const navItems: NavItem[] = [
  { id: "home", label: "Home" },
  { id: "projects", label: "Projects" },
];

// ─── Bernie Bounce ────────────────────────────────────────────────────────────

export const BERNIE_SPEED = 2;

// ─── Dates ────────────────────────────────────────────────────────────────────

export const PROFESSIONAL_START_DATE = new Date(2023, 6, 1); // July 2023

export const getBernieSize = () =>
  Math.max(60, Math.min(Math.round(window.innerWidth * 0.13), 300));

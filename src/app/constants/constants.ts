import umassSoccerPhoto from "../../images/UMass_Womens_Soccer.jpg";
import basketballStatskeeperPhoto from "../../images/basketball_statskeeper.png";

export const GITHUB_URL = "https://github.com/yumamoto164";
export const LINKEDIN_URL = "https://linkedin.com/in/yumamoto164";
export const EMAIL_URL = "mailto:yumamoto164@gmail.com";

// ─── Skills ──────────────────────────────────────────────────────────────────

const DEVICONS_BASE =
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

export interface Technology {
  name: string;
  logo: string;
  invertInDark?: boolean;
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
        invertInDark: true,
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
        invertInDark: true,
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
  description: string[];
  color: string;
  popoverImage?: string;
  invertLogoInDark?: boolean;
}

export interface ColorClasses {
  bg: string;
  text: string;
  darkText: string;
  ring: string;
}

// Ordered oldest → newest (left to right on timeline)
export const experiences: Experience[] = [
  {
    year: "May '21 - July '21",
    title: "Data Analytics Intern",
    company: "Western Mass Pioneers",
    description: [
      "Built and deployed an expected goals (xG) model to quantify shot quality for a USL League 2 team",
      "Used Binomial Distribution analysis to dictate player personnel decisions",
    ],
    color: "slate",
  },
  {
    year: "Aug '21 - Dec '21",
    title: "Data Science Intern",
    company: "UMass Women's Soccer",
    description: [
      "Built data visualizations and k-means clustering models for opponent analysis",
      "Weekly reports contributed to the program's first conference championship appearance in 10 years",
    ],
    color: "slate",
    popoverImage: umassSoccerPhoto,
  },
  {
    year: "Jan '22 - July '22",
    title: "Data Science Co-op",
    company: "Liberty Mutual",
    description: [
      "Built a CNN-based OCR model reducing odometer recognition error by 76% and latency by 87.5%",
      "Created an in-house library for training and deploying CNN models with MLflow",
    ],
    color: "slate",
    invertLogoInDark: true,
  },
  {
    year: "Jul '23 - Present",
    title: "Associate Software Engineer",
    company: "Optum",
    description: [
      "Architecting an AI agent evaluation framework for pre-deployment LLM validation",
      "Delivered CopilotKit/AGUI AI assistant integration POCs",
      "Led mentorship across the team while building a React web app, and ranked #1 in defect resolutions and code contributions among all engineers",
    ],
    color: "slate",
  },
];

export const colorClasses: Record<string, ColorClasses> = {
  orange: {
    bg: "bg-orange-500",
    text: "text-orange-600",
    darkText: "dark:text-orange-400",
    ring: "ring-orange-300",
  },
  green: {
    bg: "bg-green-500",
    text: "text-green-600",
    darkText: "dark:text-green-400",
    ring: "ring-green-300",
  },
  purple: {
    bg: "bg-purple-500",
    text: "text-purple-600",
    darkText: "dark:text-purple-400",
    ring: "ring-purple-300",
  },
  blue: {
    bg: "bg-blue-500",
    text: "text-blue-600",
    darkText: "dark:text-blue-400",
    ring: "ring-blue-300",
  },
  slate: {
    bg: "bg-slate-500",
    text: "text-slate-600",
    darkText: "dark:text-slate-300",
    ring: "ring-slate-300",
  },
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
    title: '"Speak-the-Play" Basketball Statskeeper',
    description: `Speak the play — "Jordan, three-pointer made" — and the AI transcribes it, identifies the player, and updates the stats automatically. One person. Full box score. No pen required.`,
    image: basketballStatskeeperPhoto,
    techStack: ["React", "TypeScript", "Python", "Langchain"],
    github: "https://github.com/yumamoto164/basketball-statskeeper-ai",
    demo: "https://basketball-statskeeper-ai-frontend.vercel.app/",
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

// ─── Header ───────────────────────────────────────────────────────────────────

export const HEADER_HEIGHT = 64; // px — matches h-16 on the Header component

// ─── Bernie Bounce ────────────────────────────────────────────────────────────

export const BERNIE_SPEED = 2;

// ─── Dates ────────────────────────────────────────────────────────────────────

export const PROFESSIONAL_START_DATE = new Date(2023, 6, 1); // July 2023

export const getBernieSize = () =>
  Math.max(60, Math.min(Math.round(window.innerWidth * 0.13), 300));

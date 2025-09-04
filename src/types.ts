export type IconsType =
  | "js"
  | "ts"
  | "html"
  | "css"
  | "c"
  | "cpp"
  | "python"
  | "react"
  | "nextjs"
  | "nodejs"
  | "expressjs"
  | "tailwind"
  | "mongodb"
  | "postgre"
  | "supabase"
  | "firebase"
  | "prisma"
  | "git"
  | "github"
  | "figma"
  | "vercel"
  | "npm"
  | "bun"
  | "vscode"
  | "wordpress"
  | undefined;

export type skillsBadgeType = {
  children: React.ReactNode;
  icon?: IconsType;
  size?: "sm" | "base";
};

export type ProjectType = {
  image: string;
  title: string;
  description: string;
  status: "Completed" | "In Progress" | "On Hold";
  technologies: string[];
  liveLink: string;
  repoLink?: string;
};

export type ExperienceType = {
  title: string;
  company?: string;
  duration: string;
  description: string;
  technologies: string[];
};

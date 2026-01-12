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

export interface SpotifySong {
  album: string;
  album_art_url: string;
  artist: string;
  song: string;
  track_id: string;
  timestamps: {
    start: number;
    end: number;
  };
}

export interface VsCodeActivity {
  application_id: string;
  name: string;
  assets: {
    large_image: string;
    large_text: string;
    small_image?: string;
    small_text?: string;
  };
  details: string;
  state: string;
  timestamps: {
    start: number;
  };
}

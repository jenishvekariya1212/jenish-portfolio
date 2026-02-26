export interface Experience {
  company: string;
  role: string;
  period: string;
  points: string[];
  technologies: string[];
}

export interface Project {
  title: string;
  subtitle: string;
  badge: string;
  color: string;
  description: string;
  responsibilities: string[];
  stack: string[];
  link?: string;
}

export interface Education {
  degree: string;
  institute: string;
  period: string;
  score: string;
  icon: string;
}

export interface SkillGroup {
  title: string;
  icon: string;
  tags: string[];
}

export interface Certificate {
  title: string;
  icon: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  bio: string;
  bioParagraph2: string;
  bioHomeExtended?: string;
  email?: string;
  linkedin?: string;
  github?: string;
  cv?: string;
}

export interface Skill {
  name: string;
  category: 'technical' | 'tools';
}

export interface Language {
  name: string;
  level: string;
}

export interface TimelineItem {
  title: string;
  organization: string;
  date: string;
  description: string;
  certificate?: string;
}

export interface Project {
  slug: string;
  title: string;
  technology: string;
  image: string;
  date?: string;
  description?: string;
  features?: string[];
  technologies?: string[];
  githubURL?: string;
  certificate?: string;
  figmaURL?: string;
  websiteURL?: string;
  images?: string[];
}

export interface RotatingTextConfig {
  items: string[];
  speed?: number;
}

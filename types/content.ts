// All TypeScript interfaces matching JSON schemas

export interface Profile {
  name: string;
  tagline: string;
  email: string;
  phone: string;
  location: string;
  bio: string[];
  cgpa: string;
  year: string;
  college: string;
  branch: string;
  availability: string;
  resumeAvailable: boolean;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  github: string;
  live: string;
  image: string;
  featured: boolean;
}

export interface SkillItem {
  name: string;
  emoji?: string;
}

export interface SkillCategory {
  name: string;
  skills: SkillItem[];
}

export interface SkillsData {
  categories: SkillCategory[];
}

export interface EducationItem {
  year: string;
  title: string;
  institution: string;
  location: string;
  grade: string;
  current: boolean;
  description: string;
}

export interface Achievement {
  title: string;
  description: string;
  icon: string;
  date?: string;
  highlight: boolean;
}

export interface Certificate {
  title: string;
  issuer: string;
  date?: string;
  image?: string;
  link?: string;
}

export interface SocialProfile {
  platform: string;
  username: string;
  url: string;
  icon: string;
  color: string;
  stats?: string;
}

export interface Skill {
  name: string;
  level: number; // 0-100%
}

export interface SkillCategory {
  title: string;
  icon: string; // lucide icon name
  skills: Skill[];
}

export interface TimelineItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  location?: string;
  details: string[];
  type: 'experience' | 'education';
}

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  tags: string[];
  status: 'active' | 'coming-soon';
  githubUrl?: string;
  demoUrl?: string;
  hasTerminalSimulator?: boolean;
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  description: string;
  credentialUrl?: string;
}

export interface ExpenseItem {
  id: string;
  description: string;
  amount: number;
  category: string;
  date: string;
}

export interface SkillSession {
  sessionNumber: number;
  score: number;
  whatWentWell: string;
  improvements: string;
}

export interface TestSkill {
  id: string;
  name: string;
  score: number;
  description: string;
  sessions: SkillSession[];
  evidence: string[];
  testingEvidence?: string[];
}

export interface CategoryData {
  overallScore: number;
  skills: TestSkill[];
}

export interface TestCategories {
  augmentedIntelligence?: CategoryData;
  durableSkills?: CategoryData;
  domainSkills?: CategoryData;
}

export type CategoryKey = keyof TestCategories;

export interface Test {
  id: string;
  name: string;
  date: string;
  categories: TestCategories;
}

export interface Certificate {
  id: string;
  title: string;
  imageUrl: string;
}

export interface Innovation {
  id: string;
  title: string;
  completedOn: string;
  subtitle: string;
  tag: string;
  imageUrl: string;
}

export interface PassportData {
  personName: string;
  tests: Test[];
  certificates: Certificate[];
  innovations: Innovation[];
}

export type ViewType = 'overview' | 'category' | 'skill';

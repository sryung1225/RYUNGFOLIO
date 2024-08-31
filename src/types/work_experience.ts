export interface WorkExperienceType {
  id: number;
  company: string;
  company_eng: string;
  period: string;
  position: string;
  works_projects: ProjectType[];
}

interface ProjectType {
  title: string;
  details?: string[];
}

export interface WorkExperienceType {
  company: string;
  logo: string;
  period: string;
  position: string;
  works_projects: ProjectType[];
}

interface ProjectType {
  title: string;
  details?: string[];
}

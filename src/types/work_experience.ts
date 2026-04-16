export interface WorkExperienceType {
  id: number;
  company: string;
  companyEng: string;
  period: string;
  position: string;
  worksProjects: WorkProjectType[];
  arrayIndex: number;
}

interface WorkProjectType {
  title: string;
  details?: string[];
}

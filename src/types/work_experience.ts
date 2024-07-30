export interface WorkExperienceType {
  company: CompanyType;
  logo: string;
  period: string;
  position: string;
  works_projects: ProjectType[];
}

export type CompanyType = '티몬' | '멋쟁이사자처럼';

interface ProjectType {
  title: string;
  details?: string[];
}

export interface WorkExperienceType {
  company: CompanyType;
  image: string;
  period: string;
  position: string;
  projects: ProjectType[];
}

export type CompanyType = '티몬' | '멋쟁이사자처럼';

interface ProjectType {
  title: string;
  details: string[];
}

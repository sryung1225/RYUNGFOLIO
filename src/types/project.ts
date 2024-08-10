interface FeatureType {
  title: string;
  descriptions: string[];
}

interface PostType {
  title: string;
  number: number;
}

export interface ProjectType {
  id: number;
  title: string;
  startDate: string;
  endDate: string;
  skills: string[];
  member: string;
  role: 'Front-End';
  summary: string;
  skillReason: string[];
  features: FeatureType[];
  posts: PostType[];
  screenshots: string[];
}

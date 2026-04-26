interface FeatureType {
  id: number;
  title: string;
  descriptions: string[];
}

interface PostType {
  title: string;
  number: number;
}

// 프로젝트 기본 타입 (목록용)
export interface ProjectListItem {
  id: number;
  title: string;
  startDate: string;
  endDate: string | null;
  skills: string[];
  member: string;
  role: string;
  summary: string;
  github: string;
  website: string | null;
  skillReason: string[];
  screenshots: string[];
}

// 프로젝트 상세 타입 (features, posts 포함)
export interface ProjectType extends ProjectListItem {
  features: FeatureType[];
  posts: PostType[];
}

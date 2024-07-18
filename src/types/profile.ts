export interface ProfileType {
  title: string;
  details: ProfileDetailType[];
}

interface ProfileDetailType {
  term: string;
  description: string;
  type?: 'link';
  href?: string;
}

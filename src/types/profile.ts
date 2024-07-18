export type ProfileType = {
  title: string;
  details: ProfileDetailType[];
};

type ProfileDetailType = {
  term: string;
  description: string;
  type?: 'link';
  href?: string;
};

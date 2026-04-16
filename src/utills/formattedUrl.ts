interface ParameterType {
  type: 'works' | 'projects';
  title: string;
}

const formattedUrl = ({ type, title }: ParameterType): string => {
  if (type === 'works') {
    return `/img/works/${title}.png`;
  }
  return `/img/projects/${title}/`;
};

export default formattedUrl;

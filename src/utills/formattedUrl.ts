interface ParameterType {
  type: 'works' | 'projects';
  title: string;
}

const formattedUrl = ({ type, title }: ParameterType): string => {
  let fullUrl = '';
  if (type === 'works') {
    fullUrl = `https://${process.env.NEXT_PUBLIC_SUPABASE_HOSTNAME}
            /storage/v1/object/public/images/works/${title}.png`;
  } else if (type === 'projects') {
    fullUrl = `https://${process.env.NEXT_PUBLIC_SUPABASE_HOSTNAME}
    /storage/v1/object/public/images/projects/${title}/`;
  }
  return fullUrl.replace(/\s/g, '');
};

export default formattedUrl;

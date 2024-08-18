import Image from 'next/image';
import { ProjectType } from '@/types/project';
import { v4 as uuidv4 } from 'uuid';

type GalleryPropsType = Partial<ProjectType>;

export default async function Gallery({
  title,
  screenshots,
}: GalleryPropsType) {
  if (!screenshots || screenshots.length === 0) {
    return null;
  }
  return (
    <ul>
      {screenshots &&
        screenshots.map((shot) => (
          <li key={uuidv4()}>
            <Image
              src={`/${shot}`}
              alt={`${title}의 스크린샷`}
              width={400}
              height={300}
            />
          </li>
        ))}
    </ul>
  );
}

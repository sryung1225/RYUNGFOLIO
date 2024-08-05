import Link from 'next/link';
import Image from 'next/image';
import styles from '@/styles/components/projects/ProjectCard.module.scss';
import { ProjectType } from '@/types/project';
import formattedPeriod from '@/utills/formattedPeriod';

const converterSkillName = (skill: string) => {
  return skill.toLowerCase().replace(/[.-]/g, '');
};

export default async function ProjectCard({
  project,
}: {
  project: ProjectType;
}) {
  return (
    <li className={styles.card}>
      <Link href={`/projects/${project.id}`}>
        <div className={styles.thumbnail}>
          <Image
            src={project.thumbnail || '/img/dummy.jpg'}
            alt="{project.title} 대표 이미지"
            sizes="500px"
            fill
            style={{
              objectFit: 'cover',
            }}
          />
        </div>
        <div className={styles.description}>
          <h4 className={styles.title}>{project.title}</h4>
          <p className={styles.summary}>{project.summary}</p>
          <p className={styles.period}>
            {formattedPeriod(project.startDate, project.endDate)}
          </p>
          {project.skills && (
            <ul className={styles.skills}>
              {project.skills.map((skill) => (
                <li key={skill}>
                  <span className="a11yHidden">{skill}</span>
                  <Image
                    src={`/img/skills/${converterSkillName(skill)}.svg`}
                    alt={skill}
                    width="24"
                    height="24"
                  />
                </li>
              ))}
            </ul>
          )}
        </div>
      </Link>
    </li>
  );
}

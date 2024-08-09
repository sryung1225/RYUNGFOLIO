import Link from 'next/link';
import Image from 'next/image';
import styles from '@/styles/projects/ProjectCard.module.scss';
import { ProjectType } from '@/types/project';
import formattedPeriod from '@/utills/formattedPeriod';
import formattedSkillName from '@/utills/formattedSkillName';

export default async function ProjectCard({
  project,
}: {
  project: ProjectType;
}) {
  return (
    <li className={styles.card} key={project.title}>
      <Link href={`/projects/${project.id}`}>
        <div className={styles.thumbnail}>
          <Image
            src={project.thumbnail || '/img/dummy.jpg'}
            alt="RYUNGFOLIO"
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
                    src={`/img/skills/${formattedSkillName(skill)}.svg`}
                    alt={skill}
                    width="24"
                    height="24"
                  />
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className={styles.button}>자세히 보기</div>
      </Link>
    </li>
  );
}

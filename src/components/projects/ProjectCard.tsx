/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link';
import Image from 'next/image';
import styles from '@/styles/components/projects/projectCard.module.scss';
import { ProjectType } from '@/types/project';
import getProjects from '@/api/projects';
import getTimestamp from '@/utills/getTimestamp';
import formattedPeriod from '@/utills/formattedPeriod';

const converterSkillName = (skill: string) => {
  return skill.toLowerCase().replace(/[.-]/g, '');
};

export default async function ProjectCard() {
  const PROJECT: ProjectType[] = await getProjects();
  PROJECT.sort((a, b) => {
    if (a.endDate === null && b.endDate === null) return 0;
    if (a.endDate === null) return -1;
    if (b.endDate === null) return 1;
    return getTimestamp(b.endDate) - getTimestamp(a.endDate);
  });

  return (
    <>
      {PROJECT.map((work) => (
        <li className={styles.card} key={work.title}>
          <Link href={`/projects/${work.id}`}>
            <div className={styles.thumbnail}>
              <Image
                src={work.thumbnail || '/img/dummy.jpg'}
                alt="RYUNGFOLIO"
                sizes="500px"
                fill
                style={{
                  objectFit: 'cover',
                }}
              />
            </div>
            <div className={styles.description}>
              <h4 className={styles.title}>{work.title}</h4>
              <p className={styles.summary}>{work.summary}</p>
              <p className={styles.period}>
                {formattedPeriod(work.startDate, work.endDate)}
              </p>
              {work.skills && (
                <ul className={styles.skills}>
                  {work.skills.split(', ').map((skill) => (
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
      ))}
    </>
  );
}

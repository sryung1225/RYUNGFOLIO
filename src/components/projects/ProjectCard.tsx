import Image from 'next/image';
import styles from '@/styles/components/projects/projectCard.module.scss';
import { ProjectType } from '@/types/project';
import getProjects from '@/api/projects';

const converterSkillName = (skill: string) => {
  return skill.toLowerCase().replace(/\./g, '');
};

export default async function ProjectCard() {
  const PROJECT: ProjectType[] = await getProjects();
  return (
    <>
      {PROJECT.map((work) => (
        <li className={styles.card} key={work.title}>
          <Image
            src={work.thumbnail || '/img/dummy.jpg'}
            alt="RYUNGFOLIO"
            style={{
              width: '100%',
              height: 'auto',
            }}
            width={500}
            height={300}
          />
          <div className={styles.description}>
            <h5 className={styles.title}>{work.title}</h5>
            <p className={styles.summary}>{work.summary}</p>
            <p className={styles.period}>
              {work.startDate} - {work.endDate}
            </p>
            {work.skills && (
              <ul className={styles.skills}>
                {work.skills.split(', ').map((skill) => (
                  <li key={skill}>
                    <span className="a11yHidden">{skill}</span>
                    <Image
                      src={`/img/skill_${converterSkillName(skill)}.svg`}
                      alt={skill}
                      width="24"
                      height="24"
                    />
                  </li>
                ))}
              </ul>
            )}
          </div>
        </li>
      ))}
    </>
  );
}

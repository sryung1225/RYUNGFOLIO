import Image from 'next/image';
import styles from '@/styles/components/projects/projectCard.module.scss';

interface ProjectType {
  title: string;
  thumbnail: string;
  summary: string;
  period: string;
  skills: string[];
}

const PROJECT: ProjectType[] = [
  {
    title: 'RYUNGFOLIO',
    thumbnail: '/img/ryungfolio.png',
    summary: '개인 포트폴리오',
    period: '2024.07.01 - 2024.08.10',
    skills: ['Nextjs', 'TypeScript', 'SASS'],
  },
];

const converterSkillName = (skill: string) => {
  return skill.toLowerCase().replace(/\./g, '');
};

export default function ProjectCard() {
  return (
    <>
      {PROJECT.map((work) => (
        <li className={styles.card} key={work.title}>
          <Image
            src={work.thumbnail}
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
            <p className={styles.period}>{work.period}</p>
            <ul className={styles.skills}>
              {work.skills.map((skill) => (
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
          </div>
        </li>
      ))}
    </>
  );
}

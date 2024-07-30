import Image from 'next/image';
import styles from '@/styles/components/work/ExperienceCard.module.scss';
import { WorkExperienceType } from '@/types/work_experience';
import { v4 as uuidv4 } from 'uuid';
import getWorks from '@/api/works';

export default async function ExperienceCard() {
  const WORKS: WorkExperienceType[] = await getWorks();
  return (
    <>
      {WORKS.map((experience) => (
        <article className={styles.card} key={experience.company}>
          <div className={styles.info}>
            <Image
              src={experience.logo}
              alt={`${experience.company} 로고`}
              width={80}
              height={80}
            />
            <h5 className={styles.title}>{experience.company}</h5>
            <p>{experience.period}</p>
            <p>{experience.position}</p>
          </div>
          <ul className={styles.do_list}>
            {experience.works_projects.map((item) => (
              <li className={styles.do_item} key={item.title}>
                <h6 className={styles.title}>{item.title}</h6>
                <ul className={styles.description}>
                  {item.details &&
                    item.details.map((detail) => (
                      <li key={uuidv4()}>{detail}</li>
                    ))}
                </ul>
              </li>
            ))}
          </ul>
        </article>
      ))}
    </>
  );
}

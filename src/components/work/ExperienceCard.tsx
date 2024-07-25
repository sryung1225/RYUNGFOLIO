import Image from 'next/image';
import WORK_EXPEREINCES from '@/constants/work_experience';
import styles from '@/styles/components/work/ExperienceCard.module.scss';
import { CompanyType } from '@/types/work_experience';
import { v4 as uuidv4 } from 'uuid';

export default function ExperienceCard({ company }: { company: CompanyType }) {
  const experience = WORK_EXPEREINCES.find((exp) => exp.company === company);
  if (!experience) {
    return null;
  }

  return (
    <article className={styles.card}>
      <div className={styles.info}>
        <Image
          src={experience.image}
          alt={`${experience.company} 로고`}
          width={80}
          height={80}
        />
        <h5 className={styles.title}>{experience.company}</h5>
        <p>{experience.period}</p>
        <p>{experience.position}</p>
      </div>
      <ul className={styles.do_list}>
        {experience.projects.map((item) => (
          <li className={styles.do_item} key={item.title}>
            <h6 className={styles.title}>{item.title}</h6>
            <ul className={styles.description}>
              {item.details &&
                item.details.map((detail) => <li key={uuidv4()}>{detail}</li>)}
            </ul>
          </li>
        ))}
      </ul>
    </article>
  );
}

'use client';

import Image from 'next/image';
import { useState } from 'react';
import WORK_EXPEREINCES from '@/constants/work_experience';
import styles from '@/styles/components/work/ExperienceCard.module.scss';
import { CompanyType } from '@/types/work_experience';
import { v4 as uuidv4 } from 'uuid';

export default function ExperienceCard({ company }: { company: CompanyType }) {
  const [openItems, setOpenItems] = useState<{ [key: string]: boolean }>({});
  const [hasInteracted, setHasInteracted] = useState<{
    [key: string]: boolean;
  }>({});

  const experience = WORK_EXPEREINCES.find((exp) => exp.company === company);
  if (!experience) {
    return null;
  }
  const toggleItem = (title: string) => {
    setOpenItems((prevOpenItems) => ({
      ...prevOpenItems,
      [title]: !prevOpenItems[title],
    }));
    setHasInteracted((prevHasInteracted) => ({
      ...prevHasInteracted,
      [title]: true,
    }));
  };

  const getClassName = (title: string) => {
    if (openItems[title]) {
      return styles.open;
    }
    if (hasInteracted[title]) {
      return styles.hide;
    }
    return '';
  };

  return (
    <div className={styles.card}>
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
          <li
            className={`${styles.do_item} ${getClassName(item.title)}`}
            key={item.title}
          >
            <button
              onClick={() => toggleItem(item.title)}
              type="button"
              className={styles.detail_toggle}
            >
              <span className="a11yHidden">
                {item.title} 내용 자세히 더 보기
              </span>
            </button>
            <h6 className={styles.title}>{item.title}</h6>
            <ul className={styles.description}>
              {item.details.map((detail) => (
                <li key={uuidv4()}>{detail}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

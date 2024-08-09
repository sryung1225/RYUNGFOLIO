import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Header from '@/components/common/Header';
import Gallery from '@/components/projects/Gallery';
import styles from '@/styles/projects/ProjectDetail.module.scss';
import { getProjectDetail } from '@/services/projects';
import type { ProjectType } from '@/types/project';
import formattedPeriod from '@/utills/formattedPeriod';
import formattedSkillName from '@/utills/formattedSkillName';
import { v4 as uuidv4 } from 'uuid';

export default async function ProjectDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const project: ProjectType = await getProjectDetail(params);
  return (
    <>
      <Header projectDetails />
      <section className={styles.wrapper}>
        <h2 className={styles.title} data-text={project.title}>
          {project.title}
        </h2>
        <p className={styles.summary}>{project.summary}</p>
        <Image
          className={styles.thumbnail}
          src={project.thumbnail || '/img/dummy.jpg'}
          alt={`${project.title} 대표 이미지`}
          width="1120"
          height="800"
          priority
        />
        <h3 className="a11yHidden">프로젝트 정보</h3>
        <dl className={styles.info}>
          <dt>기한</dt>
          <dd>{formattedPeriod(project.startDate, project.endDate)}</dd>
          <dt>사용 기술</dt>
          <dd>
            {project.skills && (
              <ul className={styles.skills}>
                {project.skills.map((skill) => (
                  <li key={skill}>
                    <Image
                      src={`/img/skills/${formattedSkillName(skill)}.svg`}
                      alt={skill}
                      width="24"
                      height="24"
                    />
                    {skill}
                  </li>
                ))}
              </ul>
            )}
          </dd>
          <dt>규모 / 인원</dt>
          <dd>{project.member}</dd>
          <dt>역할</dt>
          <dd>{project.role}</dd>
        </dl>
        {project.skillReason && (
          <>
            <h3>기술 선정 이유</h3>
            <ul>
              {project.skillReason.map((reason) => (
                <li key={reason}>{reason}</li>
              ))}
            </ul>
          </>
        )}
        {project.features && (
          <>
            <h3>주요 기능 및 개인 기여</h3>
            <dl>
              {project.features.map((feature) => (
                <React.Fragment key={feature.title}>
                  <dt>{feature.title}</dt>
                  {feature.descriptions.map((desc) => (
                    <dd key={uuidv4()}>{desc}</dd>
                  ))}
                </React.Fragment>
              ))}
            </dl>
          </>
        )}
        {project.posts && (
          <>
            <h3>관련 포스팅</h3>
            <ul>
              {project.posts.map((post) => (
                <li key={post.number}>
                  <Link
                    href={`https://s-ryung.tistory.com/${post.number}`}
                    target="_blank"
                  >
                    {post.title}
                  </Link>
                </li>
              ))}
            </ul>
          </>
        )}
        {project.screenshots && (
          <>
            <h3>갤러리</h3>
            <Gallery title={project.title} screenshots={project.screenshots} />
          </>
        )}
      </section>
    </>
  );
}

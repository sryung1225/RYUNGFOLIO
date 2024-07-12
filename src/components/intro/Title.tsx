'use client';

import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import DOMPurify from 'dompurify';
import styles from '@/styles/components/intro/Title.module.scss';

const textData = [
  '안녕하세요',
  '항상 더 나은 길을 고민하는',
  `웹 <span class="${styles.point_red}">프론트엔드</span> 개발자`,
  `<span class="${styles.point_green}">이성령</span> 입니다`,
];

export default function Title() {
  const [displayedText, setDisplayedText] = useState<string[]>([]); // 타이핑 완료된 텍스트
  const [paragraphIndex, setParagraphIndex] = useState(0); // 문장 index
  const [charIndex, setCharIndex] = useState(0); // 글자 index

  useEffect(() => {
    // 종료 조건: 모든 문장 탐색 완료
    if (paragraphIndex >= textData.length) return;

    const currentString = textData[paragraphIndex]; // 현재 표시할 텍스트
    const openTagIndex = currentString.indexOf('<span'); // 열림태그 시작 index
    const closeTagIndex = currentString.indexOf('</span>') + 7; // 닫힘태그 끝 index

    // 화면에 표시할 텍스트 지정
    const updateDisplayedText = (endIndex: number) => {
      setDisplayedText((prev) => [
        ...prev.slice(0, paragraphIndex),
        currentString.slice(0, endIndex),
      ]);
      setCharIndex(endIndex);
    };

    let interval: NodeJS.Timeout;

    // 다음 글자 타이핑
    const typeNextChar = () => {
      updateDisplayedText(charIndex + 1);
      // 문장의 마지막 글자까지 타이핑 완료되면 다음 문장으로 이동
      if (charIndex + 1 === currentString.length) {
        setParagraphIndex((prev) => prev + 1);
        setCharIndex(0);
        clearInterval(interval);
      }
    };

    if (charIndex === openTagIndex) {
      // span 태그 열림 : 텍스트 업데이트
      updateDisplayedText(
        openTagIndex + currentString.substring(openTagIndex).indexOf('>') + 1,
      );
    } else if (charIndex > openTagIndex && charIndex < closeTagIndex - 7) {
      // span 태그 내부 텍스트 타이핑
      interval = setInterval(typeNextChar, 100);
    } else if (charIndex === closeTagIndex - 7) {
      // span 태그 닫힘 : 텍스트 업데이트
      updateDisplayedText(closeTagIndex);
    } else {
      // 텍스트 타이핑
      interval = setInterval(typeNextChar, 100);
    }
    // eslint-disable-next-line consistent-return
    return () => clearInterval(interval); // 클린업 : interval 정리
  }, [charIndex, paragraphIndex]);

  return (
    <h2>
      {displayedText.map((text) => (
        <p
          className={styles.title}
          key={uuidv4()}
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(text) }}
        />
      ))}
    </h2>
  );
}

import { WorkExperienceType } from '@/types/work_experience';

const WORK_EXPEREINCES: WorkExperienceType[] = [
  {
    company: '티몬',
    image: '/img/work_tmon.png',
    period: '2021.03 - 2022.11 (1년 8개월)',
    position: '프론트개발팀 마크업개발자',
    projects: [
      {
        title: '연간 대규모 프로젝트에 마크업 개발자로 참여',
        details: [
          '공동 구매 형태의 신규 딜 런칭 [프리오더딜] 프로젝트 참여',
          '신규 채팅 기능 도입 [SPC 파트너센터 고객채팅] 프로젝트 참여',
          '구독 형태 멤버십 신규 도입 [구독 플러스] 프로젝트 참여',
        ],
      },
      {
        title: 'PC / Mobile Web 유지보수 진행',
        details: [
          '사내 서비스 전체 영역의 신규 기능 추가, 수정 요청 및 장애 업무 상시 대응',
          '웹 접근성 보완과 DX 개선을 주 목적으로 레거시 코드 정리와 컴포넌트 병합 및 분리 작업 진행',
          '전역 스타일 수단인 reset.css 분석 및 버전 2 배포',
        ],
      },
      {
        title: '팀 내부 업무 진행',
        details: [
          'gulp를 활용한 팀 내 마크업 작업 환경 개선 작업 진행',
          '미드 레벨과 함께하는 [모던 자바스크립트] 스터디 5주간 운영',
          '신규 입사자 채용 참관 및 교육 진행',
          '적극적인 코드 리뷰와 기술 포스팅 공유를 통한 팀 개발 문화 형성 기여',
        ],
      },
    ],
  },
  {
    company: '멋쟁이사자처럼',
    image: '/img/work_likelion.png',
    period: '2024.02 - 2024.05 (3개월)',
    position: '프론트엔드 개발자 인턴',
    projects: [
      {
        title: '개발 직군 챌린지 플랫폼 [WAVED] 출시',
        details: [
          '디자이너, 프론트엔드 개발자, 백엔드 개발자로 구성된 팀에 프론트엔드 개발자로 참여',
          '서비스 기획부터 QA와 배포까지 서비스 출시를 위한 전 과정 참여',
          '서비스 운영 및 [멋쟁이사자처럼]의 서비스 라인 탑재를 위한 인수인계 진행',
          '팀 개발 문화 최적화를 위한 프로젝트 스케폴딩 및 컨벤션 정립',
          '검색 엔진 최적화를 목표로 하며 Next.js의 도입 및 서버 사이드 렌더링 적용',
          '홈, 챌린지 상세 정보 및 신청, 리뷰의 기능 및 화면 구현',
        ],
      },
    ],
  },
];

export default WORK_EXPEREINCES;

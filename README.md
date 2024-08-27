# RYUNGFOLIO 🎄

<div align="center">
  <img src="https://github.com/user-attachments/assets/80fb31d1-36c2-4d92-bd37-15957bde29fd" />
</div>

## 📢 프로젝트 개요

![기한](https://img.shields.io/badge/Project%20Period-2024/06/28%20--%2008/10-C5554D)<br>

> 🏠 [ryungfolio.vercel.app](https://ryungfolio.vercel.app/)

프로젝트 기술 위주의 프론트엔드 개발자 포트폴리오 사이트 (2024)

<br />

## 🌈 기술 스택

- 스크립트 언어 : ![Typescript](https://img.shields.io/badge/Typescript-3178C6?style=flat&logo=Typescript&logoColor=white)
- 프레임워크 : ![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat&logo=Next.js&logoColor=white) (v14 App Router)
- 스타일링 : ![SASS](https://img.shields.io/badge/Sass-CC6699?style=flat&logo=Sass&logoColor=white)
- 데이터베이스 : ![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=flat&logo=supabase&logoColor=white)
- API 통신 및 테스트 : ![Axios](https://img.shields.io/badge/Axios-b20000?style=flat&logo=axios&logoColor=white) ![PostMan](https://img.shields.io/badge/Postman-FF6C37?style=flat&logo=Postman&logoColor=white)
- 배포 : ![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat&logo=vercel&logoColor=white)
- 디자인 : ![Figma](https://img.shields.io/badge/Figma-F24E1E.svg?style=flat&logo=figma&logoColor=white)
- 형상 관리 : ![Git](https://img.shields.io/badge/Git-F05032?style=flat&logo=git&logoColor=white)

<br />

## 🥁 주요 작업

### FEATURE

- Next.js의 App Router 특징에 기반하여 Server Component 위주로 활용. 사용자와 상호작용이 필요한 Header와 같은 일부 Client Componenet를 제외하고는 Server Componenet를 기본으로 적용하여 Next.js의 권장 사항을 준수
- INTRO 섹션을 기준으로 Header의 스타일을 전환하기 위해 사용자의 스크롤 위치와 브라우저의 크기 속성에 접근해 상태를 전환하도록 구현
- Supabase를 통해 업무 경험과 프로젝트 경험 같은 개인적인, 그리고 잦은 수정이 일어날 수 있는 내용을 데이터베이스로 관리하는 방식을 선택. 각 데이터는 RESTful API 형태로 반환하고, 프로젝트에서 이를 호출하여 사용하는 방식을 채택
  - 🔗 [수파베이스를 이용해서 RESTful API 만들고 사용하기](https://s-ryung.tistory.com/108)
- Nodemailer 라이브러리를 활용하여 포트폴리오의 사용자에게 메일을 발송하는 기능 구현. Next.js의 API Route를 활용하여 클라이언트에서 Nodemailer로 이메일 전송을 위한 요청(POST)을 보내고 수행

### MARKUP

- CSS의 고유 기능인 keyframes와 animation, 그리고 SASS의 고유 기능인 변수 지정과 반복문 등을 결합하여 다양하고 부드럽고 가벼운 애니메이션 효과 연출
- media-query를 활용하여 최소 너비 360px의 모바일 기기까지 대응할 수 있는 반응형 디자인 적용
- 가독성을 위해 단순한 UI와 한글 적용. 적극적인 웹 접근성 준수를 위해 sementic한 html 태그 사용 및 대체 텍스트 탑재

<br />

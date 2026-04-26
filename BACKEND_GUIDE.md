# RYUNGFOLIO 백엔드 개발 가이드

> 백엔드 지식이 없어도 이해할 수 있는 상세 가이드입니다.

## 📚 목차

1. [프로젝트 개요](#-프로젝트-개요)
2. [기술 스택 설명](#-기술-스택-설명)
3. [완료된 작업](#-완료된-작업)
4. [아키텍처 이해하기](#-아키텍처-이해하기)
5. [API 엔드포인트 상세](#-api-엔드포인트-상세)
6. [환경 설정 가이드](#-환경-설정-가이드)
7. [다음 단계](#-다음-단계)
8. [트러블슈팅](#-트러블슈팅)
9. [용어 설명](#-용어-설명)

---

## 🎯 프로젝트 개요

**RYUNGFOLIO**는 포트폴리오 웹사이트로, 프로젝트와 업무 경험을 보여주는 사이트입니다.

### 백엔드의 역할

백엔드는 "데이터를 관리하고 제공하는 서버"입니다. 마치 식당의 주방과 같아요:
- **프론트엔드** (손님이 보는 홀) = 사용자가 보는 웹페이지
- **백엔드** (주방) = 데이터를 저장하고 요청에 따라 제공
- **API** (웨이터) = 프론트엔드와 백엔드를 연결

---

## 🛠 기술 스택 설명

### 1. **Next.js App Router**
- **무엇인가요?** 웹사이트를 만드는 React 기반 프레임워크
- **왜 사용하나요?** 프론트엔드와 백엔드를 하나의 프로젝트에서 관리 가능
- **어디에 쓰이나요?** `src/app/api/` 폴더에서 API를 만들 수 있습니다

### 2. **Prisma ORM**
- **무엇인가요?** 데이터베이스를 쉽게 다루게 해주는 도구
- **왜 사용하나요?** SQL을 직접 작성하지 않고도 JavaScript/TypeScript로 데이터베이스 조작 가능
- **어디에 쓰이나요?** `prisma/schema.prisma`에 데이터 구조 정의, `src/services/`에서 사용

### 3. **Neon PostgreSQL**
- **무엇인가요?** 클라우드 기반 PostgreSQL 데이터베이스
- **왜 사용하나요?** 서버리스로 관리가 편하고, 무료 플랜 제공
- **어디에 쓰이나요?** 프로젝트, 업무 경험 등의 모든 데이터 저장

### 4. **Nodemailer**
- **무엇인가요?** 이메일을 보내주는 라이브러리
- **왜 사용하나요?** 컨택트 폼을 통해 받은 문의를 이메일로 전달
- **어디에 쓰이나요?** `src/services/nodemailer.ts`

---

## ✅ 완료된 작업

### Phase 1: 데이터베이스 마이그레이션 (완료)
- ✅ Supabase → Prisma + Neon PostgreSQL 전환
- ✅ 데이터 모델 정의 (`prisma/schema.prisma`)
  - `Project` (프로젝트)
  - `Feature` (프로젝트 기능)
  - `Post` (프로젝트 블로그 포스트)
  - `Work` (업무 경험)
  - `WorkProject` (업무 프로젝트)

### Phase 2: 서비스 레이어 구현 (완료)
- ✅ `src/services/projects.ts` - 프로젝트 데이터 조회 로직
- ✅ `src/services/workExperiences.ts` - 업무 경험 조회 로직
- ✅ `src/services/nodemailer.ts` - 이메일 전송 로직

### Phase 3: API 엔드포인트 구현 (완료)
- ✅ `GET /api/projects` - 프로젝트 목록 조회
- ✅ `GET /api/projects/[id]` - 프로젝트 상세 조회
- ✅ `GET /api/work-experiences` - 업무 경험 조회
- ✅ `POST /api/contact` - 컨택트 폼 제출

### Phase 4: 보안 강화 (완료)
- ✅ 입력값 검증 (이메일 형식, 필수 필드)
- ✅ XSS 방지 (HTML 이스케이프 처리)
- ✅ TypeScript 타입 안전성 개선
- ✅ 에러 핸들링 및 적절한 HTTP 상태 코드 반환

---

## 🏗 아키텍처 이해하기

### 폴더 구조
```
RYUNGFOLIO/
├── prisma/
│   └── schema.prisma          # 데이터베이스 스키마 정의
├── src/
│   ├── app/
│   │   └── api/               # API 엔드포인트
│   │       ├── contact/
│   │       │   └── route.ts   # POST /api/contact
│   │       ├── projects/
│   │       │   ├── route.ts   # GET /api/projects
│   │       │   └── [id]/
│   │       │       └── route.ts # GET /api/projects/[id]
│   │       └── work-experiences/
│   │           └── route.ts   # GET /api/work-experiences
│   ├── lib/
│   │   └── prisma.ts          # Prisma 클라이언트 싱글톤
│   ├── services/              # 비즈니스 로직
│   │   ├── projects.ts
│   │   ├── workExperiences.ts
│   │   └── nodemailer.ts
│   └── types/                 # TypeScript 타입 정의
│       ├── project.ts
│       └── contact.ts
└── .env                       # 환경 변수 (실제 값)
└── .env.example               # 환경 변수 템플릿
```

### 데이터 흐름

```
사용자 요청
    ↓
API 엔드포인트 (src/app/api/)
    ↓
서비스 레이어 (src/services/)
    ↓
Prisma 클라이언트 (src/lib/prisma.ts)
    ↓
Neon PostgreSQL 데이터베이스
    ↓
응답 반환
```

**예시: 프로젝트 목록 조회**
1. 사용자가 `GET /api/projects` 호출
2. `src/app/api/projects/route.ts`의 `GET` 함수 실행
3. `getProjects()` 서비스 함수 호출
4. Prisma를 통해 데이터베이스에서 프로젝트 목록 조회
5. JSON 형식으로 응답 반환

---

## 🔌 API 엔드포인트 상세

### 1. 프로젝트 목록 조회

**엔드포인트:** `GET /api/projects`

**설명:** 모든 프로젝트의 기본 정보를 조회합니다.

**요청 예시:**
```bash
curl http://localhost:3000/api/projects
```

**응답 예시:**
```json
[
  {
    "id": 1,
    "title": "RYUNGFOLIO",
    "startDate": "2024-01",
    "endDate": null,
    "skills": ["Next.js", "TypeScript", "Prisma"],
    "member": "1인",
    "role": "Front-End",
    "summary": "개인 포트폴리오 웹사이트",
    "github": "https://github.com/...",
    "website": "https://...",
    "skillReason": ["SSR", "TypeScript"],
    "screenshots": ["/img/projects/..."]
  }
]
```

**파일 위치:** `src/app/api/projects/route.ts`

---

### 2. 프로젝트 상세 조회

**엔드포인트:** `GET /api/projects/[id]`

**설명:** 특정 프로젝트의 상세 정보 (features, posts 포함) 조회

**요청 예시:**
```bash
curl http://localhost:3000/api/projects/1
```

**응답 예시:**
```json
{
  "id": 1,
  "title": "RYUNGFOLIO",
  "startDate": "2024-01",
  "endDate": null,
  "skills": ["Next.js", "TypeScript"],
  "member": "1인",
  "role": "Front-End",
  "summary": "개인 포트폴리오 웹사이트",
  "github": "https://github.com/...",
  "website": "https://...",
  "skillReason": ["SSR", "TypeScript"],
  "screenshots": ["/img/projects/..."],
  "features": [
    {
      "id": 1,
      "title": "반응형 디자인",
      "descriptions": ["모바일 대응", "태블릿 대응"]
    }
  ],
  "posts": [
    {
      "title": "개발 회고",
      "number": 1
    }
  ]
}
```

**파일 위치:** `src/app/api/projects/[id]/route.ts`

**에러 처리:**
- 존재하지 않는 ID: `404 Not Found`
- 서버 오류: `500 Internal Server Error`

---

### 3. 업무 경험 조회

**엔드포인트:** `GET /api/work-experiences`

**설명:** 모든 업무 경험 및 프로젝트 조회

**요청 예시:**
```bash
curl http://localhost:3000/api/work-experiences
```

**응답 예시:**
```json
[
  {
    "id": 1,
    "company": "회사명",
    "companyEng": "Company Name",
    "period": "2023.01 - 2024.01",
    "position": "Front-End Developer",
    "arrayIndex": 0,
    "worksProjects": [
      {
        "id": 1,
        "title": "프로젝트명",
        "details": ["담당 업무 1", "담당 업무 2"]
      }
    ]
  }
]
```

**파일 위치:** `src/app/api/work-experiences/route.ts`

---

### 4. 컨택트 폼 제출

**엔드포인트:** `POST /api/contact`

**설명:** 컨택트 폼을 통한 이메일 전송

**요청 예시:**
```bash
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "email": "sender@example.com",
    "name": "홍길동",
    "content": "문의 내용입니다."
  }'
```

**요청 본문:**
```json
{
  "email": "sender@example.com",
  "name": "홍길동",
  "content": "문의 내용입니다."
}
```

**성공 응답:**
```json
{
  "message": "전송 성공!\n곧 회신드릴게요"
}
```

**실패 응답:**
```json
{
  "message": "올바른 형식으로 입력해주세요"
}
```

**파일 위치:** `src/app/api/contact/route.ts`

**보안 기능:**
- 이메일 형식 검증
- 필수 필드 검증 (email, name, content)
- XSS 방지 (HTML 이스케이프 처리)

---

## ⚙️ 환경 설정 가이드

### 1단계: 환경 변수 파일 생성

프로젝트 루트에 `.env` 파일을 생성하고 다음 내용을 입력하세요:

```bash
# .env 파일 생성
cp .env.example .env
```

### 2단계: 환경 변수 값 설정

`.env` 파일을 열어서 실제 값으로 변경하세요:

```env
# Database
DATABASE_URL="postgresql://user:password@host/database?sslmode=require"

# Email (for contact form)
GOOGLE_EMAIL="your-email@gmail.com"
GOOGLE_APP_PASSWORD="your-app-password"
```

### 3단계: Neon PostgreSQL 설정

1. **Neon 계정 생성**
   - [https://neon.tech](https://neon.tech) 접속
   - GitHub 계정으로 가입

2. **새 프로젝트 생성**
   - Dashboard에서 "New Project" 클릭
   - 프로젝트명 입력 (예: ryungfolio)

3. **데이터베이스 URL 복사**
   - Connection string 복사
   - `.env` 파일의 `DATABASE_URL`에 붙여넣기

4. **Prisma 마이그레이션 실행**
   ```bash
   # 데이터베이스 스키마 적용
   npx prisma migrate deploy

   # Prisma Client 생성
   npx prisma generate
   ```

### 4단계: Gmail 앱 비밀번호 설정

컨택트 폼을 통한 이메일 전송을 위해 Gmail 앱 비밀번호가 필요합니다.

1. **Google 계정 설정**
   - [https://myaccount.google.com](https://myaccount.google.com) 접속
   - "보안" 탭 클릭

2. **2단계 인증 활성화**
   - 2단계 인증이 활성화되어 있어야 앱 비밀번호 생성 가능

3. **앱 비밀번호 생성**
   - "앱 비밀번호" 검색
   - 앱 선택: "메일"
   - 기기 선택: "기타" → "RYUNGFOLIO" 입력
   - 생성된 16자리 비밀번호 복사

4. **환경 변수 설정**
   ```env
   GOOGLE_EMAIL="your-email@gmail.com"
   GOOGLE_APP_PASSWORD="abcd efgh ijkl mnop"  # 생성된 앱 비밀번호
   ```

### 5단계: 개발 서버 실행

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev
```

서버가 실행되면 [http://localhost:3000](http://localhost:3000)에서 확인 가능합니다.

---

## 🚀 다음 단계

### 필수 작업

1. **데이터베이스 초기 데이터 입력**
   ```bash
   # seed 스크립트가 있다면
   npx prisma db seed

   # 또는 Prisma Studio로 수동 입력
   npx prisma studio
   ```

2. **환경 변수 설정 확인**
   - `.env` 파일에 모든 변수가 올바르게 설정되었는지 확인
   - 특히 `DATABASE_URL`이 정확한지 확인

3. **빌드 테스트**
   ```bash
   npm run build
   ```

### 선택 작업

4. **API 테스트**
   - Postman 또는 curl로 각 엔드포인트 테스트
   - 예상대로 데이터가 반환되는지 확인

5. **배포 준비**
   - Vercel 계정 생성
   - 환경 변수 Vercel에 설정
   - GitHub 연동 및 자동 배포 설정

6. **모니터링 설정 (선택)**
   - Sentry: 에러 추적
   - Vercel Analytics: 성능 모니터링

---

## 🔧 트러블슈팅

### 문제 1: `DATABASE_URL` 에러

**증상:**
```
Error validating datasource `db`: You must provide a nonempty URL
```

**원인:** `.env` 파일이 없거나 `DATABASE_URL`이 비어있음

**해결 방법:**
1. `.env` 파일이 프로젝트 루트에 있는지 확인
2. `DATABASE_URL`에 Neon PostgreSQL 연결 문자열이 올바르게 입력되었는지 확인
3. Next.js 서버 재시작 (`npm run dev` 중단 후 재실행)

---

### 문제 2: Prisma Client 생성 오류

**증상:**
```
@prisma/client did not initialize yet
```

**해결 방법:**
```bash
# Prisma Client 재생성
npx prisma generate

# 개발 서버 재시작
npm run dev
```

---

### 문제 3: 이메일 전송 실패

**증상:**
```
Error: Invalid login: 535-5.7.8 Username and Password not accepted
```

**원인:** Gmail 앱 비밀번호가 잘못되었거나 2단계 인증이 비활성화됨

**해결 방법:**
1. Gmail 2단계 인증 활성화 확인
2. 앱 비밀번호 재생성
3. `.env` 파일의 `GOOGLE_APP_PASSWORD` 업데이트
4. 서버 재시작

---

### 문제 4: 빌드 시 타입 오류

**증상:**
```
Type error: Type 'X' is not assignable to type 'Y'
```

**해결 방법:**
1. Prisma Client 재생성
   ```bash
   npx prisma generate
   ```

2. TypeScript 캐시 삭제
   ```bash
   rm -rf .next
   npm run build
   ```

---

### 문제 5: CORS 에러

**증상:**
```
Access to fetch at '...' from origin '...' has been blocked by CORS policy
```

**설명:** Next.js API Routes는 기본적으로 같은 도메인에서만 접근 가능합니다.

**해결 방법:**
외부에서 접근이 필요한 경우, API 라우트에 CORS 헤더 추가:

```typescript
// src/app/api/projects/route.ts
export async function GET() {
  const projects = await getProjects();

  return NextResponse.json(projects, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*', // 또는 특정 도메인
    },
  });
}
```

---

## 📖 용어 설명

### API (Application Programming Interface)
- **쉽게 말하면:** 프로그램 간에 소통하는 규칙
- **예시:** 식당에서 웨이터에게 주문하는 것처럼, 프론트엔드가 백엔드에 데이터를 요청

### REST API
- **쉽게 말하면:** HTTP 메서드(GET, POST 등)를 사용하는 API 방식
- **예시:**
  - `GET /api/projects` → 프로젝트 목록 가져오기
  - `POST /api/contact` → 컨택트 폼 제출하기

### ORM (Object-Relational Mapping)
- **쉽게 말하면:** 데이터베이스를 코드로 쉽게 다루게 해주는 도구
- **예시:** SQL 대신 `prisma.project.findMany()` 같은 함수 사용

### 환경 변수 (Environment Variables)
- **쉽게 말하면:** 코드에 직접 적지 않는 민감한 정보 (비밀번호, API 키 등)
- **예시:** `.env` 파일에 `DATABASE_URL` 저장

### HTTP 상태 코드
- **200 OK:** 성공
- **400 Bad Request:** 잘못된 요청
- **404 Not Found:** 리소스를 찾을 수 없음
- **500 Internal Server Error:** 서버 오류

### TypeScript
- **쉽게 말하면:** 타입을 체크해주는 JavaScript
- **예시:**
  ```typescript
  // 타입 정의로 실수 방지
  interface Project {
    id: number;
    title: string;
  }
  ```

### Prisma Schema
- **쉽게 말하면:** 데이터베이스 구조를 정의하는 파일
- **위치:** `prisma/schema.prisma`
- **예시:**
  ```prisma
  model Project {
    id    Int    @id @default(autoincrement())
    title String
  }
  ```

### XSS (Cross-Site Scripting)
- **쉽게 말하면:** 악의적인 스크립트를 웹사이트에 삽입하는 공격
- **방어:** HTML 이스케이프 처리로 `<script>` 같은 태그를 무력화

---

## 📝 추가 참고 자료

### 공식 문서
- [Next.js 공식 문서](https://nextjs.org/docs)
- [Prisma 공식 문서](https://www.prisma.io/docs)
- [Neon PostgreSQL 문서](https://neon.tech/docs)

### 도움이 되는 자료
- [HTTP 상태 코드 설명](https://developer.mozilla.org/ko/docs/Web/HTTP/Status)
- [REST API 디자인 가이드](https://restfulapi.net/)
- [TypeScript 핸드북](https://www.typescriptlang.org/ko/docs/handbook/intro.html)

---

## 🤝 기여 및 문의

백엔드 개발 중 궁금한 점이 있다면:
1. 이 문서의 트러블슈팅 섹션 확인
2. 공식 문서 참고
3. GitHub Issues에 질문 남기기

---

**마지막 업데이트:** 2026-04-26
**작성자:** Claude Code

# My App

Vite 프로젝트 기본 세팅

## 주요 기능

### 프레임워크 & 라이브러리

- **React 19** - React Compiler 포함
- **TypeScript** - 타입 안정성
- **Tailwind CSS** - 유틸리티 기반 스타일링

### 개발 도구

- **ESLint** - 코드 품질 검사 및 자동 수정
  - Import 자동 정렬 지원 (simple-import-sort)
  - JSX 속성 자동 정렬 지원 (perfectionist)
  - Next.js 규칙 검사
- **Prettier** - 코드 포매팅
  - Tailwind CSS 클래스 정렬 지원
- **Husky + lint-staged** - Git hooks를 통한 커밋 전 자동 검사

### API & 상태 관리

- **TanStack Query (React Query)** - 서버 상태 관리 및 데이터 페칭
  - DevTools 포함

### 유틸리티

- **vite-plugin-svgr** - SVG를 React 컴포넌트로 변환

## 스크립트

```bash
# 개발 서버 실행
npm run dev

# 프로덕션 빌드
npm run build

# 프로덕션 서버 실행
npm start

# 린트 검사
npm run lint
```

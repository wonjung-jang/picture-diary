# Picture Diary

Next.js + Electron + TypeScript + Tailwind CSS를 사용한 데스크톱 사진 일기장 애플리케이션

## 기술 스택

- Next.js 15.3.1
- Electron 36.0.0
- TypeScript 5
- Tailwind CSS 3.4.1
- React 19

## 개발 환경 설정

```bash
# 의존성 설치
npm install

# 개발 모드 실행
npm run electron-dev

# 프로덕션 빌드
npm run electron-build

# 빌드된 앱 실행
npm run electron-start
```

## 주요 기능

- Next.js와 Electron 통합
- TypeScript 지원
- Tailwind CSS를 통한 모던 UI
- Hot Module Replacement (HMR) 지원
- 크로스 플랫폼 지원 (Windows, macOS, Linux)

## 프로젝트 구조

```
picture-diary/
├── src/                    # Next.js 소스 코드
│   ├── app/               # App Router
│   │   ├── layout.tsx
│   │   └── page.tsx
├── electron/              # Electron 관련 코드
│   ├── main.ts
│   └── tsconfig.json
├── public/               # 정적 파일
└── dist/                 # 빌드 결과물
```

## 라이선스

MIT

# Project : 개인 블로그 제작

## 1️⃣ 목표

- 지금껏 공부했던 지식과 사용했던 기술을 이용하여 추후에 제작하게 될 작업물과 개인공간을 담을 블로그를 제작한다.

## 2️⃣ 기술 스택

1. Frontend

   - Next.js

     - Redux

   - Typescript

   > 현재 가장 많이 사용되는 React를 베이스로 하되, 검색엔진에 노출이 되었으면 하여 Next.js를 사용한다.

2. Backend

   - express

3. 사용 라이브러리

   - Redux, react-redux, redux-devtools-extension

   ```bash
   # redux, react-redux
   npm install redux react-redux

   # next redux wrapper
   npm install next-redux-wrapper

   # redux devtools
   npm install -D redux-devtools-extension
   ```

## 3️⃣ 앱 설계

1. 핵심 기능

- CRUD 기능

  - 게시물을 등록, 사진과 파일등 첨부파일 또한 등록이 가능.

    > 등록시 등록한 날짜, 시간이 표시되어야 한다.

  - 게시물 조회 및 좋아요 기능

  - 게시물 수정

  - 게시물 삭제

2. 컴포넌트 설계

```
src/
│
├── /components (컴포넌트들을 모아놓은 폴더)
│  ├── header.tsx (페이지의 헤더)
│  └── nav.tsx (메뉴바)
│
├── /pages
│  ├── index.tsx (메인 페이지 | 소개 글)
│  └── /post
│       ├── index.tsx (게시글 등록 페이지)
│       └── [title].tsx (게시글 조회 페이지 | 포스트 번호 또는 제목을 기반으로 동적 라우팅)
│  └── /
│
│
├── /type
   └── type.tsx (타입에 대한 interface를 정의)


```

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

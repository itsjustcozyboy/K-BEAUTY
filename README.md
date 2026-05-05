# Global Launch Checklist - K-뷰티 해외 진출 준비 MVP

수출 담당자가 없거나 부족한 중소 K-뷰티 브랜드를 위한 **해외 진출 준비 업무 관리 웹앱**입니다.

## 🎯 서비스 개요

국가, 채널, SKU를 선택하면 **인증·라벨링·통관·물류·입점 준비 업무를 자동으로 체크리스트화**하고, 진행 상황을 관리할 수 있습니다.

### 주요 기능

✅ **자동 체크리스트 생성** - 국가·채널·카테고리별 맞춤형 업무 리스트  
✅ **진행 상황 관리** - 전체 및 카테고리별 진행률 실시간 표시  
✅ **위험 알림** - 국가별 규제 이슈 및 주의사항 사전 안내  
✅ **우선순위 표시** - 높음/중간/낮음 우선순위 구분  
✅ **상태 관리** - 미시작/진행 중/완료/확인 필요 상태 변경  
✅ **로컬 저장소** - localStorage를 통한 자동 저장  

## 🛠️ 기술 스택

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS 3.4
- **State Management**: React useState
- **Storage**: localStorage (백엔드 불필요)

## 📦 설치 및 실행

### 1. 프로젝트 클론 및 의존성 설치

```bash
cd K-BEAUTY
npm install
```

### 2. 개발 서버 시작

```bash
npm run dev
```

브라우저에서 **http://localhost:3000** 으로 접속하세요.
VS Code Dev Container 또는 Codespaces에서 열면 포트가 공개되어 외부 공개 URL로도 접속할 수 있습니다.

### 3. 프로덕션 빌드

```bash
npm run build
npm start
```

`npm start`도 `0.0.0.0`에 바인딩되어 공개 포트로 열 수 있습니다.

### 4. 배포

이 프로젝트는 `output: 'standalone'` 설정이 적용되어 있어 Docker, VPS, Render, Fly.io 같은 환경에 배포하기 쉽습니다.
일반적으로는 `npm run build` 후 생성되는 standalone 출력을 사용해 `npm start`로 실행하면 됩니다.

## 📁 프로젝트 구조

```
K-BEAUTY/
├── app/
│   ├── layout.tsx           # 루트 레이아웃
│   ├── page.tsx             # 메인 페이지
│   └── globals.css          # 전역 스타일
├── components/
│   ├── HeroSection.tsx      # 히어로 섹션
│   ├── ProblemSection.tsx   # 문제 정의 섹션
│   ├── HowItWorksSection.tsx# 작동 방식 섹션
│   ├── ChecklistForm.tsx    # 입력 폼
│   ├── ChecklistDashboard.tsx # 대시보드
│   ├── ProgressSummary.tsx  # 진행률 요약
│   ├── ChecklistCategory.tsx # 카테고리별 체크리스트
│   ├── ChecklistItem.tsx    # 개별 업무 항목
│   ├── RiskAlertCard.tsx    # 위험 알림 카드
│   ├── ConsultationCTA.tsx  # 상담 CTA
│   └── Footer.tsx           # 푸터
├── lib/
│   ├── types.ts             # TypeScript 타입 정의
│   ├── generateChecklist.ts # 체크리스트 생성 로직
│   └── riskAlerts.ts        # 위험 알림 데이터
├── package.json
├── tsconfig.json
├── tailwind.config.js
├── next.config.js
└── postcss.config.js
```

## 🎨 주요 페이지 및 기능

### 1. 랜딩 페이지
- 서비스 핵심 메시지 전달
- 문제 정의 및 해결 방안 설명
- 작동 방식 안내
- CTA 버튼으로 폼으로 유도

### 2. 체크리스트 생성 폼
사용자가 입력하는 정보:
- 브랜드명
- 진출 국가 (일본, 미국, 동남아, 중국, 유럽)
- 판매 채널 (Amazon, Qoo10, Shopee, TikTok Shop, Rakuten, 자사몰, 총판/유통사)
- 상품 카테고리 (스킨케어, 선케어, 색조, 헤어케어, 바디케어, 유아/패밀리)
- SKU 개수
- 현재 준비 단계

### 3. 체크리스트 대시보드
#### 좌측: 진행 상황 요약
- 전체 준비율 (%)
- 가장 먼저 해야 할 3가지 업무
- 카테고리별 진행률

#### 우측: 체크리스트
- **9개 카테고리**:
  1. 시장·채널 판단
  2. SKU 준비
  3. 규제·인증 확인
  4. 라벨링·표현 점검
  5. 가격·마진 계산
  6. 물류·통관 준비
  7. 채널 입점 준비
  8. 마케팅·상세페이지 준비
  9. 운영·리포트 관리

- 각 업무별 상태 변경 (드롭다운)
- 우선순위 배지 (높음/중간/낮음)
- 카테고리별 진행률 표시

### 4. 위험 알림 카드
국가별 주의사항:
- **일본**: 라벨링, 리뷰 전략
- **미국**: 클레임 리스크, FBA 비용
- **동남아**: 가격 경쟁, 국가별 규제
- **중국**: 규제 등록, 현지 조건
- **유럽**: CPNP, RP, 성분 규정

### 5. 상담 신청 CTA
- 이름, 회사명, 이메일, 연락처 입력
- 가장 막히는 부분 선택
- localStorage에 자동 저장 (MVP용)

## 📋 체크리스트 생성 로직

### 기본 체크리스트
- 모든 사용자에게 공통으로 45개의 기본 업무 제공

### 국가·채널별 추가 항목
선택한 국가와 채널 조합에 따라 추가 업무 자동 포함:

예시:
- **일본 + Qoo10**: Qoo10 입점 조건, 일본어 번역, 리뷰 전략 등 4개 추가
- **미국 + Amazon**: Seller Central, FBA/3PL, 클레임 리스크 등 4개 추가
- **중국**: 화장품 등록, 위생허가, 라벨링 등 4개 추가

## 💾 데이터 저장

### localStorage 활용
```javascript
// 생성된 체크리스트 저장
localStorage.setItem('generatedPlan', JSON.stringify(plan));

// 상담 신청 정보 저장
localStorage.setItem('consultations', JSON.stringify(consultationData));
```

모든 데이터는 **브라우저 로컬 저장소**에만 저장되며, 백엔드 연동이 필요한 경우 API 추가 가능합니다.

## 🎨 디자인 특징

- **색상**: 
  - 기본: 흰색 배경, 짙은 남색 (#1a2847) 텍스트
  - 포인트: 민트 (#06d6a0), 블루 (#0066cc)
- **반응형**: 모바일, 태블릿, 데스크톱 최적화
- **카드형 UI**: 모던하고 정갈한 디자인
- **접근성**: 의미있는 배지, 명확한 상태 표시

## ⚠️ 주의사항

본 서비스는 **교육 및 참고 목적**의 MVP입니다.

- 실제 규제·인증·통관 진행 시 **전문가 상담 필수**
- 각 국가의 법규는 수시로 변경될 수 있습니다
- 모든 체크리스트 항목은 일반적 가이드이며, 제품 특성에 따라 다를 수 있습니다

## 🚀 향후 개선 사항

- [ ] 백엔드 API 연동 (Firebase, PostgreSQL 등)
- [ ] 사용자 계정 및 인증 기능
- [ ] 팀 협업 기능 (공유, 댓글, 진행 상황 알림)
- [ ] PDF/Excel 다운로드 기능
- [ ] 차트 및 고급 분석
- [ ] 다국어 지원 (영어, 중국어, 일본어 등)
- [ ] 모바일 앱 (React Native)

## 📞 지원

질문이나 피드백은 GitHub Issues를 통해 주시기 바랍니다.

---

**Global Launch Checklist** - K-뷰티 해외 진출을 위한 첫 걸음으로 만들어졌습니다. ✨
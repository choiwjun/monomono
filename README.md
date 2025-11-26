# MONOMONO - 한일 여행 매칭 플랫폼

![MONOMONO](https://img.shields.io/badge/MONOMONO-v1.0.0-FF6B6B)
![License](https://img.shields.io/badge/license-MIT-blue)
![Hono](https://img.shields.io/badge/Hono-4.x-orange)
![Cloudflare](https://img.shields.io/badge/Cloudflare-Pages-F38020)

## 📌 프로젝트 개요

**MONOMONO**는 한국-일본 20~30대 청년들을 여행을 계기로 자연스럽게 연결하는 **여행 × 문화교류 × 로컬체험 기반 매칭 플랫폼**입니다.

> "모노모노" - 일본어로 "것들(もの)", 한국어로 "모두 모두"의 의미를 담아 한일 청년들이 함께하는 여행을 의미합니다.

- 🎯 **목표**: 한·일 청년 간 자연스러운 만남 및 교류 촉진
- 🌏 **특징**: 여행 취향과 일정 기반의 매칭, 지역경제·로컬 문화 활성화
- 💕 **디자인**: Tinder 스타일의 직관적인 스와이프 UI/UX

## 🔗 라이브 데모

**🌐 URL**: https://3000-i079m19cnkyluft6s3r6y-5634da27.sandbox.novita.ai

### 접근 가능한 페이지
| 페이지 | 경로 | 설명 |
|--------|------|------|
| 홈 (스와이프) | `/` | Tinder 스타일 카드 스와이프 매칭 |
| 여행 | `/travel` | 여행 일정 등록 및 동행자 찾기 |
| 매칭 | `/matches` | 매칭된 사용자 목록 |
| 채팅 | `/chat` | 자동 번역 채팅 |
| 프로필 | `/profile` | 내 프로필 관리 |
| 온보딩 | `/onboarding` | 회원가입 플로우 |

### API 엔드포인트
| 메서드 | 경로 | 설명 |
|--------|------|------|
| GET | `/api/users` | 사용자 목록 조회 |
| GET | `/api/users/:id` | 특정 사용자 조회 |
| POST | `/api/swipe` | 스와이프 액션 |
| GET | `/api/matches` | 매칭 목록 조회 |
| GET | `/api/travel` | 여행 중인 사용자 조회 |
| GET | `/api/guides` | 로컬 가이드 조회 |

## ✅ 구현된 기능

### 이용자 기능 (User Features)
- [x] **여행취향 중심 프로필** - 여행 성향, 선호 도시, 취향 태그 설정
- [x] **여행 일정 매칭** - 일정이 겹치는 사용자 자동 매칭
- [x] **로컬 가이드 매칭** - 현지인 가이드 연결
- [x] **여행 플래너 & 동행자 모집** - 여행 계획 공유 및 동행자 모집
- [x] **자동 번역 채팅** - 한일 실시간 번역 (UI 구현)
- [x] **인증 시스템** - 3단계 인증 (이메일/SMS/신분증)
- [x] **SOS 안전 기능** - 긴급 신고 버튼

### 보안 기능 (Safety Features)
- [x] 3단계 본인인증 UI
- [x] SNS/여행자 인증 배지 시스템
- [x] 신고 기능 UI
- [x] SOS 긴급 버튼

### 수익모델 UI (Monetization)
- [x] 프리미엄 플랜 배너
- [x] "나를 좋아하는 사람" 블러 처리 (프리미엄 유도)
- [x] 되돌리기/부스트 프리미엄 기능 안내

## 🚧 미구현 기능

### 백엔드 로직
- [ ] 실제 데이터베이스 연동 (Cloudflare D1)
- [ ] 사용자 인증 시스템 (JWT/OAuth)
- [ ] 실시간 채팅 (WebSocket/Polling)
- [ ] 자동 번역 API 연동 (Papago/DeepL)
- [ ] 이미지 업로드 (Cloudflare R2)
- [ ] 푸시 알림 시스템

### 결제 시스템
- [ ] 프리미엄 구독 결제 연동
- [ ] 인앱 구매 기능

### 고급 기능
- [ ] AI 기반 매칭 알고리즘
- [ ] 위치 기반 서비스 (GPS)
- [ ] 항공권/SNS 자동 인증

## 🛠 기술 스택

| 분류 | 기술 |
|------|------|
| **Frontend** | Hono JSX, TailwindCSS (CDN), Font Awesome |
| **Backend** | Hono Framework (TypeScript) |
| **Infrastructure** | Cloudflare Pages/Workers |
| **Design** | Tinder-inspired UI/UX |
| **Fonts** | Noto Sans KR, Noto Sans JP |

## 📁 프로젝트 구조

```
webapp/
├── src/
│   ├── index.tsx          # 메인 라우터 및 API
│   ├── renderer.tsx       # HTML 템플릿 렌더러
│   ├── components/
│   │   └── Layout.tsx     # 공통 레이아웃 컴포넌트
│   └── pages/
│       ├── home.tsx       # 홈 (스와이프 카드)
│       ├── travel.tsx     # 여행 일정/동행자
│       ├── matches.tsx    # 매칭 목록
│       ├── chat.tsx       # 채팅
│       ├── profile.tsx    # 프로필
│       └── onboarding.tsx # 온보딩
├── public/
│   └── static/
│       ├── style.css      # 커스텀 CSS
│       └── app.js         # 프론트엔드 JavaScript
├── ecosystem.config.cjs   # PM2 설정
├── vite.config.ts         # Vite 빌드 설정
├── wrangler.jsonc         # Cloudflare 설정
└── package.json
```

## 🚀 개발 환경 실행

```bash
# 의존성 설치
npm install

# 빌드
npm run build

# 개발 서버 실행
npm run dev

# 또는 PM2로 실행
pm2 start ecosystem.config.cjs
```

## 📋 다음 개발 단계 권장사항

### Phase 1: 백엔드 기반 구축
1. Cloudflare D1 데이터베이스 설정
2. 사용자 인증 시스템 구현 (Cloudflare Workers Auth)
3. 프로필 CRUD API 완성

### Phase 2: 핵심 기능 구현
1. 실시간/폴링 기반 채팅 구현
2. 번역 API 연동 (Papago/DeepL)
3. 이미지 업로드 (R2 Storage)

### Phase 3: 고급 기능
1. 매칭 알고리즘 개선
2. 결제 시스템 연동
3. 푸시 알림 구현

### Phase 4: 출시 준비
1. 보안 검토 및 강화
2. 성능 최적화
3. iOS/Android 앱 래퍼 개발

## 🎨 디자인 컨셉

### 색상 팔레트
| 색상 | Hex | 용도 |
|------|-----|------|
| Primary | `#FF6B6B` | 메인 브랜드 컬러, 좋아요 버튼 |
| Secondary | `#4ECDC4` | 보조 컬러, 여행 관련 |
| Success | `#00B894` | 인증 완료, 긍정적 액션 |
| Warning | `#FDCB6E` | 되돌리기, 주의 |
| Danger | `#E74C3C` | 거절, SOS, 신고 |
| Korea | `#003580` | 한국 배지 |
| Japan | `#BC002D` | 일본 배지 |

### 디자인 원칙
- **Tinder 스타일**: 카드 스와이프 중심 UX
- **모바일 퍼스트**: 430px 최대 너비, 터치 최적화
- **그라데이션 활용**: 생동감 있는 버튼 및 카드
- **직관적 네비게이션**: 하단 탭 바 패턴

## 📄 라이선스

MIT License

## 👥 기여

이슈 및 PR 환영합니다!

---

**MONOMONO** - 여행으로 시작되는 새로운 인연 ✈️💕

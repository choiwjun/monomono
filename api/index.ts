import { Hono } from 'hono'
import { handle } from 'hono/vercel'
import { cors } from 'hono/cors'
import { html } from 'hono/html'

export const config = {
  runtime: 'edge',
}

// ============================================
// MONOMONO - Korea-Japan Youth Travel Matching
// ============================================

const app = new Hono().basePath('/')

// Middleware
app.use('*', cors())

// ===== Mock Data =====
const mockUsers = [
  {
    id: '1',
    name: '사쿠라',
    nameKr: '사쿠라',
    nameJp: 'さくら',
    age: 26,
    country: 'japan',
    city: '도쿄',
    cityJp: '東京',
    bio: '여행과 카페 투어를 좋아해요! 한국 음식 특히 김치찌개를 너무 좋아합니다 🍲',
    bioJp: '旅行とカフェ巡りが好きです！韓国料理、特にキムチチゲが大好きです🍲',
    photos: [
      'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=600',
    ],
    verified: true,
    travelVerified: true,
    languages: ['일본어', '한국어 (초급)', '영어'],
    travelStyle: ['카페투어', '미식', '문화체험'],
    travelDates: { start: '2025-03-20', end: '2025-03-25', city: '서울' },
    distance: '2km'
  },
  {
    id: '2',
    name: '지민',
    nameKr: '지민',
    nameJp: 'ジミン',
    age: 28,
    country: 'korea',
    city: '부산',
    cityJp: '釜山',
    bio: '일본 여행 마니아입니다. 교토의 전통 문화와 오사카 맛집 탐방을 계획중이에요!',
    bioJp: '日本旅行マニアです。京都の伝統文化と大阪のグルメ巡りを計画中です！',
    photos: [
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600',
    ],
    verified: true,
    travelVerified: true,
    languages: ['한국어', '일본어 (중급)', '영어'],
    travelStyle: ['액티비티', '로컬체험', '온천'],
    travelDates: { start: '2025-04-01', end: '2025-04-07', city: '오사카' },
    distance: '5km'
  },
  {
    id: '3',
    name: '유이',
    nameKr: '유이',
    nameJp: 'ゆい',
    age: 24,
    country: 'japan',
    city: '오사카',
    cityJp: '大阪',
    bio: '한류 팬이에요! K-POP과 한국 드라마를 좋아해서 서울에서 성지순례하고 싶어요 💜',
    bioJp: '韓流ファンです！K-POPと韓国ドラマが好きで、ソウルで聖地巡礼したいです💜',
    photos: [
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600',
    ],
    verified: true,
    travelVerified: false,
    languages: ['일본어', '한국어 (중급)'],
    travelStyle: ['쇼핑', '문화체험', 'K-POP'],
    travelDates: { start: '2025-03-15', end: '2025-03-20', city: '서울' },
    distance: '3km'
  }
]

// ===== Shared Styles =====
const baseStyles = `
  <style>
    @import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.min.css');
    @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500;700&display=swap');
    
    :root {
      --sakura: #F57CA8;
      --sky: #6ECFF6;
      --navy: #1D2B4F;
      --beige: #F4EDE4;
      --mint: #C4F2E3;
      --sunset: #FFA873;
      --gray-50: #F9FAFB;
      --gray-100: #F3F4F6;
      --gray-200: #E5E7EB;
      --gray-400: #9CA3AF;
      --gray-600: #4B5563;
      --gray-800: #1F2937;
    }
    
    * { margin: 0; padding: 0; box-sizing: border-box; }
    
    body {
      font-family: 'Pretendard Variable', 'Noto Sans JP', sans-serif;
      background: linear-gradient(180deg, #FFF5F8 0%, #F0F9FF 100%);
      min-height: 100vh;
      color: var(--navy);
    }
    
    .app-container {
      max-width: 430px;
      margin: 0 auto;
      background: white;
      min-height: 100vh;
      position: relative;
      overflow-x: hidden;
    }
    
    /* Header */
    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 16px 20px;
      background: white;
      border-bottom: 1px solid var(--gray-100);
      position: sticky;
      top: 0;
      z-index: 100;
    }
    
    .logo {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 20px;
      font-weight: 700;
      color: var(--navy);
    }
    
    .logo-icon {
      width: 32px;
      height: 32px;
      background: linear-gradient(135deg, var(--sakura), var(--sky));
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
    }
    
    .header-actions {
      display: flex;
      gap: 12px;
    }
    
    .header-btn {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      border: none;
      background: var(--gray-50);
      color: var(--gray-600);
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
    }
    
    .badge {
      position: absolute;
      top: -2px;
      right: -2px;
      width: 18px;
      height: 18px;
      background: var(--sakura);
      color: white;
      font-size: 10px;
      font-weight: 600;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    
    /* Bottom Navigation */
    .bottom-nav {
      position: fixed;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 100%;
      max-width: 430px;
      display: flex;
      justify-content: space-around;
      padding: 12px 0 20px;
      background: white;
      border-top: 1px solid var(--gray-100);
      z-index: 100;
    }
    
    .nav-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 4px;
      color: var(--gray-400);
      text-decoration: none;
      font-size: 10px;
      font-weight: 500;
      transition: color 0.2s;
    }
    
    .nav-item.active {
      color: var(--sakura);
    }
    
    .nav-icon {
      width: 24px;
      height: 24px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 18px;
    }
    
    /* Main Content */
    .main-content {
      padding-bottom: 80px;
    }
    
    /* Hero Section */
    .hero {
      background: linear-gradient(135deg, var(--sakura) 0%, #FF8FB1 50%, var(--sky) 100%);
      padding: 24px 20px;
      color: white;
    }
    
    .hero-title {
      font-size: 22px;
      font-weight: 700;
      margin-bottom: 8px;
    }
    
    .hero-subtitle {
      font-size: 14px;
      opacity: 0.9;
      margin-bottom: 16px;
    }
    
    .hero-stats {
      display: flex;
      gap: 16px;
    }
    
    .stat-item {
      display: flex;
      align-items: center;
      gap: 6px;
      font-size: 13px;
      background: rgba(255,255,255,0.2);
      padding: 6px 12px;
      border-radius: 20px;
    }
    
    /* Section */
    .section {
      padding: 20px;
    }
    
    .section-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 16px;
    }
    
    .section-title {
      font-size: 18px;
      font-weight: 700;
      color: var(--navy);
    }
    
    .see-all {
      font-size: 13px;
      color: var(--sakura);
      text-decoration: none;
      font-weight: 500;
    }
    
    /* Category Shortcuts */
    .category-shortcuts {
      display: flex;
      gap: 12px;
      overflow-x: auto;
      padding: 8px 0;
      scrollbar-width: none;
    }
    
    .category-shortcuts::-webkit-scrollbar { display: none; }
    
    .category-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 8px;
      min-width: 70px;
      text-decoration: none;
    }
    
    .category-icon {
      width: 56px;
      height: 56px;
      border-radius: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 24px;
    }
    
    .category-icon.sakura { background: rgba(245, 124, 168, 0.1); color: var(--sakura); }
    .category-icon.sky { background: rgba(110, 207, 246, 0.1); color: var(--sky); }
    .category-icon.mint { background: rgba(196, 242, 227, 0.3); color: #10B981; }
    .category-icon.sunset { background: rgba(255, 168, 115, 0.1); color: var(--sunset); }
    
    .category-label {
      font-size: 12px;
      color: var(--gray-600);
      font-weight: 500;
    }
    
    /* Traveler Card */
    .traveler-card {
      background: white;
      border-radius: 16px;
      padding: 16px;
      margin-bottom: 12px;
      border: 1px solid var(--gray-100);
      box-shadow: 0 2px 8px rgba(0,0,0,0.04);
    }
    
    .traveler-header {
      display: flex;
      gap: 12px;
      margin-bottom: 12px;
    }
    
    .traveler-avatar {
      width: 56px;
      height: 56px;
      border-radius: 12px;
      object-fit: cover;
    }
    
    .traveler-info {
      flex: 1;
    }
    
    .traveler-name {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 16px;
      font-weight: 600;
      margin-bottom: 4px;
    }
    
    .country-badge {
      font-size: 14px;
    }
    
    .verified-badge {
      background: var(--mint);
      color: #10B981;
      font-size: 10px;
      padding: 2px 6px;
      border-radius: 4px;
      font-weight: 500;
    }
    
    .traveler-meta {
      font-size: 13px;
      color: var(--gray-400);
    }
    
    .travel-schedule {
      background: var(--beige);
      border-radius: 8px;
      padding: 10px 12px;
      margin-bottom: 12px;
    }
    
    .schedule-label {
      font-size: 11px;
      color: var(--sunset);
      font-weight: 600;
      margin-bottom: 4px;
    }
    
    .schedule-date {
      font-size: 13px;
      color: var(--navy);
      font-weight: 500;
    }
    
    .traveler-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
    }
    
    .tag {
      background: var(--gray-100);
      color: var(--gray-600);
      font-size: 11px;
      padding: 4px 10px;
      border-radius: 12px;
    }
    
    .tag.sakura {
      background: rgba(245, 124, 168, 0.1);
      color: var(--sakura);
    }
    
    /* Safety Banner */
    .safety-banner {
      background: linear-gradient(135deg, #E0F2FE, #DBEAFE);
      border-radius: 12px;
      padding: 16px;
      margin: 20px;
      display: flex;
      gap: 12px;
      align-items: flex-start;
    }
    
    .safety-icon {
      width: 40px;
      height: 40px;
      background: white;
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 20px;
      color: var(--sky);
    }
    
    .safety-content h4 {
      font-size: 14px;
      font-weight: 600;
      color: var(--navy);
      margin-bottom: 4px;
    }
    
    .safety-content p {
      font-size: 12px;
      color: var(--gray-600);
      line-height: 1.5;
    }
    
    /* Buttons */
    .btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      padding: 12px 24px;
      border-radius: 12px;
      font-size: 14px;
      font-weight: 600;
      border: none;
      cursor: pointer;
      transition: all 0.2s;
    }
    
    .btn-sakura {
      background: var(--sakura);
      color: white;
    }
    
    .btn-sky {
      background: var(--sky);
      color: white;
    }
    
    .btn-outline {
      background: transparent;
      border: 1px solid var(--gray-200);
      color: var(--gray-600);
    }
  </style>
`

// ===== Layout Component =====
const Layout = (props: { title: string; activeNav: string; children: any }) => html\`
  <!DOCTYPE html>
  <html lang="ko">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <title>\${props.title}</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css">
    \${baseStyles}
  </head>
  <body>
    <div class="app-container">
      <!-- Header -->
      <header class="header">
        <div class="logo">
          <div class="logo-icon">
            <i class="fas fa-paper-plane"></i>
          </div>
          MONOMONO
        </div>
        <div class="header-actions">
          <button class="header-btn">
            <i class="fas fa-bell"></i>
            <span class="badge">3</span>
          </button>
          <button class="header-btn">
            <i class="fas fa-sliders-h"></i>
          </button>
        </div>
      </header>
      
      <!-- Main Content -->
      <main class="main-content">
        \${props.children}
      </main>
      
      <!-- Bottom Navigation -->
      <nav class="bottom-nav">
        <a href="/" class="nav-item \${props.activeNav === 'home' ? 'active' : ''}">
          <span class="nav-icon"><i class="fas fa-home"></i></span>
          홈
        </a>
        <a href="/travel" class="nav-item \${props.activeNav === 'travel' ? 'active' : ''}">
          <span class="nav-icon"><i class="fas fa-plane"></i></span>
          여행
        </a>
        <a href="/matches" class="nav-item \${props.activeNav === 'matches' ? 'active' : ''}">
          <span class="nav-icon"><i class="fas fa-heart"></i></span>
          매칭
        </a>
        <a href="/chat" class="nav-item \${props.activeNav === 'chat' ? 'active' : ''}">
          <span class="nav-icon"><i class="fas fa-comment"></i></span>
          채팅
        </a>
        <a href="/profile" class="nav-item \${props.activeNav === 'profile' ? 'active' : ''}">
          <span class="nav-icon"><i class="fas fa-user"></i></span>
          MY
        </a>
      </nav>
    </div>
  </body>
  </html>
\`

// ===== Home Page =====
const HomePage = () => Layout({
  title: 'MONOMONO - 홈',
  activeNav: 'home',
  children: html\`
    <!-- Hero Section -->
    <div class="hero">
      <h1 class="hero-title">오늘의 여행 친구를 만나보세요! 🌸</h1>
      <p class="hero-subtitle">한국과 일본을 잇는 새로운 인연</p>
      <div class="hero-stats">
        <div class="stat-item">
          <i class="fas fa-users"></i>
          <span>1,247명 여행중</span>
        </div>
        <div class="stat-item">
          <i class="fas fa-plane"></i>
          <span>서울 · 도쿄</span>
        </div>
      </div>
    </div>
    
    <!-- Category Shortcuts -->
    <div class="section">
      <div class="category-shortcuts">
        <a href="/travel?type=companion" class="category-item">
          <div class="category-icon sakura">
            <i class="fas fa-user-friends"></i>
          </div>
          <span class="category-label">동행찾기</span>
        </a>
        <a href="/travel?type=guide" class="category-item">
          <div class="category-icon sky">
            <i class="fas fa-map-marker-alt"></i>
          </div>
          <span class="category-label">로컬가이드</span>
        </a>
        <a href="/travel?type=experience" class="category-item">
          <div class="category-icon mint">
            <i class="fas fa-star"></i>
          </div>
          <span class="category-label">체험</span>
        </a>
        <a href="/travel?type=event" class="category-item">
          <div class="category-icon sunset">
            <i class="fas fa-calendar-alt"></i>
          </div>
          <span class="category-label">이벤트</span>
        </a>
      </div>
    </div>
    
    <!-- This Week Travelers -->
    <div class="section">
      <div class="section-header">
        <h2 class="section-title">이번 주 여행자</h2>
        <a href="/travel" class="see-all">전체보기 <i class="fas fa-chevron-right"></i></a>
      </div>
      
      ${mockUsers.map(user => html\`
        <div class="traveler-card">
          <div class="traveler-header">
            <img src="\${user.photos[0]}" alt="\${user.name}" class="traveler-avatar">
            <div class="traveler-info">
              <div class="traveler-name">
                <span class="country-badge">\${user.country === 'japan' ? '🇯🇵' : '🇰🇷'}</span>
                \${user.name}, \${user.age}
                \${user.verified ? html\`<span class="verified-badge">✓ 인증</span>\` : ''}
              </div>
              <div class="traveler-meta">\${user.city} · \${user.distance}</div>
            </div>
          </div>
          <div class="travel-schedule">
            <div class="schedule-label">🗓 여행 일정</div>
            <div class="schedule-date">\${user.travelDates.city} · \${user.travelDates.start} ~ \${user.travelDates.end}</div>
          </div>
          <div class="traveler-tags">
            \${user.travelStyle.map((style: string) => html\`<span class="tag sakura">\${style}</span>\`)}
          </div>
        </div>
      \`).join('')}
    </div>
    
    <!-- Safety Banner -->
    <div class="safety-banner">
      <div class="safety-icon">
        <i class="fas fa-shield-alt"></i>
      </div>
      <div class="safety-content">
        <h4>안전한 여행을 위해</h4>
        <p>본인 인증을 완료하면 신뢰도가 높아지고 더 많은 매칭 기회를 얻을 수 있어요.</p>
      </div>
    </div>
  \`
})

// ===== Travel Page =====
const TravelPage = () => Layout({
  title: 'MONOMONO - 여행',
  activeNav: 'travel',
  children: html\`
    <div class="section">
      <div class="section-header">
        <h2 class="section-title">내 여행 일정</h2>
        <button class="btn btn-sakura" style="padding: 8px 16px; font-size: 12px;">
          <i class="fas fa-plus"></i> 일정 추가
        </button>
      </div>
      
      <div class="traveler-card" style="border: 2px solid var(--sakura);">
        <div class="travel-schedule" style="background: rgba(245, 124, 168, 0.1);">
          <div class="schedule-label" style="color: var(--sakura);">🇯🇵 도쿄 여행</div>
          <div class="schedule-date">2025.04.10 - 2025.04.17</div>
        </div>
        <p style="font-size: 13px; color: var(--gray-600); margin-bottom: 12px;">
          도쿄에서 한 달 살기! 라멘 맛집 탐방하고 현지 친구 사귀고 싶어요 🍜
        </p>
        <div class="traveler-tags">
          <span class="tag sakura">미식</span>
          <span class="tag sakura">로컬체험</span>
          <span class="tag sakura">힐링</span>
        </div>
        <div style="margin-top: 12px; padding-top: 12px; border-top: 1px solid var(--gray-100); display: flex; justify-content: space-between; align-items: center;">
          <span style="font-size: 12px; color: var(--gray-400);"><i class="fas fa-users"></i> 8명의 여행자가 일정 매칭됨</span>
          <button class="btn btn-outline" style="padding: 6px 12px; font-size: 11px;">자세히 보기</button>
        </div>
      </div>
    </div>
    
    <div class="section">
      <div class="section-header">
        <h2 class="section-title">이번 주 여행자</h2>
        <a href="#" class="see-all">전체보기 <i class="fas fa-chevron-right"></i></a>
      </div>
      
      ${mockUsers.slice(0, 2).map(user => html\`
        <div class="traveler-card">
          <div class="traveler-header">
            <img src="\${user.photos[0]}" alt="\${user.name}" class="traveler-avatar">
            <div class="traveler-info">
              <div class="traveler-name">
                <span class="country-badge">\${user.country === 'japan' ? '🇯🇵' : '🇰🇷'}</span>
                \${user.name}, \${user.age}
              </div>
              <div class="traveler-meta">\${user.city}</div>
            </div>
          </div>
          <p style="font-size: 13px; color: var(--gray-600); margin-bottom: 12px;">\${user.bio}</p>
          <div class="traveler-tags">
            \${user.travelStyle.map((style: string) => html\`<span class="tag">\${style}</span>\`)}
          </div>
        </div>
      \`).join('')}
    </div>
  \`
})

// ===== Matches Page =====
const MatchesPage = () => Layout({
  title: 'MONOMONO - 매칭',
  activeNav: 'matches',
  children: html\`
    <div class="section">
      <div class="section-header">
        <h2 class="section-title">새로운 매칭</h2>
      </div>
      
      <div style="display: flex; gap: 12px; overflow-x: auto; padding: 8px 0; margin-bottom: 24px;">
        ${mockUsers.map(user => html\`
          <div style="min-width: 100px; text-align: center;">
            <div style="position: relative;">
              <img src="\${user.photos[0]}" alt="\${user.name}" style="width: 80px; height: 80px; border-radius: 50%; object-fit: cover; border: 3px solid var(--sakura);">
              <span style="position: absolute; bottom: 0; right: 0; font-size: 18px;">\${user.country === 'japan' ? '🇯🇵' : '🇰🇷'}</span>
            </div>
            <p style="font-size: 13px; font-weight: 500; margin-top: 8px;">\${user.name}</p>
          </div>
        \`).join('')}
      </div>
      
      <div class="section-header">
        <h2 class="section-title">여행 일정 매칭</h2>
      </div>
      
      ${mockUsers.slice(0, 2).map(user => html\`
        <div class="traveler-card">
          <div class="traveler-header">
            <img src="\${user.photos[0]}" alt="\${user.name}" class="traveler-avatar">
            <div class="traveler-info">
              <div class="traveler-name">
                <span class="country-badge">\${user.country === 'japan' ? '🇯🇵' : '🇰🇷'}</span>
                \${user.name}, \${user.age}
                <span class="verified-badge">✓ 인증</span>
              </div>
              <div class="traveler-meta">\${user.city}</div>
            </div>
          </div>
          <div class="travel-schedule">
            <div class="schedule-label">📅 일정 겹침</div>
            <div class="schedule-date">\${user.travelDates.city} · \${user.travelDates.start} ~ \${user.travelDates.end}</div>
          </div>
          <div style="display: flex; gap: 8px; margin-top: 12px;">
            <button class="btn btn-sakura" style="flex: 1; padding: 10px;">💬 대화하기</button>
            <button class="btn btn-outline" style="width: 44px; padding: 10px;"><i class="fas fa-star"></i></button>
          </div>
        </div>
      \`).join('')}
    </div>
    
    <div class="safety-banner">
      <div class="safety-icon">
        <i class="fas fa-shield-alt"></i>
      </div>
      <div class="safety-content">
        <h4>안전한 매칭을 위한 팁</h4>
        <p>첫 만남은 공공장소에서! 여행 일정과 만남 장소를 가족이나 친구에게 공유하세요.</p>
      </div>
    </div>
  \`
})

// ===== Chat Page =====
const ChatPage = () => Layout({
  title: 'MONOMONO - 채팅',
  activeNav: 'chat',
  children: html\`
    <div class="section">
      <div class="section-header">
        <h2 class="section-title">채팅</h2>
      </div>
      
      ${mockUsers.slice(0, 3).map((user, index) => html\`
        <a href="/chat/\${user.id}" style="text-decoration: none; color: inherit;">
          <div class="traveler-card" style="display: flex; gap: 12px; align-items: center;">
            <div style="position: relative;">
              <img src="\${user.photos[0]}" alt="\${user.name}" style="width: 56px; height: 56px; border-radius: 50%; object-fit: cover;">
              <span style="position: absolute; bottom: 0; right: 0; width: 14px; height: 14px; background: #10B981; border: 2px solid white; border-radius: 50%;"></span>
            </div>
            <div style="flex: 1;">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px;">
                <span style="font-weight: 600;">\${user.country === 'japan' ? '🇯🇵' : '🇰🇷'} \${user.name}</span>
                <span style="font-size: 11px; color: var(--gray-400);">\${index === 0 ? '10분 전' : index === 1 ? '1시간 전' : '어제'}</span>
              </div>
              <p style="font-size: 13px; color: var(--gray-600); white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">\${index === 0 ? '안녕하세요! 서울에서 만나요 😊' : index === 1 ? '홍대 카페 추천해 주세요!' : '다음에 또 연락해요~'}</p>
            </div>
            \${index === 0 ? html\`<span style="width: 20px; height: 20px; background: var(--sakura); color: white; font-size: 11px; border-radius: 50%; display: flex; align-items: center; justify-content: center;">2</span>\` : ''}
          </div>
        </a>
      \`).join('')}
    </div>
  \`
})

// ===== Chat Room Page =====
const ChatRoomPage = (chatId: string) => {
  const user = mockUsers.find(u => u.id === chatId) || mockUsers[0]
  return html\`
    <!DOCTYPE html>
    <html lang="ko">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
      <title>MONOMONO - \${user.name}님과의 대화</title>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css">
      \${baseStyles}
      <style>
        .chat-header {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 16px 20px;
          background: white;
          border-bottom: 1px solid var(--gray-100);
          position: sticky;
          top: 0;
          z-index: 100;
        }
        
        .back-btn {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          border: none;
          background: var(--gray-50);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .chat-user-info {
          flex: 1;
        }
        
        .chat-user-name {
          font-weight: 600;
          font-size: 16px;
        }
        
        .chat-user-status {
          font-size: 12px;
          color: #10B981;
        }
        
        .translation-toggle {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 6px 12px;
          background: var(--mint);
          border-radius: 20px;
          font-size: 11px;
          color: #10B981;
          font-weight: 500;
        }
        
        .chat-messages {
          padding: 20px;
          min-height: calc(100vh - 180px);
        }
        
        .message {
          margin-bottom: 16px;
          max-width: 80%;
        }
        
        .message.received {
          margin-right: auto;
        }
        
        .message.sent {
          margin-left: auto;
        }
        
        .message-bubble {
          padding: 12px 16px;
          border-radius: 16px;
          font-size: 14px;
          line-height: 1.5;
        }
        
        .message.received .message-bubble {
          background: var(--gray-100);
          border-bottom-left-radius: 4px;
        }
        
        .message.sent .message-bubble {
          background: var(--sakura);
          color: white;
          border-bottom-right-radius: 4px;
        }
        
        .message-translation {
          font-size: 12px;
          color: var(--gray-400);
          margin-top: 4px;
          font-style: italic;
        }
        
        .message-time {
          font-size: 10px;
          color: var(--gray-400);
          margin-top: 4px;
        }
        
        .chat-input-area {
          position: fixed;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 100%;
          max-width: 430px;
          padding: 12px 20px 24px;
          background: white;
          border-top: 1px solid var(--gray-100);
          display: flex;
          gap: 12px;
          align-items: center;
        }
        
        .chat-input {
          flex: 1;
          padding: 12px 16px;
          border: 1px solid var(--gray-200);
          border-radius: 24px;
          font-size: 14px;
          outline: none;
        }
        
        .chat-input:focus {
          border-color: var(--sakura);
        }
        
        .send-btn {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          border: none;
          background: var(--sakura);
          color: white;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      </style>
    </head>
    <body>
      <div class="app-container">
        <!-- Chat Header -->
        <header class="chat-header">
          <button class="back-btn" onclick="history.back()">
            <i class="fas fa-arrow-left"></i>
          </button>
          <img src="\${user.photos[0]}" alt="\${user.name}" style="width: 40px; height: 40px; border-radius: 50%; object-fit: cover;">
          <div class="chat-user-info">
            <div class="chat-user-name">\${user.country === 'japan' ? '🇯🇵' : '🇰🇷'} \${user.name}</div>
            <div class="chat-user-status">온라인</div>
          </div>
          <div class="translation-toggle">
            <i class="fas fa-language"></i>
            자동 번역
          </div>
        </header>
        
        <!-- Chat Messages -->
        <div class="chat-messages">
          <div class="message received">
            <div class="message-bubble">
              \${user.country === 'japan' ? 'こんにちは！ソウル旅行楽しみにしています 😊' : '안녕하세요! 도쿄에서 만나요~'}
            </div>
            <div class="message-translation">
              \${user.country === 'japan' ? '안녕하세요! 서울 여행 기대하고 있어요 😊' : 'Hello! Let\\'s meet in Tokyo~'}
            </div>
            <div class="message-time">오전 10:30</div>
          </div>
          
          <div class="message sent">
            <div class="message-bubble">
              네! 저도 정말 기대돼요! 맛있는 곳 많이 알려주세요 🍜
            </div>
            <div class="message-time">오전 10:32</div>
          </div>
          
          <div class="message received">
            <div class="message-bubble">
              \${user.country === 'japan' ? 'もちろんです！美味しいラーメン屋さん知ってますよ' : '물론이죠! 맛있는 곳 많이 알아요'}
            </div>
            <div class="message-translation">
              \${user.country === 'japan' ? '물론이요! 맛있는 라멘집 알고 있어요' : 'Of course! I know many delicious places'}
            </div>
            <div class="message-time">오전 10:35</div>
          </div>
        </div>
        
        <!-- Chat Input -->
        <div class="chat-input-area">
          <button style="width: 36px; height: 36px; border: none; background: none; color: var(--gray-400); cursor: pointer;">
            <i class="fas fa-plus-circle" style="font-size: 24px;"></i>
          </button>
          <input type="text" class="chat-input" placeholder="메시지를 입력하세요...">
          <button class="send-btn">
            <i class="fas fa-paper-plane"></i>
          </button>
        </div>
      </div>
    </body>
    </html>
  \`
}

// ===== Profile Page =====
const ProfilePage = () => Layout({
  title: 'MONOMONO - 프로필',
  activeNav: 'profile',
  children: html\`
    <div class="section">
      <!-- Profile Header -->
      <div style="text-align: center; margin-bottom: 24px;">
        <div style="position: relative; display: inline-block;">
          <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400" alt="프로필" style="width: 100px; height: 100px; border-radius: 50%; object-fit: cover; border: 4px solid var(--sakura);">
          <button style="position: absolute; bottom: 0; right: 0; width: 32px; height: 32px; border-radius: 50%; border: none; background: var(--sakura); color: white; cursor: pointer;">
            <i class="fas fa-camera"></i>
          </button>
        </div>
        <h2 style="font-size: 22px; font-weight: 700; margin-top: 12px;">🇰🇷 민준, 27</h2>
        <p style="color: var(--gray-400); font-size: 14px;">서울</p>
        <div style="display: flex; justify-content: center; gap: 8px; margin-top: 8px;">
          <span class="verified-badge">✓ 본인 인증</span>
          <span class="verified-badge" style="background: rgba(110, 207, 246, 0.2); color: var(--sky);">✓ 여행 인증</span>
        </div>
      </div>
      
      <!-- Profile Progress -->
      <div class="traveler-card">
        <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
          <span style="font-weight: 600;">프로필 완성도</span>
          <span style="color: var(--sakura); font-weight: 600;">85%</span>
        </div>
        <div style="height: 8px; background: var(--gray-100); border-radius: 4px; overflow: hidden;">
          <div style="width: 85%; height: 100%; background: linear-gradient(90deg, var(--sakura), var(--sky)); border-radius: 4px;"></div>
        </div>
        <p style="font-size: 12px; color: var(--gray-400); margin-top: 8px;">여행 스타일을 추가하면 더 좋은 매칭을 받을 수 있어요!</p>
      </div>
      
      <!-- Stats -->
      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; margin-bottom: 24px;">
        <div class="traveler-card" style="text-align: center; padding: 16px 12px;">
          <div style="font-size: 24px; font-weight: 700; color: var(--sakura);">23</div>
          <div style="font-size: 12px; color: var(--gray-400);">받은 좋아요</div>
        </div>
        <div class="traveler-card" style="text-align: center; padding: 16px 12px;">
          <div style="font-size: 24px; font-weight: 700; color: var(--sky);">12</div>
          <div style="font-size: 12px; color: var(--gray-400);">매칭</div>
        </div>
        <div class="traveler-card" style="text-align: center; padding: 16px 12px;">
          <div style="font-size: 24px; font-weight: 700; color: var(--navy);">156</div>
          <div style="font-size: 12px; color: var(--gray-400);">프로필 조회</div>
        </div>
      </div>
      
      <!-- About Me -->
      <div class="traveler-card">
        <h3 style="font-weight: 600; margin-bottom: 12px;"><i class="fas fa-user" style="color: var(--sakura); margin-right: 8px;"></i>자기소개</h3>
        <p style="font-size: 14px; line-height: 1.6; color: var(--gray-600);">
          도쿄에서 한 달 살기 예정입니다. 현지 친구 사귀고 싶어요! 라멘 맛집 추천해주세요 🍜
        </p>
      </div>
      
      <!-- Travel Style -->
      <div class="traveler-card">
        <h3 style="font-weight: 600; margin-bottom: 12px;"><i class="fas fa-heart" style="color: var(--sakura); margin-right: 8px;"></i>여행 스타일</h3>
        <div class="traveler-tags">
          <span class="tag sakura">미식</span>
          <span class="tag sakura">로컬체험</span>
          <span class="tag sakura">힐링</span>
        </div>
      </div>
      
      <!-- Languages -->
      <div class="traveler-card">
        <h3 style="font-weight: 600; margin-bottom: 12px;"><i class="fas fa-language" style="color: var(--sky); margin-right: 8px;"></i>언어</h3>
        <div style="display: flex; flex-direction: column; gap: 8px;">
          <div style="display: flex; justify-content: space-between;">
            <span>🇰🇷 한국어</span>
            <span style="color: var(--gray-400);">모국어</span>
          </div>
          <div style="display: flex; justify-content: space-between;">
            <span>🇯🇵 일본어</span>
            <span style="color: var(--gray-400);">고급</span>
          </div>
          <div style="display: flex; justify-content: space-between;">
            <span>🇺🇸 영어</span>
            <span style="color: var(--gray-400);">중급</span>
          </div>
        </div>
      </div>
      
      <!-- Menu -->
      <div class="traveler-card" style="padding: 0;">
        <a href="#" style="display: flex; align-items: center; justify-content: space-between; padding: 16px; border-bottom: 1px solid var(--gray-100); text-decoration: none; color: inherit;">
          <span><i class="fas fa-cog" style="color: var(--gray-400); margin-right: 12px;"></i>설정</span>
          <i class="fas fa-chevron-right" style="color: var(--gray-400);"></i>
        </a>
        <a href="#" style="display: flex; align-items: center; justify-content: space-between; padding: 16px; border-bottom: 1px solid var(--gray-100); text-decoration: none; color: inherit;">
          <span><i class="fas fa-shield-alt" style="color: var(--gray-400); margin-right: 12px;"></i>안전 센터</span>
          <i class="fas fa-chevron-right" style="color: var(--gray-400);"></i>
        </a>
        <a href="#" style="display: flex; align-items: center; justify-content: space-between; padding: 16px; text-decoration: none; color: inherit;">
          <span><i class="fas fa-question-circle" style="color: var(--gray-400); margin-right: 12px;"></i>도움말</span>
          <i class="fas fa-chevron-right" style="color: var(--gray-400);"></i>
        </a>
      </div>
      
      <button style="width: 100%; padding: 14px; margin-top: 16px; border: 1px solid var(--gray-200); border-radius: 12px; background: white; color: var(--gray-600); font-size: 14px; cursor: pointer;">
        로그아웃
      </button>
    </div>
  \`
})

// ===== Onboarding Page =====
const OnboardingPage = () => html\`
  <!DOCTYPE html>
  <html lang="ko">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <title>MONOMONO - 시작하기</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css">
    \${baseStyles}
    <style>
      .onboarding-container {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
      }
      
      .slide {
        flex: 1;
        display: none;
        flex-direction: column;
        padding: 40px 24px;
        text-align: center;
      }
      
      .slide.active {
        display: flex;
      }
      
      .slide-illustration {
        width: 200px;
        height: 200px;
        margin: 40px auto;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 80px;
      }
      
      .slide-illustration.sakura { background: rgba(245, 124, 168, 0.1); }
      .slide-illustration.sky { background: rgba(110, 207, 246, 0.1); }
      .slide-illustration.mint { background: rgba(196, 242, 227, 0.3); }
      
      .slide-title {
        font-size: 24px;
        font-weight: 700;
        color: var(--navy);
        margin-bottom: 16px;
      }
      
      .slide-description {
        font-size: 15px;
        color: var(--gray-600);
        line-height: 1.6;
        margin-bottom: 40px;
      }
      
      .dots {
        display: flex;
        justify-content: center;
        gap: 8px;
        margin-bottom: 24px;
      }
      
      .dot {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: var(--gray-200);
        transition: all 0.3s;
      }
      
      .dot.active {
        width: 24px;
        border-radius: 4px;
        background: var(--sakura);
      }
      
      .onboarding-actions {
        margin-top: auto;
        display: flex;
        flex-direction: column;
        gap: 12px;
      }
      
      .signup-form {
        text-align: left;
      }
      
      .form-group {
        margin-bottom: 16px;
      }
      
      .form-label {
        display: block;
        font-size: 14px;
        font-weight: 500;
        margin-bottom: 8px;
        color: var(--navy);
      }
      
      .form-input {
        width: 100%;
        padding: 14px 16px;
        border: 1px solid var(--gray-200);
        border-radius: 12px;
        font-size: 15px;
        outline: none;
        transition: border-color 0.2s;
      }
      
      .form-input:focus {
        border-color: var(--sakura);
      }
      
      .country-select {
        display: flex;
        gap: 12px;
      }
      
      .country-option {
        flex: 1;
        padding: 16px;
        border: 2px solid var(--gray-200);
        border-radius: 12px;
        text-align: center;
        cursor: pointer;
        transition: all 0.2s;
      }
      
      .country-option:hover,
      .country-option.selected {
        border-color: var(--sakura);
        background: rgba(245, 124, 168, 0.05);
      }
      
      .country-option .flag {
        font-size: 32px;
        margin-bottom: 8px;
      }
    </style>
  </head>
  <body>
    <div class="app-container onboarding-container">
      <!-- Slide 1 -->
      <div class="slide active" id="slide1">
        <div class="slide-illustration sakura">🌸✈️</div>
        <h1 class="slide-title">한일 청년들의<br>여행 친구 찾기</h1>
        <p class="slide-description">
          MONOMONO와 함께<br>
          새로운 여행 친구를 만나보세요!
        </p>
        <div class="dots">
          <div class="dot active"></div>
          <div class="dot"></div>
          <div class="dot"></div>
        </div>
        <div class="onboarding-actions">
          <button class="btn btn-sakura" style="width: 100%;" onclick="showSlide(2)">다음</button>
        </div>
      </div>
      
      <!-- Slide 2 -->
      <div class="slide" id="slide2">
        <div class="slide-illustration sky">🗺️🎌</div>
        <h1 class="slide-title">여행 일정으로<br>매칭하세요</h1>
        <p class="slide-description">
          같은 시기에 여행하는 사람들과<br>
          자동으로 연결됩니다
        </p>
        <div class="dots">
          <div class="dot"></div>
          <div class="dot active"></div>
          <div class="dot"></div>
        </div>
        <div class="onboarding-actions">
          <button class="btn btn-sakura" style="width: 100%;" onclick="showSlide(3)">다음</button>
          <button class="btn btn-outline" style="width: 100%;" onclick="showSlide(1)">이전</button>
        </div>
      </div>
      
      <!-- Slide 3 - Signup -->
      <div class="slide" id="slide3">
        <div class="slide-illustration mint">🤝💬</div>
        <h1 class="slide-title">안전하게 소통하세요</h1>
        <p class="slide-description">
          실시간 번역으로 언어 장벽 없이<br>
          안전하게 대화하세요
        </p>
        <div class="dots">
          <div class="dot"></div>
          <div class="dot"></div>
          <div class="dot active"></div>
        </div>
        <div class="onboarding-actions">
          <button class="btn btn-sakura" style="width: 100%;" onclick="showSlide(4)">시작하기</button>
          <button class="btn btn-outline" style="width: 100%;" onclick="showSlide(2)">이전</button>
        </div>
      </div>
      
      <!-- Slide 4 - Signup Form -->
      <div class="slide" id="slide4">
        <h1 class="slide-title" style="text-align: left; margin-bottom: 24px;">계정 만들기</h1>
        
        <div class="signup-form">
          <div class="form-group">
            <label class="form-label">국적 선택</label>
            <div class="country-select">
              <div class="country-option selected" onclick="selectCountry(this)">
                <div class="flag">🇰🇷</div>
                <div>한국</div>
              </div>
              <div class="country-option" onclick="selectCountry(this)">
                <div class="flag">🇯🇵</div>
                <div>일본</div>
              </div>
            </div>
          </div>
          
          <div class="form-group">
            <label class="form-label">이메일</label>
            <input type="email" class="form-input" placeholder="example@email.com">
          </div>
          
          <div class="form-group">
            <label class="form-label">비밀번호</label>
            <input type="password" class="form-input" placeholder="8자 이상 입력하세요">
          </div>
          
          <div class="form-group">
            <label class="form-label">닉네임</label>
            <input type="text" class="form-input" placeholder="여행 친구들에게 보여질 이름">
          </div>
        </div>
        
        <div class="onboarding-actions">
          <button class="btn btn-sakura" style="width: 100%;" onclick="location.href='/'">가입 완료</button>
          <p style="font-size: 12px; color: var(--gray-400); text-align: center; margin-top: 12px;">
            가입 시 <a href="#" style="color: var(--sakura);">이용약관</a> 및 <a href="#" style="color: var(--sakura);">개인정보처리방침</a>에 동의합니다
          </p>
        </div>
      </div>
    </div>
    
    <script>
      function showSlide(num) {
        document.querySelectorAll('.slide').forEach(s => s.classList.remove('active'));
        document.getElementById('slide' + num).classList.add('active');
      }
      
      function selectCountry(el) {
        document.querySelectorAll('.country-option').forEach(o => o.classList.remove('selected'));
        el.classList.add('selected');
      }
    </script>
  </body>
  </html>
\`

// ===== API Routes =====
app.get('/api/users', (c) => {
  return c.json({ users: mockUsers })
})

app.get('/api/users/:id', (c) => {
  const id = c.req.param('id')
  const user = mockUsers.find(u => u.id === id)
  if (!user) return c.json({ error: 'User not found' }, 404)
  return c.json({ user })
})

app.post('/api/swipe', async (c) => {
  const { userId, direction } = await c.req.json()
  const isMatch = direction === 'right' && Math.random() < 0.3
  return c.json({ 
    success: true, 
    isMatch,
    matchedUser: isMatch ? mockUsers.find(u => u.id === userId) : null
  })
})

app.get('/api/matches', (c) => {
  return c.json({ matches: mockUsers.slice(0, 2) })
})

app.get('/api/travel', (c) => {
  return c.json({ travelers: mockUsers })
})

// ===== Page Routes =====
app.get('/', (c) => c.html(HomePage()))
app.get('/travel', (c) => c.html(TravelPage()))
app.get('/matches', (c) => c.html(MatchesPage()))
app.get('/chat', (c) => c.html(ChatPage()))
app.get('/chat/:id', (c) => {
  const id = c.req.param('id')
  return c.html(ChatRoomPage(id))
})
app.get('/profile', (c) => c.html(ProfilePage()))
app.get('/onboarding', (c) => c.html(OnboardingPage()))

export default handle(app)

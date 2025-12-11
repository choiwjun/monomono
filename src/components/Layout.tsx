import type { FC, PropsWithChildren } from 'hono/jsx'

interface LayoutProps extends PropsWithChildren {
  activeTab?: 'home' | 'travel' | 'matches' | 'chat' | 'profile'
  showHeader?: boolean
  showNav?: boolean
  showSOS?: boolean
}

export const Layout: FC<LayoutProps> = ({ 
  children, 
  activeTab = 'home',
  showHeader = true,
  showNav = true,
  showSOS = false
}) => {
  return (
    <div class="app-container">
      {/* Top Header */}
      {showHeader && (
        <header class="top-header">
          <div class="logo">
            <i class="fas fa-paper-plane"></i>
            <span>MONOMONO</span>
          </div>
          <div class="header-actions">
            <button class="header-btn" onclick="toggleLanguage()" title="언어 변경">
              <span style="font-size: 13px; font-weight: 600;">KR</span>
            </button>
            <button class="header-btn" onclick="showNotifications()" style="position: relative;">
              <i class="fas fa-bell"></i>
              <span style="position: absolute; top: 6px; right: 6px; width: 8px; height: 8px; background: #F57CA8; border-radius: 50%;"></span>
            </button>
            <button class="header-btn" onclick="showFilterModal()">
              <i class="fas fa-sliders-h"></i>
            </button>
          </div>
        </header>
      )}

      {/* Main Content */}
      <main style={`padding-bottom: ${showNav ? '80px' : '0'}`}>
        {children}
      </main>

      {/* SOS Button */}
      {showSOS && (
        <button class="sos-btn" onclick="triggerSOS()" title="긴급 도움 요청">
          <i class="fas fa-exclamation-triangle"></i>
        </button>
      )}

      {/* Bottom Navigation */}
      {showNav && (
        <nav class="bottom-nav">
          <a href="/" class={`nav-item ${activeTab === 'home' ? 'active' : ''}`}>
            <i class="fas fa-compass"></i>
            <span>홈</span>
          </a>
          <a href="/travel" class={`nav-item ${activeTab === 'travel' ? 'active' : ''}`}>
            <i class="fas fa-map-marked-alt"></i>
            <span>여행</span>
          </a>
          <a href="/matches" class={`nav-item ${activeTab === 'matches' ? 'active' : ''}`}>
            <i class="fas fa-heart"></i>
            <span class="nav-badge">3</span>
            <span>매칭</span>
          </a>
          <a href="/chat" class={`nav-item ${activeTab === 'chat' ? 'active' : ''}`}>
            <i class="fas fa-comment-dots"></i>
            <span class="nav-badge">2</span>
            <span>채팅</span>
          </a>
          <a href="/profile" class={`nav-item ${activeTab === 'profile' ? 'active' : ''}`}>
            <i class="fas fa-user"></i>
            <span>MY</span>
          </a>
        </nav>
      )}

      {/* Match Modal */}
      <div id="matchModal" class="match-overlay">
        <div class="match-content">
          <div class="match-heart">
            <i class="fas fa-heart"></i>
          </div>
          <h2 style="font-size: 28px; font-weight: 700; margin-bottom: 8px;">연결되었어요! 🎉</h2>
          <p style="font-size: 16px; opacity: 0.9; margin-bottom: 32px;">서로의 여행 일정이 맞았어요</p>
          <div id="matchUserInfo" style="margin-bottom: 32px;"></div>
          <div style="display: flex; gap: 12px; justify-content: center;">
            <button onclick="sendMessage()" class="btn-primary" style="background: white; color: #F57CA8; box-shadow: none;">
              <i class="fas fa-paper-plane"></i>메시지 보내기
            </button>
            <button onclick="closeMatchModal()" class="btn-secondary" style="background: rgba(255,255,255,0.2); color: white; border-color: rgba(255,255,255,0.3);">
              계속 둘러보기
            </button>
          </div>
        </div>
      </div>

      {/* Filter Modal */}
      <div id="filterModal" class="modal-backdrop" onclick="closeFilterModal(event)">
        <div class="modal-content" onclick="event.stopPropagation()">
          <div class="modal-handle"></div>
          <div style="padding: 24px;">
            <h3 style="font-size: 20px; font-weight: 700; color: #1D2B4F; margin-bottom: 24px;">필터 설정</h3>
            
            {/* Country Filter */}
            <div class="form-group">
              <label class="form-label">국가</label>
              <div style="display: flex; gap: 8px; flex-wrap: wrap;">
                <button class="chip chip-outline active" data-country="all">전체</button>
                <button class="chip chip-outline" data-country="korea">
                  <span>🇰🇷</span> 한국
                </button>
                <button class="chip chip-outline" data-country="japan">
                  <span>🇯🇵</span> 일본
                </button>
              </div>
            </div>

            {/* Age Range */}
            <div class="form-group">
              <label class="form-label">나이 범위</label>
              <div style="display: flex; gap: 12px; align-items: center;">
                <input type="number" class="form-input" style="width: 80px; text-align: center;" value="20" min="18" max="50" />
                <span style="color: #9E9E9E;">~</span>
                <input type="number" class="form-input" style="width: 80px; text-align: center;" value="35" min="18" max="50" />
                <span style="color: #757575;">세</span>
              </div>
            </div>

            {/* Travel Style */}
            <div class="form-group">
              <label class="form-label">여행 스타일</label>
              <div style="display: flex; flex-wrap: wrap; gap: 8px;">
                <button class="chip chip-outline">🏖️ 힐링</button>
                <button class="chip chip-outline active">🍜 미식</button>
                <button class="chip chip-outline">🎭 문화체험</button>
                <button class="chip chip-outline active">☕ 카페투어</button>
                <button class="chip chip-outline">🛍️ 쇼핑</button>
                <button class="chip chip-outline">🏃 액티비티</button>
                <button class="chip chip-outline">♨️ 온천</button>
                <button class="chip chip-outline">🎵 K-POP</button>
              </div>
            </div>

            {/* Verification */}
            <div class="form-group">
              <label class="form-label">인증 상태</label>
              <div style="display: flex; gap: 8px;">
                <button class="chip chip-outline active">
                  <i class="fas fa-check-circle"></i> 본인 인증
                </button>
                <button class="chip chip-outline">
                  <i class="fas fa-plane"></i> 여행 인증
                </button>
              </div>
            </div>

            <button class="btn-primary" style="width: 100%; margin-top: 8px;">
              필터 적용하기
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

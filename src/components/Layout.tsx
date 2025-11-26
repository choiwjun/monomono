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
            <i class="fas fa-plane-departure"></i>
            <span>TravelMatch</span>
          </div>
          <div class="header-actions">
            <button class="header-btn" onclick="toggleLanguage()">
              <span style="font-size: 14px; font-weight: 600;">KR</span>
            </button>
            <button class="header-btn" onclick="showNotifications()">
              <i class="fas fa-bell"></i>
            </button>
            <button class="header-btn" onclick="showSettings()">
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
        <button class="sos-btn" onclick="triggerSOS()">
          <i class="fas fa-exclamation-triangle"></i>
        </button>
      )}

      {/* Bottom Navigation */}
      {showNav && (
        <nav class="bottom-nav">
          <a href="/" class={`nav-item ${activeTab === 'home' ? 'active' : ''}`}>
            <i class="fas fa-fire"></i>
            <span>발견</span>
          </a>
          <a href="/travel" class={`nav-item ${activeTab === 'travel' ? 'active' : ''}`}>
            <i class="fas fa-map-marked-alt"></i>
            <span>여행</span>
          </a>
          <a href="/matches" class={`nav-item ${activeTab === 'matches' ? 'active' : ''}`} style="position: relative;">
            <i class="fas fa-heart"></i>
            <span class="nav-badge">3</span>
            <span>매칭</span>
          </a>
          <a href="/chat" class={`nav-item ${activeTab === 'chat' ? 'active' : ''}`} style="position: relative;">
            <i class="fas fa-comment-dots"></i>
            <span class="nav-badge">2</span>
            <span>채팅</span>
          </a>
          <a href="/profile" class={`nav-item ${activeTab === 'profile' ? 'active' : ''}`}>
            <i class="fas fa-user"></i>
            <span>프로필</span>
          </a>
        </nav>
      )}

      {/* Match Modal */}
      <div id="matchModal" class="match-overlay">
        <div class="match-content">
          <div style="font-size: 80px; margin-bottom: 20px;">
            <i class="fas fa-heart" style="animation: heartBeat 0.6s infinite;"></i>
          </div>
          <h2 style="font-size: 32px; font-weight: 700; margin-bottom: 8px;">매칭 성공!</h2>
          <p style="font-size: 18px; opacity: 0.9; margin-bottom: 30px;">서로 마음이 통했어요!</p>
          <div id="matchUserInfo" style="margin-bottom: 30px;"></div>
          <div style="display: flex; gap: 12px; justify-content: center;">
            <button onclick="sendMessage()" style="padding: 14px 32px; background: white; color: #FF6B6B; border-radius: 30px; font-weight: 600; border: none; cursor: pointer;">
              <i class="fas fa-paper-plane" style="margin-right: 8px;"></i>메시지 보내기
            </button>
            <button onclick="closeMatchModal()" style="padding: 14px 32px; background: rgba(255,255,255,0.2); color: white; border-radius: 30px; font-weight: 600; border: none; cursor: pointer;">
              계속 탐색
            </button>
          </div>
        </div>
      </div>

      {/* Filter Modal */}
      <div id="filterModal" class="modal-backdrop" onclick="closeFilterModal(event)">
        <div class="modal-content" onclick="event.stopPropagation()">
          <div class="modal-handle"></div>
          <div style="padding: 20px;">
            <h3 style="font-size: 20px; font-weight: 700; margin-bottom: 24px;">필터 설정</h3>
            
            {/* Country Filter */}
            <div style="margin-bottom: 24px;">
              <label class="form-label">국가</label>
              <div style="display: flex; gap: 12px;">
                <button class="travel-tag active" data-country="all">전체</button>
                <button class="travel-tag" data-country="korea">
                  <span>🇰🇷</span> 한국
                </button>
                <button class="travel-tag" data-country="japan">
                  <span>🇯🇵</span> 일본
                </button>
              </div>
            </div>

            {/* Age Range */}
            <div style="margin-bottom: 24px;">
              <label class="form-label">나이 범위</label>
              <div style="display: flex; gap: 12px; align-items: center;">
                <input type="number" class="form-input" style="width: 80px;" value="20" min="18" max="50" />
                <span>~</span>
                <input type="number" class="form-input" style="width: 80px;" value="35" min="18" max="50" />
                <span>세</span>
              </div>
            </div>

            {/* Travel Style */}
            <div style="margin-bottom: 24px;">
              <label class="form-label">여행 스타일</label>
              <div style="display: flex; flex-wrap: wrap; gap: 8px;">
                <button class="travel-tag">🏖️ 힐링</button>
                <button class="travel-tag active">🍜 미식</button>
                <button class="travel-tag">🎭 문화체험</button>
                <button class="travel-tag active">☕ 카페투어</button>
                <button class="travel-tag">🛍️ 쇼핑</button>
                <button class="travel-tag">🏃 액티비티</button>
                <button class="travel-tag">♨️ 온천</button>
                <button class="travel-tag">🎵 K-POP</button>
              </div>
            </div>

            {/* Verification */}
            <div style="margin-bottom: 24px;">
              <label class="form-label">인증 상태</label>
              <div style="display: flex; gap: 12px;">
                <button class="travel-tag active">
                  <i class="fas fa-check-circle"></i> 본인 인증
                </button>
                <button class="travel-tag">
                  <i class="fas fa-plane"></i> 여행 인증
                </button>
              </div>
            </div>

            <button style="width: 100%; padding: 16px; background: linear-gradient(135deg, #FF6B6B, #E85555); color: white; border-radius: 12px; font-weight: 600; font-size: 16px; border: none; cursor: pointer;">
              필터 적용
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

import type { FC } from 'hono/jsx'
import { Layout } from '../components/Layout'

export const TravelPage: FC = () => {
  return (
    <Layout activeTab="travel">
      <div style="padding-bottom: 100px;">
        {/* Page Header */}
        <div style="padding: 24px 20px 16px;">
          <h1 style="font-size: 26px; font-weight: 700; color: #1D2B4F; margin-bottom: 4px;">여행</h1>
          <p style="font-size: 14px; color: #757575;">여행 일정을 공유하고 동행자를 찾아보세요</p>
        </div>

        {/* My Travel Card */}
        <div style="padding: 0 20px 24px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
            <h2 style="font-size: 16px; font-weight: 600; color: #1D2B4F;">내 여행 일정</h2>
            <button class="btn-ghost" style="padding: 6px 12px; color: #F57CA8;">
              <i class="fas fa-plus" style="margin-right: 4px;"></i> 일정 추가
            </button>
          </div>

          {/* Active Travel Schedule Card */}
          <div class="schedule-card">
            <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 16px; position: relative; z-index: 1;">
              <div>
                <p style="font-size: 12px; opacity: 0.8; margin-bottom: 4px;">다가오는 여행</p>
                <p style="font-size: 22px; font-weight: 700;">
                  🇯🇵 도쿄, 일본
                </p>
              </div>
              <span style="background: rgba(255,255,255,0.2); padding: 8px 14px; border-radius: 20px; font-size: 13px; font-weight: 600;">
                <i class="fas fa-plane" style="margin-right: 6px;"></i>D-15
              </span>
            </div>
            
            <div style="display: flex; gap: 12px; margin-bottom: 16px;">
              <div style="flex: 1; background: rgba(255,255,255,0.15); padding: 12px 16px; border-radius: 14px;">
                <p style="font-size: 11px; opacity: 0.8; margin-bottom: 4px;">출발</p>
                <p style="font-weight: 600;">4월 10일 (목)</p>
              </div>
              <div style="flex: 1; background: rgba(255,255,255,0.15); padding: 12px 16px; border-radius: 14px;">
                <p style="font-size: 11px; opacity: 0.8; margin-bottom: 4px;">도착</p>
                <p style="font-weight: 600;">5월 10일 (토)</p>
              </div>
            </div>

            <p style="font-size: 14px; opacity: 0.95; margin-bottom: 16px; line-height: 1.5;">
              "한 달 살기 도전! 신주쿠, 시부야 카페 탐방하고 로컬 친구 사귀고 싶어요 🍜"
            </p>

            <div style="display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 16px;">
              <span style="padding: 6px 12px; background: rgba(255,255,255,0.2); border-radius: 16px; font-size: 12px;">
                🍜 미식
              </span>
              <span style="padding: 6px 12px; background: rgba(255,255,255,0.2); border-radius: 16px; font-size: 12px;">
                ☕ 카페투어
              </span>
              <span style="padding: 6px 12px; background: rgba(255,255,255,0.2); border-radius: 16px; font-size: 12px;">
                🎭 문화체험
              </span>
            </div>

            <div style="padding-top: 16px; border-top: 1px solid rgba(255,255,255,0.2); display: flex; justify-content: space-between; align-items: center;">
              <div style="display: flex; align-items: center; gap: 8px;">
                <i class="fas fa-users" style="font-size: 14px;"></i>
                <span style="font-size: 13px;">매칭된 여행자 <strong>8명</strong></span>
              </div>
              <button style="padding: 8px 16px; background: rgba(255,255,255,0.2); border-radius: 20px; color: white; font-size: 13px; font-weight: 500; border: none; cursor: pointer;">
                수정하기
              </button>
            </div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div style="padding: 0 20px 20px;">
          <div style="display: flex; gap: 8px; overflow-x: auto;">
            <span class="chip chip-outline active">전체</span>
            <span class="chip chip-outline">🇯🇵 일본 → 한국</span>
            <span class="chip chip-outline">🇰🇷 한국 → 일본</span>
          </div>
        </div>

        {/* This Week Travelers */}
        <div style="padding: 0 20px 24px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;">
            <h2 style="font-size: 16px; font-weight: 600; color: #1D2B4F;">
              🔥 이번 주 여행자
            </h2>
            <button class="btn-ghost" style="padding: 6px 12px; font-size: 13px;">
              전체보기 <i class="fas fa-chevron-right" style="font-size: 10px; margin-left: 4px;"></i>
            </button>
          </div>

          {/* Traveler Card 1 */}
          <div class="traveler-card" style="margin-bottom: 12px;">
            <div class="traveler-card-header">
              <img 
                src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=200" 
                alt="사쿠라"
                class="traveler-card-avatar"
              />
              <div class="traveler-card-info">
                <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 4px;">
                  <span style="font-size: 17px; font-weight: 600; color: #1D2B4F;">사쿠라</span>
                  <span style="font-size: 15px; color: #757575;">26</span>
                  <span class="country-badge japan" style="font-size: 11px;">🇯🇵 도쿄</span>
                </div>
                <div style="display: flex; align-items: center; gap: 6px; margin-bottom: 8px;">
                  <span class="verified-badge">
                    <i class="fas fa-check-circle"></i> 인증됨
                  </span>
                </div>
                <div class="traveler-schedule">
                  <i class="fas fa-plane"></i>
                  <span>3/20-25 서울 방문</span>
                </div>
              </div>
            </div>
            <div style="padding: 0 16px 12px;">
              <p style="font-size: 14px; color: #616161; line-height: 1.5; margin-bottom: 12px;">
                홍대, 이태원 카페 투어하고 싶어요! 맛집 추천해주세요 🙏
              </p>
              <div style="display: flex; gap: 6px; flex-wrap: wrap;">
                <span class="chip chip-filled" style="padding: 4px 10px; font-size: 12px;">☕ 카페투어</span>
                <span class="chip chip-filled" style="padding: 4px 10px; font-size: 12px;">🍜 미식</span>
              </div>
            </div>
            <div class="traveler-card-footer">
              <button class="btn-secondary" style="flex: 1; padding: 12px;">
                프로필 보기
              </button>
              <button class="btn-primary sky" style="flex: 1; padding: 12px;">
                <i class="fas fa-handshake"></i> 동행 신청
              </button>
            </div>
          </div>

          {/* Traveler Card 2 */}
          <div class="traveler-card">
            <div class="traveler-card-header">
              <img 
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200" 
                alt="유이"
                class="traveler-card-avatar"
              />
              <div class="traveler-card-info">
                <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 4px;">
                  <span style="font-size: 17px; font-weight: 600; color: #1D2B4F;">유이</span>
                  <span style="font-size: 15px; color: #757575;">24</span>
                  <span class="country-badge japan" style="font-size: 11px;">🇯🇵 오사카</span>
                </div>
                <div style="display: flex; align-items: center; gap: 6px; margin-bottom: 8px;">
                  <span class="verified-badge">
                    <i class="fas fa-check-circle"></i> 인증됨
                  </span>
                </div>
                <div class="traveler-schedule">
                  <i class="fas fa-plane"></i>
                  <span>3/15-20 서울 방문</span>
                </div>
              </div>
            </div>
            <div style="padding: 0 16px 12px;">
              <p style="font-size: 14px; color: #616161; line-height: 1.5; margin-bottom: 12px;">
                K-POP 성지순례! BTS 관련 장소 같이 가실 분 💜
              </p>
              <div style="display: flex; gap: 6px; flex-wrap: wrap;">
                <span class="chip chip-filled" style="padding: 4px 10px; font-size: 12px;">🎵 K-POP</span>
                <span class="chip chip-filled" style="padding: 4px 10px; font-size: 12px;">🛍️ 쇼핑</span>
              </div>
            </div>
            <div class="traveler-card-footer">
              <button class="btn-secondary" style="flex: 1; padding: 12px;">
                프로필 보기
              </button>
              <button class="btn-primary sky" style="flex: 1; padding: 12px;">
                <i class="fas fa-handshake"></i> 동행 신청
              </button>
            </div>
          </div>
        </div>

        {/* Local Guides */}
        <div style="padding: 0 20px 24px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;">
            <h2 style="font-size: 16px; font-weight: 600; color: #1D2B4F;">
              🗺️ 인기 로컬 가이드
            </h2>
            <button class="btn-ghost" style="padding: 6px 12px; font-size: 13px;">
              전체보기 <i class="fas fa-chevron-right" style="font-size: 10px; margin-left: 4px;"></i>
            </button>
          </div>

          <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px;">
            {/* Guide 1 */}
            <div class="guide-card">
              <div class="guide-card-image">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300" 
                  alt="지민"
                />
                <div class="guide-card-overlay">
                  <div style="display: flex; align-items: center; gap: 6px; margin-bottom: 4px;">
                    <span style="font-weight: 600; font-size: 16px;">지민</span>
                    <span style="opacity: 0.8;">28</span>
                  </div>
                  <div class="guide-rating">
                    <i class="fas fa-star"></i>
                    <span>4.9 (23)</span>
                  </div>
                </div>
                <div style="position: absolute; top: 12px; left: 12px;">
                  <span class="country-badge korea" style="background: rgba(255,255,255,0.9);">🇰🇷 부산</span>
                </div>
              </div>
              <div style="padding: 12px;">
                <p style="font-size: 13px; color: #616161; margin-bottom: 8px; line-height: 1.4;">
                  부산 로컬 맛집 & 해운대 투어 전문!
                </p>
                <div style="display: flex; gap: 4px;">
                  <span class="chip chip-sky" style="padding: 4px 8px; font-size: 11px;">🍜 미식</span>
                  <span class="chip chip-sky" style="padding: 4px 8px; font-size: 11px;">🏖️ 해변</span>
                </div>
              </div>
            </div>

            {/* Guide 2 */}
            <div class="guide-card">
              <div class="guide-card-image">
                <img 
                  src="https://images.unsplash.com/photo-1524638431109-93d95c968f03?w=300" 
                  alt="하나"
                />
                <div class="guide-card-overlay">
                  <div style="display: flex; align-items: center; gap: 6px; margin-bottom: 4px;">
                    <span style="font-weight: 600; font-size: 16px;">하나</span>
                    <span style="opacity: 0.8;">25</span>
                  </div>
                  <div class="guide-rating">
                    <i class="fas fa-star"></i>
                    <span>4.8 (18)</span>
                  </div>
                </div>
                <div style="position: absolute; top: 12px; left: 12px;">
                  <span class="country-badge japan" style="background: rgba(255,255,255,0.9);">🇯🇵 교토</span>
                </div>
              </div>
              <div style="padding: 12px;">
                <p style="font-size: 13px; color: #616161; margin-bottom: 8px; line-height: 1.4;">
                  교토 전통 문화 체험 안내해드려요
                </p>
                <div style="display: flex; gap: 4px;">
                  <span class="chip chip-mint" style="padding: 4px 8px; font-size: 11px;">🎭 문화</span>
                  <span class="chip chip-mint" style="padding: 4px 8px; font-size: 11px;">🌸 자연</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Companion Recruitment */}
        <div style="padding: 0 20px 24px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;">
            <h2 style="font-size: 16px; font-weight: 600; color: #1D2B4F;">
              👥 동행자 모집
            </h2>
            <button class="btn-ghost" style="padding: 6px 12px; color: #F57CA8;">
              <i class="fas fa-plus" style="margin-right: 4px;"></i> 모집하기
            </button>
          </div>

          {/* Recruitment Card */}
          <div class="card" style="padding: 20px;">
            <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 12px;">
              <div>
                <h3 style="font-size: 16px; font-weight: 600; color: #1D2B4F; margin-bottom: 4px;">오사카 맛집 투어 같이 하실 분!</h3>
                <p style="font-size: 13px; color: #757575;">4/1 - 4/7 · 오사카, 교토</p>
              </div>
              <span style="background: #C4F2E3; color: #1D2B4F; padding: 4px 10px; border-radius: 12px; font-size: 12px; font-weight: 600;">
                모집중
              </span>
            </div>
            
            <p style="font-size: 14px; color: #616161; line-height: 1.5; margin-bottom: 12px;">
              도톤보리, 신사이바시 맛집 투어하고 교토 당일치기도 계획 중이에요. 일본어 가능하신 분 환영! 🍜🍣
            </p>

            <div style="display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 16px;">
              <span class="chip chip-filled" style="padding: 4px 10px; font-size: 12px;">🍜 미식</span>
              <span class="chip chip-filled" style="padding: 4px 10px; font-size: 12px;">🎭 문화체험</span>
              <span class="chip chip-filled" style="padding: 4px 10px; font-size: 12px;">♨️ 온천</span>
            </div>

            <div style="display: flex; justify-content: space-between; align-items: center; padding-top: 16px; border-top: 1px solid #F4EDE4;">
              <div style="display: flex; align-items: center; gap: 10px;">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80" 
                  alt="지민"
                  style="width: 36px; height: 36px; border-radius: 12px; object-fit: cover;"
                />
                <div>
                  <span style="font-size: 14px; font-weight: 500; color: #1D2B4F;">지민</span>
                  <span style="font-size: 13px; color: #757575; margin-left: 4px;">🇰🇷</span>
                </div>
              </div>
              <div style="display: flex; align-items: center; gap: 12px;">
                <span style="font-size: 13px; color: #757575;">
                  <i class="fas fa-user-friends" style="margin-right: 4px; color: #6ECFF6;"></i>
                  3/4명
                </span>
                <button class="btn-primary" style="padding: 10px 18px; font-size: 14px;">
                  신청하기
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Safety Reminder */}
        <div style="padding: 0 20px;">
          <div class="safety-banner">
            <i class="fas fa-shield-alt"></i>
            <div style="flex: 1;">
              <p style="font-size: 14px; font-weight: 600; margin-bottom: 2px;">안전한 동행을 위해</p>
              <p style="font-size: 12px; opacity: 0.8;">첫 만남은 공공장소에서 진행해주세요</p>
            </div>
            <button style="background: rgba(255,255,255,0.1); color: white; border: none; padding: 8px 12px; border-radius: 8px; font-size: 12px; cursor: pointer;">
              자세히
            </button>
          </div>
        </div>
      </div>
    </Layout>
  )
}

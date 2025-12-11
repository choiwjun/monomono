import type { FC } from 'hono/jsx'
import { Layout } from '../components/Layout'

export const HomePage: FC = () => {
  return (
    <Layout activeTab="home">
      {/* Hero Section */}
      <div class="hero-section">
        <div style="position: relative; z-index: 1;">
          <p style="font-size: 14px; opacity: 0.9; margin-bottom: 4px;">📍 서울에서</p>
          <h1 style="font-size: 26px; font-weight: 700; margin-bottom: 16px;">
            이번 주 만날 수 있는<br />여행자 <span style="color: #FFE66D;">23명</span>
          </h1>
          
          {/* Quick Search */}
          <div style="display: flex; gap: 8px;">
            <button class="chip" style="background: rgba(255,255,255,0.2); color: white; border: none;">
              <i class="fas fa-search"></i> 도쿄
            </button>
            <button class="chip" style="background: rgba(255,255,255,0.2); color: white; border: none;">
              오사카
            </button>
            <button class="chip" style="background: rgba(255,255,255,0.2); color: white; border: none;">
              교토
            </button>
          </div>
        </div>
      </div>

      {/* Category Shortcuts */}
      <div style="margin-top: -20px; margin-bottom: 24px;">
        <div class="category-grid">
          <a href="/travel" class="category-item">
            <div class="category-icon sakura">
              <i class="fas fa-users"></i>
            </div>
            <span style="font-size: 12px; font-weight: 500;">동행자</span>
          </a>
          <a href="/guides" class="category-item">
            <div class="category-icon sky">
              <i class="fas fa-map-marker-alt"></i>
            </div>
            <span style="font-size: 12px; font-weight: 500;">로컬가이드</span>
          </a>
          <a href="/experiences" class="category-item">
            <div class="category-icon mint">
              <i class="fas fa-camera"></i>
            </div>
            <span style="font-size: 12px; font-weight: 500;">체험</span>
          </a>
          <a href="/events" class="category-item">
            <div class="category-icon sunset">
              <i class="fas fa-calendar-alt"></i>
            </div>
            <span style="font-size: 12px; font-weight: 500;">이벤트</span>
          </a>
        </div>
      </div>

      <div style="padding: 0 20px;">
        {/* This Week Travelers Section */}
        <div style="margin-bottom: 32px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;">
            <div>
              <h2 style="font-size: 18px; font-weight: 700; color: #1D2B4F; margin-bottom: 4px;">
                🔥 이번 주 서울 여행자
              </h2>
              <p style="font-size: 13px; color: #757575;">일정이 겹치는 여행자를 만나보세요</p>
            </div>
            <button class="btn-ghost" style="padding: 8px 12px; font-size: 13px;">
              전체보기 <i class="fas fa-chevron-right" style="font-size: 10px; margin-left: 4px;"></i>
            </button>
          </div>

          {/* Traveler Card 1 - Schedule Match Highlight */}
          <div class="traveler-card" style="border: 2px solid #F57CA8; position: relative;">
            <div style="position: absolute; top: 12px; right: 12px; background: linear-gradient(135deg, #F57CA8, #E85A8A); color: white; padding: 4px 10px; border-radius: 12px; font-size: 11px; font-weight: 600;">
              <i class="fas fa-calendar-check" style="margin-right: 4px;"></i>일정 매칭!
            </div>
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
                "홍대, 이태원 카페 투어하고 싶어요! 맛집 추천해주세요 🍜"
              </p>
              <div style="display: flex; gap: 6px; flex-wrap: wrap;">
                <span class="chip chip-filled" style="padding: 4px 10px; font-size: 12px;">☕ 카페투어</span>
                <span class="chip chip-filled" style="padding: 4px 10px; font-size: 12px;">🍜 미식</span>
                <span class="chip chip-filled" style="padding: 4px 10px; font-size: 12px;">🎭 문화체험</span>
              </div>
            </div>
            <div class="traveler-card-footer">
              <button class="btn-secondary" style="flex: 1; padding: 12px;">
                프로필 보기
              </button>
              <button class="btn-primary" style="flex: 1; padding: 12px;">
                <i class="fas fa-paper-plane"></i> 연결하기
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
                "K-POP 성지순례! BTS 관련 장소 같이 가실 분 💜"
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
                <i class="fas fa-paper-plane"></i> 연결하기
              </button>
            </div>
          </div>
        </div>

        {/* Local Guides Section */}
        <div style="margin-bottom: 32px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;">
            <div>
              <h2 style="font-size: 18px; font-weight: 700; color: #1D2B4F; margin-bottom: 4px;">
                🗺️ 인기 로컬 가이드
              </h2>
              <p style="font-size: 13px; color: #757575;">현지 친구처럼 안내해드려요</p>
            </div>
            <button class="btn-ghost" style="padding: 8px 12px; font-size: 13px;">
              전체보기 <i class="fas fa-chevron-right" style="font-size: 10px; margin-left: 4px;"></i>
            </button>
          </div>

          {/* Guide Cards Grid */}
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

        {/* Local Events Banner */}
        <div style="margin-bottom: 32px;">
          <div style="background: linear-gradient(135deg, #1D2B4F 0%, #2D4A7C 100%); border-radius: 20px; padding: 24px; color: white; position: relative; overflow: hidden;">
            <div style="position: absolute; top: -30px; right: -30px; width: 150px; height: 150px; background: rgba(110, 207, 246, 0.2); border-radius: 50%;"></div>
            <div style="position: relative; z-index: 1;">
              <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 8px;">
                <i class="fas fa-sparkles" style="color: #FFE66D;"></i>
                <span style="font-size: 12px; font-weight: 600; color: #FFE66D;">이벤트</span>
              </div>
              <h3 style="font-size: 18px; font-weight: 700; margin-bottom: 8px;">
                한일 교류 미팅 @ 홍대
              </h3>
              <p style="font-size: 13px; opacity: 0.8; margin-bottom: 16px;">
                3/25(토) 오후 3시 · 참가자 12/20명
              </p>
              <button class="btn-cta" style="padding: 10px 20px; font-size: 14px;">
                참가 신청하기
              </button>
            </div>
          </div>
        </div>

        {/* Safety Banner */}
        <div class="safety-banner" style="margin-bottom: 24px;">
          <i class="fas fa-shield-alt"></i>
          <div style="flex: 1;">
            <p style="font-size: 14px; font-weight: 600; margin-bottom: 2px;">안전한 만남을 위해</p>
            <p style="font-size: 12px; opacity: 0.8;">첫 만남은 공공장소에서 진행해주세요</p>
          </div>
          <button style="background: rgba(255,255,255,0.1); color: white; border: none; padding: 8px 12px; border-radius: 8px; font-size: 12px; cursor: pointer;">
            자세히
          </button>
        </div>
      </div>

      {/* Profile Detail Modal */}
      <div id="profileModal" class="modal-backdrop" onclick="closeProfileModal(event)">
        <div class="modal-content" style="max-height: 95vh;" onclick="event.stopPropagation()">
          <div class="modal-handle"></div>
          
          {/* Profile Photos */}
          <div style="position: relative;">
            <img 
              src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=600" 
              alt="Profile" 
              style="width: 100%; aspect-ratio: 4/5; object-fit: cover;"
            />
            <div style="position: absolute; top: 16px; left: 16px; display: flex; gap: 4px;">
              <div style="width: 60px; height: 4px; background: white; border-radius: 2px;"></div>
              <div style="width: 60px; height: 4px; background: rgba(255,255,255,0.4); border-radius: 2px;"></div>
              <div style="width: 60px; height: 4px; background: rgba(255,255,255,0.4); border-radius: 2px;"></div>
            </div>
          </div>

          <div style="padding: 24px;">
            {/* Name, Age, Verified */}
            <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 8px;">
              <h2 style="font-size: 26px; font-weight: 700; color: #1D2B4F;">사쿠라</h2>
              <span style="font-size: 22px; color: #757575;">26</span>
              <span class="verified-badge">
                <i class="fas fa-check-circle"></i> 인증됨
              </span>
            </div>

            {/* Location */}
            <p style="color: #757575; margin-bottom: 20px; font-size: 14px;">
              <i class="fas fa-map-marker-alt" style="margin-right: 6px; color: #F57CA8;"></i>
              도쿄, 일본 · 2km 거리
            </p>

            {/* Travel Schedule */}
            <div class="schedule-card" style="margin-bottom: 20px;">
              <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 12px;">
                <div>
                  <p style="font-size: 12px; opacity: 0.8; margin-bottom: 4px;">다음 여행</p>
                  <p style="font-size: 18px; font-weight: 600;">
                    <i class="fas fa-plane" style="margin-right: 8px;"></i>
                    서울, 한국
                  </p>
                </div>
                <span style="background: rgba(255,255,255,0.2); padding: 6px 12px; border-radius: 20px; font-size: 12px;">
                  <i class="fas fa-calendar" style="margin-right: 4px;"></i>
                  3/20 - 3/25
                </span>
              </div>
              <p style="font-size: 13px; opacity: 0.9;">
                "홍대, 이태원 카페 투어하고 싶어요! 맛집 추천해주세요 🙏"
              </p>
            </div>

            {/* Bio */}
            <div style="margin-bottom: 24px;">
              <h3 style="font-weight: 600; margin-bottom: 10px; color: #1D2B4F;">자기소개</h3>
              <p style="color: #616161; line-height: 1.6; font-size: 15px;">
                여행과 카페 투어를 좋아해요! 한국 음식 특히 김치찌개를 너무 좋아합니다 🍲
              </p>
            </div>

            {/* Travel Style */}
            <div style="margin-bottom: 24px;">
              <h3 style="font-weight: 600; margin-bottom: 12px; color: #1D2B4F;">여행 스타일</h3>
              <div style="display: flex; flex-wrap: wrap; gap: 8px;">
                <span class="chip chip-outline active">☕ 카페투어</span>
                <span class="chip chip-outline active">🍜 미식</span>
                <span class="chip chip-outline active">🎭 문화체험</span>
              </div>
            </div>

            {/* Languages */}
            <div style="margin-bottom: 24px;">
              <h3 style="font-weight: 600; margin-bottom: 12px; color: #1D2B4F;">언어</h3>
              <div style="display: flex; flex-wrap: wrap; gap: 8px;">
                <span class="chip chip-filled">🇯🇵 일본어 (원어민)</span>
                <span class="chip chip-filled">🇰🇷 한국어 (초급)</span>
                <span class="chip chip-filled">🇺🇸 영어 (중급)</span>
              </div>
            </div>

            {/* Safety Notice */}
            <div class="safety-popup">
              <div style="display: flex; align-items: start; gap: 12px;">
                <i class="fas fa-shield-alt" style="font-size: 18px; margin-top: 2px;"></i>
                <div>
                  <p style="font-size: 14px; font-weight: 600; color: #92400E; margin-bottom: 4px;">안전한 만남을 위한 팁</p>
                  <p style="font-size: 13px; color: #B45309;">첫 만남은 공공장소에서 진행하고, 가족이나 친구에게 만남 장소를 공유하세요.</p>
                </div>
              </div>
            </div>

            {/* Report Button */}
            <button class="btn-ghost" style="width: 100%; justify-content: center; margin-top: 8px;">
              <i class="fas fa-flag"></i>
              프로필 신고하기
            </button>
          </div>

          {/* Bottom Action Buttons */}
          <div style="position: sticky; bottom: 0; padding: 16px 24px; background: white; border-top: 1px solid #F4EDE4; display: flex; gap: 12px;">
            <button onclick="closeProfileModal()" class="btn-icon lg" style="background: #FEE2E2; color: #E74C3C;">
              <i class="fas fa-times"></i>
            </button>
            <button onclick="closeProfileModal()" class="btn-primary" style="flex: 1;">
              <i class="fas fa-paper-plane"></i> 연결 요청하기
            </button>
          </div>
        </div>
      </div>
    </Layout>
  )
}

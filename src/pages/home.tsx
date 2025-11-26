import type { FC } from 'hono/jsx'
import { Layout } from '../components/Layout'

export const HomePage: FC = () => {
  return (
    <Layout activeTab="home">
      {/* Card Stack Container */}
      <div class="card-stack" id="cardStack">
        {/* Cards will be loaded dynamically */}
        <div class="swipe-card" id="card-0" style="z-index: 5;">
          {/* Like/Nope Labels */}
          <div class="swipe-label like-label" id="likeLabel-0">LIKE</div>
          <div class="swipe-label nope-label" id="nopeLabel-0">NOPE</div>
          
          {/* Card Photo */}
          <img 
            src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=600" 
            alt="Profile" 
            class="card-photo"
          />
          
          {/* Card Info Overlay */}
          <div class="card-info-overlay">
            {/* Tags Row */}
            <div style="display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 12px;">
              <span class="tag tag-country">
                <span>🇯🇵</span> 도쿄
              </span>
              <span class="tag tag-verified">
                <i class="fas fa-check-circle"></i> 인증됨
              </span>
              <span class="tag tag-travel">
                <i class="fas fa-plane"></i> 3/20-25 서울
              </span>
            </div>
            
            {/* Name and Age */}
            <div style="display: flex; align-items: baseline; gap: 8px; margin-bottom: 4px;">
              <h2 style="font-size: 28px; font-weight: 700;">사쿠라</h2>
              <span style="font-size: 22px; font-weight: 400;">26</span>
              <span style="font-size: 14px; opacity: 0.8; margin-left: 8px;">
                <i class="fas fa-map-marker-alt"></i> 2km
              </span>
            </div>
            
            {/* Bio */}
            <p style="font-size: 14px; opacity: 0.9; line-height: 1.5; margin-bottom: 12px;">
              여행과 카페 투어를 좋아해요! 한국 음식 특히 김치찌개를 너무 좋아합니다 🍲
            </p>
            
            {/* Travel Style Tags */}
            <div style="display: flex; gap: 6px;">
              <span style="padding: 4px 10px; background: rgba(255,255,255,0.2); border-radius: 12px; font-size: 12px;">
                ☕ 카페투어
              </span>
              <span style="padding: 4px 10px; background: rgba(255,255,255,0.2); border-radius: 12px; font-size: 12px;">
                🍜 미식
              </span>
              <span style="padding: 4px 10px; background: rgba(255,255,255,0.2); border-radius: 12px; font-size: 12px;">
                🎭 문화체험
              </span>
            </div>
          </div>

          {/* Expand Profile Button */}
          <button 
            onclick="expandProfile('1')" 
            style="position: absolute; bottom: 160px; right: 16px; width: 40px; height: 40px; background: rgba(255,255,255,0.9); border-radius: 50%; display: flex; align-items: center; justify-content: center; border: none; cursor: pointer; box-shadow: 0 2px 8px rgba(0,0,0,0.2);"
          >
            <i class="fas fa-chevron-up" style="color: #636E72;"></i>
          </button>
        </div>

        {/* Background cards for stack effect */}
        <div class="swipe-card" style="z-index: 4; transform: scale(0.95) translateY(10px);">
          <img 
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600" 
            alt="Profile" 
            class="card-photo"
          />
          <div class="card-info-overlay">
            <div style="display: flex; align-items: baseline; gap: 8px;">
              <h2 style="font-size: 28px; font-weight: 700;">지민</h2>
              <span style="font-size: 22px; font-weight: 400;">28</span>
            </div>
          </div>
        </div>

        <div class="swipe-card" style="z-index: 3; transform: scale(0.9) translateY(20px);">
          <img 
            src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600" 
            alt="Profile" 
            class="card-photo"
          />
          <div class="card-info-overlay">
            <div style="display: flex; align-items: baseline; gap: 8px;">
              <h2 style="font-size: 28px; font-weight: 700;">유이</h2>
              <span style="font-size: 22px; font-weight: 400;">24</span>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div class="action-buttons">
        {/* Rewind */}
        <button class="action-btn action-btn-sm" style="background: white; color: #FDCB6E;" onclick="rewindCard()">
          <i class="fas fa-undo"></i>
        </button>

        {/* Nope (X) */}
        <button class="action-btn action-btn-lg" style="background: white; color: #E74C3C;" onclick="swipeLeft()">
          <i class="fas fa-times"></i>
        </button>

        {/* Super Like (Star) */}
        <button class="action-btn action-btn-md" style="background: white; color: #3B82F6;" onclick="superLike()">
          <i class="fas fa-star"></i>
        </button>

        {/* Like (Heart) */}
        <button class="action-btn action-btn-lg" style="background: linear-gradient(135deg, #00B894, #00CEC9); color: white;" onclick="swipeRight()">
          <i class="fas fa-heart"></i>
        </button>

        {/* Boost */}
        <button class="action-btn action-btn-sm" style="background: white; color: #9B59B6;" onclick="boostProfile()">
          <i class="fas fa-bolt"></i>
        </button>
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

          <div style="padding: 20px;">
            {/* Name, Age, Verified */}
            <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 8px;">
              <h2 style="font-size: 28px; font-weight: 700;">사쿠라</h2>
              <span style="font-size: 24px; color: #636E72;">26</span>
              <span class="verified-badge">
                <i class="fas fa-check-circle"></i>
              </span>
            </div>

            {/* Location */}
            <p style="color: #636E72; margin-bottom: 16px;">
              <i class="fas fa-map-marker-alt" style="margin-right: 6px;"></i>
              도쿄, 일본 · 2km 거리
            </p>

            {/* Travel Schedule */}
            <div class="schedule-card">
              <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 12px;">
                <div>
                  <p style="font-size: 12px; opacity: 0.8; margin-bottom: 4px;">다음 여행</p>
                  <p style="font-size: 18px; font-weight: 600;">
                    <i class="fas fa-plane" style="margin-right: 8px;"></i>
                    서울, 한국
                  </p>
                </div>
                <span class="schedule-badge">
                  <i class="fas fa-calendar"></i>
                  3/20 - 3/25
                </span>
              </div>
              <p style="font-size: 13px; opacity: 0.9;">
                "홍대, 이태원 카페 투어하고 싶어요! 맛집 추천해주세요 🙏"
              </p>
            </div>

            {/* Bio */}
            <div style="margin-bottom: 20px;">
              <h3 style="font-weight: 600; margin-bottom: 8px;">자기소개</h3>
              <p style="color: #636E72; line-height: 1.6;">
                여행과 카페 투어를 좋아해요! 한국 음식 특히 김치찌개를 너무 좋아합니다 🍲
                <br /><br />
                일본어, 한국어 (초급), 영어 가능해요!
              </p>
            </div>

            {/* Travel Style */}
            <div style="margin-bottom: 20px;">
              <h3 style="font-weight: 600; margin-bottom: 12px;">여행 스타일</h3>
              <div style="display: flex; flex-wrap: wrap; gap: 8px;">
                <span class="travel-tag active">☕ 카페투어</span>
                <span class="travel-tag active">🍜 미식</span>
                <span class="travel-tag active">🎭 문화체험</span>
              </div>
            </div>

            {/* Languages */}
            <div style="margin-bottom: 20px;">
              <h3 style="font-weight: 600; margin-bottom: 12px;">언어</h3>
              <div style="display: flex; flex-wrap: wrap; gap: 8px;">
                <span style="padding: 8px 14px; background: #F5F5F5; border-radius: 20px; font-size: 13px;">
                  🇯🇵 일본어 (원어민)
                </span>
                <span style="padding: 8px 14px; background: #F5F5F5; border-radius: 20px; font-size: 13px;">
                  🇰🇷 한국어 (초급)
                </span>
                <span style="padding: 8px 14px; background: #F5F5F5; border-radius: 20px; font-size: 13px;">
                  🇺🇸 영어 (중급)
                </span>
              </div>
            </div>

            {/* Verification Badges */}
            <div style="margin-bottom: 24px;">
              <h3 style="font-weight: 600; margin-bottom: 12px;">인증 배지</h3>
              <div style="display: flex; gap: 12px;">
                <div style="display: flex; align-items: center; gap: 8px; padding: 12px 16px; background: #E8F5E9; border-radius: 12px;">
                  <i class="fas fa-check-circle" style="color: #00B894;"></i>
                  <span style="font-size: 13px; font-weight: 500;">본인 인증 완료</span>
                </div>
                <div style="display: flex; align-items: center; gap: 8px; padding: 12px 16px; background: #E3F2FD; border-radius: 12px;">
                  <i class="fas fa-plane" style="color: #3B82F6;"></i>
                  <span style="font-size: 13px; font-weight: 500;">여행자 인증</span>
                </div>
              </div>
            </div>

            {/* Report Button */}
            <button style="width: 100%; padding: 12px; color: #9CA3AF; background: transparent; border: none; font-size: 14px; cursor: pointer;">
              <i class="fas fa-flag" style="margin-right: 6px;"></i>
              프로필 신고하기
            </button>
          </div>

          {/* Bottom Action Buttons */}
          <div style="position: sticky; bottom: 0; padding: 16px 20px; background: white; border-top: 1px solid #F0F0F0; display: flex; gap: 12px;">
            <button onclick="closeProfileModal()" class="action-btn action-btn-lg" style="background: white; color: #E74C3C; flex-shrink: 0;">
              <i class="fas fa-times"></i>
            </button>
            <button onclick="closeProfileModal()" class="action-btn action-btn-lg" style="background: linear-gradient(135deg, #00B894, #00CEC9); color: white; flex-shrink: 0;">
              <i class="fas fa-heart"></i>
            </button>
          </div>
        </div>
      </div>
    </Layout>
  )
}

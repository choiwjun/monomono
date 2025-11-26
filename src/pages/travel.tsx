import type { FC } from 'hono/jsx'
import { Layout } from '../components/Layout'

export const TravelPage: FC = () => {
  return (
    <Layout activeTab="travel">
      <div style="padding: 20px;">
        {/* Page Title */}
        <div style="margin-bottom: 24px;">
          <h1 style="font-size: 28px; font-weight: 700; color: #2D3436; margin-bottom: 4px;">여행</h1>
          <p style="color: #636E72;">여행 일정을 공유하고 동행자를 찾아보세요</p>
        </div>

        {/* My Travel Card */}
        <div style="margin-bottom: 24px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
            <h2 style="font-size: 16px; font-weight: 600; color: #2D3436;">내 여행 일정</h2>
            <button style="color: #FF6B6B; font-size: 14px; font-weight: 500; background: none; border: none; cursor: pointer;">
              <i class="fas fa-plus" style="margin-right: 4px;"></i> 일정 추가
            </button>
          </div>

          {/* Active Travel Card */}
          <div class="schedule-card">
            <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 16px;">
              <div>
                <p style="font-size: 12px; opacity: 0.8; margin-bottom: 4px;">다가오는 여행</p>
                <p style="font-size: 20px; font-weight: 700;">
                  🇯🇵 도쿄, 일본
                </p>
              </div>
              <span class="schedule-badge">
                <i class="fas fa-plane"></i>
                D-15
              </span>
            </div>
            
            <div style="display: flex; gap: 16px; margin-bottom: 16px;">
              <div style="flex: 1; background: rgba(255,255,255,0.2); padding: 12px; border-radius: 12px;">
                <p style="font-size: 11px; opacity: 0.8; margin-bottom: 4px;">출발</p>
                <p style="font-weight: 600;">4월 10일 (목)</p>
              </div>
              <div style="flex: 1; background: rgba(255,255,255,0.2); padding: 12px; border-radius: 12px;">
                <p style="font-size: 11px; opacity: 0.8; margin-bottom: 4px;">도착</p>
                <p style="font-weight: 600;">5월 10일 (토)</p>
              </div>
            </div>

            <p style="font-size: 13px; opacity: 0.9; margin-bottom: 16px;">
              "한 달 살기 도전! 신주쿠, 시부야 카페 탐방하고 로컬 친구 사귀고 싶어요 🍜"
            </p>

            <div style="display: flex; gap: 8px;">
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

            <div style="margin-top: 16px; padding-top: 16px; border-top: 1px solid rgba(255,255,255,0.2); display: flex; justify-content: space-between; align-items: center;">
              <div style="display: flex; align-items: center; gap: 8px;">
                <i class="fas fa-eye" style="font-size: 14px;"></i>
                <span style="font-size: 13px;">매칭된 여행자 <strong>8명</strong></span>
              </div>
              <button style="padding: 8px 16px; background: rgba(255,255,255,0.2); border-radius: 20px; color: white; font-size: 13px; font-weight: 500; border: none; cursor: pointer;">
                수정하기
              </button>
            </div>
          </div>
        </div>

        {/* Travel Match Tabs */}
        <div style="display: flex; gap: 8px; margin-bottom: 20px; overflow-x: auto; padding-bottom: 8px;">
          <button style="padding: 10px 20px; background: #FF6B6B; color: white; border-radius: 20px; font-weight: 500; white-space: nowrap; border: none; cursor: pointer;">
            전체
          </button>
          <button style="padding: 10px 20px; background: white; color: #636E72; border-radius: 20px; font-weight: 500; white-space: nowrap; border: 1px solid #E5E7EB; cursor: pointer;">
            🇯🇵 일본 → 한국
          </button>
          <button style="padding: 10px 20px; background: white; color: #636E72; border-radius: 20px; font-weight: 500; white-space: nowrap; border: 1px solid #E5E7EB; cursor: pointer;">
            🇰🇷 한국 → 일본
          </button>
        </div>

        {/* Travelers This Week */}
        <div style="margin-bottom: 24px;">
          <h2 style="font-size: 16px; font-weight: 600; color: #2D3436; margin-bottom: 16px;">
            <i class="fas fa-fire" style="color: #FF6B6B; margin-right: 8px;"></i>
            이번 주 여행자
          </h2>

          {/* Traveler Card 1 */}
          <div style="background: white; border-radius: 16px; overflow: hidden; box-shadow: 0 2px 12px rgba(0,0,0,0.08); margin-bottom: 12px;">
            <div style="display: flex; padding: 16px; gap: 16px;">
              <div style="width: 100px; height: 100px; border-radius: 12px; overflow: hidden; flex-shrink: 0; position: relative;">
                <img 
                  src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=200" 
                  alt="사쿠라"
                  style="width: 100%; height: 100%; object-fit: cover;"
                />
                <div style="position: absolute; top: 8px; left: 8px; background: rgba(0,0,0,0.6); color: white; padding: 2px 8px; border-radius: 10px; font-size: 11px;">
                  🇯🇵 도쿄
                </div>
              </div>
              <div style="flex: 1; min-width: 0;">
                <div style="display: flex; align-items: center; gap: 6px; margin-bottom: 4px;">
                  <span style="font-weight: 600; font-size: 16px;">사쿠라</span>
                  <span style="color: #636E72;">26</span>
                  <i class="fas fa-check-circle" style="color: #00B894; font-size: 14px;"></i>
                </div>
                <div style="display: flex; align-items: center; gap: 6px; margin-bottom: 8px;">
                  <span style="background: #E8F5E9; color: #00B894; padding: 4px 10px; border-radius: 12px; font-size: 12px; font-weight: 500;">
                    <i class="fas fa-plane" style="margin-right: 4px;"></i>
                    3/20-25 서울
                  </span>
                </div>
                <p style="font-size: 13px; color: #636E72; line-height: 1.4;">
                  홍대, 이태원 카페 투어하고 싶어요! 맛집 추천해주세요 🙏
                </p>
                <div style="display: flex; gap: 6px; margin-top: 8px;">
                  <span style="font-size: 12px; color: #9CA3AF;">☕ 카페투어</span>
                  <span style="font-size: 12px; color: #9CA3AF;">🍜 미식</span>
                </div>
              </div>
            </div>
            <div style="padding: 0 16px 16px; display: flex; gap: 8px;">
              <button style="flex: 1; padding: 12px; background: #F5F5F5; border-radius: 10px; border: none; cursor: pointer; font-weight: 500; color: #636E72;">
                프로필 보기
              </button>
              <button style="flex: 1; padding: 12px; background: linear-gradient(135deg, #4ECDC4, #44A08D); border-radius: 10px; border: none; cursor: pointer; font-weight: 500; color: white;">
                <i class="fas fa-handshake" style="margin-right: 6px;"></i>
                동행 신청
              </button>
            </div>
          </div>

          {/* Traveler Card 2 */}
          <div style="background: white; border-radius: 16px; overflow: hidden; box-shadow: 0 2px 12px rgba(0,0,0,0.08); margin-bottom: 12px;">
            <div style="display: flex; padding: 16px; gap: 16px;">
              <div style="width: 100px; height: 100px; border-radius: 12px; overflow: hidden; flex-shrink: 0; position: relative;">
                <img 
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200" 
                  alt="유이"
                  style="width: 100%; height: 100%; object-fit: cover;"
                />
                <div style="position: absolute; top: 8px; left: 8px; background: rgba(0,0,0,0.6); color: white; padding: 2px 8px; border-radius: 10px; font-size: 11px;">
                  🇯🇵 오사카
                </div>
              </div>
              <div style="flex: 1; min-width: 0;">
                <div style="display: flex; align-items: center; gap: 6px; margin-bottom: 4px;">
                  <span style="font-weight: 600; font-size: 16px;">유이</span>
                  <span style="color: #636E72;">24</span>
                  <i class="fas fa-check-circle" style="color: #00B894; font-size: 14px;"></i>
                </div>
                <div style="display: flex; align-items: center; gap: 6px; margin-bottom: 8px;">
                  <span style="background: #E8F5E9; color: #00B894; padding: 4px 10px; border-radius: 12px; font-size: 12px; font-weight: 500;">
                    <i class="fas fa-plane" style="margin-right: 4px;"></i>
                    3/15-20 서울
                  </span>
                </div>
                <p style="font-size: 13px; color: #636E72; line-height: 1.4;">
                  K-POP 성지순례! BTS 관련 장소 같이 가실 분 💜
                </p>
                <div style="display: flex; gap: 6px; margin-top: 8px;">
                  <span style="font-size: 12px; color: #9CA3AF;">🎵 K-POP</span>
                  <span style="font-size: 12px; color: #9CA3AF;">🛍️ 쇼핑</span>
                </div>
              </div>
            </div>
            <div style="padding: 0 16px 16px; display: flex; gap: 8px;">
              <button style="flex: 1; padding: 12px; background: #F5F5F5; border-radius: 10px; border: none; cursor: pointer; font-weight: 500; color: #636E72;">
                프로필 보기
              </button>
              <button style="flex: 1; padding: 12px; background: linear-gradient(135deg, #4ECDC4, #44A08D); border-radius: 10px; border: none; cursor: pointer; font-weight: 500; color: white;">
                <i class="fas fa-handshake" style="margin-right: 6px;"></i>
                동행 신청
              </button>
            </div>
          </div>
        </div>

        {/* Local Guides Section */}
        <div style="margin-bottom: 24px;">
          <h2 style="font-size: 16px; font-weight: 600; color: #2D3436; margin-bottom: 16px;">
            <i class="fas fa-map-marked-alt" style="color: #4ECDC4; margin-right: 8px;"></i>
            로컬 가이드
          </h2>

          {/* Guide Cards */}
          <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px;">
            {/* Guide 1 */}
            <div style="background: white; border-radius: 16px; overflow: hidden; box-shadow: 0 2px 12px rgba(0,0,0,0.08);">
              <div style="position: relative;">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300" 
                  alt="지민"
                  style="width: 100%; aspect-ratio: 4/5; object-fit: cover;"
                />
                <div style="position: absolute; top: 8px; left: 8px; display: flex; gap: 4px;">
                  <span style="background: rgba(0,0,0,0.6); color: white; padding: 4px 8px; border-radius: 8px; font-size: 11px;">
                    🇰🇷 부산
                  </span>
                </div>
                <div style="position: absolute; bottom: 0; left: 0; right: 0; padding: 40px 12px 12px; background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);">
                  <div style="display: flex; align-items: center; gap: 4px; margin-bottom: 2px;">
                    <span style="color: white; font-weight: 600;">지민</span>
                    <span style="color: rgba(255,255,255,0.8);">28</span>
                  </div>
                  <div style="display: flex; align-items: center; gap: 4px;">
                    <i class="fas fa-star" style="color: #FFD700; font-size: 12px;"></i>
                    <span style="color: white; font-size: 12px;">4.9 (23)</span>
                  </div>
                </div>
              </div>
              <div style="padding: 12px;">
                <p style="font-size: 12px; color: #636E72; margin-bottom: 8px; line-height: 1.4;">
                  부산 로컬 맛집 & 해운대 투어 전문!
                </p>
                <div style="display: flex; gap: 4px; flex-wrap: wrap;">
                  <span style="font-size: 11px; color: #9CA3AF; background: #F5F5F5; padding: 4px 8px; border-radius: 8px;">🍜 미식</span>
                  <span style="font-size: 11px; color: #9CA3AF; background: #F5F5F5; padding: 4px 8px; border-radius: 8px;">🏖️ 해변</span>
                </div>
              </div>
            </div>

            {/* Guide 2 */}
            <div style="background: white; border-radius: 16px; overflow: hidden; box-shadow: 0 2px 12px rgba(0,0,0,0.08);">
              <div style="position: relative;">
                <img 
                  src="https://images.unsplash.com/photo-1524638431109-93d95c968f03?w=300" 
                  alt="하나"
                  style="width: 100%; aspect-ratio: 4/5; object-fit: cover;"
                />
                <div style="position: absolute; top: 8px; left: 8px; display: flex; gap: 4px;">
                  <span style="background: rgba(0,0,0,0.6); color: white; padding: 4px 8px; border-radius: 8px; font-size: 11px;">
                    🇯🇵 교토
                  </span>
                </div>
                <div style="position: absolute; bottom: 0; left: 0; right: 0; padding: 40px 12px 12px; background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);">
                  <div style="display: flex; align-items: center; gap: 4px; margin-bottom: 2px;">
                    <span style="color: white; font-weight: 600;">하나</span>
                    <span style="color: rgba(255,255,255,0.8);">25</span>
                  </div>
                  <div style="display: flex; align-items: center; gap: 4px;">
                    <i class="fas fa-star" style="color: #FFD700; font-size: 12px;"></i>
                    <span style="color: white; font-size: 12px;">4.8 (18)</span>
                  </div>
                </div>
              </div>
              <div style="padding: 12px;">
                <p style="font-size: 12px; color: #636E72; margin-bottom: 8px; line-height: 1.4;">
                  교토 전통 문화 체험 안내해드려요
                </p>
                <div style="display: flex; gap: 4px; flex-wrap: wrap;">
                  <span style="font-size: 11px; color: #9CA3AF; background: #F5F5F5; padding: 4px 8px; border-radius: 8px;">🎭 문화</span>
                  <span style="font-size: 11px; color: #9CA3AF; background: #F5F5F5; padding: 4px 8px; border-radius: 8px;">🌸 자연</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Companion Recruitment */}
        <div>
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;">
            <h2 style="font-size: 16px; font-weight: 600; color: #2D3436;">
              <i class="fas fa-users" style="color: #FF6B6B; margin-right: 8px;"></i>
              동행자 모집
            </h2>
            <button style="color: #FF6B6B; font-size: 14px; font-weight: 500; background: none; border: none; cursor: pointer;">
              <i class="fas fa-plus" style="margin-right: 4px;"></i> 모집하기
            </button>
          </div>

          {/* Recruitment Card */}
          <div style="background: white; border-radius: 16px; padding: 16px; box-shadow: 0 2px 12px rgba(0,0,0,0.08); margin-bottom: 12px;">
            <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 12px;">
              <div>
                <h3 style="font-size: 16px; font-weight: 600; margin-bottom: 4px;">오사카 맛집 투어 같이 하실 분!</h3>
                <p style="font-size: 13px; color: #636E72;">4/1 - 4/7 · 오사카, 교토</p>
              </div>
              <span style="background: #E8F5E9; color: #00B894; padding: 4px 10px; border-radius: 10px; font-size: 12px; font-weight: 500;">
                모집중
              </span>
            </div>
            
            <p style="font-size: 14px; color: #636E72; line-height: 1.5; margin-bottom: 12px;">
              도톤보리, 신사이바시 맛집 투어하고 교토 당일치기도 계획 중이에요. 일본어 가능하신 분 환영! 🍜🍣
            </p>

            <div style="display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 12px;">
              <span style="font-size: 12px; color: #9CA3AF; background: #F5F5F5; padding: 4px 10px; border-radius: 10px;">🍜 미식</span>
              <span style="font-size: 12px; color: #9CA3AF; background: #F5F5F5; padding: 4px 10px; border-radius: 10px;">🎭 문화체험</span>
              <span style="font-size: 12px; color: #9CA3AF; background: #F5F5F5; padding: 4px 10px; border-radius: 10px;">♨️ 온천</span>
            </div>

            <div style="display: flex; justify-content: space-between; align-items: center; padding-top: 12px; border-top: 1px solid #F0F0F0;">
              <div style="display: flex; align-items: center; gap: 8px;">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80" 
                  alt="지민"
                  style="width: 32px; height: 32px; border-radius: 50%; object-fit: cover;"
                />
                <div>
                  <span style="font-size: 13px; font-weight: 500;">지민</span>
                  <span style="font-size: 12px; color: #636E72; margin-left: 4px;">🇰🇷</span>
                </div>
              </div>
              <div style="display: flex; align-items: center; gap: 12px;">
                <span style="font-size: 13px; color: #636E72;">
                  <i class="fas fa-user-friends" style="margin-right: 4px;"></i>
                  3/4명
                </span>
                <button style="padding: 8px 16px; background: linear-gradient(135deg, #FF6B6B, #E85555); border-radius: 20px; color: white; font-size: 13px; font-weight: 500; border: none; cursor: pointer;">
                  신청하기
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

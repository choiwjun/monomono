import type { FC } from 'hono/jsx'
import { Layout } from '../components/Layout'

export const MatchesPage: FC = () => {
  return (
    <Layout activeTab="matches">
      <div style="padding-bottom: 100px;">
        {/* Page Header */}
        <div style="padding: 24px 20px 16px;">
          <h1 style="font-size: 26px; font-weight: 700; color: #1D2B4F; margin-bottom: 4px;">매칭</h1>
          <p style="font-size: 14px; color: #757575;">서로 연결된 여행 친구들</p>
        </div>

        {/* New Connections */}
        <div style="padding: 0 20px 24px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;">
            <h2 style="font-size: 16px; font-weight: 600; color: #1D2B4F;">
              새로운 연결 <span style="color: #F57CA8;">3</span>
            </h2>
            <button class="btn-ghost" style="padding: 6px 12px; font-size: 13px;">
              전체보기 <i class="fas fa-chevron-right" style="font-size: 10px; margin-left: 4px;"></i>
            </button>
          </div>
          
          {/* Horizontal Scroll - New Connections */}
          <div style="display: flex; gap: 12px; overflow-x: auto; margin: 0 -20px; padding: 0 20px 8px;">
            {/* Connection 1 - New */}
            <a href="/chat/1" style="text-decoration: none; flex-shrink: 0;">
              <div style="position: relative; width: 110px;">
                <div style="width: 110px; height: 150px; border-radius: 16px; overflow: hidden; position: relative; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
                  <img 
                    src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=200" 
                    alt="사쿠라"
                    style="width: 100%; height: 100%; object-fit: cover;"
                  />
                  <div style="position: absolute; inset: 0; background: linear-gradient(to top, rgba(29,43,79,0.8), transparent 60%);"></div>
                  <div style="position: absolute; bottom: 10px; left: 10px; right: 10px;">
                    <p style="color: white; font-weight: 600; font-size: 15px; margin-bottom: 2px;">사쿠라</p>
                    <p style="color: rgba(255,255,255,0.8); font-size: 12px;">🇯🇵 도쿄 · 26</p>
                  </div>
                </div>
                {/* New badge */}
                <div style="position: absolute; top: -6px; right: -6px; width: 24px; height: 24px; background: linear-gradient(135deg, #F57CA8, #E85A8A); border-radius: 50%; border: 3px solid white; display: flex; align-items: center; justify-content: center; box-shadow: 0 2px 8px rgba(245,124,168,0.4);">
                  <span style="color: white; font-size: 10px; font-weight: 700;">N</span>
                </div>
              </div>
            </a>

            {/* Connection 2 */}
            <a href="/chat/2" style="text-decoration: none; flex-shrink: 0;">
              <div style="position: relative; width: 110px;">
                <div style="width: 110px; height: 150px; border-radius: 16px; overflow: hidden; position: relative; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
                  <img 
                    src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200" 
                    alt="유이"
                    style="width: 100%; height: 100%; object-fit: cover;"
                  />
                  <div style="position: absolute; inset: 0; background: linear-gradient(to top, rgba(29,43,79,0.8), transparent 60%);"></div>
                  <div style="position: absolute; bottom: 10px; left: 10px; right: 10px;">
                    <p style="color: white; font-weight: 600; font-size: 15px; margin-bottom: 2px;">유이</p>
                    <p style="color: rgba(255,255,255,0.8); font-size: 12px;">🇯🇵 오사카 · 24</p>
                  </div>
                </div>
              </div>
            </a>

            {/* Connection 3 */}
            <a href="/chat/3" style="text-decoration: none; flex-shrink: 0;">
              <div style="position: relative; width: 110px;">
                <div style="width: 110px; height: 150px; border-radius: 16px; overflow: hidden; position: relative; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
                  <img 
                    src="https://images.unsplash.com/photo-1524638431109-93d95c968f03?w=200" 
                    alt="하나"
                    style="width: 100%; height: 100%; object-fit: cover;"
                  />
                  <div style="position: absolute; inset: 0; background: linear-gradient(to top, rgba(29,43,79,0.8), transparent 60%);"></div>
                  <div style="position: absolute; bottom: 10px; left: 10px; right: 10px;">
                    <p style="color: white; font-weight: 600; font-size: 15px; margin-bottom: 2px;">하나</p>
                    <p style="color: rgba(255,255,255,0.8); font-size: 12px;">🇯🇵 교토 · 25</p>
                  </div>
                </div>
              </div>
            </a>

            {/* See More */}
            <div style="width: 110px; height: 150px; border-radius: 16px; background: linear-gradient(135deg, #FFF5F8, #E8F7FD); border: 2px dashed #F57CA8; display: flex; flex-direction: column; align-items: center; justify-content: center; flex-shrink: 0; cursor: pointer;">
              <div style="width: 44px; height: 44px; background: linear-gradient(135deg, #F57CA8, #E85A8A); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-bottom: 8px; box-shadow: 0 4px 12px rgba(245,124,168,0.3);">
                <i class="fas fa-plus" style="color: white;"></i>
              </div>
              <span style="font-size: 13px; color: #F57CA8; font-weight: 600;">더 보기</span>
            </div>
          </div>
        </div>

        {/* Pending Requests Section */}
        <div style="padding: 0 20px 24px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;">
            <div style="display: flex; align-items: center; gap: 8px;">
              <h2 style="font-size: 16px; font-weight: 600; color: #1D2B4F;">
                받은 요청
              </h2>
              <span style="padding: 4px 10px; background: #FFF5F8; color: #F57CA8; border-radius: 12px; font-size: 13px; font-weight: 600;">
                5
              </span>
            </div>
          </div>

          {/* Request Card 1 */}
          <div class="traveler-card" style="border: 2px solid #6ECFF6;">
            <div style="position: absolute; top: 12px; right: 12px; background: linear-gradient(135deg, #6ECFF6, #4BB8E8); color: white; padding: 4px 10px; border-radius: 12px; font-size: 11px; font-weight: 600;">
              <i class="fas fa-clock" style="margin-right: 4px;"></i>24시간 내 응답
            </div>
            <div class="traveler-card-header">
              <img 
                src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200" 
                alt="미오"
                class="traveler-card-avatar"
              />
              <div class="traveler-card-info">
                <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 4px;">
                  <span style="font-size: 17px; font-weight: 600; color: #1D2B4F;">미오</span>
                  <span style="font-size: 15px; color: #757575;">23</span>
                  <span class="country-badge japan" style="font-size: 11px;">🇯🇵 후쿠오카</span>
                </div>
                <div style="display: flex; align-items: center; gap: 6px; margin-bottom: 8px;">
                  <span class="verified-badge">
                    <i class="fas fa-check-circle"></i> 인증됨
                  </span>
                </div>
                <div class="traveler-schedule">
                  <i class="fas fa-plane"></i>
                  <span>3/25-30 부산 방문</span>
                </div>
              </div>
            </div>
            <div style="padding: 0 16px 12px;">
              <p style="font-size: 14px; color: #616161; line-height: 1.5; margin-bottom: 12px;">
                "부산 해운대에서 같이 회 먹어요! 🐟 일본어, 한국어 둘 다 가능해요"
              </p>
              <div style="display: flex; gap: 6px; flex-wrap: wrap;">
                <span class="chip chip-filled" style="padding: 4px 10px; font-size: 12px;">🍜 미식</span>
                <span class="chip chip-filled" style="padding: 4px 10px; font-size: 12px;">🏖️ 해변</span>
              </div>
            </div>
            <div class="traveler-card-footer">
              <button class="btn-icon" style="background: #FEE2E2; color: #E74C3C;">
                <i class="fas fa-times"></i>
              </button>
              <button class="btn-primary" style="flex: 1; padding: 12px;">
                <i class="fas fa-check"></i> 수락하기
              </button>
            </div>
          </div>
        </div>

        {/* Schedule Match Section */}
        <div style="padding: 0 20px 24px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;">
            <h2 style="font-size: 16px; font-weight: 600; color: #1D2B4F;">
              <i class="fas fa-calendar-check" style="color: #6ECFF6; margin-right: 8px;"></i>
              일정 매칭 여행자
            </h2>
          </div>

          {/* Schedule Match Card 1 */}
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
                  <span class="country-badge japan" style="font-size: 11px;">🇯🇵</span>
                </div>
                <div style="display: flex; align-items: center; gap: 6px; margin-bottom: 8px;">
                  <span style="font-size: 13px; color: #F57CA8; font-weight: 500;">
                    <i class="fas fa-calendar-check"></i> 3/20-25 서울 방문 예정!
                  </span>
                </div>
                <p style="font-size: 13px; color: #616161;">홍대, 이태원 카페 투어하고 싶어요!</p>
              </div>
            </div>
            <div class="traveler-card-footer">
              <button class="btn-secondary" style="flex: 1; padding: 12px;">
                프로필
              </button>
              <button class="btn-primary" style="flex: 1; padding: 12px;">
                <i class="fas fa-paper-plane"></i> 메시지
              </button>
            </div>
          </div>

          {/* Schedule Match Card 2 */}
          <div class="traveler-card">
            <div class="traveler-card-header">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200" 
                alt="지민"
                class="traveler-card-avatar"
              />
              <div class="traveler-card-info">
                <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 4px;">
                  <span style="font-size: 17px; font-weight: 600; color: #1D2B4F;">지민</span>
                  <span style="font-size: 15px; color: #757575;">28</span>
                  <span class="country-badge korea" style="font-size: 11px;">🇰🇷</span>
                </div>
                <div style="display: flex; align-items: center; gap: 6px; margin-bottom: 8px;">
                  <span style="font-size: 13px; color: #6ECFF6; font-weight: 500;">
                    <i class="fas fa-calendar-check"></i> 4/1-7 오사카 방문 예정!
                  </span>
                </div>
                <p style="font-size: 13px; color: #616161;">교토 전통 문화와 오사카 맛집 탐방!</p>
              </div>
            </div>
            <div class="traveler-card-footer">
              <button class="btn-secondary" style="flex: 1; padding: 12px;">
                프로필
              </button>
              <button class="btn-primary sky" style="flex: 1; padding: 12px;">
                <i class="fas fa-paper-plane"></i> 메시지
              </button>
            </div>
          </div>
        </div>

        {/* Safety Notice */}
        <div style="padding: 0 20px;">
          <div class="safety-banner">
            <i class="fas fa-shield-alt"></i>
            <div style="flex: 1;">
              <p style="font-size: 14px; font-weight: 600; margin-bottom: 2px;">안전한 만남 가이드</p>
              <p style="font-size: 12px; opacity: 0.8;">첫 만남 전 꼭 확인해주세요</p>
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

import type { FC } from 'hono/jsx'
import { Layout } from '../components/Layout'

export const MatchesPage: FC = () => {
  return (
    <Layout activeTab="matches">
      <div style="padding: 20px;">
        {/* Page Title */}
        <div style="margin-bottom: 24px;">
          <h1 style="font-size: 28px; font-weight: 700; color: #2D3436; margin-bottom: 4px;">매칭</h1>
          <p style="color: #636E72;">서로 마음이 통한 사람들</p>
        </div>

        {/* New Matches Horizontal Scroll */}
        <div style="margin-bottom: 32px;">
          <h2 style="font-size: 16px; font-weight: 600; color: #2D3436; margin-bottom: 16px;">
            새로운 매칭 <span style="color: #FF6B6B;">3</span>
          </h2>
          <div style="display: flex; gap: 16px; overflow-x: auto; padding-bottom: 8px; margin: 0 -20px; padding: 0 20px;">
            {/* Match Card 1 */}
            <a href="/chat/1" style="text-decoration: none; flex-shrink: 0;">
              <div style="position: relative; width: 100px;">
                <div style="width: 100px; height: 140px; border-radius: 12px; overflow: hidden; position: relative;">
                  <img 
                    src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=200" 
                    alt="사쿠라"
                    style="width: 100%; height: 100%; object-fit: cover;"
                  />
                  <div style="position: absolute; inset: 0; background: linear-gradient(to top, rgba(0,0,0,0.6), transparent);"></div>
                  <div style="position: absolute; bottom: 8px; left: 8px; right: 8px;">
                    <p style="color: white; font-weight: 600; font-size: 14px;">사쿠라</p>
                    <p style="color: rgba(255,255,255,0.8); font-size: 11px;">🇯🇵 도쿄</p>
                  </div>
                </div>
                {/* New badge */}
                <div style="position: absolute; top: -4px; right: -4px; width: 20px; height: 20px; background: #FF6B6B; border-radius: 50%; border: 2px solid white; display: flex; align-items: center; justify-content: center;">
                  <span style="color: white; font-size: 10px; font-weight: 700;">N</span>
                </div>
              </div>
            </a>

            {/* Match Card 2 */}
            <a href="/chat/2" style="text-decoration: none; flex-shrink: 0;">
              <div style="position: relative; width: 100px;">
                <div style="width: 100px; height: 140px; border-radius: 12px; overflow: hidden; position: relative;">
                  <img 
                    src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200" 
                    alt="유이"
                    style="width: 100%; height: 100%; object-fit: cover;"
                  />
                  <div style="position: absolute; inset: 0; background: linear-gradient(to top, rgba(0,0,0,0.6), transparent);"></div>
                  <div style="position: absolute; bottom: 8px; left: 8px; right: 8px;">
                    <p style="color: white; font-weight: 600; font-size: 14px;">유이</p>
                    <p style="color: rgba(255,255,255,0.8); font-size: 11px;">🇯🇵 오사카</p>
                  </div>
                </div>
              </div>
            </a>

            {/* Match Card 3 */}
            <a href="/chat/3" style="text-decoration: none; flex-shrink: 0;">
              <div style="position: relative; width: 100px;">
                <div style="width: 100px; height: 140px; border-radius: 12px; overflow: hidden; position: relative;">
                  <img 
                    src="https://images.unsplash.com/photo-1524638431109-93d95c968f03?w=200" 
                    alt="하나"
                    style="width: 100%; height: 100%; object-fit: cover;"
                  />
                  <div style="position: absolute; inset: 0; background: linear-gradient(to top, rgba(0,0,0,0.6), transparent);"></div>
                  <div style="position: absolute; bottom: 8px; left: 8px; right: 8px;">
                    <p style="color: white; font-weight: 600; font-size: 14px;">하나</p>
                    <p style="color: rgba(255,255,255,0.8); font-size: 11px;">🇯🇵 교토</p>
                  </div>
                </div>
              </div>
            </a>

            {/* See More */}
            <div style="width: 100px; height: 140px; border-radius: 12px; background: linear-gradient(135deg, #FFF5F5, #FFF); border: 2px dashed #FFD0D0; display: flex; flex-direction: column; align-items: center; justify-content: center; flex-shrink: 0; cursor: pointer;">
              <div style="width: 40px; height: 40px; background: #FF6B6B; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-bottom: 8px;">
                <i class="fas fa-plus" style="color: white;"></i>
              </div>
              <span style="font-size: 12px; color: #FF6B6B; font-weight: 500;">더 보기</span>
            </div>
          </div>
        </div>

        {/* Likes You Section - Premium Feature */}
        <div style="margin-bottom: 32px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;">
            <div style="display: flex; align-items: center; gap: 8px;">
              <h2 style="font-size: 16px; font-weight: 600; color: #2D3436;">
                나를 좋아하는 사람
              </h2>
              <span class="premium-badge">
                <i class="fas fa-crown"></i> PREMIUM
              </span>
            </div>
            <span style="font-size: 14px; color: #FF6B6B; font-weight: 500;">12명</span>
          </div>
          
          {/* Blurred Preview Grid */}
          <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px;">
            <div style="aspect-ratio: 3/4; border-radius: 12px; overflow: hidden; position: relative;">
              <img 
                src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=300" 
                alt="Blurred"
                style="width: 100%; height: 100%; object-fit: cover; filter: blur(20px);"
              />
              <div style="position: absolute; inset: 0; background: rgba(255,107,107,0.3); display: flex; align-items: center; justify-content: center;">
                <i class="fas fa-lock" style="color: white; font-size: 24px;"></i>
              </div>
            </div>
            <div style="aspect-ratio: 3/4; border-radius: 12px; overflow: hidden; position: relative;">
              <img 
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300" 
                alt="Blurred"
                style="width: 100%; height: 100%; object-fit: cover; filter: blur(20px);"
              />
              <div style="position: absolute; inset: 0; background: rgba(255,107,107,0.3); display: flex; align-items: center; justify-content: center;">
                <i class="fas fa-lock" style="color: white; font-size: 24px;"></i>
              </div>
            </div>
          </div>
          
          {/* Upgrade Button */}
          <button style="width: 100%; margin-top: 16px; padding: 14px; background: linear-gradient(135deg, #FFD700, #FFA500); color: white; border-radius: 12px; font-weight: 600; border: none; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 8px;">
            <i class="fas fa-crown"></i>
            프리미엄으로 모두 보기
          </button>
        </div>

        {/* Travel Matches Section */}
        <div>
          <h2 style="font-size: 16px; font-weight: 600; color: #2D3436; margin-bottom: 16px;">
            <i class="fas fa-plane" style="color: #4ECDC4; margin-right: 8px;"></i>
            여행 일정 매칭
          </h2>
          
          {/* Travel Match Card */}
          <div style="background: white; border-radius: 16px; overflow: hidden; box-shadow: 0 2px 12px rgba(0,0,0,0.08); margin-bottom: 12px;">
            <div style="display: flex; padding: 16px; gap: 16px;">
              <div style="width: 80px; height: 80px; border-radius: 12px; overflow: hidden; flex-shrink: 0;">
                <img 
                  src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=200" 
                  alt="사쿠라"
                  style="width: 100%; height: 100%; object-fit: cover;"
                />
              </div>
              <div style="flex: 1; min-width: 0;">
                <div style="display: flex; align-items: center; gap: 6px; margin-bottom: 4px;">
                  <span style="font-weight: 600;">사쿠라</span>
                  <span style="color: #636E72;">26</span>
                  <span class="country-badge japan" style="font-size: 11px; padding: 2px 8px;">🇯🇵</span>
                </div>
                <div style="display: flex; align-items: center; gap: 6px; color: #FF6B6B; font-size: 13px; margin-bottom: 8px;">
                  <i class="fas fa-calendar-check"></i>
                  <span style="font-weight: 500;">3/20-25 서울 방문 예정!</span>
                </div>
                <p style="font-size: 13px; color: #636E72; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
                  홍대, 이태원 카페 투어하고 싶어요!
                </p>
              </div>
            </div>
            <div style="padding: 0 16px 16px; display: flex; gap: 8px;">
              <button style="flex: 1; padding: 10px; background: #F5F5F5; border-radius: 8px; border: none; cursor: pointer; font-weight: 500; color: #636E72;">
                프로필 보기
              </button>
              <button style="flex: 1; padding: 10px; background: linear-gradient(135deg, #FF6B6B, #E85555); border-radius: 8px; border: none; cursor: pointer; font-weight: 500; color: white;">
                <i class="fas fa-paper-plane" style="margin-right: 6px;"></i>
                메시지
              </button>
            </div>
          </div>

          {/* Travel Match Card 2 */}
          <div style="background: white; border-radius: 16px; overflow: hidden; box-shadow: 0 2px 12px rgba(0,0,0,0.08);">
            <div style="display: flex; padding: 16px; gap: 16px;">
              <div style="width: 80px; height: 80px; border-radius: 12px; overflow: hidden; flex-shrink: 0;">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200" 
                  alt="지민"
                  style="width: 100%; height: 100%; object-fit: cover;"
                />
              </div>
              <div style="flex: 1; min-width: 0;">
                <div style="display: flex; align-items: center; gap: 6px; margin-bottom: 4px;">
                  <span style="font-weight: 600;">지민</span>
                  <span style="color: #636E72;">28</span>
                  <span class="country-badge korea" style="font-size: 11px; padding: 2px 8px;">🇰🇷</span>
                </div>
                <div style="display: flex; align-items: center; gap: 6px; color: #4ECDC4; font-size: 13px; margin-bottom: 8px;">
                  <i class="fas fa-calendar-check"></i>
                  <span style="font-weight: 500;">4/1-7 오사카 방문 예정!</span>
                </div>
                <p style="font-size: 13px; color: #636E72; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
                  교토 전통 문화와 오사카 맛집 탐방!
                </p>
              </div>
            </div>
            <div style="padding: 0 16px 16px; display: flex; gap: 8px;">
              <button style="flex: 1; padding: 10px; background: #F5F5F5; border-radius: 8px; border: none; cursor: pointer; font-weight: 500; color: #636E72;">
                프로필 보기
              </button>
              <button style="flex: 1; padding: 10px; background: linear-gradient(135deg, #FF6B6B, #E85555); border-radius: 8px; border: none; cursor: pointer; font-weight: 500; color: white;">
                <i class="fas fa-paper-plane" style="margin-right: 6px;"></i>
                메시지
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

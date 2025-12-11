import type { FC } from 'hono/jsx'
import { Layout } from '../components/Layout'

export const ProfilePage: FC = () => {
  return (
    <Layout activeTab="profile">
      <div style="padding-bottom: 100px;">
        {/* Profile Header */}
        <div style="padding: 32px 20px 24px; text-align: center;">
          <div style="position: relative; display: inline-block; margin-bottom: 16px;">
            <img 
              src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200" 
              alt="Profile"
              style="width: 120px; height: 120px; border-radius: 50%; object-fit: cover; border: 4px solid white; box-shadow: 0 8px 32px rgba(29,43,79,0.15);"
            />
            <button style="position: absolute; bottom: 4px; right: 4px; width: 36px; height: 36px; background: linear-gradient(135deg, #F57CA8, #E85A8A); border-radius: 50%; display: flex; align-items: center; justify-content: center; border: 3px solid white; cursor: pointer; box-shadow: 0 4px 12px rgba(245,124,168,0.3);">
              <i class="fas fa-camera" style="color: white; font-size: 14px;"></i>
            </button>
          </div>
          <h1 style="font-size: 26px; font-weight: 700; color: #1D2B4F; margin-bottom: 4px;">
            민준
            <span style="font-size: 22px; font-weight: 400; color: #757575; margin-left: 8px;">27</span>
          </h1>
          <div style="display: flex; justify-content: center; align-items: center; gap: 8px; margin-bottom: 16px;">
            <span class="country-badge korea">
              🇰🇷 서울
            </span>
            <span class="verified-badge">
              <i class="fas fa-check-circle"></i>
              인증됨
            </span>
          </div>
          
          {/* Profile Completion */}
          <div style="display: inline-flex; align-items: center; gap: 8px; padding: 10px 16px; background: #F4EDE4; border-radius: 20px;">
            <span style="font-size: 13px; color: #757575;">프로필 완성도</span>
            <span style="font-size: 14px; font-weight: 600; color: #F57CA8;">85%</span>
            <div style="width: 60px; height: 6px; background: #E8DED2; border-radius: 3px; overflow: hidden;">
              <div style="width: 85%; height: 100%; background: linear-gradient(90deg, #F57CA8, #6ECFF6); border-radius: 3px;"></div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div style="padding: 0 20px 24px;">
          <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px;">
            <div class="card" style="padding: 16px; text-align: center;">
              <p style="font-size: 28px; font-weight: 700; color: #F57CA8; margin-bottom: 4px;">23</p>
              <p style="font-size: 12px; color: #757575;">받은 요청</p>
            </div>
            <div class="card" style="padding: 16px; text-align: center;">
              <p style="font-size: 28px; font-weight: 700; color: #6ECFF6; margin-bottom: 4px;">12</p>
              <p style="font-size: 12px; color: #757575;">연결됨</p>
            </div>
            <div class="card" style="padding: 16px; text-align: center;">
              <p style="font-size: 28px; font-weight: 700; color: #FFA873; margin-bottom: 4px;">156</p>
              <p style="font-size: 12px; color: #757575;">프로필 조회</p>
            </div>
          </div>
        </div>

        {/* Photo Grid */}
        <div style="padding: 0 20px 24px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
            <h2 style="font-size: 16px; font-weight: 600; color: #1D2B4F;">내 사진</h2>
            <button class="btn-ghost" style="padding: 6px 12px; color: #F57CA8; font-size: 13px;">
              편집
            </button>
          </div>
          <div class="photo-grid">
            <div class="photo-grid-item">
              <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400" alt="Photo 1" />
            </div>
            <div class="photo-grid-item">
              <img src="https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=200" alt="Photo 2" />
            </div>
            <div class="photo-grid-item">
              <img src="https://images.unsplash.com/photo-1463453091185-61582044d556?w=200" alt="Photo 3" />
            </div>
            <div class="photo-grid-item photo-add-btn">
              <i class="fas fa-plus" style="font-size: 24px; margin-bottom: 4px;"></i>
              <span style="font-size: 12px;">추가</span>
            </div>
            <div class="photo-grid-item photo-add-btn">
              <i class="fas fa-plus" style="font-size: 24px; margin-bottom: 4px;"></i>
              <span style="font-size: 12px;">추가</span>
            </div>
          </div>
        </div>

        {/* My Travel Schedule */}
        <div style="padding: 0 20px 24px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
            <h2 style="font-size: 16px; font-weight: 600; color: #1D2B4F;">다음 여행</h2>
            <button class="btn-ghost" style="padding: 6px 12px; color: #F57CA8; font-size: 13px;">
              <i class="fas fa-plus" style="margin-right: 4px;"></i>추가
            </button>
          </div>
          <div class="schedule-card">
            <div style="display: flex; justify-content: space-between; align-items: start; position: relative; z-index: 1;">
              <div>
                <p style="font-size: 12px; opacity: 0.8; margin-bottom: 4px;">예정된 여행</p>
                <p style="font-size: 18px; font-weight: 700;">
                  <i class="fas fa-plane" style="margin-right: 8px;"></i>도쿄, 일본
                </p>
              </div>
              <span style="background: rgba(255,255,255,0.2); padding: 6px 12px; border-radius: 16px; font-size: 12px;">
                4/10 - 5/10
              </span>
            </div>
          </div>
        </div>

        {/* About Section */}
        <div style="padding: 0 20px 16px;">
          <div class="card" style="padding: 20px;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
              <h2 style="font-size: 16px; font-weight: 600; color: #1D2B4F;">자기소개</h2>
              <button class="btn-ghost" style="padding: 6px 10px; color: #F57CA8; font-size: 13px;">
                <i class="fas fa-pencil-alt"></i>
              </button>
            </div>
            <p style="color: #616161; line-height: 1.7; font-size: 15px;">
              도쿄에서 한 달 살기 예정입니다. 현지 친구 사귀고 싶어요! 라멘 맛집 추천해주세요 🍜
              <br /><br />
              여행과 사진 찍는 걸 좋아합니다. 일본어 회화 가능해요!
            </p>
          </div>
        </div>

        {/* Travel Style */}
        <div style="padding: 0 20px 16px;">
          <div class="card" style="padding: 20px;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
              <h2 style="font-size: 16px; font-weight: 600; color: #1D2B4F;">여행 스타일</h2>
              <button class="btn-ghost" style="padding: 6px 10px; color: #F57CA8; font-size: 13px;">
                <i class="fas fa-pencil-alt"></i>
              </button>
            </div>
            <div style="display: flex; flex-wrap: wrap; gap: 8px;">
              <span class="chip chip-outline active">🍜 미식</span>
              <span class="chip chip-outline active">🎭 로컬체험</span>
              <span class="chip chip-outline active">🏖️ 힐링</span>
              <span class="chip chip-outline">☕ 카페투어</span>
              <span class="chip chip-outline">🛍️ 쇼핑</span>
              <span class="chip chip-outline">♨️ 온천</span>
            </div>
          </div>
        </div>

        {/* Languages */}
        <div style="padding: 0 20px 16px;">
          <div class="card" style="padding: 20px;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
              <h2 style="font-size: 16px; font-weight: 600; color: #1D2B4F;">언어</h2>
              <button class="btn-ghost" style="padding: 6px 10px; color: #F57CA8; font-size: 13px;">
                <i class="fas fa-pencil-alt"></i>
              </button>
            </div>
            <div style="display: flex; flex-wrap: wrap; gap: 8px;">
              <span class="chip chip-filled">🇰🇷 한국어 (원어민)</span>
              <span class="chip chip-filled">🇯🇵 일본어 (고급)</span>
              <span class="chip chip-filled">🇺🇸 영어 (중급)</span>
            </div>
          </div>
        </div>

        {/* Verification Status */}
        <div style="padding: 0 20px 16px;">
          <div class="card" style="padding: 20px;">
            <h2 style="font-size: 16px; font-weight: 600; color: #1D2B4F; margin-bottom: 16px;">인증 상태</h2>
            
            {/* Email Verified */}
            <div style="display: flex; justify-content: space-between; align-items: center; padding: 12px 0; border-bottom: 1px solid #F4EDE4;">
              <div style="display: flex; align-items: center; gap: 12px;">
                <div style="width: 44px; height: 44px; background: #C4F2E3; border-radius: 12px; display: flex; align-items: center; justify-content: center;">
                  <i class="fas fa-envelope" style="color: #2ECC71; font-size: 18px;"></i>
                </div>
                <span style="font-size: 15px; color: #1D2B4F;">이메일 인증</span>
              </div>
              <i class="fas fa-check-circle" style="color: #2ECC71; font-size: 22px;"></i>
            </div>

            {/* Phone Verified */}
            <div style="display: flex; justify-content: space-between; align-items: center; padding: 12px 0; border-bottom: 1px solid #F4EDE4;">
              <div style="display: flex; align-items: center; gap: 12px;">
                <div style="width: 44px; height: 44px; background: #C4F2E3; border-radius: 12px; display: flex; align-items: center; justify-content: center;">
                  <i class="fas fa-phone" style="color: #2ECC71; font-size: 18px;"></i>
                </div>
                <span style="font-size: 15px; color: #1D2B4F;">휴대전화 인증</span>
              </div>
              <i class="fas fa-check-circle" style="color: #2ECC71; font-size: 22px;"></i>
            </div>

            {/* ID Verified */}
            <div style="display: flex; justify-content: space-between; align-items: center; padding: 12px 0; border-bottom: 1px solid #F4EDE4;">
              <div style="display: flex; align-items: center; gap: 12px;">
                <div style="width: 44px; height: 44px; background: #C4F2E3; border-radius: 12px; display: flex; align-items: center; justify-content: center;">
                  <i class="fas fa-id-card" style="color: #2ECC71; font-size: 18px;"></i>
                </div>
                <span style="font-size: 15px; color: #1D2B4F;">신분증 인증</span>
              </div>
              <i class="fas fa-check-circle" style="color: #2ECC71; font-size: 22px;"></i>
            </div>

            {/* Travel Verified - Pending */}
            <div style="display: flex; justify-content: space-between; align-items: center; padding: 12px 0;">
              <div style="display: flex; align-items: center; gap: 12px;">
                <div style="width: 44px; height: 44px; background: #E8F7FD; border-radius: 12px; display: flex; align-items: center; justify-content: center;">
                  <i class="fas fa-plane" style="color: #6ECFF6; font-size: 18px;"></i>
                </div>
                <span style="font-size: 15px; color: #1D2B4F;">여행자 인증</span>
              </div>
              <button class="btn-primary sky" style="padding: 8px 16px; font-size: 13px;">
                인증하기
              </button>
            </div>
          </div>
        </div>

        {/* Settings Menu */}
        <div style="padding: 0 20px 16px;">
          <div class="card" style="overflow: hidden;">
            <a href="/settings" style="display: flex; justify-content: space-between; align-items: center; padding: 16px 20px; border-bottom: 1px solid #F4EDE4; text-decoration: none; color: #1D2B4F;">
              <div style="display: flex; align-items: center; gap: 12px;">
                <i class="fas fa-cog" style="color: #757575; font-size: 18px;"></i>
                <span style="font-size: 15px;">설정</span>
              </div>
              <i class="fas fa-chevron-right" style="color: #BDBDBD;"></i>
            </a>
            <a href="/safety" style="display: flex; justify-content: space-between; align-items: center; padding: 16px 20px; border-bottom: 1px solid #F4EDE4; text-decoration: none; color: #1D2B4F;">
              <div style="display: flex; align-items: center; gap: 12px;">
                <i class="fas fa-shield-alt" style="color: #6ECFF6; font-size: 18px;"></i>
                <span style="font-size: 15px;">안전 센터</span>
              </div>
              <i class="fas fa-chevron-right" style="color: #BDBDBD;"></i>
            </a>
            <a href="/help" style="display: flex; justify-content: space-between; align-items: center; padding: 16px 20px; border-bottom: 1px solid #F4EDE4; text-decoration: none; color: #1D2B4F;">
              <div style="display: flex; align-items: center; gap: 12px;">
                <i class="fas fa-question-circle" style="color: #757575; font-size: 18px;"></i>
                <span style="font-size: 15px;">도움말</span>
              </div>
              <i class="fas fa-chevron-right" style="color: #BDBDBD;"></i>
            </a>
            <a href="/invite" style="display: flex; justify-content: space-between; align-items: center; padding: 16px 20px; text-decoration: none; color: #1D2B4F;">
              <div style="display: flex; align-items: center; gap: 12px;">
                <i class="fas fa-gift" style="color: #F57CA8; font-size: 18px;"></i>
                <span style="font-size: 15px;">친구 초대하기</span>
              </div>
              <span style="background: #FFF5F8; color: #F57CA8; padding: 4px 10px; border-radius: 12px; font-size: 12px; font-weight: 500;">무료 혜택</span>
            </a>
          </div>
        </div>

        {/* Logout */}
        <div style="padding: 0 20px 24px;">
          <button style="width: 100%; padding: 16px; color: #E74C3C; background: white; border-radius: 16px; font-size: 15px; font-weight: 500; border: none; cursor: pointer; box-shadow: 0 2px 12px rgba(0,0,0,0.04);">
            로그아웃
          </button>
        </div>

        <p style="text-align: center; color: #BDBDBD; font-size: 12px; padding-bottom: 20px;">
          MONOMONO v1.0.0
        </p>
      </div>
    </Layout>
  )
}

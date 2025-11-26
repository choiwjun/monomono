import type { FC } from 'hono/jsx'
import { Layout } from '../components/Layout'

export const ProfilePage: FC = () => {
  return (
    <Layout activeTab="profile">
      <div style="padding: 20px;">
        {/* Profile Header */}
        <div style="text-align: center; margin-bottom: 24px;">
          <div style="position: relative; display: inline-block; margin-bottom: 16px;">
            <img 
              src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200" 
              alt="Profile"
              style="width: 120px; height: 120px; border-radius: 50%; object-fit: cover; border: 4px solid white; box-shadow: 0 4px 20px rgba(0,0,0,0.15);"
            />
            <button style="position: absolute; bottom: 4px; right: 4px; width: 36px; height: 36px; background: linear-gradient(135deg, #FF6B6B, #E85555); border-radius: 50%; display: flex; align-items: center; justify-content: center; border: 3px solid white; cursor: pointer;">
              <i class="fas fa-camera" style="color: white; font-size: 14px;"></i>
            </button>
          </div>
          <h1 style="font-size: 24px; font-weight: 700; color: #2D3436; margin-bottom: 4px;">
            민준
            <span style="font-size: 20px; font-weight: 400; color: #636E72; margin-left: 8px;">27</span>
          </h1>
          <div style="display: flex; justify-content: center; align-items: center; gap: 8px; margin-bottom: 12px;">
            <span class="country-badge korea">
              🇰🇷 서울
            </span>
            <span class="verified-badge">
              <i class="fas fa-check-circle"></i>
              인증됨
            </span>
          </div>
          <p style="color: #636E72; font-size: 14px;">프로필 완성도 85%</p>
          <div style="width: 200px; height: 6px; background: #E5E7EB; border-radius: 3px; margin: 8px auto 0;">
            <div style="width: 85%; height: 100%; background: linear-gradient(135deg, #FF6B6B, #E85555); border-radius: 3px;"></div>
          </div>
        </div>

        {/* Premium Banner */}
        <div style="background: linear-gradient(135deg, #1a1a2e, #16213e); border-radius: 16px; padding: 20px; margin-bottom: 24px; position: relative; overflow: hidden;">
          <div style="position: absolute; top: -20px; right: -20px; width: 100px; height: 100px; background: rgba(255,215,0,0.1); border-radius: 50%;"></div>
          <div style="position: relative;">
            <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 8px;">
              <i class="fas fa-crown" style="color: #FFD700; font-size: 24px;"></i>
              <span style="color: #FFD700; font-weight: 700; font-size: 18px;">프리미엄</span>
            </div>
            <p style="color: rgba(255,255,255,0.8); font-size: 14px; margin-bottom: 16px;">
              나를 좋아하는 사람 확인, 무제한 매칭, 광고 제거
            </p>
            <button style="padding: 12px 24px; background: linear-gradient(135deg, #FFD700, #FFA500); color: #1a1a2e; border-radius: 25px; font-weight: 600; border: none; cursor: pointer;">
              ₩9,900/월 시작하기
            </button>
          </div>
        </div>

        {/* Stats */}
        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; margin-bottom: 24px;">
          <div style="background: white; padding: 16px; border-radius: 12px; text-align: center; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
            <p style="font-size: 24px; font-weight: 700; color: #FF6B6B;">23</p>
            <p style="font-size: 12px; color: #636E72;">받은 좋아요</p>
          </div>
          <div style="background: white; padding: 16px; border-radius: 12px; text-align: center; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
            <p style="font-size: 24px; font-weight: 700; color: #4ECDC4;">12</p>
            <p style="font-size: 12px; color: #636E72;">매칭</p>
          </div>
          <div style="background: white; padding: 16px; border-radius: 12px; text-align: center; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
            <p style="font-size: 24px; font-weight: 700; color: #9B59B6;">156</p>
            <p style="font-size: 12px; color: #636E72;">프로필 조회</p>
          </div>
        </div>

        {/* Photo Grid */}
        <div style="margin-bottom: 24px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
            <h2 style="font-size: 16px; font-weight: 600; color: #2D3436;">내 사진</h2>
            <button style="color: #FF6B6B; font-size: 14px; font-weight: 500; background: none; border: none; cursor: pointer;">
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

        {/* About Section */}
        <div style="background: white; border-radius: 16px; padding: 20px; margin-bottom: 16px; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
            <h2 style="font-size: 16px; font-weight: 600; color: #2D3436;">자기소개</h2>
            <button style="color: #FF6B6B; font-size: 14px; font-weight: 500; background: none; border: none; cursor: pointer;">
              <i class="fas fa-pencil-alt"></i>
            </button>
          </div>
          <p style="color: #636E72; line-height: 1.6;">
            도쿄에서 한 달 살기 예정입니다. 현지 친구 사귀고 싶어요! 라멘 맛집 추천해주세요 🍜
            <br /><br />
            여행과 사진 찍는 걸 좋아합니다. 일본어 회화 가능해요!
          </p>
        </div>

        {/* Travel Style */}
        <div style="background: white; border-radius: 16px; padding: 20px; margin-bottom: 16px; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
            <h2 style="font-size: 16px; font-weight: 600; color: #2D3436;">여행 스타일</h2>
            <button style="color: #FF6B6B; font-size: 14px; font-weight: 500; background: none; border: none; cursor: pointer;">
              <i class="fas fa-pencil-alt"></i>
            </button>
          </div>
          <div style="display: flex; flex-wrap: wrap; gap: 8px;">
            <span class="travel-tag active">🍜 미식</span>
            <span class="travel-tag active">🎭 로컬체험</span>
            <span class="travel-tag active">🏖️ 힐링</span>
            <span class="travel-tag">☕ 카페투어</span>
            <span class="travel-tag">🛍️ 쇼핑</span>
            <span class="travel-tag">♨️ 온천</span>
          </div>
        </div>

        {/* Languages */}
        <div style="background: white; border-radius: 16px; padding: 20px; margin-bottom: 16px; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
            <h2 style="font-size: 16px; font-weight: 600; color: #2D3436;">언어</h2>
            <button style="color: #FF6B6B; font-size: 14px; font-weight: 500; background: none; border: none; cursor: pointer;">
              <i class="fas fa-pencil-alt"></i>
            </button>
          </div>
          <div style="display: flex; flex-wrap: wrap; gap: 8px;">
            <span style="padding: 8px 14px; background: #F5F5F5; border-radius: 20px; font-size: 13px;">
              🇰🇷 한국어 (원어민)
            </span>
            <span style="padding: 8px 14px; background: #F5F5F5; border-radius: 20px; font-size: 13px;">
              🇯🇵 일본어 (고급)
            </span>
            <span style="padding: 8px 14px; background: #F5F5F5; border-radius: 20px; font-size: 13px;">
              🇺🇸 영어 (중급)
            </span>
          </div>
        </div>

        {/* Verification */}
        <div style="background: white; border-radius: 16px; padding: 20px; margin-bottom: 16px; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
          <h2 style="font-size: 16px; font-weight: 600; color: #2D3436; margin-bottom: 16px;">인증 상태</h2>
          
          <div style="space-y: 12px;">
            {/* Email Verified */}
            <div style="display: flex; justify-content: space-between; align-items: center; padding: 12px 0; border-bottom: 1px solid #F0F0F0;">
              <div style="display: flex; align-items: center; gap: 12px;">
                <div style="width: 40px; height: 40px; background: #E8F5E9; border-radius: 10px; display: flex; align-items: center; justify-content: center;">
                  <i class="fas fa-envelope" style="color: #00B894;"></i>
                </div>
                <span>이메일 인증</span>
              </div>
              <i class="fas fa-check-circle" style="color: #00B894; font-size: 20px;"></i>
            </div>

            {/* Phone Verified */}
            <div style="display: flex; justify-content: space-between; align-items: center; padding: 12px 0; border-bottom: 1px solid #F0F0F0;">
              <div style="display: flex; align-items: center; gap: 12px;">
                <div style="width: 40px; height: 40px; background: #E8F5E9; border-radius: 10px; display: flex; align-items: center; justify-content: center;">
                  <i class="fas fa-phone" style="color: #00B894;"></i>
                </div>
                <span>휴대전화 인증</span>
              </div>
              <i class="fas fa-check-circle" style="color: #00B894; font-size: 20px;"></i>
            </div>

            {/* ID Verified */}
            <div style="display: flex; justify-content: space-between; align-items: center; padding: 12px 0; border-bottom: 1px solid #F0F0F0;">
              <div style="display: flex; align-items: center; gap: 12px;">
                <div style="width: 40px; height: 40px; background: #E8F5E9; border-radius: 10px; display: flex; align-items: center; justify-content: center;">
                  <i class="fas fa-id-card" style="color: #00B894;"></i>
                </div>
                <span>신분증 인증</span>
              </div>
              <i class="fas fa-check-circle" style="color: #00B894; font-size: 20px;"></i>
            </div>

            {/* Travel Verified */}
            <div style="display: flex; justify-content: space-between; align-items: center; padding: 12px 0;">
              <div style="display: flex; align-items: center; gap: 12px;">
                <div style="width: 40px; height: 40px; background: #E3F2FD; border-radius: 10px; display: flex; align-items: center; justify-content: center;">
                  <i class="fas fa-plane" style="color: #3B82F6;"></i>
                </div>
                <span>여행자 인증</span>
              </div>
              <button style="padding: 8px 16px; background: #3B82F6; color: white; border-radius: 20px; font-size: 13px; font-weight: 500; border: none; cursor: pointer;">
                인증하기
              </button>
            </div>
          </div>
        </div>

        {/* Settings Menu */}
        <div style="background: white; border-radius: 16px; overflow: hidden; margin-bottom: 24px; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
          <a href="/settings" style="display: flex; justify-content: space-between; align-items: center; padding: 16px 20px; border-bottom: 1px solid #F0F0F0; text-decoration: none; color: #2D3436;">
            <div style="display: flex; align-items: center; gap: 12px;">
              <i class="fas fa-cog" style="color: #636E72;"></i>
              <span>설정</span>
            </div>
            <i class="fas fa-chevron-right" style="color: #D1D5DB;"></i>
          </a>
          <a href="/safety" style="display: flex; justify-content: space-between; align-items: center; padding: 16px 20px; border-bottom: 1px solid #F0F0F0; text-decoration: none; color: #2D3436;">
            <div style="display: flex; align-items: center; gap: 12px;">
              <i class="fas fa-shield-alt" style="color: #636E72;"></i>
              <span>안전 센터</span>
            </div>
            <i class="fas fa-chevron-right" style="color: #D1D5DB;"></i>
          </a>
          <a href="/help" style="display: flex; justify-content: space-between; align-items: center; padding: 16px 20px; border-bottom: 1px solid #F0F0F0; text-decoration: none; color: #2D3436;">
            <div style="display: flex; align-items: center; gap: 12px;">
              <i class="fas fa-question-circle" style="color: #636E72;"></i>
              <span>도움말</span>
            </div>
            <i class="fas fa-chevron-right" style="color: #D1D5DB;"></i>
          </a>
          <a href="/invite" style="display: flex; justify-content: space-between; align-items: center; padding: 16px 20px; text-decoration: none; color: #2D3436;">
            <div style="display: flex; align-items: center; gap: 12px;">
              <i class="fas fa-gift" style="color: #FF6B6B;"></i>
              <span>친구 초대하기</span>
            </div>
            <span style="background: #FFF5F5; color: #FF6B6B; padding: 4px 8px; border-radius: 8px; font-size: 12px;">프리미엄 1주 무료</span>
          </a>
        </div>

        {/* Logout */}
        <button style="width: 100%; padding: 16px; color: #E74C3C; background: white; border-radius: 12px; font-weight: 500; border: none; cursor: pointer; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
          로그아웃
        </button>

        <p style="text-align: center; color: #9CA3AF; font-size: 12px; margin-top: 24px;">
          TravelMatch v1.0.0
        </p>
      </div>
    </Layout>
  )
}

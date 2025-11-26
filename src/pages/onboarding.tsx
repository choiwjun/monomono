import type { FC } from 'hono/jsx'
import { Layout } from '../components/Layout'

export const OnboardingPage: FC = () => {
  return (
    <Layout showHeader={false} showNav={false}>
      <div style="min-height: 100vh; display: flex; flex-direction: column;">
        {/* Splash / Welcome Screen */}
        <div id="onboarding-splash" style="flex: 1; display: flex; flex-direction: column; justify-content: center; align-items: center; padding: 40px 20px; background: linear-gradient(135deg, #FF6B6B 0%, #4ECDC4 100%);">
          <div style="text-align: center; color: white;">
            <div style="font-size: 80px; margin-bottom: 24px;">
              <i class="fas fa-plane-departure"></i>
            </div>
            <h1 style="font-size: 36px; font-weight: 700; margin-bottom: 12px;">MONOMONO</h1>
            <p style="font-size: 18px; opacity: 0.9; margin-bottom: 8px;">한일 여행 매칭 플랫폼</p>
            <p style="font-size: 14px; opacity: 0.8;">여행을 통해 새로운 친구를 만나세요</p>
            
            {/* Language Selection */}
            <div style="margin-top: 48px;">
              <p style="font-size: 14px; opacity: 0.8; margin-bottom: 16px;">언어를 선택하세요 / 言語を選択してください</p>
              <div style="display: flex; gap: 12px; justify-content: center;">
                <button style="padding: 16px 32px; background: white; color: #FF6B6B; border-radius: 30px; font-weight: 600; border: none; cursor: pointer; display: flex; align-items: center; gap: 8px;">
                  🇰🇷 한국어
                </button>
                <button style="padding: 16px 32px; background: rgba(255,255,255,0.2); color: white; border-radius: 30px; font-weight: 600; border: none; cursor: pointer; display: flex; align-items: center; gap: 8px;">
                  🇯🇵 日本語
                </button>
              </div>
            </div>

            {/* Get Started Button */}
            <button onclick="showStep(1)" style="margin-top: 48px; padding: 18px 48px; background: white; color: #FF6B6B; border-radius: 30px; font-size: 18px; font-weight: 700; border: none; cursor: pointer; box-shadow: 0 4px 20px rgba(0,0,0,0.2);">
              시작하기
            </button>

            <p style="margin-top: 24px; font-size: 13px; opacity: 0.8;">
              이미 계정이 있으신가요? <a href="#" style="color: white; text-decoration: underline;">로그인</a>
            </p>
          </div>
        </div>

        {/* Step 1: Basic Info (Hidden by default) */}
        <div id="onboarding-step1" style="display: none; flex: 1; padding: 40px 20px; background: white;">
          <div style="max-width: 400px; margin: 0 auto;">
            {/* Progress Bar */}
            <div style="display: flex; gap: 8px; margin-bottom: 40px;">
              <div style="flex: 1; height: 4px; background: #FF6B6B; border-radius: 2px;"></div>
              <div style="flex: 1; height: 4px; background: #E5E7EB; border-radius: 2px;"></div>
              <div style="flex: 1; height: 4px; background: #E5E7EB; border-radius: 2px;"></div>
              <div style="flex: 1; height: 4px; background: #E5E7EB; border-radius: 2px;"></div>
            </div>

            <h2 style="font-size: 28px; font-weight: 700; color: #2D3436; margin-bottom: 8px;">기본 정보</h2>
            <p style="color: #636E72; margin-bottom: 32px;">당신에 대해 알려주세요</p>

            <div style="margin-bottom: 24px;">
              <label class="form-label">이름</label>
              <input type="text" class="form-input" placeholder="이름을 입력하세요" />
            </div>

            <div style="margin-bottom: 24px;">
              <label class="form-label">생년월일</label>
              <input type="date" class="form-input" />
            </div>

            <div style="margin-bottom: 24px;">
              <label class="form-label">국가</label>
              <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px;">
                <button type="button" class="travel-tag active" style="padding: 16px; justify-content: center;">
                  🇰🇷 한국
                </button>
                <button type="button" class="travel-tag" style="padding: 16px; justify-content: center;">
                  🇯🇵 일본
                </button>
              </div>
            </div>

            <div style="margin-bottom: 32px;">
              <label class="form-label">도시</label>
              <input type="text" class="form-input" placeholder="거주 도시를 입력하세요" />
            </div>

            <button onclick="showStep(2)" style="width: 100%; padding: 16px; background: linear-gradient(135deg, #FF6B6B, #E85555); color: white; border-radius: 30px; font-size: 16px; font-weight: 600; border: none; cursor: pointer;">
              다음
            </button>
          </div>
        </div>

        {/* Step 2: Travel Style (Hidden by default) */}
        <div id="onboarding-step2" style="display: none; flex: 1; padding: 40px 20px; background: white;">
          <div style="max-width: 400px; margin: 0 auto;">
            {/* Progress Bar */}
            <div style="display: flex; gap: 8px; margin-bottom: 40px;">
              <div style="flex: 1; height: 4px; background: #FF6B6B; border-radius: 2px;"></div>
              <div style="flex: 1; height: 4px; background: #FF6B6B; border-radius: 2px;"></div>
              <div style="flex: 1; height: 4px; background: #E5E7EB; border-radius: 2px;"></div>
              <div style="flex: 1; height: 4px; background: #E5E7EB; border-radius: 2px;"></div>
            </div>

            <h2 style="font-size: 28px; font-weight: 700; color: #2D3436; margin-bottom: 8px;">여행 스타일</h2>
            <p style="color: #636E72; margin-bottom: 32px;">관심있는 여행 스타일을 선택하세요 (복수 선택 가능)</p>

            <div style="display: flex; flex-wrap: wrap; gap: 12px; margin-bottom: 32px;">
              <button type="button" class="travel-tag" style="padding: 14px 20px; font-size: 15px;">
                🏖️ 힐링
              </button>
              <button type="button" class="travel-tag active" style="padding: 14px 20px; font-size: 15px;">
                🍜 미식
              </button>
              <button type="button" class="travel-tag active" style="padding: 14px 20px; font-size: 15px;">
                ☕ 카페투어
              </button>
              <button type="button" class="travel-tag" style="padding: 14px 20px; font-size: 15px;">
                🎭 문화체험
              </button>
              <button type="button" class="travel-tag" style="padding: 14px 20px; font-size: 15px;">
                🛍️ 쇼핑
              </button>
              <button type="button" class="travel-tag" style="padding: 14px 20px; font-size: 15px;">
                🏃 액티비티
              </button>
              <button type="button" class="travel-tag" style="padding: 14px 20px; font-size: 15px;">
                ♨️ 온천
              </button>
              <button type="button" class="travel-tag" style="padding: 14px 20px; font-size: 15px;">
                🎵 K-POP
              </button>
              <button type="button" class="travel-tag" style="padding: 14px 20px; font-size: 15px;">
                🎌 애니/만화
              </button>
              <button type="button" class="travel-tag" style="padding: 14px 20px; font-size: 15px;">
                🌸 자연
              </button>
              <button type="button" class="travel-tag" style="padding: 14px 20px; font-size: 15px;">
                📸 사진
              </button>
              <button type="button" class="travel-tag" style="padding: 14px 20px; font-size: 15px;">
                🎤 노래방
              </button>
            </div>

            <div style="display: flex; gap: 12px;">
              <button onclick="showStep(1)" style="flex: 1; padding: 16px; background: #F5F5F5; color: #636E72; border-radius: 30px; font-size: 16px; font-weight: 600; border: none; cursor: pointer;">
                이전
              </button>
              <button onclick="showStep(3)" style="flex: 2; padding: 16px; background: linear-gradient(135deg, #FF6B6B, #E85555); color: white; border-radius: 30px; font-size: 16px; font-weight: 600; border: none; cursor: pointer;">
                다음
              </button>
            </div>
          </div>
        </div>

        {/* Step 3: Photos (Hidden by default) */}
        <div id="onboarding-step3" style="display: none; flex: 1; padding: 40px 20px; background: white;">
          <div style="max-width: 400px; margin: 0 auto;">
            {/* Progress Bar */}
            <div style="display: flex; gap: 8px; margin-bottom: 40px;">
              <div style="flex: 1; height: 4px; background: #FF6B6B; border-radius: 2px;"></div>
              <div style="flex: 1; height: 4px; background: #FF6B6B; border-radius: 2px;"></div>
              <div style="flex: 1; height: 4px; background: #FF6B6B; border-radius: 2px;"></div>
              <div style="flex: 1; height: 4px; background: #E5E7EB; border-radius: 2px;"></div>
            </div>

            <h2 style="font-size: 28px; font-weight: 700; color: #2D3436; margin-bottom: 8px;">사진 추가</h2>
            <p style="color: #636E72; margin-bottom: 32px;">최소 2장의 사진을 추가해주세요</p>

            <div class="photo-grid" style="margin-bottom: 32px;">
              <div class="photo-grid-item photo-add-btn">
                <i class="fas fa-plus" style="font-size: 32px; margin-bottom: 8px;"></i>
                <span style="font-size: 14px;">메인 사진</span>
              </div>
              <div class="photo-grid-item photo-add-btn">
                <i class="fas fa-plus" style="font-size: 24px; margin-bottom: 4px;"></i>
                <span style="font-size: 12px;">추가</span>
              </div>
              <div class="photo-grid-item photo-add-btn">
                <i class="fas fa-plus" style="font-size: 24px; margin-bottom: 4px;"></i>
                <span style="font-size: 12px;">추가</span>
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

            <div style="background: #FFF5F5; border-radius: 12px; padding: 16px; margin-bottom: 32px;">
              <p style="font-size: 13px; color: #E85555;">
                <i class="fas fa-info-circle" style="margin-right: 8px;"></i>
                얼굴이 잘 보이는 사진을 추가하면 매칭률이 높아져요!
              </p>
            </div>

            <div style="display: flex; gap: 12px;">
              <button onclick="showStep(2)" style="flex: 1; padding: 16px; background: #F5F5F5; color: #636E72; border-radius: 30px; font-size: 16px; font-weight: 600; border: none; cursor: pointer;">
                이전
              </button>
              <button onclick="showStep(4)" style="flex: 2; padding: 16px; background: linear-gradient(135deg, #FF6B6B, #E85555); color: white; border-radius: 30px; font-size: 16px; font-weight: 600; border: none; cursor: pointer;">
                다음
              </button>
            </div>
          </div>
        </div>

        {/* Step 4: Verification (Hidden by default) */}
        <div id="onboarding-step4" style="display: none; flex: 1; padding: 40px 20px; background: white;">
          <div style="max-width: 400px; margin: 0 auto;">
            {/* Progress Bar */}
            <div style="display: flex; gap: 8px; margin-bottom: 40px;">
              <div style="flex: 1; height: 4px; background: #FF6B6B; border-radius: 2px;"></div>
              <div style="flex: 1; height: 4px; background: #FF6B6B; border-radius: 2px;"></div>
              <div style="flex: 1; height: 4px; background: #FF6B6B; border-radius: 2px;"></div>
              <div style="flex: 1; height: 4px; background: #FF6B6B; border-radius: 2px;"></div>
            </div>

            <h2 style="font-size: 28px; font-weight: 700; color: #2D3436; margin-bottom: 8px;">인증하기</h2>
            <p style="color: #636E72; margin-bottom: 32px;">안전한 서비스를 위해 본인 인증을 진행해주세요</p>

            {/* Email Verification */}
            <div style="background: white; border: 1px solid #E5E7EB; border-radius: 16px; padding: 20px; margin-bottom: 16px;">
              <div style="display: flex; justify-content: space-between; align-items: center;">
                <div style="display: flex; align-items: center; gap: 12px;">
                  <div style="width: 48px; height: 48px; background: #FFF5F5; border-radius: 12px; display: flex; align-items: center; justify-content: center;">
                    <i class="fas fa-envelope" style="color: #FF6B6B; font-size: 20px;"></i>
                  </div>
                  <div>
                    <p style="font-weight: 600; margin-bottom: 2px;">이메일 인증</p>
                    <p style="font-size: 13px; color: #636E72;">이메일 주소를 인증해주세요</p>
                  </div>
                </div>
                <button style="padding: 10px 20px; background: #FF6B6B; color: white; border-radius: 20px; font-size: 13px; font-weight: 500; border: none; cursor: pointer;">
                  인증하기
                </button>
              </div>
            </div>

            {/* Phone Verification */}
            <div style="background: white; border: 1px solid #E5E7EB; border-radius: 16px; padding: 20px; margin-bottom: 16px;">
              <div style="display: flex; justify-content: space-between; align-items: center;">
                <div style="display: flex; align-items: center; gap: 12px;">
                  <div style="width: 48px; height: 48px; background: #F5F5F5; border-radius: 12px; display: flex; align-items: center; justify-content: center;">
                    <i class="fas fa-phone" style="color: #636E72; font-size: 20px;"></i>
                  </div>
                  <div>
                    <p style="font-weight: 600; margin-bottom: 2px;">휴대전화 인증</p>
                    <p style="font-size: 13px; color: #636E72;">SMS 인증을 진행해주세요</p>
                  </div>
                </div>
                <button style="padding: 10px 20px; background: #F5F5F5; color: #636E72; border-radius: 20px; font-size: 13px; font-weight: 500; border: none; cursor: pointer;">
                  인증하기
                </button>
              </div>
            </div>

            {/* ID Verification (Optional) */}
            <div style="background: white; border: 1px solid #E5E7EB; border-radius: 16px; padding: 20px; margin-bottom: 32px;">
              <div style="display: flex; justify-content: space-between; align-items: center;">
                <div style="display: flex; align-items: center; gap: 12px;">
                  <div style="width: 48px; height: 48px; background: #F5F5F5; border-radius: 12px; display: flex; align-items: center; justify-content: center;">
                    <i class="fas fa-id-card" style="color: #636E72; font-size: 20px;"></i>
                  </div>
                  <div>
                    <p style="font-weight: 600; margin-bottom: 2px;">신분증 인증 <span style="font-size: 12px; color: #9CA3AF; font-weight: 400;">(선택)</span></p>
                    <p style="font-size: 13px; color: #636E72;">신뢰도 배지를 받을 수 있어요</p>
                  </div>
                </div>
                <button style="padding: 10px 20px; background: #F5F5F5; color: #636E72; border-radius: 20px; font-size: 13px; font-weight: 500; border: none; cursor: pointer;">
                  나중에
                </button>
              </div>
            </div>

            <div style="display: flex; gap: 12px;">
              <button onclick="showStep(3)" style="flex: 1; padding: 16px; background: #F5F5F5; color: #636E72; border-radius: 30px; font-size: 16px; font-weight: 600; border: none; cursor: pointer;">
                이전
              </button>
              <a href="/" style="flex: 2; display: flex; align-items: center; justify-content: center; padding: 16px; background: linear-gradient(135deg, #FF6B6B, #E85555); color: white; border-radius: 30px; font-size: 16px; font-weight: 600; text-decoration: none;">
                시작하기 🎉
              </a>
            </div>
          </div>
        </div>
      </div>

      <script dangerouslySetInnerHTML={{__html: `
        function showStep(step) {
          // Hide all steps
          document.getElementById('onboarding-splash').style.display = 'none';
          document.getElementById('onboarding-step1').style.display = 'none';
          document.getElementById('onboarding-step2').style.display = 'none';
          document.getElementById('onboarding-step3').style.display = 'none';
          document.getElementById('onboarding-step4').style.display = 'none';
          
          // Show selected step
          if (step === 0) {
            document.getElementById('onboarding-splash').style.display = 'flex';
          } else {
            document.getElementById('onboarding-step' + step).style.display = 'block';
          }
        }
      `}} />
    </Layout>
  )
}

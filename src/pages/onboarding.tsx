import type { FC } from 'hono/jsx'
import { Layout } from '../components/Layout'

export const OnboardingPage: FC = () => {
  return (
    <Layout showHeader={false} showNav={false}>
      <div class="onboarding-container">
        {/* Slide 1: Welcome */}
        <div id="slide-1" class="onboarding-slide active">
          <div class="onboarding-illustration">
            {/* Travel Illustration */}
            <div class="illustration-scene">
              <div class="illustration-cloud cloud-1">☁️</div>
              <div class="illustration-cloud cloud-2">☁️</div>
              <div class="illustration-plane">✈️</div>
              <div class="illustration-landmarks">
                <span class="landmark korea">🏯</span>
                <span class="landmark japan">⛩️</span>
              </div>
              <div class="illustration-people">
                <span class="person">🧑‍🤝‍🧑</span>
              </div>
              <div class="illustration-heart">💕</div>
            </div>
          </div>
          
          <div class="onboarding-content">
            <h1 class="onboarding-title">
              여행에서 만나는<br />
              <span class="text-gradient">새로운 친구</span>
            </h1>
            <p class="onboarding-description">
              한국과 일본, 서로의 여행지에서<br />
              특별한 인연을 만들어보세요
            </p>
            
            <div class="onboarding-features">
              <div class="feature-item">
                <i class="fas fa-map-marker-alt"></i>
                <span>여행 일정 매칭</span>
              </div>
              <div class="feature-item">
                <i class="fas fa-users"></i>
                <span>현지 친구 연결</span>
              </div>
            </div>
          </div>
          
          {/* Progress Dots */}
          <div class="slide-progress">
            <div class="progress-dot active"></div>
            <div class="progress-dot"></div>
            <div class="progress-dot"></div>
          </div>
          
          <div class="onboarding-actions">
            <button onclick="goToSlide(2)" class="btn-primary" style="width: 100%;">
              다음 <i class="fas fa-arrow-right" style="margin-left: 8px;"></i>
            </button>
          </div>
        </div>

        {/* Slide 2: Safety */}
        <div id="slide-2" class="onboarding-slide">
          <div class="onboarding-illustration">
            <div class="illustration-scene safety">
              <div class="shield-icon">
                <i class="fas fa-shield-alt"></i>
              </div>
              <div class="safety-badges">
                <span class="safety-badge"><i class="fas fa-check-circle"></i> 본인인증</span>
                <span class="safety-badge"><i class="fas fa-id-card"></i> 신분확인</span>
                <span class="safety-badge"><i class="fas fa-user-shield"></i> 안전모니터링</span>
              </div>
            </div>
          </div>
          
          <div class="onboarding-content">
            <h1 class="onboarding-title">
              안전한 만남을<br />
              <span class="text-gradient-sky">최우선으로</span>
            </h1>
            <p class="onboarding-description">
              철저한 본인 인증과 신고 시스템으로<br />
              안심하고 새로운 친구를 만나세요
            </p>
            
            <div class="safety-features">
              <div class="safety-feature-item">
                <div class="safety-icon">
                  <i class="fas fa-check-double"></i>
                </div>
                <div class="safety-text">
                  <strong>3단계 인증 시스템</strong>
                  <span>이메일, SMS, 신분증</span>
                </div>
              </div>
              <div class="safety-feature-item">
                <div class="safety-icon warning">
                  <i class="fas fa-exclamation-triangle"></i>
                </div>
                <div class="safety-text">
                  <strong>긴급 SOS 버튼</strong>
                  <span>즉시 신고 및 위치 공유</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Progress Dots */}
          <div class="slide-progress">
            <div class="progress-dot"></div>
            <div class="progress-dot active"></div>
            <div class="progress-dot"></div>
          </div>
          
          <div class="onboarding-actions">
            <button onclick="goToSlide(1)" class="btn-ghost" style="flex: 1;">
              이전
            </button>
            <button onclick="goToSlide(3)" class="btn-primary sky" style="flex: 2;">
              다음 <i class="fas fa-arrow-right" style="margin-left: 8px;"></i>
            </button>
          </div>
        </div>

        {/* Slide 3: Language & Culture */}
        <div id="slide-3" class="onboarding-slide">
          <div class="onboarding-illustration">
            <div class="illustration-scene language">
              <div class="chat-bubbles">
                <div class="chat-demo sent">
                  <span class="original">안녕하세요! 😊</span>
                </div>
                <div class="translation-arrow">
                  <i class="fas fa-magic"></i>
                </div>
                <div class="chat-demo received">
                  <span class="original">こんにちは！😊</span>
                  <span class="translated">안녕하세요!</span>
                </div>
              </div>
              <div class="language-flags">
                <span>🇰🇷</span>
                <i class="fas fa-exchange-alt"></i>
                <span>🇯🇵</span>
              </div>
            </div>
          </div>
          
          <div class="onboarding-content">
            <h1 class="onboarding-title">
              언어 걱정 없이<br />
              <span class="text-gradient-mint">자유롭게 대화</span>
            </h1>
            <p class="onboarding-description">
              실시간 번역 기능으로<br />
              편하게 소통하세요
            </p>
            
            <div class="language-features">
              <div class="lang-feature">
                <i class="fas fa-language"></i>
                <span>실시간 자동 번역</span>
              </div>
              <div class="lang-feature">
                <i class="fas fa-eye"></i>
                <span>원문 + 번역 동시 표시</span>
              </div>
            </div>
          </div>
          
          {/* Progress Dots */}
          <div class="slide-progress">
            <div class="progress-dot"></div>
            <div class="progress-dot"></div>
            <div class="progress-dot active"></div>
          </div>
          
          <div class="onboarding-actions">
            <button onclick="goToSlide(2)" class="btn-ghost" style="flex: 1;">
              이전
            </button>
            <button onclick="showSignup()" class="btn-cta" style="flex: 2;">
              시작하기 <i class="fas fa-rocket" style="margin-left: 8px;"></i>
            </button>
          </div>
        </div>

        {/* Signup Form */}
        <div id="signup-form" class="onboarding-slide signup">
          <div class="signup-header">
            <button onclick="goToSlide(3)" class="back-btn">
              <i class="fas fa-arrow-left"></i>
            </button>
            <h2>회원가입</h2>
            <div style="width: 40px;"></div>
          </div>

          {/* Progress Bar */}
          <div class="signup-progress">
            <div id="progress-bar" class="progress-fill" style="width: 25%;"></div>
          </div>

          {/* Step 1: Basic Info */}
          <div id="step-1" class="signup-step active">
            <div class="step-header">
              <span class="step-number">1</span>
              <div>
                <h3>기본 정보</h3>
                <p>회원 가입을 위한 기본 정보를 입력해주세요</p>
              </div>
            </div>

            <div class="form-group">
              <label class="form-label">이름</label>
              <input type="text" class="form-input" placeholder="이름을 입력하세요" />
            </div>

            <div class="form-group">
              <label class="form-label">이메일</label>
              <input type="email" class="form-input" placeholder="email@example.com" />
            </div>

            <div class="form-group">
              <label class="form-label">국가 선택</label>
              <div class="country-select">
                <button type="button" class="country-option active" data-country="korea">
                  <span class="country-flag">🇰🇷</span>
                  <span class="country-name">한국</span>
                </button>
                <button type="button" class="country-option" data-country="japan">
                  <span class="country-flag">🇯🇵</span>
                  <span class="country-name">일본</span>
                </button>
              </div>
            </div>

            <div class="form-group">
              <label class="form-label">생년월일</label>
              <input type="date" class="form-input" />
            </div>

            <button onclick="nextStep(2)" class="btn-primary" style="width: 100%; margin-top: 24px;">
              다음 단계
            </button>
          </div>

          {/* Step 2: Travel Style */}
          <div id="step-2" class="signup-step">
            <div class="step-header">
              <span class="step-number">2</span>
              <div>
                <h3>여행 스타일</h3>
                <p>관심있는 여행 스타일을 선택하세요 (복수 선택)</p>
              </div>
            </div>

            <div class="travel-style-grid">
              <button type="button" class="travel-style-btn">
                <span class="style-emoji">☕</span>
                <span class="style-name">카페투어</span>
              </button>
              <button type="button" class="travel-style-btn active">
                <span class="style-emoji">🍜</span>
                <span class="style-name">미식</span>
              </button>
              <button type="button" class="travel-style-btn">
                <span class="style-emoji">🎭</span>
                <span class="style-name">문화체험</span>
              </button>
              <button type="button" class="travel-style-btn active">
                <span class="style-emoji">🛍️</span>
                <span class="style-name">쇼핑</span>
              </button>
              <button type="button" class="travel-style-btn">
                <span class="style-emoji">🏖️</span>
                <span class="style-name">힐링</span>
              </button>
              <button type="button" class="travel-style-btn">
                <span class="style-emoji">🎵</span>
                <span class="style-name">K-POP</span>
              </button>
              <button type="button" class="travel-style-btn">
                <span class="style-emoji">🎌</span>
                <span class="style-name">애니/만화</span>
              </button>
              <button type="button" class="travel-style-btn">
                <span class="style-emoji">♨️</span>
                <span class="style-name">온천</span>
              </button>
              <button type="button" class="travel-style-btn">
                <span class="style-emoji">🌸</span>
                <span class="style-name">자연</span>
              </button>
              <button type="button" class="travel-style-btn">
                <span class="style-emoji">📸</span>
                <span class="style-name">사진</span>
              </button>
              <button type="button" class="travel-style-btn">
                <span class="style-emoji">🏃</span>
                <span class="style-name">액티비티</span>
              </button>
              <button type="button" class="travel-style-btn">
                <span class="style-emoji">🎤</span>
                <span class="style-name">노래방</span>
              </button>
            </div>

            <div class="step-nav">
              <button onclick="prevStep(1)" class="btn-ghost">이전</button>
              <button onclick="nextStep(3)" class="btn-primary" style="flex: 2;">다음 단계</button>
            </div>
          </div>

          {/* Step 3: Profile Photo */}
          <div id="step-3" class="signup-step">
            <div class="step-header">
              <span class="step-number">3</span>
              <div>
                <h3>프로필 사진</h3>
                <p>얼굴이 잘 보이는 사진을 추가해주세요</p>
              </div>
            </div>

            <div class="photo-upload-grid">
              <div class="photo-upload main">
                <i class="fas fa-camera"></i>
                <span>메인 사진</span>
                <span class="required">필수</span>
              </div>
              <div class="photo-upload">
                <i class="fas fa-plus"></i>
              </div>
              <div class="photo-upload">
                <i class="fas fa-plus"></i>
              </div>
              <div class="photo-upload">
                <i class="fas fa-plus"></i>
              </div>
            </div>

            <div class="photo-tips">
              <i class="fas fa-lightbulb"></i>
              <div>
                <strong>좋은 프로필 사진 팁</strong>
                <ul>
                  <li>얼굴이 선명하게 보이는 사진</li>
                  <li>최근 1년 이내에 찍은 사진</li>
                  <li>자연스러운 미소가 있는 사진</li>
                </ul>
              </div>
            </div>

            <div class="step-nav">
              <button onclick="prevStep(2)" class="btn-ghost">이전</button>
              <button onclick="nextStep(4)" class="btn-primary" style="flex: 2;">다음 단계</button>
            </div>
          </div>

          {/* Step 4: Verification */}
          <div id="step-4" class="signup-step">
            <div class="step-header">
              <span class="step-number">4</span>
              <div>
                <h3>본인 인증</h3>
                <p>안전한 서비스를 위해 인증을 완료해주세요</p>
              </div>
            </div>

            <div class="verification-list">
              <div class="verification-item completed">
                <div class="verification-icon">
                  <i class="fas fa-envelope"></i>
                </div>
                <div class="verification-info">
                  <strong>이메일 인증</strong>
                  <span>인증 완료</span>
                </div>
                <i class="fas fa-check-circle verified"></i>
              </div>

              <div class="verification-item">
                <div class="verification-icon">
                  <i class="fas fa-mobile-alt"></i>
                </div>
                <div class="verification-info">
                  <strong>SMS 인증</strong>
                  <span>휴대전화 번호 인증</span>
                </div>
                <button class="btn-secondary" style="padding: 8px 16px; font-size: 13px;">인증하기</button>
              </div>

              <div class="verification-item optional">
                <div class="verification-icon">
                  <i class="fas fa-id-card"></i>
                </div>
                <div class="verification-info">
                  <strong>신분증 인증</strong>
                  <span class="optional-badge">선택 · 신뢰도 배지 획득</span>
                </div>
                <button class="btn-ghost" style="padding: 8px 16px; font-size: 13px;">나중에</button>
              </div>
            </div>

            <div class="safety-notice">
              <i class="fas fa-shield-alt"></i>
              <p>모든 인증 정보는 암호화되어 안전하게 보관됩니다.</p>
            </div>

            <div class="step-nav">
              <button onclick="prevStep(3)" class="btn-ghost">이전</button>
              <a href="/" class="btn-cta" style="flex: 2; text-decoration: none; text-align: center;">
                시작하기 🎉
              </a>
            </div>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        /* Onboarding Specific Styles */
        .onboarding-container {
          min-height: 100vh;
          background: linear-gradient(180deg, #FFFFFF 0%, #F4EDE4 100%);
        }

        .onboarding-slide {
          display: none;
          flex-direction: column;
          min-height: 100vh;
          padding: 40px 24px;
        }

        .onboarding-slide.active {
          display: flex;
        }

        /* Illustration Section */
        .onboarding-illustration {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 280px;
        }

        .illustration-scene {
          position: relative;
          width: 280px;
          height: 280px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .illustration-cloud {
          position: absolute;
          font-size: 32px;
          animation: float 4s ease-in-out infinite;
        }

        .cloud-1 { top: 10%; left: 10%; animation-delay: 0s; }
        .cloud-2 { top: 5%; right: 15%; animation-delay: 1s; font-size: 24px; }

        .illustration-plane {
          position: absolute;
          top: 20%;
          font-size: 48px;
          animation: float 3s ease-in-out infinite;
        }

        .illustration-landmarks {
          display: flex;
          gap: 60px;
          font-size: 56px;
        }

        .landmark {
          animation: float 3s ease-in-out infinite;
        }

        .landmark.korea { animation-delay: 0.5s; }
        .landmark.japan { animation-delay: 1s; }

        .illustration-people {
          position: absolute;
          bottom: 20%;
          font-size: 48px;
        }

        .illustration-heart {
          position: absolute;
          bottom: 35%;
          right: 25%;
          font-size: 24px;
          animation: heartPop 1.5s ease-in-out infinite;
        }

        /* Safety Scene */
        .illustration-scene.safety {
          flex-direction: column;
          gap: 24px;
        }

        .shield-icon {
          width: 120px;
          height: 120px;
          background: linear-gradient(135deg, #6ECFF6 0%, #4BB8E8 100%);
          border-radius: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 56px;
          color: white;
          box-shadow: 0 8px 32px rgba(110, 207, 246, 0.3);
        }

        .safety-badges {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          justify-content: center;
        }

        .safety-badge {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 8px 14px;
          background: white;
          border-radius: 20px;
          font-size: 13px;
          font-weight: 500;
          color: #1D2B4F;
          box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
        }

        .safety-badge i {
          color: #2ECC71;
        }

        /* Language Scene */
        .illustration-scene.language {
          flex-direction: column;
          gap: 24px;
        }

        .chat-bubbles {
          display: flex;
          flex-direction: column;
          gap: 12px;
          width: 100%;
        }

        .chat-demo {
          padding: 14px 18px;
          border-radius: 20px;
          max-width: 200px;
        }

        .chat-demo.sent {
          background: linear-gradient(135deg, #F57CA8 0%, #E85A8A 100%);
          color: white;
          align-self: flex-end;
          border-bottom-right-radius: 4px;
        }

        .chat-demo.received {
          background: #F4EDE4;
          color: #1D2B4F;
          align-self: flex-start;
          border-bottom-left-radius: 4px;
        }

        .chat-demo .original {
          display: block;
          font-size: 15px;
        }

        .chat-demo .translated {
          display: block;
          font-size: 12px;
          color: #757575;
          margin-top: 6px;
          padding-left: 8px;
          border-left: 2px solid #E0E0E0;
        }

        .translation-arrow {
          text-align: center;
          color: #F57CA8;
          font-size: 20px;
        }

        .language-flags {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 32px;
        }

        .language-flags i {
          font-size: 16px;
          color: #9E9E9E;
        }

        /* Content Section */
        .onboarding-content {
          padding: 32px 0;
          text-align: center;
        }

        .onboarding-title {
          font-size: 28px;
          font-weight: 700;
          color: #1D2B4F;
          line-height: 1.4;
          margin-bottom: 16px;
        }

        .text-gradient {
          background: linear-gradient(135deg, #F57CA8, #E85A8A);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .text-gradient-sky {
          background: linear-gradient(135deg, #6ECFF6, #4BB8E8);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .text-gradient-mint {
          background: linear-gradient(135deg, #2ECC71, #27AE60);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .onboarding-description {
          font-size: 15px;
          color: #757575;
          line-height: 1.6;
          margin-bottom: 24px;
        }

        .onboarding-features {
          display: flex;
          justify-content: center;
          gap: 24px;
        }

        .feature-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 14px;
          color: #616161;
        }

        .feature-item i {
          color: #F57CA8;
        }

        /* Safety Features */
        .safety-features {
          display: flex;
          flex-direction: column;
          gap: 16px;
          text-align: left;
        }

        .safety-feature-item {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 16px;
          background: white;
          border-radius: 16px;
          box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
        }

        .safety-feature-item .safety-icon {
          width: 48px;
          height: 48px;
          background: #E8FBF5;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #2ECC71;
          font-size: 20px;
        }

        .safety-feature-item .safety-icon.warning {
          background: #FEF3F2;
          color: #E74C3C;
        }

        .safety-text strong {
          display: block;
          font-size: 15px;
          color: #1D2B4F;
          margin-bottom: 2px;
        }

        .safety-text span {
          font-size: 13px;
          color: #757575;
        }

        /* Language Features */
        .language-features {
          display: flex;
          justify-content: center;
          gap: 24px;
        }

        .lang-feature {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 14px;
          color: #616161;
        }

        .lang-feature i {
          color: #2ECC71;
        }

        /* Progress Dots */
        .slide-progress {
          display: flex;
          justify-content: center;
          gap: 8px;
          margin: 24px 0;
        }

        .progress-dot {
          width: 8px;
          height: 8px;
          border-radius: 4px;
          background: #E8DED2;
          transition: all 0.3s;
        }

        .progress-dot.active {
          width: 24px;
          background: linear-gradient(135deg, #F57CA8, #E85A8A);
        }

        /* Actions */
        .onboarding-actions {
          display: flex;
          gap: 12px;
          padding-top: 16px;
        }

        /* Signup Form Styles */
        .onboarding-slide.signup {
          padding: 0;
        }

        .signup-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 16px 20px;
          border-bottom: 1px solid #F4EDE4;
          background: white;
          position: sticky;
          top: 0;
          z-index: 10;
        }

        .signup-header h2 {
          font-size: 18px;
          font-weight: 600;
          color: #1D2B4F;
        }

        .back-btn {
          width: 40px;
          height: 40px;
          border: none;
          background: #F4EDE4;
          border-radius: 12px;
          color: #1D2B4F;
          font-size: 16px;
          cursor: pointer;
        }

        .signup-progress {
          height: 4px;
          background: #E8DED2;
        }

        .progress-fill {
          height: 100%;
          background: linear-gradient(90deg, #F57CA8, #6ECFF6);
          transition: width 0.3s ease;
        }

        .signup-step {
          display: none;
          padding: 24px;
          flex: 1;
        }

        .signup-step.active {
          display: block;
        }

        .step-header {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          margin-bottom: 32px;
        }

        .step-number {
          width: 32px;
          height: 32px;
          background: linear-gradient(135deg, #F57CA8, #E85A8A);
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 14px;
        }

        .step-header h3 {
          font-size: 20px;
          font-weight: 600;
          color: #1D2B4F;
          margin-bottom: 4px;
        }

        .step-header p {
          font-size: 14px;
          color: #757575;
        }

        /* Country Select */
        .country-select {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }

        .country-option {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          padding: 20px;
          background: white;
          border: 2px solid #E8DED2;
          border-radius: 16px;
          cursor: pointer;
          transition: all 0.2s;
        }

        .country-option:hover {
          border-color: #F57CA8;
        }

        .country-option.active {
          border-color: #F57CA8;
          background: #FFF5F8;
        }

        .country-flag {
          font-size: 40px;
        }

        .country-name {
          font-size: 15px;
          font-weight: 500;
          color: #1D2B4F;
        }

        /* Travel Style Grid */
        .travel-style-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 12px;
          margin-bottom: 32px;
        }

        .travel-style-btn {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
          padding: 16px 8px;
          background: white;
          border: 2px solid #E8DED2;
          border-radius: 16px;
          cursor: pointer;
          transition: all 0.2s;
        }

        .travel-style-btn:hover {
          border-color: #F57CA8;
        }

        .travel-style-btn.active {
          border-color: #F57CA8;
          background: #FFF5F8;
        }

        .style-emoji {
          font-size: 24px;
        }

        .style-name {
          font-size: 12px;
          color: #616161;
        }

        /* Photo Upload */
        .photo-upload-grid {
          display: grid;
          grid-template-columns: 2fr 1fr;
          grid-template-rows: 1fr 1fr;
          gap: 12px;
          margin-bottom: 24px;
        }

        .photo-upload {
          aspect-ratio: 1;
          background: #FAFAFA;
          border: 2px dashed #E8DED2;
          border-radius: 16px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 8px;
          color: #BDBDBD;
          cursor: pointer;
          transition: all 0.2s;
        }

        .photo-upload:hover {
          border-color: #F57CA8;
          color: #F57CA8;
          background: #FFF5F8;
        }

        .photo-upload.main {
          grid-row: span 2;
        }

        .photo-upload i {
          font-size: 32px;
        }

        .photo-upload span {
          font-size: 13px;
        }

        .photo-upload .required {
          font-size: 11px;
          color: #F57CA8;
          background: #FFF5F8;
          padding: 2px 8px;
          border-radius: 10px;
        }

        .photo-tips {
          display: flex;
          gap: 16px;
          padding: 16px;
          background: #FFF8E7;
          border-radius: 12px;
          margin-bottom: 32px;
        }

        .photo-tips i {
          color: #F1C40F;
          font-size: 20px;
        }

        .photo-tips strong {
          display: block;
          font-size: 14px;
          color: #1D2B4F;
          margin-bottom: 8px;
        }

        .photo-tips ul {
          margin: 0;
          padding-left: 16px;
          font-size: 13px;
          color: #616161;
        }

        .photo-tips li {
          margin-bottom: 4px;
        }

        /* Verification */
        .verification-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 24px;
        }

        .verification-item {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 16px;
          background: white;
          border: 1px solid #E8DED2;
          border-radius: 16px;
        }

        .verification-item.completed {
          background: #E8FBF5;
          border-color: #C4F2E3;
        }

        .verification-item.optional {
          opacity: 0.7;
        }

        .verification-icon {
          width: 48px;
          height: 48px;
          background: #F4EDE4;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          color: #757575;
        }

        .verification-item.completed .verification-icon {
          background: #C4F2E3;
          color: #2ECC71;
        }

        .verification-info {
          flex: 1;
        }

        .verification-info strong {
          display: block;
          font-size: 15px;
          color: #1D2B4F;
          margin-bottom: 2px;
        }

        .verification-info span {
          font-size: 13px;
          color: #757575;
        }

        .verification-info .optional-badge {
          color: #F1C40F;
        }

        .verified {
          color: #2ECC71;
          font-size: 20px;
        }

        .safety-notice {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 16px;
          background: #F4EDE4;
          border-radius: 12px;
          margin-bottom: 32px;
        }

        .safety-notice i {
          color: #6ECFF6;
          font-size: 20px;
        }

        .safety-notice p {
          font-size: 13px;
          color: #616161;
        }

        .step-nav {
          display: flex;
          gap: 12px;
        }
      `}} />

      <script dangerouslySetInnerHTML={{__html: `
        function goToSlide(num) {
          // Hide all slides
          document.querySelectorAll('.onboarding-slide').forEach(slide => {
            slide.classList.remove('active');
          });
          // Show target slide
          document.getElementById('slide-' + num).classList.add('active');
        }

        function showSignup() {
          document.querySelectorAll('.onboarding-slide').forEach(slide => {
            slide.classList.remove('active');
          });
          document.getElementById('signup-form').classList.add('active');
        }

        function nextStep(num) {
          document.querySelectorAll('.signup-step').forEach(step => {
            step.classList.remove('active');
          });
          document.getElementById('step-' + num).classList.add('active');
          document.getElementById('progress-bar').style.width = (num * 25) + '%';
        }

        function prevStep(num) {
          document.querySelectorAll('.signup-step').forEach(step => {
            step.classList.remove('active');
          });
          document.getElementById('step-' + num).classList.add('active');
          document.getElementById('progress-bar').style.width = (num * 25) + '%';
        }

        // Travel style toggle
        document.querySelectorAll('.travel-style-btn').forEach(btn => {
          btn.addEventListener('click', function() {
            this.classList.toggle('active');
          });
        });

        // Country select
        document.querySelectorAll('.country-option').forEach(opt => {
          opt.addEventListener('click', function() {
            document.querySelectorAll('.country-option').forEach(o => o.classList.remove('active'));
            this.classList.add('active');
          });
        });
      `}} />
    </Layout>
  )
}

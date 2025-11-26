import type { FC } from 'hono/jsx'
import { Layout } from '../components/Layout'

interface ChatPageProps {
  chatId?: string
}

export const ChatPage: FC<ChatPageProps> = ({ chatId }) => {
  if (chatId) {
    return <ChatRoom chatId={chatId} />
  }
  return <ChatList />
}

// Chat List Component
const ChatList: FC = () => {
  return (
    <Layout activeTab="chat">
      <div style="padding: 20px 0;">
        {/* Page Title */}
        <div style="padding: 0 20px; margin-bottom: 20px;">
          <h1 style="font-size: 28px; font-weight: 700; color: #2D3436; margin-bottom: 4px;">채팅</h1>
          <p style="color: #636E72;">매칭된 사람들과 대화해보세요</p>
        </div>

        {/* Search Bar */}
        <div style="padding: 0 20px; margin-bottom: 16px;">
          <div style="position: relative;">
            <i class="fas fa-search" style="position: absolute; left: 16px; top: 50%; transform: translateY(-50%); color: #9CA3AF;"></i>
            <input 
              type="text" 
              placeholder="이름으로 검색..." 
              class="form-input"
              style="padding-left: 44px;"
            />
          </div>
        </div>

        {/* Chat List */}
        <div>
          {/* Chat Item 1 - Unread */}
          <a href="/chat/1" style="text-decoration: none;">
            <div class="chat-list-item">
              <div style="position: relative;">
                <img 
                  src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=120" 
                  alt="사쿠라"
                  class="chat-avatar"
                />
                <div style="position: absolute; bottom: 2px; right: 2px; width: 14px; height: 14px; background: #00B894; border: 2px solid white; border-radius: 50%;"></div>
              </div>
              <div class="chat-info">
                <div style="display: flex; align-items: center; gap: 8px;">
                  <span class="chat-name">사쿠라</span>
                  <span style="font-size: 12px; color: #636E72;">🇯🇵</span>
                </div>
                <p class="chat-preview">안녕하세요! 서울에서 만나요 😊</p>
              </div>
              <div class="chat-meta">
                <p class="chat-time">10분 전</p>
                <span class="chat-unread">2</span>
              </div>
            </div>
          </a>

          {/* Chat Item 2 */}
          <a href="/chat/2" style="text-decoration: none;">
            <div class="chat-list-item">
              <div style="position: relative;">
                <img 
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=120" 
                  alt="유이"
                  class="chat-avatar"
                />
              </div>
              <div class="chat-info">
                <div style="display: flex; align-items: center; gap: 8px;">
                  <span class="chat-name">유이</span>
                  <span style="font-size: 12px; color: #636E72;">🇯🇵</span>
                </div>
                <p class="chat-preview">홍대 카페 추천해 주세요!</p>
              </div>
              <div class="chat-meta">
                <p class="chat-time">1시간 전</p>
              </div>
            </div>
          </a>

          {/* Chat Item 3 */}
          <a href="/chat/3" style="text-decoration: none;">
            <div class="chat-list-item">
              <div style="position: relative;">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120" 
                  alt="지민"
                  class="chat-avatar"
                />
                <div style="position: absolute; bottom: 2px; right: 2px; width: 14px; height: 14px; background: #00B894; border: 2px solid white; border-radius: 50%;"></div>
              </div>
              <div class="chat-info">
                <div style="display: flex; align-items: center; gap: 8px;">
                  <span class="chat-name">지민</span>
                  <span style="font-size: 12px; color: #636E72;">🇰🇷</span>
                </div>
                <p class="chat-preview">오사카 여행 같이 가실래요?</p>
              </div>
              <div class="chat-meta">
                <p class="chat-time">3시간 전</p>
              </div>
            </div>
          </a>

          {/* Chat Item 4 - Your Turn */}
          <a href="/chat/4" style="text-decoration: none;">
            <div class="chat-list-item">
              <div style="position: relative;">
                <img 
                  src="https://images.unsplash.com/photo-1524638431109-93d95c968f03?w=120" 
                  alt="하나"
                  class="chat-avatar"
                />
              </div>
              <div class="chat-info">
                <div style="display: flex; align-items: center; gap: 8px;">
                  <span class="chat-name">하나</span>
                  <span style="font-size: 12px; color: #636E72;">🇯🇵</span>
                  <span style="font-size: 10px; color: #FF6B6B; background: #FFF5F5; padding: 2px 8px; border-radius: 10px;">내 차례</span>
                </div>
                <p class="chat-preview">제주도 맛집 추천 감사해요!</p>
              </div>
              <div class="chat-meta">
                <p class="chat-time">어제</p>
              </div>
            </div>
          </a>

          {/* Chat Item 5 */}
          <a href="/chat/5" style="text-decoration: none;">
            <div class="chat-list-item">
              <div style="position: relative;">
                <img 
                  src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=120" 
                  alt="민준"
                  class="chat-avatar"
                />
              </div>
              <div class="chat-info">
                <div style="display: flex; align-items: center; gap: 8px;">
                  <span class="chat-name">민준</span>
                  <span style="font-size: 12px; color: #636E72;">🇰🇷</span>
                </div>
                <p class="chat-preview">도쿄 라멘 맛집 찾았어요! 🍜</p>
              </div>
              <div class="chat-meta">
                <p class="chat-time">2일 전</p>
              </div>
            </div>
          </a>
        </div>

        {/* Empty State (hidden by default) */}
        <div style="display: none; text-align: center; padding: 60px 40px;">
          <div style="width: 120px; height: 120px; background: #F5F5F5; border-radius: 50%; margin: 0 auto 24px; display: flex; align-items: center; justify-content: center;">
            <i class="fas fa-comments" style="font-size: 48px; color: #D1D5DB;"></i>
          </div>
          <h3 style="font-size: 20px; font-weight: 600; color: #2D3436; margin-bottom: 8px;">아직 대화가 없어요</h3>
          <p style="color: #636E72; margin-bottom: 24px;">매칭을 시작해서 새로운 친구를 만나보세요!</p>
          <a href="/" style="display: inline-block; padding: 14px 32px; background: linear-gradient(135deg, #FF6B6B, #E85555); color: white; border-radius: 30px; font-weight: 600; text-decoration: none;">
            매칭 시작하기
          </a>
        </div>
      </div>
    </Layout>
  )
}

// Chat Room Component
const ChatRoom: FC<{ chatId: string }> = ({ chatId }) => {
  return (
    <Layout activeTab="chat" showHeader={false} showNav={false} showSOS={true}>
      {/* Chat Header */}
      <header style="display: flex; align-items: center; gap: 12px; padding: 12px 16px; background: white; border-bottom: 1px solid #F0F0F0; position: sticky; top: 0; z-index: 50;">
        <a href="/chat" style="width: 40px; height: 40px; display: flex; align-items: center; justify-content: center; color: #2D3436;">
          <i class="fas fa-chevron-left" style="font-size: 18px;"></i>
        </a>
        <div style="display: flex; align-items: center; gap: 12px; flex: 1;">
          <div style="position: relative;">
            <img 
              src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=80" 
              alt="사쿠라"
              style="width: 44px; height: 44px; border-radius: 50%; object-fit: cover;"
            />
            <div style="position: absolute; bottom: 0; right: 0; width: 12px; height: 12px; background: #00B894; border: 2px solid white; border-radius: 50%;"></div>
          </div>
          <div>
            <div style="display: flex; align-items: center; gap: 6px;">
              <span style="font-weight: 600;">사쿠라</span>
              <span style="font-size: 12px; color: #636E72;">🇯🇵</span>
            </div>
            <p style="font-size: 12px; color: #00B894;">온라인</p>
          </div>
        </div>
        <button style="width: 40px; height: 40px; background: #F5F5F5; border-radius: 50%; display: flex; align-items: center; justify-content: center; border: none; cursor: pointer;">
          <i class="fas fa-ellipsis-v" style="color: #636E72;"></i>
        </button>
      </header>

      {/* Translation Toggle */}
      <div style="padding: 8px 16px; background: #FFFBF0; border-bottom: 1px solid #FFE8B0;">
        <div style="display: flex; align-items: center; justify-content: space-between;">
          <div style="display: flex; align-items: center; gap: 8px;">
            <i class="fas fa-language" style="color: #F59E0B;"></i>
            <span style="font-size: 13px; color: #92400E;">자동 번역 활성화됨</span>
          </div>
          <div class="lang-toggle">
            <button class="lang-option active">한국어</button>
            <button class="lang-option">日本語</button>
          </div>
        </div>
      </div>

      {/* Chat Messages */}
      <div style="flex: 1; padding: 16px; overflow-y: auto; height: calc(100vh - 200px); background: #FAFAFA;">
        {/* Date Separator */}
        <div style="text-align: center; margin-bottom: 20px;">
          <span style="font-size: 12px; color: #9CA3AF; background: white; padding: 6px 16px; border-radius: 20px;">오늘</span>
        </div>

        {/* Received Message */}
        <div style="display: flex; gap: 8px; margin-bottom: 16px;">
          <img 
            src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=80" 
            alt="사쿠라"
            style="width: 36px; height: 36px; border-radius: 50%; object-fit: cover; flex-shrink: 0;"
          />
          <div>
            <div style="background: white; padding: 12px 16px; border-radius: 0 16px 16px 16px; box-shadow: 0 1px 4px rgba(0,0,0,0.05); max-width: 280px;">
              <p style="color: #2D3436; line-height: 1.5; margin-bottom: 8px;">
                안녕하세요! 저는 사쿠라예요 😊
              </p>
              <p style="font-size: 11px; color: #9CA3AF; font-style: italic;">
                こんにちは！私はさくらです😊
              </p>
            </div>
            <span style="font-size: 11px; color: #9CA3AF; margin-top: 4px; display: block;">10:30 AM</span>
          </div>
        </div>

        {/* Received Message 2 */}
        <div style="display: flex; gap: 8px; margin-bottom: 16px;">
          <img 
            src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=80" 
            alt="사쿠라"
            style="width: 36px; height: 36px; border-radius: 50%; object-fit: cover; flex-shrink: 0;"
          />
          <div>
            <div style="background: white; padding: 12px 16px; border-radius: 0 16px 16px 16px; box-shadow: 0 1px 4px rgba(0,0,0,0.05); max-width: 280px;">
              <p style="color: #2D3436; line-height: 1.5; margin-bottom: 8px;">
                3월 20일부터 서울에 여행 가요! 혹시 맛집 추천해 주실 수 있어요?
              </p>
              <p style="font-size: 11px; color: #9CA3AF; font-style: italic;">
                3月20日からソウルに旅行に行きます！おすすめのお店を教えてくれますか？
              </p>
            </div>
            <span style="font-size: 11px; color: #9CA3AF; margin-top: 4px; display: block;">10:31 AM</span>
          </div>
        </div>

        {/* Sent Message */}
        <div style="display: flex; justify-content: flex-end; margin-bottom: 16px;">
          <div>
            <div style="background: linear-gradient(135deg, #FF6B6B, #E85555); padding: 12px 16px; border-radius: 16px 0 16px 16px; max-width: 280px;">
              <p style="color: white; line-height: 1.5;">
                안녕하세요 사쿠라님! 반가워요 👋
              </p>
            </div>
            <div style="display: flex; justify-content: flex-end; align-items: center; gap: 4px; margin-top: 4px;">
              <span style="font-size: 11px; color: #9CA3AF;">10:32 AM</span>
              <i class="fas fa-check-double" style="font-size: 12px; color: #00B894;"></i>
            </div>
          </div>
        </div>

        {/* Sent Message 2 */}
        <div style="display: flex; justify-content: flex-end; margin-bottom: 16px;">
          <div>
            <div style="background: linear-gradient(135deg, #FF6B6B, #E85555); padding: 12px 16px; border-radius: 16px 0 16px 16px; max-width: 280px;">
              <p style="color: white; line-height: 1.5;">
                홍대 근처 정말 좋은 카페들이 많아요! 제가 가이드해 드릴게요 ☕
              </p>
            </div>
            <div style="display: flex; justify-content: flex-end; align-items: center; gap: 4px; margin-top: 4px;">
              <span style="font-size: 11px; color: #9CA3AF;">10:33 AM</span>
              <i class="fas fa-check-double" style="font-size: 12px; color: #00B894;"></i>
            </div>
          </div>
        </div>

        {/* Received Message 3 */}
        <div style="display: flex; gap: 8px; margin-bottom: 16px;">
          <img 
            src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=80" 
            alt="사쿠라"
            style="width: 36px; height: 36px; border-radius: 50%; object-fit: cover; flex-shrink: 0;"
          />
          <div>
            <div style="background: white; padding: 12px 16px; border-radius: 0 16px 16px 16px; box-shadow: 0 1px 4px rgba(0,0,0,0.05); max-width: 280px;">
              <p style="color: #2D3436; line-height: 1.5; margin-bottom: 8px;">
                정말요?! 너무 감사해요! 😊 서울에서 만나요!
              </p>
              <p style="font-size: 11px; color: #9CA3AF; font-style: italic;">
                本当ですか？！ありがとうございます！😊ソウルで会いましょう！
              </p>
            </div>
            <span style="font-size: 11px; color: #9CA3AF; margin-top: 4px; display: block;">방금 전</span>
          </div>
        </div>

        {/* Typing Indicator */}
        <div style="display: flex; gap: 8px; margin-bottom: 16px;">
          <img 
            src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=80" 
            alt="사쿠라"
            style="width: 36px; height: 36px; border-radius: 50%; object-fit: cover; flex-shrink: 0;"
          />
          <div style="background: white; padding: 12px 16px; border-radius: 0 16px 16px 16px; box-shadow: 0 1px 4px rgba(0,0,0,0.05);">
            <div style="display: flex; gap: 4px;">
              <div style="width: 8px; height: 8px; background: #D1D5DB; border-radius: 50%; animation: pulse 1s infinite;"></div>
              <div style="width: 8px; height: 8px; background: #D1D5DB; border-radius: 50%; animation: pulse 1s infinite 0.2s;"></div>
              <div style="width: 8px; height: 8px; background: #D1D5DB; border-radius: 50%; animation: pulse 1s infinite 0.4s;"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Message Input */}
      <div style="padding: 12px 16px; background: white; border-top: 1px solid #F0F0F0; display: flex; gap: 12px; align-items: flex-end;">
        <button style="width: 44px; height: 44px; background: #F5F5F5; border-radius: 50%; display: flex; align-items: center; justify-content: center; border: none; cursor: pointer; flex-shrink: 0;">
          <i class="fas fa-plus" style="color: #636E72;"></i>
        </button>
        <div style="flex: 1; position: relative;">
          <textarea 
            placeholder="메시지를 입력하세요..."
            style="width: 100%; padding: 12px 16px; border: 1px solid #E5E7EB; border-radius: 24px; resize: none; font-size: 15px; max-height: 120px; min-height: 44px;"
            rows={1}
          ></textarea>
        </div>
        <button style="width: 44px; height: 44px; background: linear-gradient(135deg, #FF6B6B, #E85555); border-radius: 50%; display: flex; align-items: center; justify-content: center; border: none; cursor: pointer; flex-shrink: 0;">
          <i class="fas fa-paper-plane" style="color: white;"></i>
        </button>
      </div>
    </Layout>
  )
}

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
      <div style="padding-bottom: 100px;">
        {/* Page Header */}
        <div style="padding: 24px 20px 16px;">
          <h1 style="font-size: 26px; font-weight: 700; color: #1D2B4F; margin-bottom: 4px;">채팅</h1>
          <p style="font-size: 14px; color: #757575;">매칭된 여행자들과 대화해보세요</p>
        </div>

        {/* Search Bar */}
        <div style="padding: 0 20px 16px;">
          <div style="position: relative;">
            <i class="fas fa-search" style="position: absolute; left: 16px; top: 50%; transform: translateY(-50%); color: #BDBDBD;"></i>
            <input 
              type="text" 
              placeholder="이름으로 검색..." 
              class="form-input"
              style="padding-left: 44px; background: #F4EDE4; border-color: transparent;"
            />
          </div>
        </div>

        {/* Filter Chips */}
        <div style="padding: 0 20px 20px; display: flex; gap: 8px; overflow-x: auto;">
          <span class="chip chip-outline active">전체</span>
          <span class="chip chip-outline">안 읽음 <span style="color: #F57CA8; margin-left: 4px;">3</span></span>
          <span class="chip chip-outline">여행자</span>
          <span class="chip chip-outline">로컬가이드</span>
        </div>

        {/* Chat List */}
        <div>
          {/* Chat Item 1 - Unread with Online */}
          <a href="/chat/1" style="text-decoration: none;">
            <div class="chat-list-item" style="background: #FFF5F8;">
              <div style="position: relative;">
                <img 
                  src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=120" 
                  alt="사쿠라"
                  style="width: 56px; height: 56px; border-radius: 16px; object-fit: cover;"
                />
                <div style="position: absolute; bottom: 2px; right: 2px; width: 14px; height: 14px; background: #2ECC71; border: 2px solid white; border-radius: 50%;"></div>
              </div>
              <div style="flex: 1; min-width: 0;">
                <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 4px;">
                  <span style="font-weight: 600; color: #1D2B4F; font-size: 16px;">사쿠라</span>
                  <span style="font-size: 12px;">🇯🇵</span>
                  <span class="verified-badge" style="padding: 2px 6px; font-size: 10px;">
                    <i class="fas fa-check-circle"></i>
                  </span>
                </div>
                <p style="color: #616161; font-size: 14px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
                  서울에서 만나요! 홍대 카페 추천해주실 수 있어요? 😊
                </p>
                <div style="display: flex; gap: 4px; margin-top: 6px;">
                  <span style="font-size: 11px; padding: 2px 8px; background: #E8F7FD; color: #4BB8E8; border-radius: 10px;">
                    3/20-25 서울
                  </span>
                </div>
              </div>
              <div style="text-align: right; flex-shrink: 0;">
                <p style="font-size: 12px; color: #9E9E9E; margin-bottom: 6px;">10분 전</p>
                <span style="display: inline-flex; align-items: center; justify-content: center; min-width: 20px; height: 20px; background: linear-gradient(135deg, #F57CA8, #E85A8A); color: white; font-size: 11px; font-weight: 600; border-radius: 10px; padding: 0 6px;">2</span>
              </div>
            </div>
          </a>

          {/* Chat Item 2 - Your turn to reply */}
          <a href="/chat/2" style="text-decoration: none;">
            <div class="chat-list-item">
              <div style="position: relative;">
                <img 
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=120" 
                  alt="유이"
                  style="width: 56px; height: 56px; border-radius: 16px; object-fit: cover;"
                />
              </div>
              <div style="flex: 1; min-width: 0;">
                <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 4px;">
                  <span style="font-weight: 600; color: #1D2B4F; font-size: 16px;">유이</span>
                  <span style="font-size: 12px;">🇯🇵</span>
                  <span style="font-size: 10px; color: #F57CA8; background: #FFF5F8; padding: 2px 8px; border-radius: 10px; font-weight: 500;">
                    내 차례
                  </span>
                </div>
                <p style="color: #616161; font-size: 14px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
                  K-POP 성지순례 같이 가요! BTS 하이브 본사 가고 싶어요 💜
                </p>
              </div>
              <div style="text-align: right; flex-shrink: 0;">
                <p style="font-size: 12px; color: #9E9E9E;">1시간 전</p>
              </div>
            </div>
          </a>

          {/* Chat Item 3 - Local Guide */}
          <a href="/chat/3" style="text-decoration: none;">
            <div class="chat-list-item">
              <div style="position: relative;">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120" 
                  alt="지민"
                  style="width: 56px; height: 56px; border-radius: 16px; object-fit: cover;"
                />
                <div style="position: absolute; bottom: 2px; right: 2px; width: 14px; height: 14px; background: #2ECC71; border: 2px solid white; border-radius: 50%;"></div>
              </div>
              <div style="flex: 1; min-width: 0;">
                <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 4px;">
                  <span style="font-weight: 600; color: #1D2B4F; font-size: 16px;">지민</span>
                  <span style="font-size: 12px;">🇰🇷</span>
                  <span style="font-size: 10px; color: #6ECFF6; background: #E8F7FD; padding: 2px 8px; border-radius: 10px; font-weight: 500;">
                    로컬가이드
                  </span>
                </div>
                <p style="color: #616161; font-size: 14px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
                  부산 맛집 투어 준비 완료! 일정표 보내드릴게요 🍜
                </p>
              </div>
              <div style="text-align: right; flex-shrink: 0;">
                <p style="font-size: 12px; color: #9E9E9E;">3시간 전</p>
              </div>
            </div>
          </a>

          {/* Chat Item 4 */}
          <a href="/chat/4" style="text-decoration: none;">
            <div class="chat-list-item">
              <div style="position: relative;">
                <img 
                  src="https://images.unsplash.com/photo-1524638431109-93d95c968f03?w=120" 
                  alt="하나"
                  style="width: 56px; height: 56px; border-radius: 16px; object-fit: cover;"
                />
              </div>
              <div style="flex: 1; min-width: 0;">
                <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 4px;">
                  <span style="font-weight: 600; color: #1D2B4F; font-size: 16px;">하나</span>
                  <span style="font-size: 12px;">🇯🇵</span>
                </div>
                <p style="color: #616161; font-size: 14px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
                  제주도 맛집 추천 감사해요! 정말 맛있었어요 🥰
                </p>
              </div>
              <div style="text-align: right; flex-shrink: 0;">
                <p style="font-size: 12px; color: #9E9E9E;">어제</p>
              </div>
            </div>
          </a>

          {/* Chat Item 5 - Unread */}
          <a href="/chat/5" style="text-decoration: none;">
            <div class="chat-list-item" style="background: #FFF5F8;">
              <div style="position: relative;">
                <img 
                  src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=120" 
                  alt="켄타"
                  style="width: 56px; height: 56px; border-radius: 16px; object-fit: cover;"
                />
              </div>
              <div style="flex: 1; min-width: 0;">
                <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 4px;">
                  <span style="font-weight: 600; color: #1D2B4F; font-size: 16px;">켄타</span>
                  <span style="font-size: 12px;">🇯🇵</span>
                </div>
                <p style="color: #616161; font-size: 14px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
                  도쿄 라멘 맛집 찾았어요! 같이 가실래요? 🍜
                </p>
              </div>
              <div style="text-align: right; flex-shrink: 0;">
                <p style="font-size: 12px; color: #9E9E9E; margin-bottom: 6px;">2일 전</p>
                <span style="display: inline-flex; align-items: center; justify-content: center; min-width: 20px; height: 20px; background: linear-gradient(135deg, #F57CA8, #E85A8A); color: white; font-size: 11px; font-weight: 600; border-radius: 10px; padding: 0 6px;">1</span>
              </div>
            </div>
          </a>
        </div>

        {/* Empty State (hidden by default) */}
        <div style="display: none; text-align: center; padding: 60px 40px;">
          <div class="illustration" style="width: 120px; height: 120px; margin: 0 auto 24px;">
            <i class="fas fa-comments"></i>
          </div>
          <h3 style="font-size: 20px; font-weight: 600; color: #1D2B4F; margin-bottom: 8px;">아직 대화가 없어요</h3>
          <p style="color: #757575; margin-bottom: 24px;">여행자와 연결해서 새로운 친구를 만나보세요!</p>
          <a href="/" class="btn-primary" style="text-decoration: none;">
            <i class="fas fa-search"></i> 여행자 찾기
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
      <header style="display: flex; align-items: center; gap: 12px; padding: 12px 16px; background: white; border-bottom: 1px solid #F4EDE4; position: sticky; top: 0; z-index: 50;">
        <a href="/chat" style="width: 40px; height: 40px; display: flex; align-items: center; justify-content: center; color: #1D2B4F; text-decoration: none;">
          <i class="fas fa-chevron-left" style="font-size: 18px;"></i>
        </a>
        <div style="display: flex; align-items: center; gap: 12px; flex: 1;">
          <div style="position: relative;">
            <img 
              src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=80" 
              alt="사쿠라"
              style="width: 44px; height: 44px; border-radius: 14px; object-fit: cover;"
            />
            <div style="position: absolute; bottom: 0; right: 0; width: 12px; height: 12px; background: #2ECC71; border: 2px solid white; border-radius: 50%;"></div>
          </div>
          <div>
            <div style="display: flex; align-items: center; gap: 6px;">
              <span style="font-weight: 600; color: #1D2B4F;">사쿠라</span>
              <span style="font-size: 12px;">🇯🇵</span>
              <span class="verified-badge" style="padding: 2px 6px; font-size: 10px;">
                <i class="fas fa-check-circle"></i>
              </span>
            </div>
            <p style="font-size: 12px; color: #2ECC71; display: flex; align-items: center; gap: 4px;">
              <span style="width: 6px; height: 6px; background: #2ECC71; border-radius: 50%;"></span>
              온라인
            </p>
          </div>
        </div>
        
        {/* Header Actions */}
        <div style="display: flex; gap: 8px;">
          <button class="header-btn" onclick="openScheduleModal()">
            <i class="fas fa-calendar-alt"></i>
          </button>
          <button class="header-btn" onclick="openMoreMenu()">
            <i class="fas fa-ellipsis-v"></i>
          </button>
        </div>
      </header>

      {/* Travel Schedule Banner */}
      <div style="padding: 12px 16px; background: linear-gradient(135deg, #6ECFF6 0%, #4BB8E8 100%); color: white;">
        <div style="display: flex; align-items: center; gap: 12px;">
          <i class="fas fa-plane" style="font-size: 18px;"></i>
          <div style="flex: 1;">
            <p style="font-size: 12px; opacity: 0.9;">사쿠라님의 여행 일정</p>
            <p style="font-size: 14px; font-weight: 600;">3/20-25 서울 방문</p>
          </div>
          <span style="background: rgba(255,255,255,0.2); padding: 6px 12px; border-radius: 20px; font-size: 12px; font-weight: 500;">
            <i class="fas fa-calendar-check" style="margin-right: 4px;"></i>일정 겹침!
          </span>
        </div>
      </div>

      {/* Translation Toggle */}
      <div style="padding: 10px 16px; background: #FFF8E7; border-bottom: 1px solid #FFE8B0;">
        <div style="display: flex; align-items: center; justify-content: space-between;">
          <div style="display: flex; align-items: center; gap: 8px;">
            <i class="fas fa-language" style="color: #F1C40F; font-size: 18px;"></i>
            <span style="font-size: 13px; color: #92400E; font-weight: 500;">자동 번역 활성화</span>
          </div>
          <div style="display: flex; align-items: center; gap: 4px; background: #FFFFFF; border-radius: 20px; padding: 4px;">
            <button style="padding: 6px 12px; background: #F57CA8; color: white; border: none; border-radius: 16px; font-size: 12px; font-weight: 500; cursor: pointer;">한국어</button>
            <button style="padding: 6px 12px; background: transparent; color: #757575; border: none; border-radius: 16px; font-size: 12px; font-weight: 500; cursor: pointer;">日本語</button>
          </div>
        </div>
      </div>

      {/* Chat Messages */}
      <div style="flex: 1; padding: 16px; overflow-y: auto; height: calc(100vh - 280px); background: #FAFAFA;">
        {/* Safety Reminder */}
        <div style="text-align: center; margin-bottom: 20px;">
          <div style="display: inline-flex; align-items: center; gap: 8px; padding: 10px 16px; background: #FFF8E7; border-radius: 20px; font-size: 12px; color: #92400E;">
            <i class="fas fa-shield-alt"></i>
            첫 만남은 공공장소에서 진행해주세요
          </div>
        </div>

        {/* Date Separator */}
        <div style="text-align: center; margin-bottom: 20px;">
          <span style="font-size: 12px; color: #9E9E9E; background: white; padding: 6px 16px; border-radius: 20px; box-shadow: 0 1px 4px rgba(0,0,0,0.04);">오늘</span>
        </div>

        {/* Received Message - Japanese with Korean Translation */}
        <div style="display: flex; gap: 10px; margin-bottom: 20px;">
          <img 
            src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=80" 
            alt="사쿠라"
            style="width: 36px; height: 36px; border-radius: 12px; object-fit: cover; flex-shrink: 0;"
          />
          <div style="max-width: 280px;">
            <div style="background: white; padding: 14px 16px; border-radius: 4px 20px 20px 20px; box-shadow: 0 2px 8px rgba(0,0,0,0.04);">
              {/* Original Japanese */}
              <p style="color: #1D2B4F; line-height: 1.5; font-size: 15px; margin-bottom: 8px;">
                こんにちは！私はさくらです 😊
              </p>
              {/* Korean Translation */}
              <div class="chat-translation">
                <i class="fas fa-language" style="font-size: 10px; margin-right: 4px;"></i>
                안녕하세요! 저는 사쿠라예요 😊
              </div>
            </div>
            <span style="font-size: 11px; color: #9E9E9E; margin-top: 6px; display: block; margin-left: 4px;">10:30 AM</span>
          </div>
        </div>

        {/* Received Message 2 */}
        <div style="display: flex; gap: 10px; margin-bottom: 20px;">
          <img 
            src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=80" 
            alt="사쿠라"
            style="width: 36px; height: 36px; border-radius: 12px; object-fit: cover; flex-shrink: 0;"
          />
          <div style="max-width: 280px;">
            <div style="background: white; padding: 14px 16px; border-radius: 4px 20px 20px 20px; box-shadow: 0 2px 8px rgba(0,0,0,0.04);">
              <p style="color: #1D2B4F; line-height: 1.5; font-size: 15px; margin-bottom: 8px;">
                3月20日からソウルに旅行に行きます！おすすめのカフェを教えてくれますか？🍰
              </p>
              <div class="chat-translation">
                <i class="fas fa-language" style="font-size: 10px; margin-right: 4px;"></i>
                3월 20일부터 서울에 여행 가요! 추천 카페 알려주실 수 있어요? 🍰
              </div>
            </div>
            <span style="font-size: 11px; color: #9E9E9E; margin-top: 6px; display: block; margin-left: 4px;">10:31 AM</span>
          </div>
        </div>

        {/* Sent Message */}
        <div style="display: flex; justify-content: flex-end; margin-bottom: 20px;">
          <div style="max-width: 280px;">
            <div class="chat-bubble sent">
              <p style="line-height: 1.5;">
                안녕하세요 사쿠라님! 반가워요 👋
              </p>
            </div>
            <div style="display: flex; justify-content: flex-end; align-items: center; gap: 4px; margin-top: 6px;">
              <span style="font-size: 11px; color: #9E9E9E;">10:32 AM</span>
              <i class="fas fa-check-double" style="font-size: 12px; color: #2ECC71;"></i>
            </div>
          </div>
        </div>

        {/* Sent Message 2 */}
        <div style="display: flex; justify-content: flex-end; margin-bottom: 20px;">
          <div style="max-width: 280px;">
            <div class="chat-bubble sent">
              <p style="line-height: 1.5;">
                홍대 근처에 정말 좋은 카페들이 많아요! 제가 몇 개 추천해 드릴게요 ☕
              </p>
            </div>
            <div style="display: flex; justify-content: flex-end; align-items: center; gap: 4px; margin-top: 6px;">
              <span style="font-size: 11px; color: #9E9E9E;">10:33 AM</span>
              <i class="fas fa-check-double" style="font-size: 12px; color: #2ECC71;"></i>
            </div>
          </div>
        </div>

        {/* Received Message 3 */}
        <div style="display: flex; gap: 10px; margin-bottom: 20px;">
          <img 
            src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=80" 
            alt="사쿠라"
            style="width: 36px; height: 36px; border-radius: 12px; object-fit: cover; flex-shrink: 0;"
          />
          <div style="max-width: 280px;">
            <div style="background: white; padding: 14px 16px; border-radius: 4px 20px 20px 20px; box-shadow: 0 2px 8px rgba(0,0,0,0.04);">
              <p style="color: #1D2B4F; line-height: 1.5; font-size: 15px; margin-bottom: 8px;">
                本当ですか？！ありがとうございます！😆 ソウルで会いましょう！
              </p>
              <div class="chat-translation">
                <i class="fas fa-language" style="font-size: 10px; margin-right: 4px;"></i>
                정말요?! 감사합니다! 😆 서울에서 만나요!
              </div>
            </div>
            <span style="font-size: 11px; color: #9E9E9E; margin-top: 6px; display: block; margin-left: 4px;">방금 전</span>
          </div>
        </div>

        {/* Quick Schedule Match Card */}
        <div style="background: linear-gradient(135deg, #FFF5F8 0%, #E8F7FD 100%); border-radius: 16px; padding: 16px; margin-bottom: 20px;">
          <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 12px;">
            <i class="fas fa-calendar-check" style="color: #F57CA8;"></i>
            <span style="font-size: 14px; font-weight: 600; color: #1D2B4F;">일정이 겹쳐요!</span>
          </div>
          <p style="font-size: 13px; color: #616161; margin-bottom: 12px;">
            3월 20-25일 서울에서 만날 수 있어요. 만남 일정을 잡아볼까요?
          </p>
          <button class="btn-primary" style="width: 100%; padding: 12px;">
            <i class="fas fa-calendar-plus"></i> 만남 일정 잡기
          </button>
        </div>

        {/* Typing Indicator */}
        <div style="display: flex; gap: 10px; margin-bottom: 16px;">
          <img 
            src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=80" 
            alt="사쿠라"
            style="width: 36px; height: 36px; border-radius: 12px; object-fit: cover; flex-shrink: 0;"
          />
          <div style="background: white; padding: 14px 18px; border-radius: 4px 20px 20px 20px; box-shadow: 0 2px 8px rgba(0,0,0,0.04);">
            <div style="display: flex; gap: 4px;">
              <div style="width: 8px; height: 8px; background: #BDBDBD; border-radius: 50%; animation: pulse 1s infinite;"></div>
              <div style="width: 8px; height: 8px; background: #BDBDBD; border-radius: 50%; animation: pulse 1s infinite 0.2s;"></div>
              <div style="width: 8px; height: 8px; background: #BDBDBD; border-radius: 50%; animation: pulse 1s infinite 0.4s;"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Replies */}
      <div style="padding: 8px 16px; background: white; border-top: 1px solid #F4EDE4; overflow-x: auto;">
        <div style="display: flex; gap: 8px; white-space: nowrap;">
          <button class="chip chip-outline" style="flex-shrink: 0;">
            👋 반가워요!
          </button>
          <button class="chip chip-outline" style="flex-shrink: 0;">
            📍 어디서 만날까요?
          </button>
          <button class="chip chip-outline" style="flex-shrink: 0;">
            ☕ 카페 추천
          </button>
          <button class="chip chip-outline" style="flex-shrink: 0;">
            📅 일정 확인
          </button>
        </div>
      </div>

      {/* Message Input */}
      <div style="padding: 12px 16px; background: white; border-top: 1px solid #F4EDE4; display: flex; gap: 10px; align-items: flex-end;">
        <button style="width: 44px; height: 44px; background: #F4EDE4; border-radius: 14px; display: flex; align-items: center; justify-content: center; border: none; cursor: pointer; flex-shrink: 0;">
          <i class="fas fa-plus" style="color: #757575;"></i>
        </button>
        <div style="flex: 1; position: relative;">
          <textarea 
            placeholder="메시지를 입력하세요..."
            style="width: 100%; padding: 12px 16px; border: 2px solid #E8DED2; border-radius: 22px; resize: none; font-size: 15px; max-height: 120px; min-height: 44px; line-height: 1.4; font-family: inherit;"
            rows={1}
          ></textarea>
        </div>
        <button style="width: 44px; height: 44px; background: linear-gradient(135deg, #F57CA8, #E85A8A); border-radius: 14px; display: flex; align-items: center; justify-content: center; border: none; cursor: pointer; flex-shrink: 0; box-shadow: 0 4px 12px rgba(245, 124, 168, 0.3);">
          <i class="fas fa-paper-plane" style="color: white;"></i>
        </button>
      </div>

      {/* SOS Button */}
      <button class="sos-btn" style="bottom: 80px; right: 16px;">
        <i class="fas fa-exclamation-triangle"></i>
      </button>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes pulse {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.1); }
        }
      `}} />
    </Layout>
  )
}

import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { renderer } from './renderer'
import { HomePage } from './pages/home'
import { MatchesPage } from './pages/matches'
import { ChatPage } from './pages/chat'
import { TravelPage } from './pages/travel'
import { ProfilePage } from './pages/profile'
import { OnboardingPage } from './pages/onboarding'

const app = new Hono()

// Middleware
app.use('*', cors())
app.use(renderer)

// ===== API Routes =====
// Mock user data
const mockUsers = [
  {
    id: '1',
    name: '사쿠라',
    nameKr: '사쿠라',
    nameJp: 'さくら',
    age: 26,
    country: 'japan',
    city: '도쿄',
    cityJp: '東京',
    bio: '여행과 카페 투어를 좋아해요! 한국 음식 특히 김치찌개를 너무 좋아합니다 🍲',
    bioJp: '旅行とカフェ巡りが好きです！韓国料理、特にキムチチゲが大好きです🍲',
    photos: [
      'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=600',
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400',
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400'
    ],
    verified: true,
    travelVerified: true,
    languages: ['일본어', '한국어 (초급)', '영어'],
    travelStyle: ['카페투어', '미식', '문화체험'],
    travelDates: { start: '2025-03-20', end: '2025-03-25', city: '서울' },
    distance: '2km'
  },
  {
    id: '2',
    name: '지민',
    nameKr: '지민',
    nameJp: 'ジミン',
    age: 28,
    country: 'korea',
    city: '부산',
    cityJp: '釜山',
    bio: '일본 여행 마니아입니다. 교토의 전통 문화와 오사카 맛집 탐방을 계획중이에요!',
    bioJp: '日本旅行マニアです。京都の伝統文化と大阪のグルメ巡りを計画中です！',
    photos: [
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600',
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400',
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400'
    ],
    verified: true,
    travelVerified: true,
    languages: ['한국어', '일본어 (중급)', '영어'],
    travelStyle: ['액티비티', '로컬체험', '온천'],
    travelDates: { start: '2025-04-01', end: '2025-04-07', city: '오사카' },
    distance: '5km'
  },
  {
    id: '3',
    name: '유이',
    nameKr: '유이',
    nameJp: 'ゆい',
    age: 24,
    country: 'japan',
    city: '오사카',
    cityJp: '大阪',
    bio: '한류 팬이에요! K-POP과 한국 드라마를 좋아해서 서울에서 성지순례하고 싶어요 💜',
    bioJp: '韓流ファンです！K-POPと韓国ドラマが好きで、ソウルで聖地巡礼したいです💜',
    photos: [
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600',
      'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400',
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400'
    ],
    verified: true,
    travelVerified: false,
    languages: ['일본어', '한국어 (중급)'],
    travelStyle: ['쇼핑', '문화체험', 'K-POP'],
    travelDates: { start: '2025-03-15', end: '2025-03-20', city: '서울' },
    distance: '3km'
  },
  {
    id: '4',
    name: '민준',
    nameKr: '민준',
    nameJp: 'ミンジュン',
    age: 27,
    country: 'korea',
    city: '서울',
    cityJp: 'ソウル',
    bio: '도쿄에서 한 달 살기 예정입니다. 현지 친구 사귀고 싶어요! 라멘 맛집 추천해주세요 🍜',
    bioJp: '東京で1ヶ月滞在予定です。現地の友達を作りたいです！ラーメン屋さんおすすめしてください🍜',
    photos: [
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600',
      'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400',
      'https://images.unsplash.com/photo-1463453091185-61582044d556?w=400'
    ],
    verified: true,
    travelVerified: true,
    languages: ['한국어', '일본어 (고급)', '영어'],
    travelStyle: ['미식', '로컬체험', '힐링'],
    travelDates: { start: '2025-04-10', end: '2025-05-10', city: '도쿄' },
    distance: '8km'
  },
  {
    id: '5',
    name: '하나',
    nameKr: '하나',
    nameJp: 'はな',
    age: 25,
    country: 'japan',
    city: '교토',
    cityJp: '京都',
    bio: '전통 문화와 자연을 사랑합니다. 한국의 제주도에 꼭 가보고 싶어요! 🌸',
    bioJp: '伝統文化と自然が大好きです。韓国の済州島にぜひ行ってみたいです！🌸',
    photos: [
      'https://images.unsplash.com/photo-1524638431109-93d95c968f03?w=600',
      'https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=400',
      'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=400'
    ],
    verified: true,
    travelVerified: true,
    languages: ['일본어', '한국어 (초급)'],
    travelStyle: ['힐링', '자연', '문화체험'],
    travelDates: { start: '2025-05-01', end: '2025-05-05', city: '제주' },
    distance: '12km'
  }
]

// Mock matches data
const mockMatches = [
  {
    id: 'm1',
    user: mockUsers[0],
    matchedAt: '2025-03-18T10:30:00',
    lastMessage: '안녕하세요! 서울에서 만나요 😊',
    lastMessageTime: '10분 전',
    unread: 2
  },
  {
    id: 'm2',
    user: mockUsers[2],
    matchedAt: '2025-03-17T15:45:00',
    lastMessage: '홍대 카페 추천해 주세요!',
    lastMessageTime: '1시간 전',
    unread: 0
  }
]

// API: Get users for swiping
app.get('/api/users', (c) => {
  return c.json({ users: mockUsers })
})

// API: Get single user
app.get('/api/users/:id', (c) => {
  const id = c.req.param('id')
  const user = mockUsers.find(u => u.id === id)
  if (!user) {
    return c.json({ error: 'User not found' }, 404)
  }
  return c.json({ user })
})

// API: Swipe action
app.post('/api/swipe', async (c) => {
  const { userId, direction } = await c.req.json()
  // Simulate match (30% chance for demo)
  const isMatch = direction === 'right' && Math.random() < 0.3
  return c.json({ 
    success: true, 
    isMatch,
    matchedUser: isMatch ? mockUsers.find(u => u.id === userId) : null
  })
})

// API: Get matches
app.get('/api/matches', (c) => {
  return c.json({ matches: mockMatches })
})

// API: Get travel schedules
app.get('/api/travel', (c) => {
  const travelingUsers = mockUsers.filter(u => u.travelDates)
  return c.json({ travelers: travelingUsers })
})

// API: Get local guides
app.get('/api/guides', (c) => {
  const guides = mockUsers.filter(u => u.travelStyle.includes('로컬체험'))
  return c.json({ guides })
})

// ===== Page Routes =====

// Home - Swipe Cards
app.get('/', (c) => {
  return c.render(<HomePage />, { title: 'TravelMatch - 홈' })
})

// Matches
app.get('/matches', (c) => {
  return c.render(<MatchesPage />, { title: 'TravelMatch - 매칭' })
})

// Chat
app.get('/chat', (c) => {
  return c.render(<ChatPage />, { title: 'TravelMatch - 채팅' })
})

app.get('/chat/:id', (c) => {
  const id = c.req.param('id')
  return c.render(<ChatPage chatId={id} />, { title: 'TravelMatch - 채팅' })
})

// Travel Schedule
app.get('/travel', (c) => {
  return c.render(<TravelPage />, { title: 'TravelMatch - 여행' })
})

// Profile
app.get('/profile', (c) => {
  return c.render(<ProfilePage />, { title: 'TravelMatch - 프로필' })
})

// Onboarding
app.get('/onboarding', (c) => {
  return c.render(<OnboardingPage />, { title: 'TravelMatch - 시작하기' })
})

export default app

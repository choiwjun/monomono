import { jsxRenderer } from 'hono/jsx-renderer'

export const renderer = jsxRenderer(({ children, title }) => {
  return (
    <html lang="ko">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta name="theme-color" content="#FF6B6B" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <title>{title || 'TravelMatch - 한일 여행 매칭'}</title>
        <script src="https://cdn.tailwindcss.com"></script>
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;600;700&family=Noto+Sans+JP:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <link href="/static/style.css" rel="stylesheet" />
        <script dangerouslySetInnerHTML={{__html: `
          tailwind.config = {
            theme: {
              extend: {
                colors: {
                  primary: '#FF6B6B',
                  'primary-dark': '#E85555',
                  secondary: '#4ECDC4',
                  accent: '#FFE66D',
                  dark: '#2D3436',
                  'dark-light': '#636E72',
                  success: '#00B894',
                  warning: '#FDCB6E',
                  danger: '#E74C3C',
                  'korea': '#003580',
                  'japan': '#BC002D'
                },
                fontFamily: {
                  sans: ['Noto Sans KR', 'Noto Sans JP', 'sans-serif']
                },
                animation: {
                  'swipe-right': 'swipeRight 0.3s ease-out',
                  'swipe-left': 'swipeLeft 0.3s ease-out',
                  'match-pop': 'matchPop 0.5s ease-out',
                  'heart-beat': 'heartBeat 0.6s ease-in-out',
                  'slide-up': 'slideUp 0.3s ease-out',
                  'fade-in': 'fadeIn 0.3s ease-out'
                }
              }
            }
          }
        `}} />
      </head>
      <body class="font-sans bg-gray-50 text-dark antialiased">
        {children}
        <script src="/static/app.js"></script>
      </body>
    </html>
  )
})

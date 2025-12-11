import { jsxRenderer } from 'hono/jsx-renderer'

export const renderer = jsxRenderer(({ children, title }) => {
  return (
    <html lang="ko">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta name="theme-color" content="#F57CA8" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <title>{title || 'MONOMONO - 한일 여행 매칭'}</title>
        <script src="https://cdn.tailwindcss.com"></script>
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet" />
        {/* Pretendard + Noto Sans 폰트 */}
        <link rel="stylesheet" as="style" crossorigin href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.min.css" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <link href="/static/style.css" rel="stylesheet" />
        <script dangerouslySetInnerHTML={{__html: `
          tailwind.config = {
            theme: {
              extend: {
                colors: {
                  // 메인 컬러 (Primary)
                  'sakura': '#F57CA8',
                  'sakura-light': '#FFB8D0',
                  'sakura-dark': '#E85A8A',
                  'sky': '#6ECFF6',
                  'sky-light': '#A8E4FF',
                  'sky-dark': '#4BB8E8',
                  'navy': '#1D2B4F',
                  'navy-light': '#2D4A7C',
                  'navy-dark': '#0F1A2E',
                  
                  // 서브 컬러 (Secondary)
                  'beige': '#F4EDE4',
                  'beige-dark': '#E8DED2',
                  'mint': '#C4F2E3',
                  'mint-dark': '#9DE8D0',
                  'sunset': '#FFA873',
                  'sunset-dark': '#FF8A4C',
                  
                  // 상태 컬러 (Status)
                  'success': '#2ECC71',
                  'warning': '#F1C40F',
                  'danger': '#E74C3C',
                  'info': '#3498DB',
                  
                  // 국가 컬러
                  'korea': '#003580',
                  'japan': '#BC002D',
                  
                  // 중립 컬러
                  'gray': {
                    50: '#FAFAFA',
                    100: '#F5F5F5',
                    200: '#EEEEEE',
                    300: '#E0E0E0',
                    400: '#BDBDBD',
                    500: '#9E9E9E',
                    600: '#757575',
                    700: '#616161',
                    800: '#424242',
                    900: '#212121'
                  }
                },
                fontFamily: {
                  sans: ['"Pretendard Variable"', 'Pretendard', '"Noto Sans JP"', '-apple-system', 'BlinkMacSystemFont', 'sans-serif']
                },
                fontSize: {
                  'h1': ['32px', { lineHeight: '1.3', fontWeight: '700' }],
                  'h2': ['24px', { lineHeight: '1.4', fontWeight: '600' }],
                  'h3': ['20px', { lineHeight: '1.4', fontWeight: '600' }],
                  'body1': ['16px', { lineHeight: '1.6', fontWeight: '400' }],
                  'body2': ['14px', { lineHeight: '1.5', fontWeight: '400' }],
                  'caption': ['12px', { lineHeight: '1.4', fontWeight: '400' }]
                },
                spacing: {
                  'xs': '4px',
                  's': '8px',
                  'm': '16px',
                  'l': '24px',
                  'xl': '32px',
                  '2xl': '48px'
                },
                borderRadius: {
                  'card': '20px',
                  'button': '12px',
                  'input': '12px',
                  'chip': '20px',
                  'avatar': '50%'
                },
                boxShadow: {
                  'card': '0 4px 20px rgba(0, 0, 0, 0.06)',
                  'card-hover': '0 8px 30px rgba(0, 0, 0, 0.1)',
                  'button': '0 4px 12px rgba(245, 124, 168, 0.3)',
                  'input': '0 2px 8px rgba(0, 0, 0, 0.04)'
                },
                animation: {
                  'float': 'float 3s ease-in-out infinite',
                  'pulse-soft': 'pulseSoft 2s ease-in-out infinite',
                  'slide-up': 'slideUp 0.3s ease-out',
                  'slide-down': 'slideDown 0.3s ease-out',
                  'fade-in': 'fadeIn 0.3s ease-out',
                  'scale-in': 'scaleIn 0.3s ease-out'
                }
              }
            }
          }
        `}} />
      </head>
      <body class="font-sans bg-beige text-navy antialiased">
        {children}
        <script src="/static/app.js"></script>
      </body>
    </html>
  )
})

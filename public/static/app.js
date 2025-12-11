// MONOMONO - 한일 여행 매칭 플랫폼
// Main Application JavaScript

// ===== Global State =====
let currentLang = 'KR';

// ===== Initialize App =====
document.addEventListener('DOMContentLoaded', () => {
  initChips();
  initModals();
  initTextarea();
  console.log('MONOMONO App Initialized ✈️');
});

// ===== Chip / Tag Toggle =====
function initChips() {
  // Travel style chips
  document.querySelectorAll('.chip, .travel-tag, .travel-style-btn').forEach(chip => {
    chip.addEventListener('click', function(e) {
      // Don't toggle if it's a link or has specific data attributes
      if (this.tagName === 'A' || this.dataset.noToggle) return;
      
      // Toggle active state
      this.classList.toggle('active');
    });
  });

  // Country filter chips (exclusive selection)
  document.querySelectorAll('[data-country]').forEach(chip => {
    chip.addEventListener('click', function() {
      document.querySelectorAll('[data-country]').forEach(c => c.classList.remove('active'));
      this.classList.add('active');
    });
  });
}

// ===== Modal Functions =====
function initModals() {
  // Close modals on backdrop click
  document.querySelectorAll('.modal-backdrop').forEach(modal => {
    modal.addEventListener('click', function(e) {
      if (e.target === this) {
        this.classList.remove('active');
      }
    });
  });
}

function showMatchModal() {
  const modal = document.getElementById('matchModal');
  if (modal) {
    modal.classList.add('active');
    createConfetti();
  }
}

function closeMatchModal() {
  const modal = document.getElementById('matchModal');
  if (modal) {
    modal.classList.remove('active');
  }
}

function sendMessage() {
  closeMatchModal();
  window.location.href = '/chat/1';
}

function showFilterModal() {
  const modal = document.getElementById('filterModal');
  if (modal) {
    modal.classList.add('active');
  }
}

function closeFilterModal(event) {
  if (event && event.target !== event.currentTarget) return;
  const modal = document.getElementById('filterModal');
  if (modal) {
    modal.classList.remove('active');
  }
}

function expandProfile(userId) {
  const modal = document.getElementById('profileModal');
  if (modal) {
    modal.classList.add('active');
  }
}

function closeProfileModal(event) {
  if (event && event.target !== event.currentTarget) return;
  const modal = document.getElementById('profileModal');
  if (modal) {
    modal.classList.remove('active');
  }
}

function openScheduleModal() {
  alert('여행 일정 상세 보기');
}

function openMoreMenu() {
  alert('메뉴: 프로필 보기, 신고하기, 차단하기');
}

// ===== Header Actions =====
function toggleLanguage() {
  const btn = event.target.closest('.header-btn');
  if (!btn) return;
  
  currentLang = currentLang === 'KR' ? 'JP' : 'KR';
  btn.innerHTML = `<span style="font-size: 13px; font-weight: 600;">${currentLang}</span>`;
  
  console.log('Language switched to:', currentLang === 'KR' ? 'Korean' : 'Japanese');
}

function showNotifications() {
  alert('새로운 알림\n\n• 사쿠라님이 연결을 요청했어요\n• 유이님이 메시지를 보냈어요\n• 지민님의 여행 일정이 업데이트되었어요');
}

// ===== SOS Function =====
function triggerSOS() {
  if (confirm('긴급 상황인가요?\n\n확인을 누르면 등록된 긴급 연락처에 알림이 전송되고 현재 위치가 공유됩니다.')) {
    alert('📍 긴급 연락처에 알림을 전송했습니다.\n\n안전한 장소로 이동하세요.\n고객센터: 1588-0000');
  }
}

// ===== Confetti Effect =====
function createConfetti() {
  const colors = ['#F57CA8', '#6ECFF6', '#FFE66D', '#FFA873', '#C4F2E3'];
  const confettiCount = 50;
  
  for (let i = 0; i < confettiCount; i++) {
    const confetti = document.createElement('div');
    confetti.style.cssText = `
      position: fixed;
      width: 10px;
      height: 10px;
      background: ${colors[Math.floor(Math.random() * colors.length)]};
      left: ${Math.random() * 100}vw;
      top: -10px;
      border-radius: ${Math.random() > 0.5 ? '50%' : '2px'};
      z-index: 1001;
      pointer-events: none;
      animation: confetti-fall ${2 + Math.random() * 2}s linear forwards;
    `;
    document.body.appendChild(confetti);
    
    setTimeout(() => confetti.remove(), 4000);
  }
  
  // Add confetti animation if not exists
  if (!document.getElementById('confetti-style')) {
    const style = document.createElement('style');
    style.id = 'confetti-style';
    style.textContent = `
      @keyframes confetti-fall {
        0% {
          transform: translateY(0) rotate(0deg);
          opacity: 1;
        }
        100% {
          transform: translateY(100vh) rotate(720deg);
          opacity: 0;
        }
      }
    `;
    document.head.appendChild(style);
  }
}

// ===== Textarea Auto Resize =====
function initTextarea() {
  const textareas = document.querySelectorAll('textarea');
  textareas.forEach(textarea => {
    textarea.addEventListener('input', function() {
      this.style.height = 'auto';
      this.style.height = Math.min(this.scrollHeight, 120) + 'px';
    });
  });
}

// ===== Onboarding Functions =====
function goToSlide(num) {
  // Hide all slides
  document.querySelectorAll('.onboarding-slide').forEach(slide => {
    slide.classList.remove('active');
  });
  // Show target slide
  const targetSlide = document.getElementById('slide-' + num);
  if (targetSlide) {
    targetSlide.classList.add('active');
  }
}

function showSignup() {
  document.querySelectorAll('.onboarding-slide').forEach(slide => {
    slide.classList.remove('active');
  });
  const signupForm = document.getElementById('signup-form');
  if (signupForm) {
    signupForm.classList.add('active');
  }
}

function nextStep(num) {
  document.querySelectorAll('.signup-step').forEach(step => {
    step.classList.remove('active');
  });
  const targetStep = document.getElementById('step-' + num);
  if (targetStep) {
    targetStep.classList.add('active');
  }
  const progressBar = document.getElementById('progress-bar');
  if (progressBar) {
    progressBar.style.width = (num * 25) + '%';
  }
}

function prevStep(num) {
  nextStep(num); // Same logic
}

// ===== Utility Functions =====
function formatDate(dateString) {
  const date = new Date(dateString);
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return `${month}/${day}`;
}

function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// ===== API Calls (Mock) =====
async function fetchUsers() {
  try {
    const response = await fetch('/api/users');
    const data = await response.json();
    return data.users || [];
  } catch (error) {
    console.error('Error fetching users:', error);
    return [];
  }
}

async function sendConnectionRequest(userId) {
  try {
    const response = await fetch('/api/connect', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userId })
    });
    const data = await response.json();
    if (data.success) {
      if (data.match) {
        showMatchModal();
      } else {
        alert('연결 요청을 보냈어요! 상대방이 수락하면 채팅할 수 있어요.');
      }
    }
    return data;
  } catch (error) {
    console.error('Error sending connection request:', error);
    return { success: false };
  }
}

// ===== Premium Features =====
function showPremiumModal(feature) {
  alert(`"${feature}" 기능은 프리미엄 회원 전용입니다.\n\n✨ 프리미엄 혜택\n• 무제한 연결 요청\n• 누가 나를 좋아하는지 확인\n• 프로필 부스트\n• 광고 제거\n\n월 ₩9,900으로 시작하세요!`);
}

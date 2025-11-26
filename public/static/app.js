// TravelMatch - Main Application JavaScript
// Tinder-style Swipe Card Interactions

// ===== Global State =====
let currentCardIndex = 0;
let cards = [];
let startX = 0;
let startY = 0;
let isDragging = false;
let currentCard = null;

// ===== Initialize App =====
document.addEventListener('DOMContentLoaded', () => {
  initSwipeCards();
  initTravelTags();
  initModals();
});

// ===== Swipe Card Functionality =====
function initSwipeCards() {
  const cardStack = document.getElementById('cardStack');
  if (!cardStack) return;

  cards = Array.from(cardStack.querySelectorAll('.swipe-card'));
  if (cards.length === 0) return;

  currentCard = cards[0];
  
  // Add touch/mouse events to the first card
  addCardEvents(currentCard);
}

function addCardEvents(card) {
  if (!card) return;
  
  // Mouse events
  card.addEventListener('mousedown', handleDragStart);
  document.addEventListener('mousemove', handleDragMove);
  document.addEventListener('mouseup', handleDragEnd);
  
  // Touch events
  card.addEventListener('touchstart', handleDragStart, { passive: false });
  document.addEventListener('touchmove', handleDragMove, { passive: false });
  document.addEventListener('touchend', handleDragEnd);
}

function handleDragStart(e) {
  if (e.target.closest('button')) return;
  
  isDragging = true;
  currentCard = e.currentTarget;
  currentCard.classList.add('dragging');
  
  const point = e.touches ? e.touches[0] : e;
  startX = point.clientX;
  startY = point.clientY;
  
  e.preventDefault();
}

function handleDragMove(e) {
  if (!isDragging || !currentCard) return;
  
  const point = e.touches ? e.touches[0] : e;
  const deltaX = point.clientX - startX;
  const deltaY = point.clientY - startY;
  
  // Calculate rotation based on horizontal movement
  const rotation = deltaX * 0.1;
  
  // Apply transform
  currentCard.style.transform = `translateX(${deltaX}px) translateY(${deltaY}px) rotate(${rotation}deg)`;
  
  // Show like/nope labels based on direction
  const likeLabel = currentCard.querySelector('.like-label');
  const nopeLabel = currentCard.querySelector('.nope-label');
  
  if (likeLabel && nopeLabel) {
    const opacity = Math.min(Math.abs(deltaX) / 100, 1);
    
    if (deltaX > 0) {
      likeLabel.style.opacity = opacity;
      likeLabel.style.transform = `rotate(-20deg) scale(${0.8 + opacity * 0.4})`;
      nopeLabel.style.opacity = 0;
    } else {
      nopeLabel.style.opacity = opacity;
      nopeLabel.style.transform = `rotate(20deg) scale(${0.8 + opacity * 0.4})`;
      likeLabel.style.opacity = 0;
    }
  }
  
  e.preventDefault();
}

function handleDragEnd(e) {
  if (!isDragging || !currentCard) return;
  
  isDragging = false;
  currentCard.classList.remove('dragging');
  
  const rect = currentCard.getBoundingClientRect();
  const cardCenterX = rect.left + rect.width / 2;
  const screenCenterX = window.innerWidth / 2;
  const deltaX = cardCenterX - screenCenterX;
  
  // Determine if swipe threshold is met
  const threshold = window.innerWidth * 0.25;
  
  if (Math.abs(deltaX) > threshold) {
    if (deltaX > 0) {
      completeSwipe('right');
    } else {
      completeSwipe('left');
    }
  } else {
    // Reset card position
    resetCard();
  }
}

function completeSwipe(direction) {
  if (!currentCard) return;
  
  // Add swipe animation class
  currentCard.classList.add(direction === 'right' ? 'swiping-right' : 'swiping-left');
  
  // Handle match logic
  if (direction === 'right') {
    // Simulate 30% match chance
    if (Math.random() < 0.3) {
      setTimeout(() => showMatchModal(), 300);
    }
  }
  
  // Remove card after animation
  setTimeout(() => {
    if (currentCard) {
      currentCard.remove();
    }
    
    // Update card stack
    cards = Array.from(document.querySelectorAll('.swipe-card'));
    if (cards.length > 0) {
      currentCard = cards[0];
      currentCard.style.zIndex = 5;
      addCardEvents(currentCard);
      
      // Update background cards
      cards.forEach((card, index) => {
        if (index > 0) {
          const scale = 1 - (index * 0.05);
          const translateY = index * 10;
          card.style.transform = `scale(${scale}) translateY(${translateY}px)`;
          card.style.zIndex = 5 - index;
        }
      });
    } else {
      // No more cards
      showNoMoreCards();
    }
  }, 300);
}

function resetCard() {
  if (!currentCard) return;
  
  currentCard.style.transform = '';
  
  const likeLabel = currentCard.querySelector('.like-label');
  const nopeLabel = currentCard.querySelector('.nope-label');
  
  if (likeLabel) {
    likeLabel.style.opacity = 0;
    likeLabel.style.transform = 'rotate(-20deg) scale(0.8)';
  }
  if (nopeLabel) {
    nopeLabel.style.opacity = 0;
    nopeLabel.style.transform = 'rotate(20deg) scale(0.8)';
  }
}

// ===== Button Actions =====
function swipeLeft() {
  if (!currentCard) return;
  
  // Animate nope label
  const nopeLabel = currentCard.querySelector('.nope-label');
  if (nopeLabel) {
    nopeLabel.style.opacity = 1;
    nopeLabel.style.transform = 'rotate(20deg) scale(1.2)';
  }
  
  setTimeout(() => completeSwipe('left'), 100);
}

function swipeRight() {
  if (!currentCard) return;
  
  // Animate like label
  const likeLabel = currentCard.querySelector('.like-label');
  if (likeLabel) {
    likeLabel.style.opacity = 1;
    likeLabel.style.transform = 'rotate(-20deg) scale(1.2)';
  }
  
  setTimeout(() => completeSwipe('right'), 100);
}

function superLike() {
  if (!currentCard) return;
  
  // Add super like animation
  const superLabel = document.createElement('div');
  superLabel.className = 'swipe-label superlike-label';
  superLabel.textContent = 'SUPER';
  superLabel.style.opacity = 1;
  superLabel.style.transform = 'translate(-50%, -50%) scale(1.2)';
  currentCard.appendChild(superLabel);
  
  // Always match on super like for demo
  setTimeout(() => {
    showMatchModal();
    superLabel.remove();
  }, 500);
}

function rewindCard() {
  // Show premium upsell for rewind
  showPremiumModal('되돌리기');
}

function boostProfile() {
  // Show premium upsell for boost
  showPremiumModal('부스트');
}

// ===== Modal Functions =====
function initModals() {
  // Initialize modal event listeners
}

function showMatchModal() {
  const modal = document.getElementById('matchModal');
  if (modal) {
    modal.classList.add('active');
    
    // Add confetti effect (optional)
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

function showPremiumModal(feature) {
  alert(`"${feature}" 기능은 프리미엄 회원 전용입니다.\n\n월 ₩9,900으로 무제한 이용하세요!`);
}

function showNoMoreCards() {
  const cardStack = document.getElementById('cardStack');
  if (cardStack) {
    cardStack.innerHTML = `
      <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%; text-align: center; padding: 40px;">
        <div style="width: 120px; height: 120px; background: linear-gradient(135deg, #FF6B6B, #4ECDC4); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-bottom: 24px;">
          <i class="fas fa-heart" style="font-size: 48px; color: white;"></i>
        </div>
        <h3 style="font-size: 24px; font-weight: 700; color: #2D3436; margin-bottom: 8px;">오늘은 여기까지!</h3>
        <p style="color: #636E72; margin-bottom: 24px;">새로운 여행자들이 곧 도착해요</p>
        <button onclick="location.reload()" style="padding: 14px 32px; background: linear-gradient(135deg, #FF6B6B, #E85555); color: white; border-radius: 30px; font-weight: 600; border: none; cursor: pointer;">
          <i class="fas fa-redo" style="margin-right: 8px;"></i>다시 보기
        </button>
      </div>
    `;
  }
}

// ===== Travel Tags Toggle =====
function initTravelTags() {
  document.querySelectorAll('.travel-tag').forEach(tag => {
    tag.addEventListener('click', function() {
      // Toggle active state
      this.classList.toggle('active');
    });
  });
}

// ===== Header Actions =====
function toggleLanguage() {
  const btn = event.target.closest('.header-btn');
  const currentLang = btn.textContent.trim();
  btn.innerHTML = currentLang === 'KR' ? '<span style="font-size: 14px; font-weight: 600;">JP</span>' : '<span style="font-size: 14px; font-weight: 600;">KR</span>';
  
  // In a real app, this would trigger i18n change
  console.log('Language switched to:', currentLang === 'KR' ? 'Japanese' : 'Korean');
}

function showNotifications() {
  alert('알림 기능은 준비 중입니다.');
}

function showSettings() {
  showFilterModal();
}

// ===== SOS Function =====
function triggerSOS() {
  if (confirm('긴급 상황인가요?\n\n확인을 누르면 등록된 긴급 연락처에 알림이 전송되고 현재 위치가 공유됩니다.')) {
    alert('긴급 연락처에 알림을 전송했습니다.\n\n안전한 장소로 이동하세요.');
    // In a real app, this would trigger emergency protocols
  }
}

// ===== Confetti Effect =====
function createConfetti() {
  const colors = ['#FF6B6B', '#4ECDC4', '#FFE66D', '#FF9F43', '#00B894'];
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
      border-radius: ${Math.random() > 0.5 ? '50%' : '0'};
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

// ===== Utility Functions =====
function formatDate(dateString) {
  const date = new Date(dateString);
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return `${month}/${day}`;
}

function calculateAge(birthDate) {
  const today = new Date();
  const birth = new Date(birthDate);
  let age = today.getFullYear() - birth.getFullYear();
  const monthDiff = today.getMonth() - birth.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
    age--;
  }
  return age;
}

// ===== API Calls (Mock) =====
async function fetchUsers() {
  try {
    const response = await fetch('/api/users');
    const data = await response.json();
    return data.users;
  } catch (error) {
    console.error('Error fetching users:', error);
    return [];
  }
}

async function sendSwipe(userId, direction) {
  try {
    const response = await fetch('/api/swipe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ userId, direction })
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error sending swipe:', error);
    return { success: false };
  }
}

// ===== Chat Functions =====
function autoResizeTextarea(textarea) {
  textarea.style.height = 'auto';
  textarea.style.height = Math.min(textarea.scrollHeight, 120) + 'px';
}

// Add event listener for chat textarea
document.addEventListener('DOMContentLoaded', () => {
  const chatTextarea = document.querySelector('textarea');
  if (chatTextarea) {
    chatTextarea.addEventListener('input', function() {
      autoResizeTextarea(this);
    });
  }
});

// ===== Onboarding Functions =====
function showStep(step) {
  // Hide all steps
  const splash = document.getElementById('onboarding-splash');
  const steps = [
    document.getElementById('onboarding-step1'),
    document.getElementById('onboarding-step2'),
    document.getElementById('onboarding-step3'),
    document.getElementById('onboarding-step4')
  ];
  
  if (splash) splash.style.display = 'none';
  steps.forEach(s => { if (s) s.style.display = 'none'; });
  
  // Show selected step
  if (step === 0 && splash) {
    splash.style.display = 'flex';
  } else if (steps[step - 1]) {
    steps[step - 1].style.display = 'block';
  }
}

console.log('TravelMatch App Initialized 🛫');

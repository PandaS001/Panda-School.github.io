// Общие функции для всех страниц
function createStars() {
    const container = document.querySelector('.stars-container');
    if (!container) return;
    
    const starsCount = window.innerWidth < 768 ? 100 : 200;
    
    for (let i = 0; i < starsCount; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        
        const size = Math.random() * 2 + 1;
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const duration = Math.random() * 5 + 5;
        const delay = Math.random() * 5;
        
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.left = `${x}%`;
        star.style.top = `${y}%`;
        star.style.setProperty('--duration', `${duration}s`);
        star.style.animationDelay = `${delay}s`;
        
        container.appendChild(star);
    }
}

// Функция таймера (только для главной страницы)
function initCountdown() {
    const countdownEl = document.getElementById('countdown');
    if (!countdownEl) return;
    
    function updateCountdown() {
        const now = new Date();
        const endOfDay = new Date();
        endOfDay.setHours(23, 59, 59, 999);
        
        const diff = endOfDay - now;
        
        const hours = Math.floor(diff / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        
        countdownEl.textContent = 
            `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }
    
    setInterval(updateCountdown, 1000);
    updateCountdown();
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    createStars();
    initCountdown();
});

// Адаптация при изменении размера окна
window.addEventListener('resize', () => {
    const starsContainer = document.querySelector('.stars-container');
    if (starsContainer) {
        starsContainer.innerHTML = '';
        createStars();
    }
});
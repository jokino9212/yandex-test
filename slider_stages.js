document.addEventListener('DOMContentLoaded', function () {
  const slides = document.querySelectorAll('.stages__item');
  const bullets = document.querySelectorAll('.stages__bullets-container svg');
  const leftArrow = document.getElementById('stages__swiper-arrow-left');
  const rightArrow = document.getElementById('stages__swiper-arrow-right');
  let currentIndex = 0;

  function showSlides() {
    slides.forEach((slide, i) => {
      if ((currentIndex === 0 && (i === 0 || i === 1)) ||
          (currentIndex === 1 && i === 2) ||
          (currentIndex === 2 && (i === 3 || i === 4)) ||
          (currentIndex === 3 && i === 5) || (currentIndex === 4 && i === 6)) {
        slide.classList.add('slidevision');
      } else {
        slide.classList.remove('slidevision');
      }
    });
    updateBullets();
    updateArrows();
  }

  function updateBullets() {
    bullets.forEach((bullet, i) => {
        if (
            (currentIndex === 0 && (i === 0)) ||
            (currentIndex === 1 && (i === 1 || i === 1)) ||
            
            (currentIndex === 2 && (i === 2 || i === 2)) ||
            (currentIndex === 3 && (i === 3 || i === 3)) ||
            (currentIndex === 4 && i === 4)
        ) {
            bullet.classList.add('active');
        } else {
            bullet.classList.remove('active');
        }
    });
}

  
  function updateArrows() {
    if (currentIndex === 0) {
      leftArrow.classList.add('swiper-arrow-disabled');
      leftArrow.setAttribute('disabled', true);
    } else {
      leftArrow.classList.remove('swiper-arrow-disabled');
      leftArrow.removeAttribute('disabled');
    }
    if (currentIndex === slides.length - 3) {
      rightArrow.classList.add('swiper-arrow-disabled');
      rightArrow.setAttribute('disabled', true);
    } else {
      rightArrow.classList.remove('swiper-arrow-disabled');
      rightArrow.removeAttribute('disabled');
    }
  }

  function prevSlide() {
    if (currentIndex === 0) {
      currentIndex = slides.length - 1;
    } else {
      currentIndex--;
    }
    showSlides();
  }

  function nextSlide() {
    if (currentIndex < slides.length - 1) {
      currentIndex++;
      showSlides();
    }
  }

  leftArrow.addEventListener('click', function() {
    if (currentIndex > 0) {
      prevSlide();
    }
  });

  rightArrow.addEventListener('click', function() {
    if (currentIndex < slides.length - 1) {
      nextSlide();
    }
  });

  // Показываем первую пару слайдов при загрузке страницы
  showSlides();
});
document.addEventListener('DOMContentLoaded', function () {
  // Получаем ссылки на слайды, стрелки и буллеты
  const slides = document.querySelectorAll('.stages__item');
  const bullets = document.querySelectorAll('.stages__bullets-container svg');
  const leftArrow = document.getElementById('stages__swiper-arrow-left');
  const rightArrow = document.getElementById('stages__swiper-arrow-right');
  let currentIndex = 0; // Индекс текущего слайда

  // Функция для отображения слайдов
  function showSlides() {
    slides.forEach((slide, i) => {
      // Показываем слайды в зависимости от текущего индекса
      if ((currentIndex === 0 && (i === 0 || i === 1)) ||
          (currentIndex === 1 && i === 2) ||
          (currentIndex === 2 && (i === 3 || i === 4)) ||
          (currentIndex === 3 && i === 5) || (currentIndex === 4 && i === 6)) {
        slide.classList.add('slidevision');
      } else {
        slide.classList.remove('slidevision');
      }
    });
    updateBullets(); // Обновляем буллеты
    updateArrows(); // Обновляем стрелки
  }

  // Функция для обновления состояния буллетов
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

  // Функция для обновления состояния стрелок
  function updateArrows() {
    // Если текущий слайд первый, отключаем кнопку "назад"
    if (currentIndex === 0) {
      leftArrow.classList.add('swiper-arrow-disabled');
      leftArrow.setAttribute('disabled', true);
    } else {
      leftArrow.classList.remove('swiper-arrow-disabled');
      leftArrow.removeAttribute('disabled');
    }
    // Если текущий слайд последний, отключаем кнопку "вперед"
    if (currentIndex === slides.length - 3) {
      rightArrow.classList.add('swiper-arrow-disabled');
      rightArrow.setAttribute('disabled', true);
    } else {
      rightArrow.classList.remove('swiper-arrow-disabled');
      rightArrow.removeAttribute('disabled');
    }
  }

  // Функция для переключения на предыдущий слайд
  function prevSlide() {
    if (currentIndex === 0) {
      currentIndex = slides.length - 1;
    } else {
      currentIndex--;
    }
    showSlides();
  }

  // Функция для переключения на следующий слайд
  function nextSlide() {
    if (currentIndex < slides.length - 1) {
      currentIndex++;
      showSlides();
    }
  }

  // Обработчик клика на кнопку "назад"
  leftArrow.addEventListener('click', function() {
    if (currentIndex > 0) {
      prevSlide();
    }
  });

  // Обработчик клика на кнопку "вперед"
  rightArrow.addEventListener('click', function() {
    if (currentIndex < slides.length - 1) {
      nextSlide();
    }
  });

  // Показываем слайды при загрузке страницы
  showSlides();
});
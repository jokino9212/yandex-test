document.addEventListener("DOMContentLoaded", function() {
    const stagesContainer = document.getElementById("stages");
    const stagesInner = stagesContainer.querySelector(".stages__inner");
    const stages = stagesContainer.querySelectorAll(".stages__item");
    const stageWidth = stages[0].offsetWidth;
    let currentSlide = 0;

    // Перемещение карусели к следующему слайду
    function goToSlide(index) {
      if (index < 0 || index >= stages.length) return;
      currentSlide = index;
      const offset = -index * stageWidth;
      stagesInner.style.transform = `translateX(${offset}px)`;
    }

    // Следующий слайд
    function nextSlide() {
      currentSlide = (currentSlide + 1) % stages.length;
      goToSlide(currentSlide);
    }

    // Предыдущий слайд
    function prevSlide() {
      currentSlide = (currentSlide - 1 + stages.length) % stages.length;
      goToSlide(currentSlide);
    }

    // Добавление обработчиков для кнопок навигации
    document.querySelector(".stages__swiper-arrow-left").addEventListener("click", prevSlide);
    document.querySelector(".stages__swiper-arrow-right").addEventListener("click", nextSlide);

    // Добавление обработчиков для сенсорных событий (также можно добавить для мыши)
    let touchStartX = 0;
    let touchEndX = 0;

    stagesContainer.addEventListener("touchstart", function(event) {
      touchStartX = event.touches[0].clientX;
    });

    stagesContainer.addEventListener("touchend", function(event) {
      touchEndX = event.changedTouches[0].clientX;
      if (touchStartX - touchEndX > 50) {
        nextSlide();
      } else if (touchEndX - touchStartX > 50) {
        prevSlide();
      }
    });
  });
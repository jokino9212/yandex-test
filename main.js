document.addEventListener("DOMContentLoaded", () => {
    const carousel = document.getElementById("carousel");
    const frames = carousel.querySelectorAll(".members__frame");
    let currentIndex = 0; // Индекс текущего слайда
    const totalSlides = frames.length; // Общее количество слайдов

    // Функция для автоматического переключения слайдов
    const autoChangeSlide = () => {
        currentIndex = (currentIndex + 1) % totalSlides; // Переход к следующему слайду
        frames.forEach((frame, index) => {
            frame.style.transform = `translateX(-${currentIndex * frame.offsetWidth}px)`;
        });
    };

    let intervalId = setInterval(autoChangeSlide, 4000); // Установка интервала для автоматического переключения слайдов

    // Приостановка автоматического переключения слайдов при наведении мыши
    carousel.addEventListener("mouseenter", () => {
        clearInterval(intervalId);
    });

    // Возобновление автоматического переключения слайдов при уходе мыши
    carousel.addEventListener("mouseleave", () => {
        intervalId = setInterval(autoChangeSlide, 4000);
    });

    const arrowPrev = document.getElementById("members-swiper-arrow-prev");
    const arrowNext = document.getElementById("members-swiper-arrow-next");

    // Приостановка автоматического переключения слайдов при наведении мыши на кнопки переключения
    arrowPrev.addEventListener("mouseenter", () => {
        clearInterval(intervalId);
    });
    arrowNext.addEventListener("mouseenter", () => {
        clearInterval(intervalId);
    });

    // Возобновление автоматического переключения слайдов при уходе мыши с кнопок переключения
    arrowPrev.addEventListener("mouseleave", () => {
        intervalId = setInterval(autoChangeSlide, 4000);
    });
    arrowNext.addEventListener("mouseleave", () => {
        intervalId = setInterval(autoChangeSlide, 4000);
    });

    // Переключение на предыдущий слайд при клике на стрелку "назад"
    arrowPrev.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        frames.forEach((frame, index) => {
            frame.style.transform = `translateX(-${currentIndex * frame.offsetWidth}px)`;
        });
    });

    // Переключение на следующий слайд при клике на стрелку "вперед"
    arrowNext.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % totalSlides;
        frames.forEach((frame, index) => {
            frame.style.transform = `translateX(-${currentIndex * frame.offsetWidth}px)`;
        });
    });
});
document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector("#slider");
  const prevBtn = document.querySelector("#prevBtn");
  const nextBtn = document.querySelector("#nextBtn");

  let slidePosition = 0;
  const slides = slider.querySelectorAll(".slider-img");
  const totalSlides = slides.length;

  prevBtn.addEventListener("click", function () {
    moveSlide("right");
  });

  nextBtn.addEventListener("click", function () {
    moveSlide("left");
  });

  function moveSlide(direction) {
    if (direction === "left") {
      slidePosition++;
      if (slidePosition === totalSlides) {
        slidePosition = 0;
      }
    } else if (direction === "right") {
      slidePosition--;
      if (slidePosition < 0) {
        slidePosition = totalSlides - 1;
      }
    }

    const slideWidth = slides[slidePosition].clientWidth;
    const shift = -slideWidth * slidePosition;
    slider.style.transform = `translateX(${shift}px)`;
  }
});

let currentSlide = 0;
const slides = document.querySelectorAll(".carousel-item");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
let intervalId = null;

function showSlide(n) {
  slides.forEach((slide) => {
    slide.style.display = "none";
  });
  slides[n].style.display = "block";
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

function startAutoplay() {
  intervalId = setInterval(nextSlide, 2000); 
}

function stopAutoplay() {
  clearInterval(intervalId);
}

prevBtn.addEventListener("click", prevSlide);
nextBtn.addEventListener("click", nextSlide);
startBtn.addEventListener("click", startAutoplay);
stopBtn.addEventListener("click", stopAutoplay);

showSlide(currentSlide);

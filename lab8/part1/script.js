let currentIndex = 0;
const totalItems = document.querySelectorAll(".carousel-item").length;
const wrapper = document.getElementById("carouselWrapper");

function updateCarousel() {
  const newPosition = -currentIndex * 100 + "%";
  wrapper.style.transform = "translateX(" + newPosition + ")";
}

function nextSlide() {
  if (currentIndex < totalItems - 1) {
    currentIndex++;
  } else {
    currentIndex = 0;
  }
  updateCarousel();
}

function prevSlide() {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = totalItems - 1;
  }
  updateCarousel();
}

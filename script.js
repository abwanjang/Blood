let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlide");

  slides[slideIndex].classList.add('active'); // Add 'active' class
  if (slideIndex > 0) {
    slides[slideIndex - 1].classList.remove('active'); // Remove 'active' from previous slide
  }

  slideIndex++; // Increment the slide index
  if (slideIndex >= slides.length) {
    slideIndex = 0; // Reset slide index to 0
  }

  setTimeout(showSlides, 2000); // Adjust the delay as needed
}
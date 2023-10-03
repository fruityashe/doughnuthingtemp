$(document).ready(function(){
  $('.header').height($(window).height());
});

const slideContainer = document.querySelector('.carousel-slide');
    const prevButton = document.querySelector('.carousel-btn.previous');
    const nextButton = document.querySelector('.carousel-btn.next');

    // Set the initial slide index
    let slideIndex = 0;

    // Function to show the current slide
    const showSlide = () => {
      // Calculate the new position
      const slidePosition = -slideIndex * slideContainer.offsetWidth;
      // Apply the transform style to slide container
      slideContainer.style.transform = `translateX(${slidePosition}px)`;
    };

    // Event listener for previous button
    prevButton.addEventListener('click', () => {
      // Decrease the slide index
      slideIndex--;
      // If we reach the beginning, wrap around to the last slide
      if (slideIndex < 0) {
        slideIndex = slideContainer.children.length - 1;
      }
      showSlide();
    });

    // Event listener for next button
    nextButton.addEventListener('click', () => {
      // Increase the slide index
      slideIndex++;
      // If we reach the end, wrap around to the first slide
      if (slideIndex === slideContainer.children.length) {
        slideIndex = 0;
      }
      showSlide();
    });

    // Show the initial slide
    showSlide();

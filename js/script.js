const btn = document.getElementById('menu-btn'),
nav = document.getElementById('menu');

btn.addEventListener('click', () => {
  btn.classList.toggle('open');
  nav.classList.toggle('flex');
  nav.classList.toggle('hidden');
});

//Carousel Slider

let slideIndex = 1;
showSlide(slideIndex);

// change slide with the prev/next button
function moveSlide(moveStep) {
  showSlide(slideIndex += moveStep);
}

// change slide with the dots
function currentSlide(n) {
  showSlide(slideIndex = n);
}

function showSlide(n) {
  let i;
  const slides = document.getElementsByClassName("slide");
  const dots = document.getElementsByClassName('dot');
  
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }

  // hide all slides
  for (i = 0; i < slides.length; i++) {
    slides[i].classList.add('hidden');
  }

  // remove active status from all dots
  for (i = 0; i < dots.length; i++) {
    dots[i].classList.remove('bg-brightRed');
  }

  // show the active slide
  slides[slideIndex - 1].classList.remove('hidden');

  // highlight the active dot
  dots[slideIndex - 1].classList.add('bg-brightRed');
}
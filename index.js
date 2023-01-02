(function() {

let slideIndex = 1;
let timeoutID = 0;


window.onload = function() {
   showSlides(slideIndex);
   document.getElementById('prev').addEventListener('click', () => {
     plusSlides(-1);
   });
   document.getElementById('next').addEventListener('click', () => {
     plusSlides(1);
   });
    document.getElementById('dot-1').addEventListener('click', () => {
     currentSlide(1);
   });
    document.getElementById('dot-2').addEventListener('click', () => {
     currentSlide(2);
   });
    document.getElementById('dot-3').addEventListener('click', () => {
     currentSlide(3);
   });
    document.getElementById('dot-4').addEventListener('click', () => {
     currentSlide(4);
   });
    document.getElementById('dot-5').addEventListener('click', () => {
     currentSlide(5);
   });

    document.getElementById('instagram').addEventListener('mouseover', () => {
     text.innerText = 'instagram';
     text.classList.remove('hidden');
     clearTimeout(timeoutId);
   });
    document.getElementById('youtube').addEventListener('mouseover', () => {
     text.innerText = 'youtube';
     text.classList.remove('hidden');
     clearTimeout(timeoutId);
   });
    document.getElementById('website').addEventListener('mouseover', () => {
     text.innerText = 'website';
     text.classList.remove('hidden');
     clearTimeout(timeoutId);
   });
    document.getElementById('instagram').addEventListener('mouseleave', () => {
     timeoutID = setTimeout(() => {
       text.classList.add('hidden');
     }, 3000);
   });
    document.getElementById('youtube').addEventListener('mouseleave', () => {
     timeoutID = setTimeout(() => {
       text.classList.add('hidden');
     }, 3000);
   });
    document.getElementById('website').addEventListener('mouseleave', () => {
     timeoutID = setTimeout(() => {
       text.classList.add('hidden');
     }, 3000);
   });
};

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

})();

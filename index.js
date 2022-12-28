(function() {

let slideIndex = 1;


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
   })
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

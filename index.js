(function() {

  let slideIndex = 1;
  let timeoutID = 0;


  window.onload = function() {
    emailjs.init('FgBlvvqOnhqAIdYqm');
    showSlides(slideIndex);
    $('#prev').click(() => {
      plusSlides(-1);
    });
    $('#next').click(() => {
      plusSlides(1);
    });
    $('#dot-1').click(() => {
      currentSlide(1);
    });
    $('#dot-2').click(() => {
      currentSlide(2);
    });
    $('#dot-3').click(() => {
      currentSlide(3);
    });
    $('#dot-4').click(() => {
      currentSlide(4);
    });
    $('#dot-5').click(() => {
      currentSlide(5);
    });

    $('#instagram').on('mouseover', () => {
      text.innerText = 'instagram';
      text.classList.remove('hidden');
      clearTimeout(timeoutId);
    });
    $('#youtube').on('mouseover', () => {
      text.innerText = 'youtube';
      text.classList.remove('hidden');
      clearTimeout(timeoutId);
    });
    $('#website').on('mouseover', () => {
      text.innerText = 'website';
      text.classList.remove('hidden');
      clearTimeout(timeoutId);
    });
    $('#instagram').on('mouseleave', () => {
      timeoutID = setTimeout(() => {
        text.classList.add('hidden');
      }, 3000);
    });
    $('#youtube').on('mouseleave', () => {
      timeoutID = setTimeout(() => {
        text.classList.add('hidden');
      }, 3000);
    });
    $('#website').on('mouseleave', () => {
      timeoutID = setTimeout(() => {
        text.classList.add('hidden');
      }, 3000);
    });

    $('#contact-form').on('submit', submitForm);
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
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
      slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
  }

  function submitForm() {
    event.preventDefault();
    const formOutcome = $('#form-outcome');
    emailjs.sendForm('service_6u1jacf', 'template_h41pmm8', this)
      .then(function() {
        formOutcome.text("Successfully sent! ✅");
        manageDisplayOutcome(formOutcome)
      }, function(error) {
        formOutcome.text("Submit failed. Try again! ❌");
        manageDisplayOutcome(formOutcome);
      });
    this.reset();
  }

  function manageDisplayOutcome(formOutcome) {
    formOutcome[0].style.removeProperty('display');
    formOutcome.addClass('display-outcome');
    setTimeout(() => {
      formOutcome[0].style.display = "none";
      formOutcome.removeClass('display-outcome');
    }, 3000);
  }

  function handleError() {
    const formOutcome = document.getElementById('form-outcome');
    formOutcome.innerText = "Form submit failed. Try again!";
    formOutcome.removeClass('hidden');
  }

})();

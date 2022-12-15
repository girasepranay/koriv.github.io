
const container = document.querySelector(".container");
const preview = document.querySelector(".prev");
const active = document.querySelectorAll(".thumb");
 
container.addEventListener("click", function (e) {
  if (e.target.className == "thumb") {
    preview.src = e.target.src;
    preview.classList.add("effect");
 
    setTimeout(function () {
      preview.classList.remove("effect");
    }, 100);
 
    active.forEach(function (thumb) {
      if (thumb.classList.contains("active")) {
        thumb.classList.remove("active");
      }
    });
 
    e.target.classList.add("active");
  }
});


let slideIndex = 1;
showSlides(slideIndex);

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
} s
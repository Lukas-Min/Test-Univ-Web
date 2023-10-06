// script.js
document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("load", function () {
    setTimeout(function () {
      const preloader = document.getElementById("preloader");
      preloader.style.display = "none";
    }, 1000);
  });
});

const btnScrollToTop = document.querySelector(".btn-scroll-to-top");

btnScrollToTop.addEventListener("click", function(){

    window.scrollTo({
        top: 0,
        left: 0
    });

});

const scrollToTopButton = document.getElementById('scroll-to-top-button');

window.addEventListener('scroll', function() {
    if (window.scrollY === 0) {
        scrollToTopButton.style.display = 'none';
    } else {
        scrollToTopButton.style.display = 'block';
    }
});

$(document).ready(function () {
    $('#card-carousel').carousel({
        interval: 3000, // Set the interval between slides (in milliseconds)
        pause: false,   // Set to true if you want to pause on hover
        wrap: true      // Set to true for continuous looping
    });
});

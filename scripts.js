// Toggle between showing and hiding the sidebar when clicking the menu icon
var mySidebar = document.getElementById("mySidebar");

function w3_open() {
if (mySidebar.style.display === 'block') {
    mySidebar.style.display = 'none';
} else {
    mySidebar.style.display = 'block';
}
}

// Close the sidebar with the close button
function w3_close() {
mySidebar.style.display = "none";
}

//interior
var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlidesy");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 3000); // Change image every 2 seconds
}
//exterior
var slideIndex = 0;
showSlide();

function showSlide() {
    var i;
    var slides = document.getElementsByClassName("mySlida");
    if (slides) {
        var dots = document.getElementsByClassName("doti");
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
        }
        slideIndex++;
        if (slideIndex > slides.length) {slideIndex = 1}    
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides.length > 1 ? slides[slideIndex-1].style.display = "block" : false;  
        dots.length > 1 ? dots[slideIndex-1].className += " active" : false;
        setTimeout(showSlide, 4000); // Change image every 2 seconds
    }
}
//celing
var slideIndex = 0;
showSlidi();

function showSlidi() {
    var i;
    var slides = document.getElementsByClassName("mySlide");
    var dots = document.getElementsByClassName("dotii");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides.length > 1 ? slides[slideIndex-1].style.display = "block" : false;  
    dots.length > 1 ? dots[slideIndex-1].className += " active" : false;
    setTimeout(showSlidi, 4000); // Change image every 2 seconds
}
// Modal Image Gallery
function onClick(element) {
document.getElementById("img01").src = element.src;
document.getElementById("modal01").style.display = "block";
var captionText = document.getElementById("caption");
captionText.innerHTML = element.alt;
}





//slideshow gallery
var slideIndexy = 0;
slideIndexy ? showSlidesy(slideIndexy) : false;

// Next/previous controls
var slideIndex = 1;
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
  var i;
  var slides = document.getElementsByClassName("mySlidesy");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (slides && dots && captionText) {
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
    }

    slides.length > 1 ?  slides[slideIndex-1].style.display = "block" : false;

    if (dots.length > 1) {
        dots[slideIndex-1].className += " active";
        captionText.innerHTML = dots[slideIndex-1].alt;
    }

  }
}
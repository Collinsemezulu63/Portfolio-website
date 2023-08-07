//Responsive
let Bars = document.querySelector(".bars"),
  Nav = document.querySelector("nav");
// Cancel = document.querySelector('.times')
Bars.addEventListener("click", function () {
  Nav.classList.toggle("show");
});

//Image Comparison Slider
function initComparisons() {
  var x, i;
  /*find all elements with an "overlay" class:*/
  x = document.getElementsByClassName("img-comp-overlay");
  for (i = 0; i < x.length; i++) {
    /*once for each "overlay" element:
     pass the "overlay" element as a parameter when executing the compareImages function:*/
    compareImages(x[i]);
  }
  function compareImages(img) {
    var slider,
      img,
      clicked = 0,
      w,
      h;
    /*get the width and height of the img element*/
    w = img.offsetWidth;
    h = img.offsetHeight;
    /*set the width of the img element to 50%:*/
    img.style.width = w / 2 + "px";
    /*create slider:*/
    slider = document.createElement("DIV");
    slider.setAttribute("class", "img-comp-slider");
    /*insert slider*/
    img.parentElement.insertBefore(slider, img);
    /*position the slider in the middle:*/
    slider.style.top = h / 2 - slider.offsetHeight / 2 + "px";
    slider.style.left = w / 2 - slider.offsetWidth / 2 + "px";
    /*execute a function when the mouse button is pressed:*/
    slider.addEventListener("mousedown", slideReady);
    /*and another function when the mouse button is released:*/
    window.addEventListener("mouseup", slideFinish);
    /*or touched (for touch screens:*/
    slider.addEventListener("touchstart", slideReady);
    /*and released (for touch screens:*/
    window.addEventListener("touchstop", slideFinish);
    function slideReady(e) {
      /*prevent any other actions that may occur when moving over the image:*/
      e.preventDefault();
      /*the slider is now clicked and ready to move:*/
      clicked = 1;
      /*execute a function when the slider is moved:*/
      window.addEventListener("mousemove", slideMove);
      window.addEventListener("touchmove", slideMove);
    }
    function slideFinish() {
      /*the slider is no longer clicked:*/
      clicked = 0;
    }
    function slideMove(e) {
      var pos;
      /*if the slider is no longer clicked, exit this function:*/
      if (clicked == 0) return false;
      /*get the cursor's x position:*/
      pos = getCursorPos(e);
      /*prevent the slider from being positioned outside the image:*/
      if (pos < 0) pos = 0;
      if (pos > w) pos = w;
      /*execute a function that will resize the overlay image according to the cursor:*/
      slide(pos);
    }
    function getCursorPos(e) {
      var a,
        x = 0;
      e = e || window.event;
      /*get the x positions of the image:*/
      a = img.getBoundingClientRect();
      /*calculate the cursor's x coordinate, relative to the image:*/
      x = e.pageX - a.left;
      /*consider any page scrolling:*/
      x = x - window.pageXOffset;
      return x;
    }
    function slide(x) {
      /*resize the image:*/
      img.style.width = x + "px";
      /*position the slider:*/
      slider.style.left = img.offsetWidth - slider.offsetWidth / 2 + "px";
    }
  }
}
initComparisons();

//mutiple-text
let Display = document.querySelector(".mutipleText");
function Multiple() {
  setTimeout(() => {
    Display.innerHTML = "Web developer";
  }, 1000);
  setTimeout(() => {
    Display.innerHTML = "Programmer";
  }, 2000);
  setTimeout(() => {
    Display.innerHTML = "Software Engineer";
  }, 3000);
}
Multiple();
setInterval(Multiple, 3000);

//dark mode
const dark = document.querySelector("#dark"),
  overallCont = document.querySelector(".overall-cont"),
  main = document.querySelector("main");
dark.addEventListener("click", function () {
  this.classList.toggle("fa-moon");
  overallCont.classList.toggle("night-mode");
  main.classList.toggle("night-mode");
});

//Fadal Carousel
const Slider = document.querySelectorAll(".slider");
for (let index = 0; index < Slider.length; index++) {
  Slider[index].style.transform = `translateX(${120 * index}%)`;
}
let current = 0;
let max = Slider.length - 1;
function active() {
  if (current === max) {
    current = 0;
  } else {
    current++;
  }
  for (let index = 0; index < Slider.length; index++) {
    Slider[index].style.transform = `translateX(${120 * (index - current)}%)`;
  }
}
setInterval(active, 3000);
// active()

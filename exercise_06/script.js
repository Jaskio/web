
var images = document.getElementsByClassName('background-img');
var index = 0;
cycleImages();

function cycleImages() {
  for (var i = 0; i < images.length; i++) {
    images[i].className = "background-img";
  }

  if (index > images.length - 1) {
    index = 0
  }

  images[index++].className += " current";
  setTimeout(cycleImages, 5000);
}

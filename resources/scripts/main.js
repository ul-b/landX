var header = document.getElementById("nav");

window.onscroll = function() {
  if (window.pageYOffset >= 1) {
    header.classList.add("main-nav_display");
  } else {
    header.classList.remove("main-nav_display");
  }
}
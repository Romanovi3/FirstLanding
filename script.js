// stick Header
let header = document.getElementById("header");
let sticky = header.offsetTop;
window.onscroll = function() {myFunction()};


function myFunction() {
  if (window.scrollY >= sticky) {
    header.classList.add("stickyHeader");
  } else {
    header.classList.remove("stickyHeader");
  }
}
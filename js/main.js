var menu = document.getElementById("menu");
var menuBtn = document.getElementById("menuBtn");
var header = document.getElementById("header");
var body = document.body;

const closeMenu = () => {
  menu.classList.remove("active");
  menuBtn.classList.remove("active");
  body.classList.remove("active");
  header.classList.remove("active");
};

menuBtn.onclick = function () {
  menu.classList.toggle("active");
  menuBtn.classList.toggle("active");
  body.classList.toggle("active");
  header.classList.toggle("active");
};
window.onclick = function (event) {
  if (event.target == menu) {
    closeMenu();
  }
};

if (header)
  window.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop > 400) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  });

///
///
/// slick slider

///
///
/// tabEvents

///
///
///
// WOW JS
new WOW().init({
  boxClass: "wow",
});


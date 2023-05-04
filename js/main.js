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


function scrollFunc() {
  if (window.pageYOffset >= 400) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
var copyText = document.getElementById("copyText");

copyText.addEventListener(`click`, (event) => {
  const COPY_TEXT = event.target.innerText;
  navigator.clipboard.writeText(COPY_TEXT).then(() => {
    // on successful clipboard copy, update DOM
    // document.getElementById(`copy-output`).textContent = `${COPY_TEXT}`;
  });
});


const links = document.querySelectorAll(".link");
const sections = document.querySelectorAll(".anchor");
function changeLinkState() {
  let index = sections.length;
  while (--index && window.scrollY + 100 < sections[index].offsetTop) {}
  links.forEach((link) => link.classList.remove("active"));
  links[index]?.classList.add("active");
}
links.forEach((e) => {
  onLinkClick(e);
});

function onLinkClick(linkItem) {
  linkItem.addEventListener("click", function () {
    menu.classList.remove("active");
    menuBtn.classList.remove("active");
    body.classList.remove("active");
  });
}

window.onscroll = function () {
  changeLinkState();
  scrollFunc()
};

window.onclick = function (event) {
  if (event.target == menu) {
    closeMenu();
  }
};


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



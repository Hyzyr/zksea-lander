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

let copyText = document.getElementById("copyText");
let copyBtn = document.getElementById("copyBtn");
let copyPop = document.getElementById("copyPop");
copyBtn.addEventListener(`click`, () => {
  const COPY_TEXT = copyText.innerText;
  navigator.clipboard.writeText(COPY_TEXT).then(() => {
    // on successful clipboard copy, update DOM
    // document.getElementById(`copy-output`).textContent = `${COPY_TEXT}`;
  });
  copyPop.innerHTML = `<span>Copiyed</span>`;
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

window.onscroll = function (e) {
  changeLinkState();
  scrollFunc();
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

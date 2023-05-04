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
menu.onclick = function (event) {
  if (event.target === event.currentTarget) closeMenu();
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
  copyPop.innerHTML = `<span>Copied</span>`;
});

const links = document.querySelectorAll(".link");
links.forEach((e) => {
  closeMenu();
});

// function onLinkClick(linkItem) {
//   linkItem.addEventListener("click", function () {
//     menu.classList.remove("active");
//     menuBtn.classList.remove("active");
//     body.classList.remove("active");
//   });
// }

window.onscroll = function () {
  // changeLinkState();
  scrollFunc();
};

///
///
///
// WOW JS
new WOW().init({
  boxClass: "wow",
});

let inviteFriend = document.getElementById("inviteFriend");
let invitePop = document.getElementById("invitePop");
inviteFriend.addEventListener(`click`, () => {
  const COPY_TEXT = "https://nftzkzerosea.pro";
  navigator.clipboard.writeText(COPY_TEXT).then(() => {
    // on successful clipboard copy, update DOM
    // document.getElementById(`copy-output`).textContent = `${COPY_TEXT}`;
  });
  invitePop.innerHTML = `<span>Copied</span>`;
});

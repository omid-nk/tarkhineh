import "./style.css";

const menuBtn = document.getElementById("menu-btn");
const sideNav = document.getElementById("side-nav");
const closeBtn = document.getElementById("close-side-nav");

// باز کردن منو
menuBtn.addEventListener("click", () => {
  sideNav.classList.remove("-right-64");
  sideNav.classList.add("right-0");
});

// بستن منو
closeBtn.addEventListener("click", () => {
  sideNav.classList.remove("right-0");
  sideNav.classList.add("-right-64");
});

// slider
const hero = document.getElementById("hero");
const rightBtn = document.getElementById("right-btn");
const leftBtn = document.getElementById("left-btn");

// مسیر تصاویر
const pictures = [
  "./images/herosection-slider-1.jpg",
  "./images/herosection-slider-2.jpg",
];

let position = 0;

// نمایش عکس فعلی
function showImage() {
  hero.style.backgroundImage = `url(${pictures[position]})`;
  hero.style.backgroundSize = "cover";
  hero.style.backgroundPosition = "center";
  hero.style.backgroundRepeat = "no-repeat";
}

// حرکت به راست
function moveRight() {
  position = (position + 1) % pictures.length;
  showImage();
}

// حرکت به چپ
function moveLeft() {
  position = (position - 1 + pictures.length) % pictures.length;
  showImage();
}

// رویداد کلیک‌ها
rightBtn.addEventListener("click", moveRight);
leftBtn.addEventListener("click", moveLeft);

// اجرای اولیه
showImage();

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector("body");
const btn = document.querySelector(".change-color");
const nameColor = document.querySelector(".color");

const changeColor = () => {
  body.style.backgroundColor = getRandomHexColor();
  nameColor.textContent = getRandomHexColor();
};
window.onload = (event) => changeColor();
btn.addEventListener("click", changeColor);

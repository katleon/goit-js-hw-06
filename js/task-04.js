let counterValue = 0;
const decrease = document.querySelector("button[data-action='decrement']");
const increase = document.querySelector("button[data-action='increment']");
const myValue = document.querySelector("#value");

const countDecrease = function () {
  counterValue -= 1;
  myValue.textContent = counterValue;
};

const countIncrease = function () {
  counterValue += 1;
  myValue.textContent = counterValue;
};

decrease.addEventListener("click", countDecrease);
increase.addEventListener("click", countIncrease);

const range = document.querySelector("#font-size-control");
const text = document.querySelector("#text");
text.style.fontSize = "56px";
const changeFontSize = () => {
  text.style.fontSize = range.value + "px";
};
range.addEventListener("input", changeFontSize);

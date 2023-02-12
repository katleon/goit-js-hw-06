const greetingInput = document.querySelector("#name-input");
const greetingSpan = document.querySelector("#name-output");

greetingInput.addEventListener("input", newInput);

function newInput(e) {
  greetingSpan.textContent = e.currentTarget.value;

  if (e.currentTarget.value === "") {
    greetingSpan.textContent = "Anonymous";
  }
}

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.querySelector("#ingredients");
for (const ingredient of ingredients) {
  const liItem = document.createElement("li");
  liItem.classList.add("item");
  liItem.textContent = ingredient;
  ingredientsList.append(liItem);
  console.log(liItem);
}

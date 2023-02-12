const categoriesList = document.querySelector("ul#categories");
const categoryItems = categoriesList.querySelectorAll("li.item");
console.log(`Number of categories: ${categoryItems.length}`);

categoryItems.forEach((categories) => {
  const categoryName = categories.querySelector("h2").textContent;
  const elementsCount = categories.querySelectorAll("ul > li").length;
  console.log(`Category: ${categoryName} \n Elements: ${elementsCount}`);
});

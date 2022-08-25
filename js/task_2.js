const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

function newElementsList() {
  const newList = ingredients.map((item) => {
    const newElement = document.createElement("li");
    newElement.classList.add("item");
    newElement.textContent = item;
    return newElement;
  });
  document.querySelector("#ingredients").append(...newList);
}

newElementsList();

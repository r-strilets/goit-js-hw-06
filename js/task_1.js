const listItem = document.querySelectorAll(".item");

const totalOfCategories = () =>
  console.log(`Number of categories: ${listItem.length}`);
totalOfCategories();

function categoryOfList() {
  listItem.forEach((item) => {
    console.log(
      `\nCategory: ${item.firstElementChild.textContent}\nElements: ${item.lastElementChild.children.length}`
    );
  });
}

categoryOfList();

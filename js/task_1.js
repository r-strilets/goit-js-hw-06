// Напиши скрипт, який:

// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного элемента li.item у спику ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).

const listItem = document.querySelectorAll(".item");

const totalOfCategories = () =>
  console.log(`Number of categories: ${listItem.length}`);
totalOfCategories();

function categoryOfList() {
  listItem.forEach((item) => {
    console.log(item.querySelector("h2").textContent);
    console.log(item.querySelectorAll("ul li").length);
  });
}

categoryOfList();

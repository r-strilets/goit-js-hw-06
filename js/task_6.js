// Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), перевіряє його вміст щодо правильної кількості введених символів.
// Яка кількість смиволів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.
const someInput = document.querySelector("#validation-input");

someInput.addEventListener("blur", inputValidation);

function inputValidation(event) {
  console.log(+someInput.dataset.length === someInput.value.length);
  if (+someInput.dataset.length === someInput.value.length) {
    someInput.classList.remove("invalid");
    someInput.classList.add("valid");
  } else {
    someInput.classList.add("invalid");
  }
}

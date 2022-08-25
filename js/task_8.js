// Напиши скрипт управління формою логіна.
// Обробка відправлення форми form.login-form повинна відбуватися відповідно до події submit.
// Під час відправлення форми сторінка не повинна перезавантажуватися.
// Якщо у формі є незаповнені поля, виводь alert з попередженням про те, що всі поля повинні бути заповнені.
// Якщо користувач заповнив усі поля і відправив форму, збери значення полів в об'єкт, де ім'я поля буде ім'ям властивості, а значення поля - значенням властивості. Для доступу до елементів форми використовуй властивість elements.
// Виведи об'єкт із введеними даними в консоль і очисти значення полів форми методом reset.
const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", onClickFormSubmit);

function onClickFormSubmit(event) {
  event.preventDefault();
  if (
    event.target.elements.email.value === "" ||
    event.target.elements.password.value === ""
  ) {
    alert("Всі поля повинні бути заповнені !!!!");
  }
  const formData = new FormData(event.target);

  formData.forEach((value, name) => {
    console.log(value);
    console.log(name);
  });

  event.target.reset();
}

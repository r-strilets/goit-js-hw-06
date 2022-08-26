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
  const { email, password } = event.target.elements;

  const elements = {
    email: email.value,
    password: password.value,
  };

  if (elements.email === "" || elements.password === "") {
    alert("Всі поля повинні бути заповнені !!!!");
  } else {
    console.log(elements);
    event.target.reset();

    // const formData = new FormData(event.target);
    // formData.forEach((value, name) => {
    //   console.log(value);
    //   console.log(name);
    // });
  }
}

// Напиши скрипт створення і очищення колекції елементів. Користувач вводить кількість елементів в input і натискає кнопку Створити, після чого рендериться колекція. Натисненням на кнопку Очистити, колекція елементів очищається.
// Створи функцію createBoxes(amount), яка приймає один параметр - число. Функція створює стільки <div>, скільки вказано в amount і додає їх у div#boxes.

// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX. Використовуй готову функцію getRandomHexColor для отримання кольору.

// Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.
const someInput = document.querySelector('[type="number"]');
const buttonCreate = document.querySelector("[data-create]");
const buttonDestroy = document.querySelector("[data-destroy]");
const newBoxColection = document.querySelector("#boxes");

buttonCreate.addEventListener("click", onClickNewColection);
buttonDestroy.addEventListener("click", onClickDestroyColection);

function onClickNewColection(e) {
  const amount = someInput.value;
  const newEllements = createBoxes(amount);
  newBoxColection.insertAdjacentHTML("beforeEnd", newEllements);
}
function onClickDestroyColection(e) {
  newBoxColection.innerHTML = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
let counter = 30;
function createBoxes(amount) {
  const newArr = new Array(+amount);
  const newString = [...newArr].reduce((acc, item) => {
    let randomHexColor = getRandomHexColor();
    acc += `</br><div style="width:${counter}px;height:${counter}px;background-color:${randomHexColor}"></div>`;
    counter += 10;
    return acc;
  }, "");

  return newString;
}

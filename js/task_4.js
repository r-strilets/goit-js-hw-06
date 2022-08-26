// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.
const counterTextСontent = document.querySelector("#value");
const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');

decrementButton.addEventListener("click", clickOnDecrement);
incrementButton.addEventListener("click", clickOnIncrement);

let counterValue = 0;

function clickOnDecrement(event) {
  counterValue -= 1;
  counterTextСontent.textContent = incrementValue;
}

function clickOnIncrement(event) {
  counterValue += 1;
  counterTextСontent.textContent = incrementValue;
}

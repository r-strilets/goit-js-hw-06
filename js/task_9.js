// Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль по кліку на button.change-color і виводить значення кольору в span.color.
const coolButton = document.querySelector(".change-color");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

coolButton.addEventListener("click", onClickChangeBgColor);

function onClickChangeBgColor(event) {
  document
    .querySelector("body")
    .setAttribute("style", `background-color:${getRandomHexColor()}`);
  document.querySelector(".color").textContent = document
    .querySelector("body")
    .getAttribute(`style`)
    .slice(-7);
}

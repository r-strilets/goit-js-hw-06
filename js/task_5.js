// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input), підставляє його поточне значення в span#name-output. Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".
const someInput = document.querySelector("#name-input");
const someOutput = document.querySelector("#name-output");

someInput.addEventListener("input", changeSomeOutput);

function changeSomeOutput(event) {
  someOutput.textContent = event.target.value;
  if (event.target.value === "") {
    someOutput.textContent = "Anonymous";
  }
}

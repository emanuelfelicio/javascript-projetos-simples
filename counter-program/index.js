let number = 0;
const counter = document.getElementById("counter");
const increaseButton = document.getElementById("increase");
const decreaseButton = document.getElementById("decrease");
const resetButton = document.getElementById("reset");

increaseButton.onclick = function () {
  number++;
  changeCounter();
};

decreaseButton.onclick = function () {
  number--;
  changeCounter();
};

resetButton.onclick = function () {
  number = 0;
  changeCounter();
};

function changeCounter() {
  counter.textContent = number;
}

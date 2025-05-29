let number = document.getElementById("randomNumber");
let generateNumber = document.getElementById("btnGenerateNumber");

function generateRandomNumber() {
  return Math.floor(Math.random() * 1000);
}

generateNumber.addEventListener("click", () => {
  number.textContent = generateRandomNumber();
});

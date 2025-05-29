let animalEmoji;
let animalName;
let thousandsFormatted;
let currentAnimal = null;
let dropdownIsComplete = false;
const animalEmojiElement = document.getElementById("animal-emoji");
const thousandsElement = document.getElementById("thousands");
const animalNameElement = document.getElementById("animal-name");
const animalDropdown = document.getElementById("animal-dropdown");
const noneOption = document.getElementById("none-option");
const buttonChoseAnimal = document.getElementById("button-choose-animal");
const buttonGenerateThousands = document.getElementById(
  "button-generate-thousands"
);

const animals = [
  { min: 1, max: 4, name: "Avestruz", emoji: "🦤" },
  { min: 5, max: 8, name: "Águia", emoji: "🦅" },
  { min: 9, max: 12, name: "Burro", emoji: "🐴" },
  { min: 13, max: 16, name: "Borboleta", emoji: "🦋" },
  { min: 17, max: 20, name: "Cachorro", emoji: "🐶" },
  { min: 21, max: 24, name: "Cabra", emoji: "🐐" },
  { min: 25, max: 28, name: "Carneiro", emoji: "🐏" },
  { min: 29, max: 32, name: "Camelo", emoji: "🐪" },
  { min: 33, max: 36, name: "Cobra", emoji: "🐍" },
  { min: 37, max: 40, name: "Coelho", emoji: "🐇" },
  { min: 41, max: 44, name: "Cavalo", emoji: "🐎" },
  { min: 45, max: 48, name: "Elefante", emoji: "🐘" },
  { min: 49, max: 52, name: "Galo", emoji: "🐓" },
  { min: 53, max: 56, name: "Gato", emoji: "🐱" },
  { min: 57, max: 60, name: "Jacaré", emoji: "🐊" },
  { min: 61, max: 64, name: "Leão", emoji: "🦁" },
  { min: 65, max: 68, name: "Macaco", emoji: "🐒" },
  { min: 69, max: 72, name: "Porco", emoji: "🐖" },
  { min: 73, max: 76, name: "Pavão", emoji: "🦚" },
  { min: 77, max: 80, name: "Peru", emoji: "🦃" },
  { min: 81, max: 84, name: "Touro", emoji: "🐂" },
  { min: 85, max: 88, name: "Tigre", emoji: "🐅" },
  { min: 89, max: 92, name: "Urso", emoji: "🐻" },
  { min: 93, max: 96, name: "Veado", emoji: "🦌" },
  { min: 97, max: 100, name: "Vaca", emoji: "🐄" },
];

function closeDropdown() {
  animalDropdown.style.display = "none";
}

function createAnimalListItem(animal) {
  const animalDiv = document.createElement("div");
  animalDiv.textContent = animal.name;
  animalDiv.classList.add("animal-container_item");

  animalDiv.addEventListener("click", () => {
    currentAnimal = animal;
    buttonChoseAnimal.textContent = currentAnimal.name;
    closeDropdown();
  });

  return animalDiv;
}

function buildDropdownOnce() {
  if (dropdownIsComplete) return;

  animals.forEach((animal) => {
    const animalDiv = createAnimalListItem(animal);
    animalDropdown.appendChild(animalDiv);
  });

  dropdownIsComplete = true;
}

buttonChoseAnimal.addEventListener("click", () => {
  buildDropdownOnce();
  animalDropdown.style.display =
    animalDropdown.style.display === "block" ? "none" : "block";
});

noneOption.addEventListener("click", () => {
  currentAnimal = null;
  buttonChoseAnimal.textContent = "Nenhum (Aleatório)";
  closeDropdown();
});

document.addEventListener("click", (event) => {
  if (event.target !== buttonChoseAnimal) {
    animalDropdown.style.display = "none";
  }
});

function generateNumber(currentAnimal) {
  if (currentAnimal) {
    const min = currentAnimal.min;
    const max = currentAnimal.max;
    const firstTwoDigits = Math.floor(Math.random() * 100);
    let numberFormatted = firstTwoDigits.toString().padStart(2, "0");

    const lastTwoDigits =
      (Math.floor(Math.random() * (max - min + 1)) + min) % 100; //if 100 change to 0

    numberFormatted += lastTwoDigits.toString().padStart(2, "0");

    thousandsFormatted = numberFormatted;
  } else {
    let number = Math.floor(Math.random() * 10000);
    let numberFormatted = number.toString().padStart(4, "0");

    thousandsFormatted = numberFormatted;
  }
}

function getAnimalEmojiAndName(currentAnimal) {
  if (currentAnimal) {
    animalEmoji = currentAnimal.emoji;
    animalName = currentAnimal.name;
  } else {
    const animal = getAnimalFromNumber(thousandsFormatted);
    animalEmoji = animal.emoji;
    animalName = animal.name;
  }
}

function getAnimalFromNumber(thousandsFormatted) {
  let lastNumbers = parseInt(thousandsFormatted) % 100;
  lastNumbers = lastNumbers != 0 ? lastNumbers : 100; // change 0 to 100
  for (const animal of animals) {
    if (lastNumbers >= animal.min && lastNumbers <= animal.max) {
      return animal;
    }
  }
}

function animalDisplay() {
  animalNameElement.textContent = animalName;
  animalEmojiElement.textContent = animalEmoji;
  thousandsElement.textContent = thousandsFormatted;
}

buttonGenerateThousands.addEventListener("click", () => {
  generateNumber(currentAnimal);
  getAnimalEmojiAndName(currentAnimal);
  animalDisplay();
});

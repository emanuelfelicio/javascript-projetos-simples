const conversorInput = document.getElementById("conversor-input");
const btnCelsiusTo = document.getElementById("btn-celsius");
const btnFahrenheitTo = document.getElementById("btn-fahrenheit");
const conversionBtn = document.getElementById("conversion-button");
const resultElement = document.getElementById("result-content");
const temperatureSymbol = document.getElementById("temperature-symbol");

conversorInput.addEventListener("blur", () => {
  if (!conversorInput.value || isNaN(conversorInput.value)) {
    conversorInput.value = 0;
  }
});

btnCelsiusTo.addEventListener("click", () => {
  temperatureSymbol.textContent = "°C";
});
btnFahrenheitTo.addEventListener("click", () => {
  temperatureSymbol.textContent = "°F";
});

conversionBtn.addEventListener("click", () => {
  if (!btnCelsiusTo.checked && !btnFahrenheitTo.checked) {
    alert("escolha uma opção");
    return;
  }
  let result;
  let inputValue = conversorInput.value;
  let emoji;
  const emojiColdTemperature = "❄️";
  const emojiCoolTemperature = "🍃";
  const emojiHotTemperature = "☀️";
  const coldColor = "#7BAFE7";
  const coolColor = "#9ED99D";
  const hotColor = "#F4A261";
  if (btnCelsiusTo.checked) {
    result = (inputValue * 9) / 5 + 32;

    if (result < 59) {
      emoji = emojiColdTemperature;
      document.body.style.backgroundColor = coldColor;
      conversionBtn.style.backgroundColor = coldColor;
    } else if (result > 59 && result < 75) {
      emoji = emojiCoolTemperature;
      document.body.style.backgroundColor = coolColor;
      conversionBtn.style.backgroundColor = coolColor;
    } else {
      emoji = emojiHotTemperature;
      document.body.style.backgroundColor = hotColor;
      conversionBtn.style.backgroundColor = hotColor;
    }
    result = `${result.toFixed(2)} °F ${emoji}`;
  } else if (btnFahrenheitTo.checked) {
    result = (inputValue - 32) / (9 / 5);
    if (result < 16) {
      emoji = emojiColdTemperature;
      document.body.style.backgroundColor = coldColor;
      conversionBtn.style.backgroundColor = coldColor;
    } else if (result > 15 && result < 25) {
      emoji = emojiCoolTemperature;
      document.body.style.backgroundColor = coolColor;
      conversionBtn.style.backgroundColor = coolColor;
    } else {
      emoji = emojiHotTemperature;
      document.body.style.backgroundColor = hotColor;
      conversionBtn.style.backgroundColor = hotColor;
    }
    result = `${result.toFixed(2)} °C ${emoji}`;
  }
  resultElement.textContent = result;
});

import { elements } from './dom';
function showError(message) {
  elements.infoSection.style.display = 'none';
  elements.errorSection.style.display = 'flex';

  elements.errorText.innerText = message;
  return;
}

function showWeather({ temp, city, description, unit, time }) {
  elements.infoSection.style.display = 'flex';
  elements.errorSection.style.display = 'none';

  elements.tempText.innerText = `${temp}${unit}`;
  elements.descriptionText.innerText = description;
  elements.timeText.innerText = time;
  elements.cityText.innerText = city.toUpperCase();
}

export { showError, showWeather };

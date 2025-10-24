import './styles.css';
import { unit, fToC, setUnit } from './unitConv';
import { showError, showWeather } from './ui';
import { elements } from './dom';
import { getWeatherInfo } from './api';

elements.submitButton.addEventListener('click', async (e) => {
  e.preventDefault();
  let city = elements.inputSection.value;
  if (!city) {
    return;
  }
  elements.inputSection.value = '';

  let data = await getWeatherInfo(city).catch(() => {
    showError('City not found');
    return;
  });

  if (!data) {
    return;
  }
  let temp = data.currentConditions.temp;
  let description = data.description;
  let time = data.currentConditions.datetime;
  let cityName = data.address;

  if (unit === 'C') {
    temp = fToC(temp);
  }
  showWeather({ temp, description, time, city: cityName, unit });
});

elements.cButton.addEventListener('click', (e) => {
  e.preventDefault();
  setUnit('C');
  console.log(unit);
  elements.fButton.classList.remove('active');
  elements.cButton.classList.add('active');
});
elements.fButton.addEventListener('click', (e) => {
  e.preventDefault();
  setUnit('F');
  console.log(unit);
  elements.cButton.classList.remove('active');
  elements.fButton.classList.add('active');
});

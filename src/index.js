import './styles.css';
const KEY = 'PS2CXE5UFEY6ZXS27ERF5CVZL';

let inputSection = document.querySelector('input');
let infoSection = document.querySelector('.info-section');
let submitButton = document.querySelector('.submit-button');

let unit = 'F';

let cButton = document.querySelector('#unit-c');
let fButton = document.querySelector('#unit-f');

let tempText = document.querySelector('.temp');
let descriptionText = document.querySelector('.description');
let cityText = document.querySelector('.city');
let timeText = document.querySelector('.time');

let errorSection = document.querySelector('.error');
let errorText = document.querySelector('.error-text');

async function getWeatherInfo(city) {
  let response = await fetch(
    'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/' +
      city +
      '?key=' +
      KEY
  );
  if (!response.ok) {
    throw new Error('City not found');
  }
  let data = await response.json();
  return data;
}

submitButton.addEventListener('click', (e) => {
  e.preventDefault();
  let city = inputSection.value;
  inputSection.value = '';
  updateInfo(city);
});

async function updateInfo(city) {
  let weatherData = await getWeatherInfo(city).catch((error) => {
    infoSection.style.display = 'none';
    errorSection.style.display = 'flex';

    errorText.innerText = 'City not found';
    console.log(error);
    return;
  });
  if (!weatherData) {
    return;
  }
  console.log(weatherData);

  let weatherDesc = weatherData.description;
  let tempCur = weatherData.currentConditions.temp;
  let timeCur = weatherData.currentConditions.datetime;
  let cityCorrect = weatherData.address;
  //let icon = weatherData.currentConditions.icon;
  errorSection.style.display = 'none';
  infoSection.style.display = 'flex';

  if (unit === 'C') {
    tempCur = (tempCur - 32) / 1.8;
    tempCur = Math.round(tempCur);
  }

  tempText.innerText = `${tempCur}${unit}`;
  descriptionText.innerText = weatherDesc;
  timeText.innerText = timeCur;
  cityText.innerText = cityCorrect.toUpperCase();
}

cButton.addEventListener('click', (e) => {
  e.preventDefault();
  unit = 'C';
  console.log(unit);
  fButton.classList.remove('active');
  cButton.classList.add('active');
});
fButton.addEventListener('click', (e) => {
  e.preventDefault();
  unit = 'F';
  console.log(unit);
  cButton.classList.remove('active');
  fButton.classList.add('active');
});

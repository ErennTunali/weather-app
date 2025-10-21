import './styles.css';
const KEY = 'PS2CXE5UFEY6ZXS27ERF5CVZL';

let inputSection = document.querySelector('input');
let infoSection = document.querySelector('.info-section');
let submitButton = document.querySelector('.submit-button');
// let city = 'istanbul';

async function getWeatherInfo(city) {
  let response = await fetch(
    'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/' +
      city +
      '?key=' +
      KEY
  );
  let data = await response.json();
  return data;
}
getWeatherInfo('istanbul');

submitButton.addEventListener('click', (e) => {
  e.preventDefault();
  let city = inputSection.value;
  inputSection.value = '';
  updateInfo(city);
});

async function updateInfo(city) {
  let weatherData = await getWeatherInfo(city);
  let weatherDesc = weatherData.description;
  infoSection.innerText = weatherDesc;
}

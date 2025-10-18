import './styles.css';
const KEY = 'PS2CXE5UFEY6ZXS27ERF5CVZL';
// let city = 'istanbul';

async function getWeatherInfo() {
  let response = await fetch(
    'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/istanbul?key=' +
      KEY
  );
  let data = await response.json();
  console.log(data);
}
getWeatherInfo();

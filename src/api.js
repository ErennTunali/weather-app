const KEY = 'PS2CXE5UFEY6ZXS27ERF5CVZL';

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

export { getWeatherInfo };

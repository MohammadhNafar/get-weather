

const URL = "api.openweathermap.org/data/2.5";
const key = "0525fe02cb6a5bf0dfd6b56948975b8e";


function getCurrentWeather(cityName)

{
  return  fetch(`${URL}/weather?q={city name}&appid={${key}}`);
}
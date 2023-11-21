// https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${4a7d27fe76ffd54a40d647c20b6dfe43}

const latitude = 46.8772;
const longitude = -96.7898;
const API_KEY = "4a7d27fe76ffd54a40d647c20b6dfe43";

export const getForcastWeather = () => {
  const weatherApi = fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${API_KEY}`
  ).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Error: ${res.status}`);
    }
  });
  return weatherApi;
};

export const parseWeatherData = (data) => {
  const main = data.main;
  const temperature = main && main.temp;
  return Math.ceil(temperature);
};

export const parseWeatherCity = (data) => {
  const city = data.name;
  return city;
};

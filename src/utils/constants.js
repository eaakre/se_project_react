import sunnyDay from "../images/day/sunny.svg";
import cloudyDay from "../images/day/cloudy.svg";
import rainDay from "../images/day/rain.svg";
import stormDay from "../images/day/storm.svg";
import snowDay from "../images/day/snow.svg";
import fogDay from "../images/day/fog.svg";
import moonNight from "../images/night/moon.svg";
import cloudyNight from "../images/night/cloudy.svg";
import rainNight from "../images/night/rain.svg";
import stormNight from "../images/night/storm.svg";
import snowNight from "../images/night/snow.svg";
import fogNight from "../images/night/fog.svg";

export const defaultClothingItems = [
  {
    _id: 0,
    name: "Cap",
    weather: "hot",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Cap.png?etag=f3dad389b22909cafa73cff9f9a3d591",
  },
  {
    _id: 1,
    name: "Hoodie",
    weather: "warm",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Hoodie.png?etag=5f52451d0958ccb1016c78a45603a4e8",
  },
  {
    _id: 2,
    name: "Jacket",
    weather: "cold",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Jacket.png?etag=f4bb188deaa25ac84ce2338be2d404ad",
  },
  {
    _id: 3,
    name: "Sneakers",
    weather: "cold",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Sneakers.png?etag=3efeec41c1c78b8afe26859ca7fa7b6f",
  },
  {
    _id: 4,
    name: "T-Shirt",
    weather: "hot",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/T-Shirt.png?etag=44ed1963c44ab19cd2f5011522c5fc09",
  },
  {
    _id: 5,
    name: "Winter coat",
    weather: "cold",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Coat.png?etag=298717ed89d5e40b1954a1831ae0bdd4",
  },
];

export const weatherOptions = [
  {
    id: 1,
    url: sunnyDay,
    day: true,
    type: "sunny",
  },
  {
    id: 2,
    url: cloudyDay,
    day: true,
    type: "cloudy",
  },
  {
    id: 3,
    url: rainDay,
    day: true,
    type: "rain",
  },
  {
    id: 4,
    url: stormDay,
    day: true,
    type: "storm",
  },
  {
    id: 5,
    url: snowDay,
    day: true,
    type: "snow",
  },
  {
    id: 6,
    url: fogDay,
    day: true,
    type: "fog",
  },
  {
    id: 7,
    url: moonNight,
    day: false,
    type: "moon",
  },
  {
    id: 8,
    url: cloudyNight,
    day: false,
    type: "cloudy",
  },
  {
    id: 9,
    url: rainNight,
    day: false,
    type: "rain",
  },
  {
    id: 10,
    url: stormNight,
    day: false,
    type: "storm",
  },
  {
    id: 11,
    url: snowNight,
    day: false,
    type: "snow",
  },
  {
    id: 12,
    url: fogNight,
    day: false,
    type: "fog",
  },
];

export const latitude = 46.8772;
export const longitude = -96.7898;
export const API_KEY = "4a7d27fe76ffd54a40d647c20b6dfe43";

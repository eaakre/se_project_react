import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";
import { useContext } from "react";
import currentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";
import "./Main.css";

const Main = ({ weatherTemp, clothingItems, onSelectCard }) => {
  const { currentTemperatureUnit } = useContext(currentTemperatureUnitContext);

  const temp = weatherTemp?.temperature?.[currentTemperatureUnit];
  const getWeatherType = () => {
    if (currentTemperatureUnit === "F") {
      if (temp >= 86) {
        return "hot";
      } else if (temp >= 66 && temp <= 85) {
        return "warm";
      } else if (temp <= 65) {
        return "cold";
      }
    } else if (currentTemperatureUnit === "C") {
      if (temp >= 86) {
        return "hot";
      } else if (temp >= 66 && temp <= 85) {
        return "warm";
      } else if (temp <= 65) {
        return "cold";
      }
    }
  };
  const weatherType = getWeatherType();

  const filteredCards = clothingItems.filter((item) => {
    return item.weather.toLowerCase() === weatherType;
  });

  return (
    <main className="main">
      <WeatherCard day={true} type="sunny" weatherTemp={temp} />
      <section className="card__section" id="card-section">
        Today is {temp}°{currentTemperatureUnit} / You may want to wear:
        <div className="card__items">
          {filteredCards.map((item) => (
            <ItemCard item={item} key={item._id} onSelectCard={onSelectCard} />
          ))}
        </div>
      </section>
    </main>
  );
};
export default Main;

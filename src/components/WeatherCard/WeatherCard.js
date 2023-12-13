import "./WeatherCard.css";
import { weatherOptions } from "../../utils/constants";
import { useContext } from "react";
import currentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";

const WeatherCard = ({ day, type, weatherTemp = 0 }) => {
  const { currentTemperatureUnit } = useContext(currentTemperatureUnitContext);
  const weatherOption = weatherOptions.filter((option) => {
    if (option.day === day && option.type === type) {
      return option.day && option.type;
    }
  });
  const weatherOptionUrl = weatherOption[0].url || "";

  return (
    <section className="weather" id="weather">
      <div className="weather-info">
        {weatherTemp}°{currentTemperatureUnit}
      </div>
      <img
        src={weatherOptionUrl}
        alt="weather for today"
        className="weather-image"
      />
    </section>
  );
};

export default WeatherCard;

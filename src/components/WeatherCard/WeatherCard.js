import "./WeatherCard.css";
import { weatherOptions } from "../../utils/constants";

const WeatherCard = ({ day, type, weatherTemp = 0 }) => {
  const weatherOption = weatherOptions.filter((option) => {
    if (option.day === day && option.type === type) {
      return option.day && option.type;
    }
  });
  const weatherOptionUrl = weatherOption[0].url || "";
  return (
    <section className="weather" id="weather">
      <div className="weather-info">{weatherTemp}°F</div>
      <img
        src={weatherOptionUrl}
        alt="weather for today"
        className="weather-image"
      />
    </section>
  );
};

export default WeatherCard;

import { useWeather } from "../../hooks/useWeatherContext";

export default function DisplayCurrentWeather() {
  const {
    country,
    setCountry,
    zipcode,
    setZipcode,
    fetchWeatherData,
    currentWeather,
  } = useWeather();
  return (
    <div>
      <p>checking the weather for {currentWeather.name}</p>
      <p>Weather is {currentWeather.weather[0].main}</p>
      <p>{currentWeather.weather[0].description}</p>
      <p>temperature {parseInt(currentWeather.main.temp)}</p>
      <p>humidity {parseInt(currentWeather.main.humidity)}%</p>
      {currentWeather.main.temp === currentWeather.main.temp_max &&
      currentWeather.main.temp === currentWeather.main.temp_min ? null : (
        <>
          <p>minimum temperature {currentWeather.main.temp_min}</p>
          <p>maximum temperature {currentWeather.main.temp_max}</p>
        </>
      )}
      <p>humidity {parseInt(currentWeather.main.humidity)}%</p>
    </div>
  );
}

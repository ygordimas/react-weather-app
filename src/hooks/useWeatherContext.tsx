import axios from "axios";
import { createContext, ReactNode, useContext, useState } from "react";
import { countryCodes } from "../services/countryCodes";

interface WeatherContextData {
  country: string;
  zipcode: string;
  setCountry: (country: string) => void;
  setZipcode: (zipcode: string) => void;
  fetchWeatherData: () => Promise<void>;
  currentWeather: { [key: string]: any };
}

interface WeatherProviderProps {
  children: ReactNode;
}

type Location = {
  [key: string]: any;
};

type Weather = {
  [key: string]: any;
};

export const WeatherContext = createContext<WeatherContextData>(
  {} as WeatherContextData
);

export function WeatherProvider({ children }: WeatherProviderProps) {
  const [country, setCountry] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [currentWeather, setCurrentWeather] = useState({});

  const fetchWeatherData = async () => {
    const [countryCode] = countryCodes.filter(
      (filteredCountry) => filteredCountry.name === country
    );
    const locationData: Location = await axios
      .get(
        `http://api.openweathermap.org/geo/1.0/zip?zip=${zipcode},${countryCode["alpha-2"]}&appid=38fe5f0e298f3edf79048384cd436a89`
      )
      .then((response: {}) => response);

    const weatherData = async () => {
      const weather: Weather = await axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${locationData.data.lat}&lon=${locationData.data.lon}&units=metric&appid=38fe5f0e298f3edf79048384cd436a89`
        )
        .then((response: {}) => response);
      console.log("there was an attempt");
      console.log(locationData);
      setCurrentWeather(weather.data);
    };

    weatherData();
  };

  return (
    <WeatherContext.Provider
      value={{
        country,
        setCountry,
        zipcode,
        setZipcode,
        fetchWeatherData,
        currentWeather,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
}

export function useWeather() {
  const context = useContext(WeatherContext);

  return context;
}

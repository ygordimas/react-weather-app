import axios from "axios";
import { createContext, ReactNode, useContext, useState } from "react";
import { countryCodes } from "../services/countryCodes";

interface WeatherContextData {
  country: string;
  zipcode: string;
  setCountry: (country: string) => void;
  setZipcode: (zipcode: string) => void;
  fetchWeatherData: () => Promise<void>;
}

interface WeatherProviderProps {
  children: ReactNode;
}

export const WeatherContext = createContext<WeatherContextData>(
  {} as WeatherContextData
);

export function WeatherProvider({ children }: WeatherProviderProps) {
  const [country, setCountry] = useState("");
  const [zipcode, setZipcode] = useState("");

  const fetchWeatherData = async () => {
    const [countryCode] = countryCodes.filter(
      (filteredCountry) => filteredCountry.name === country
    );
    const countryData = await axios
      .get(
        `http://api.openweathermap.org/geo/1.0/zip?zip=${zipcode},${countryCode["alpha-2"]}&appid=38fe5f0e298f3edf79048384cd436a89`
      )
      .then((response: {}) => response);
    console.log(countryData);

    const weatherData = async () => {
      const weather = await axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${countryData.data.lat}&lon=${countryData.data.lon}&units=metric&appid=38fe5f0e298f3edf79048384cd436a89`
        )
        .then((response: {}) => response);

      console.log(weather);
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

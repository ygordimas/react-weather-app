import axios from "axios";
import { createContext, ReactNode, useContext, useState } from "react";
import { countryCodes } from "../services/countryCodes";

interface WeatherContextData {
  country: string;
  zipcode: string;
  setCountry: (country: string) => void;
  setZipcode: (zipcode: string) => void;
  fetchLocation: () => Promise<void>;
  fetchWeatherData: () => Promise<void>;
  fetchForecastData: () => Promise<void>;
  lat: string;
  lon: string;
  current: { [key: string]: any };
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
  const [lat, setLat] = useState("");
  const [lon, setLon] = useState("");
  const [current, setCurrent] = useState({});

  const fetchLocation = async () => {
    const [countryCode] = countryCodes.filter(
      (filteredCountry) => filteredCountry.name === country
    );
    const locationData: Location = await axios
      .get(
        `http://api.openweathermap.org/geo/1.0/zip?zip=${zipcode},${countryCode["alpha-2"]}&appid=8567130102e0822763639b23376349b9`
      )
      .then((response: {}) => response);

    setLat(locationData.data.lat);
    setLon(locationData.data.lon);

    const location = {
      zipcode: zipcode,
      country: country,
      lat: locationData.data.lat,
      lon: locationData.data.lon,
    };
  };

  const fetchWeatherData = async () => {
    const weather: Weather = await axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=8567130102e0822763639b23376349b9`
      )
      .then((response: {}) => response);

    setCurrent(weather.data);
  };

  const fetchForecastData = async () => {
    const forecast = await axios
      .get(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=8567130102e0822763639b23376349b9`
      )
      .then((response) => console.log(response));
  };

  return (
    <WeatherContext.Provider
      value={{
        country,
        setCountry,
        zipcode,
        setZipcode,
        fetchLocation,
        fetchWeatherData,
        fetchForecastData,
        lat,
        lon,
        current,
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

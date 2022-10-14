import axios from "axios";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { countryCodes } from "../services/countryCodes";

interface WeatherContextData {
  country: string;
  zipcode: string;
  setCountry: (country: string) => void;
  setZipcode: (zipcode: string) => void;
  fetchLocation: () => Promise<void>;
  lat: string;
  lon: string;
  isLoading: boolean;
  setIsLoading: (value: boolean) => void;
  current: {
    name: string;
    weather: [{ description: string; icon: string; main: string }];
    main: {
      feels_like: number;
      humidity: number;
      temp: number;
      temp_max: number;
      temp_min: number;
    };

    wind: { speed: number };
  };
  setCurrent: (value: {}) => void;
  setForecast: (value: {}) => void;
  forecast: [];
  errorMessage: string;
  handleClearData: () => void;
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
  const [country, setCountry] = useState(
    JSON.parse(localStorage.getItem("location") as string)?.country || ""
  );
  const [zipcode, setZipcode] = useState(
    JSON.parse(localStorage.getItem("location") as string)?.zipcode || ""
  );
  const [lat, setLat] = useState(
    JSON.parse(localStorage.getItem("location") as string)?.lat || ""
  );
  const [lon, setLon] = useState(
    JSON.parse(localStorage.getItem("location") as string)?.lon || ""
  );
  const [current, setCurrent] = useState(
    JSON.parse(localStorage.getItem("current") as string) || {}
  );
  const [forecast, setForecast] = useState(
    JSON.parse(localStorage.getItem("forecast") as string) || {}
  );
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    // handleClearData();
    //checks if there are no valid inputs for fetching to not waste a call to the API
    if (!lat && !lon) return;
    fetchCurrentData();
    fetchForecastData();
  }, [lat, errorMessage]);

  function handleClearData() {
    localStorage.removeItem("current");
    localStorage.removeItem("forecast");
    setCurrent({});
    setForecast({});
    setErrorMessage("");
  }

  const fetchLocation = async () => {
    try {
      if (!country && !zipcode) {
        throw new Error(
          "A valid zipcode number and country name are needed for displaying data"
        );
      }

      const [countryCode] = countryCodes.filter(
        (filteredCountry) => filteredCountry.name === country
      );

      if (countryCode === undefined) {
        //if country input doesn't match any of the countries in the ISO-3166 countryCodes list, throw an error
        throw new Error("Invalid country");
      }

      const locationData: Location = await axios
        .get(
          `http://api.openweathermap.org/geo/1.0/zip?zip=${zipcode},${countryCode["alpha-2"]}&appid=8567130102e0822763639b23376349b9`
        )
        .then((response: {}) => response)
        .catch(() => {
          throw new Error("Invalid zipcode");
        });

      setLat(locationData.data.lat);
      setLon(locationData.data.lon);

      const location = {
        zipcode: zipcode,
        country: country,
        lat: locationData.data.lat,
        lon: locationData.data.lon,
      };

      localStorage.setItem("location", JSON.stringify(location));
    } catch (err: any) {
      setErrorMessage(err.message);
      localStorage.removeItem("location");
      setLat("");
      setLon("");
    } finally {
      setIsLoading(false);
    }
  };

  const fetchCurrentData = async () => {
    const weather: Weather = await axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=8567130102e0822763639b23376349b9`
      )
      .then((response: {}) => response);

    setIsLoading(false);
    setCurrent(weather.data);
    localStorage.setItem("current", JSON.stringify(weather.data));
  };

  const fetchForecastData = async () => {
    const fetchedForecast = await axios
      .get(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=8567130102e0822763639b23376349b9`
      )
      .then((response) => response.data.list);

    setIsLoading(false);
    setForecast(fetchedForecast);
    localStorage.setItem("forecast", JSON.stringify(fetchedForecast));
  };

  return (
    <WeatherContext.Provider
      value={{
        country,
        setCountry,
        zipcode,
        setZipcode,
        fetchLocation,
        isLoading,
        setIsLoading,
        lat,
        lon,
        current,
        setCurrent,
        forecast,
        setForecast,
        errorMessage,
        handleClearData,
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

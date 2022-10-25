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
    condition: {
      icon: string;
      text: string;
    };
    feelslike_c: number;
    humidity: number;
    temp_c: number;
    wind_kph: number;
    precip_mm: number;
    cloud: number;
  };
  setCurrent: (value: {}) => void;
  setForecast: (value: {}) => void;
  forecast: {
    current: {};
    forecast: {
      forecastday: [
        {
          date_epoch: number;
          date: string;
          day: {
            avghumidity: number;
            avgtemp_c: number;
            condition: {
              icon: string;
              text: string;
            };
            daily_chance_of_rain: number;
            maxtemp_c: number;
            mintemp_c: number;
            totalprecip_mm: number;
            maxwind_kph: number;
          };
        }
      ];
    };
    location: {
      name: string;
      region: string;
      country: string;
    };
  };
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
    // fetchCurrentData();
    fetchForecastData();
  }, [lat, errorMessage]);

  function handleClearData() {
    localStorage.removeItem("current");
    localStorage.removeItem("forecast");
    localStorage.removeItem("location");
    setCurrent({});
    setForecast({});
    setErrorMessage("");
  }

  const fetchLocation = async () => {
    try {
      if (!country || !zipcode) {
        throw new Error(
          "You must provide a valid zipcode and country name for retrieving data."
        );
      }
      const [countryCode] = countryCodes.filter(
        (filteredCountry) => filteredCountry.name === country
      );
      if (countryCode === undefined) {
        //if country input doesn't match any of the countries in the ISO-3166 countryCodes list, throw an error
        throw new Error(
          "No matches for the provided country name in our data base."
        );
      }

      const locationData: void | Location = await axios
        .get(
          `https://app.zipcodebase.com/api/v1/search?apikey=722f24b0-4e54-11ed-9b3e-f1df447251fe&codes=${zipcode}&${countryCode}`
        )
        .then((response: { [key: string]: any }) => {
          if (response["data"]["results"].length == 0) {
            throw new Error(
              "Data unavailable. Please check that you are providing a valid zipcode + country combination."
            );
          }
          response["data"]["results"][`${zipcode}`][0];
        });

      setLat(locationData?.latitude);
      setLon(locationData?.longitude);
      const location = {
        zipcode: zipcode,
        country: country,
        lat: locationData?.latitude,
        lon: locationData?.longitude,
        provice: locationData?.province,
        state: locationData?.state,
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
        `https://api.weatherapi.com/v1/current.json?key=e9093dcdb40d47a6b46160842220604&q=${lat},${lon}`
      )
      .then((response) => response.data.current);

    setIsLoading(false);
    setCurrent(weather);
    localStorage.setItem("current", JSON.stringify(weather));
  };

  const fetchForecastData = async () => {
    const fetchedForecast = await axios
      .get(
        `https://api.weatherapi.com/v1/forecast.json?key=e9093dcdb40d47a6b46160842220604&q=${lat},${lon}&days=7`
      )
      .then((response) => response.data);

    setIsLoading(false);
    setCurrent(fetchedForecast.current);
    setForecast(fetchedForecast);
    localStorage.setItem("current", JSON.stringify(fetchedForecast.current));
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

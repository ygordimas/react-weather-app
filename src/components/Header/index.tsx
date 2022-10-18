import { useEffect, useState } from "react";

import { countryCodes } from "../../services/countryCodes";
import {
  StyledInput,
  StyledInputContainer,
  StyledList,
  StyledForm,
  StyledFormContainer,
  StyledButton,
} from "./styles";
import { useWeather } from "../../hooks/useWeatherContext";

type Input = {
  postalCode: string;
  countryName: string;
};

interface CountryList {
  name: string;
  "alpha-2": string;
  "country-code": string;
}

interface CountryData {
  country: string;
  lat: number;
  lon: number;
  name: string;
  zip: string;
}

export function Header() {
  const {
    country,
    setCountry,
    zipcode,
    setZipcode,
    fetchLocation,
    setCurrent,
    setForecast,
    lat,
    lon,
    setIsLoading,
    handleClearData,
  } = useWeather();
  const [availableCountries, setAvailableCountries] = useState<CountryList[]>(
    []
  );

  function listOfCountries(userCountry: string) {
    let matches = countryCodes.filter((country) => {
      const regex = new RegExp(`^${userCountry}`, "gi");
      return country.name.match(regex);
    });

    if (userCountry.length === 0) {
      matches = [];
    } else if (userCountry === matches[0]?.name) {
      matches = [];
    }

    setAvailableCountries(matches);
  }

  useEffect(() => {
    listOfCountries(country);
  }, [country]);

  function checksIfNumber(e: React.KeyboardEvent<HTMLInputElement>) {
    if (
      !/[0-9]/.test(e.key) &&
      e.key !== "Backspace" &&
      e.key !== "Enter" &&
      e.key !== "Tab" &&
      e.key !== "Delete"
    ) {
      e.preventDefault();
    }
  }

  function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    handleClearData();
    setIsLoading(true);
    fetchLocation();
  }

  function handleClearButton() {
    handleClearData();
    setCountry("");
    setZipcode("");
  }

  return (
    <StyledFormContainer>
      <h1>Weather Forecast Aplication</h1>
      <StyledForm onSubmit={(e) => handleFormSubmit(e)}>
        <StyledInputContainer>
          <StyledInput
            className="zipcode"
            placeholder="Zip Code"
            onKeyDown={(e) => checksIfNumber(e)}
            value={zipcode}
            onChange={(e) => {
              setZipcode(e.target.value);
            }}
          />
        </StyledInputContainer>

        <StyledInputContainer>
          <StyledInput
            className="country"
            placeholder="Country"
            value={country}
            onChange={(e) => {
              const country = e.target.value;
              const countryCapitalized =
                country.charAt(0).toUpperCase() +
                country.slice(1).toLowerCase();
              setCountry(countryCapitalized);
            }}
          />
          <StyledList>
            {availableCountries.map((country) => (
              <li
                key={country["country-code"]}
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    setCountry((e.target as HTMLElement).innerText);
                    setAvailableCountries([]);
                  }
                }}
                onClick={(e) => {
                  setCountry((e.target as HTMLElement).innerText);
                  setAvailableCountries([]);
                }}
              >
                {country.name}
              </li>
            ))}
          </StyledList>
        </StyledInputContainer>

        <StyledButton primary type="submit">
          Submit
        </StyledButton>
        <StyledButton secondary type="button" onClick={handleClearButton}>
          Clear
        </StyledButton>
      </StyledForm>
    </StyledFormContainer>
  );
}

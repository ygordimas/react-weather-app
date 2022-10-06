import { useEffect, useState } from "react";
import { api } from "../../services/api/api";
import { countryCodes } from "../../services/countryCodes";
import {
  StyledInput,
  StyledInputContainer,
  StyledList,
  StyledForm,
} from "./styles";

type Input = {
  postalCode: string;
  countryName: string;
};

interface CountryList {
  name: string;
  "alpha-2": string;
  "country-code": string;
}

// console.log(
//   countryCodes.map((country) =>
//     country.name === "Brazil"
//       ? console.log(country["country-code"])
//       : console.log("nope")
//   )
// );

export function Header() {
  const [country, setCountry] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [availableCountries, setAvailableCountries] = useState<CountryList[]>(
    []
  );

  function listOfCountries(userCountry: string) {
    let matches = countryCodes.filter((country) => {
      const regex = new RegExp(`^${userCountry}`, "gi");
      return country.name.match(regex);
    });

    if (userCountry.length === 0 || userCountry === matches[0].name) {
      matches = [];
    }

    setAvailableCountries(matches);
  }

  useEffect(() => {
    listOfCountries(country);
  }, [country]);

  // useEffect(() => {
  //   api
  //     .get(
  //       "/geo/1.0/zip?zip=38140000,BR&appid=38fe5f0e298f3edf79048384cd436a89"
  //     )
  //     .then((response: {}) => console.log(response));
  // }, []);

  // useEffect(() => {
  //   console.log(postalCode);
  // }, [postalCode]);

  function checksIfNumber(e: React.KeyboardEvent<HTMLInputElement>) {
    if (!/[0-9]/.test(e.key) && e.key !== "Backspace" && e.key !== "Enter") {
      e.preventDefault();
    }
  }

  function handleFormSubmit() {}

  return (
    <>
      {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
      <StyledForm>
        {/* include validation with required or other standard HTML validation rules */}
        <StyledInputContainer>
          <StyledInput
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
            placeholder="Country"
            value={country}
            onChange={(e) => {
              setCountry(e.target.value);
            }}
          />
          <StyledList>
            {availableCountries.map((country) => (
              <li
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

        <input type="submit" />
      </StyledForm>
    </>
  );
}

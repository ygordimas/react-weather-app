import { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { api } from "../../services/api/api";
import { countryCodes } from "../../services/countryCodes";

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
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Input>();
  const onSubmit: SubmitHandler<Input> = (data) => {
    console.log(data);
  };

  const [availableCountries, setAvailableCountries] = useState<CountryList[]>(
    []
  );

  const userCountry = watch("countryName");

  function listOfCountries(userCountry: string) {
    let matches = countryCodes.filter((country) => {
      const regex = new RegExp(`^${userCountry}`, "gi");
      return country.name.match(regex);
    });

    if (userCountry.length === 0) {
      matches = [];
    }

    console.log(matches);
    setAvailableCountries(matches);
  }

  useEffect(() => {}, [watch("countryName")]);

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

  return (
    <>
      {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* include validation with required or other standard HTML validation rules */}
        <input
          placeholder="Zip Code"
          onKeyDown={(e) => checksIfNumber(e)}
          {...register("postalCode", {
            required: true,
            pattern: /^\d+$/,
          })}
        />

        <input
          placeholder="Country"
          {...register("countryName", {
            onChange: (e) => listOfCountries(e.target.value),
          })}
        />

        {/* errors will return when field validation fails  */}
        {errors.postalCode && <span>This field is required</span>}

        <input type="submit" />
      </form>

      <ul>
        {availableCountries.map((country) => (
          <li>{country.name}</li>
        ))}
      </ul>
    </>
  );
}

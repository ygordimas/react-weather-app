import { useEffect, useState } from "react";
import { DisplayContainer } from "./components/DisplayContainer";
import DisplayCurrentWeather from "./components/CurrentWeather";

import { Header } from "./components/Header";
import {
  WeatherContext,
  WeatherProvider,
  useWeather,
} from "./hooks/useWeatherContext";

function App() {
  return (
    <div className="App">
      <WeatherProvider>
        <Header />
        <DisplayContainer />
      </WeatherProvider>
    </div>
  );
}

export default App;

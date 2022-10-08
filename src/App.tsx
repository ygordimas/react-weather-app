import { useEffect, useState } from "react";
import DisplayCurrentWeather from "./components/DisplayCurrentWeather";

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
        <DisplayCurrentWeather />
      </WeatherProvider>
    </div>
  );
}

export default App;

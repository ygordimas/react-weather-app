import { useState } from "react";

import { Header } from "./components/Header";
import { WeatherContext, WeatherProvider } from "./hooks/useWeatherContext";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <WeatherProvider>
        <Header />
      </WeatherProvider>
    </div>
  );
}

export default App;

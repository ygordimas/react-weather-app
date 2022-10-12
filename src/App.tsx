import { DisplayContainer } from "./components/DisplayContainer";
import { Header } from "./components/Header";
import { WeatherProvider } from "./hooks/useWeatherContext";
import { Footer } from "./components/Footer";
import { StyledApp } from "./AppStyle";
import GlobalStyle from "./assets/globalStyles";

function App() {
  return (
    <StyledApp>
      <GlobalStyle />
      <WeatherProvider>
        <Header />
        <DisplayContainer />
      </WeatherProvider>
      <Footer />
    </StyledApp>
  );
}

export default App;

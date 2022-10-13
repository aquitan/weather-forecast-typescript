import { Skeleton } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import AppContainer from "./components/appContainer/AppContainer";
import CurrentLocation from "./components/currentLocation/CurrentLocation";
import DailyCast from "./components/dailyCast/DailyCast";
import DetailedData from "./components/detailedData/DetailedData";
import MainDegreeArea from "./components/mainDegreeArea/MainDegreeArea";
import WeatherContainer from "./components/weatherContainer/WeatherContainer";
import { RootState } from "./store/store";
import { StateType } from "./types/types";

function App() {
  const theme = true
  const [state, setState] = useState<StateType>()
  const city = useSelector((state:RootState) => state.city)

  useEffect(() => {
    getWeather()
  }, [])

  const getWeather = async () => {
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city.toLowerCase()}&units=metric&lang=ru&appid=412d12d981a20fc78e27a8684c2a0ecd`)
    const data = await res.json()
    setState(data)
  }

  return (
      <AppContainer>
        {
          state ? 
          <WeatherContainer sx={{maxWidth: 500, color: '#fff'}} elevation={3}>
            <CurrentLocation place={state.name} />
            <MainDegreeArea temperature={state?.main.temp} description={state?.weather[0].description} icon={state.weather[0].icon} />
            <DetailedData mainData={state} />
            <DailyCast castData={state.sys} />
          </WeatherContainer>
          : <Skeleton />
        }
      </AppContainer>
  );
}

export default App;

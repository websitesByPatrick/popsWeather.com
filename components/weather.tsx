import { CurrentWeatherData } from "@/classes/CurrentWeather";
import React from "react";

const Weather = ({ data }: { data: CurrentWeatherData }) => {
  return (
    <div>
      {data.main.temp}
      {data.weather[0].description}
      {data.name}
    </div>
  );
};

export default Weather;

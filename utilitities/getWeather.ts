import { CurrentWeather } from "@/models/CurrentWeather";

export const getWeather = async (): Promise<CurrentWeather | null> => {
  const WEATHER_KEY: string = process.env.APPID_KEY ?? "";
  console.log(WEATHER_KEY);

  const params = new URLSearchParams({
    lat: "30.08",
    lon: "-95.42",
    appid: WEATHER_KEY,
    units: "imperial",
  });

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?${params}`
    );

    if (!response || !response.ok) {
      console.log("Fetch failed:", response?.status);
      return null;
    }

    const weather = await response.json();
    return new CurrentWeather(weather);
  } catch (error) {
    console.log("Error Message:", error);
    return null;
  }
};

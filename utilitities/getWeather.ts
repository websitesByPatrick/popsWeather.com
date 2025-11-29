export const getWeather = async () => {
  const params = new URLSearchParams({
    lat: "30.08",
    lon: "-95.42",
    appid: "02ab2eb5a640250f9be96447e979f4d1",
    units: "imperial",
  });

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?${params}`
    );

    if (response) {
      const weather = await response.json();
      console.log(weather);
      return weather;
    }

    return null;
  } catch (error) {
    console.log("Error Message:", error);
  }
};

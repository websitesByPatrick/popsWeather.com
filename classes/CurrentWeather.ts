export interface CurrentWeatherData {
  weather: Array<{
    description: string;
  }>;
  main: {
    temp: number;
    feels_like: number;
    pressure: number;
    humidity: number;
  };
  visibility: number;
  wind: { speed: number; deg: number };

  sys: {
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  name: string;
}

export class CurrentWeather {
  skys: string;
  temperature: number;
  feels_like: number;
  pressure: number;
  humidity: number;
  visibility: number;
  wind_speed: number;
  wind_direction: number;
  sunrise: number;
  sunset: number;
  timezone: number;
  name: string;

  constructor(data: CurrentWeatherData) {
    this.skys = data.weather[0].description;
    this.temperature = data.main.temp;
    this.feels_like = data.main.feels_like;
    this.pressure = data.main.pressure;
    this.humidity = data.main.humidity;
    this.visibility = data.visibility;
    this.wind_speed = data.wind.speed;
    this.wind_direction = data.wind.deg;
    this.sunrise = data.sys.sunrise;
    this.sunset = data.sys.sunset;
    this.timezone = data.timezone;
    this.name = data.name;
  }
}

export interface CurrentWeatherData {
  weather: Array<{
    main: string;
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
  temperature: number | string;
  feels_like: number | string;
  pressure: number | string;
  humidity: number | string;
  visibility: number | string;
  wind_speed: number | string;
  wind_direction: number | string;
  sunrise: number | string;
  sunset: number | string;
  timezone: number | string;
  name: string;

  constructor(data: CurrentWeatherData) {
    this.skys = data.weather[0].main;
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

    this.formatData();
  }

  private formatData(): void {

    // Round temperature to nearest whole number and add degree symbol
    this.temperature = Math.round(Number(this.temperature)) + "°";

    // Round feels-like to nearest whole number and add degree symbol
    this.feels_like = Math.round(Number(this.feels_like)) + "°";

    // Covert Pressure from millibars to inHg and round to two decimal places
    this.pressure = (Number(this.pressure) * 0.02953).toFixed(2) + " inHg";

    // add percent sign to humidity
    this.humidity = this.humidity + "%";

    // convert visibility from meters into miles
    this.visibility =
      (Number(this.visibility) * 0.000621371).toFixed(2) + " miles";

    // round windspeed to whole number
    this.wind_speed = Number(this.wind_speed).toFixed(0) + " mph";

    // convert wind direction in degrees to compass point
    const direction = ["N","NNE", "NE","ENE", "E","ESE", "SE","SSE", "S","SSW", "SW","WSW", "W","WNW", "NW", "NNW"];
    const index = Math.floor((Number(this.wind_direction) + 11.25) / 22.5);
    this.wind_direction = direction[index % 16];

    // convert sunrise and sunset times from epoch time to local time string
    const epochSunrise = new Date(Number(this.sunrise) * 1000);
    this.sunrise = epochSunrise.toLocaleTimeString([], {
      hour: "numeric",
      minute: "2-digit",
    });
    const epochSunset = new Date(Number(this.sunset) * 1000);
    this.sunset = epochSunset.toLocaleTimeString([], {
      hour: "numeric",
      minute: "2-digit",
    });
  }
}

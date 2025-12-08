import { CurrentWeather } from "@/models/CurrentWeather";

const Weather = ({ data }: { data: CurrentWeather }) => {
  return (
    <div className={styles.container}>
      <p className={styles.city}>{data.name}</p>
      <p className={styles.temp}>{data.temperature}</p>
      <p className={styles.skies}>{data.skys}</p>
      <p className={styles.skies}>{data.feels_like}</p>
      <p className={styles.skies}>{data.pressure}</p>
      <p className={styles.skies}>{data.humidity}</p>
      <p className={styles.skies}>{data.visibility}</p>
      <p className={styles.skies}>{data.wind_speed}</p>
      <p className={styles.skies}>{data.wind_direction}</p>
      <p className={styles.skies}>{data.sunrise}</p>
      <p className={styles.skies}>{data.sunset}</p>
     
    </div>
  );
};

export default Weather;

const styles = {
  container: "flex flex-col bg-slate-500 h-svh",
  city: "text-5xl font-bold text-white text-center mt-10",
  temp: "text-3xl text-white text-center mt-5",
  skies: "text-2xl text-white text-center mt-2",
};

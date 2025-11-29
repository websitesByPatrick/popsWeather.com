import { getWeather } from "@/utilitities/getWeather";
import Weather from "@/components/weather";

export default async function Home() {
  const data = await getWeather();
  if (!data) {
    return <div>No data available</div>;
  }
  return (
    <div>
      <Weather data={data} />
    </div>
  );
}

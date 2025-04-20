import Widget from '@/components/common/Widget';
import { DetailItem } from './DetailItem';
import { CurrentWeather, WeatherForecast } from '@/lib/types/weather';
import { convertMeterToKm, convertMsToKmh } from '@/lib/utils/unitConvert';
import SunDetailItem from './SunDetaiItem';
import { format_hmmA } from '@/lib/utils/date';

interface Props {
  currentWeatherInfo: CurrentWeather | null;
  foreCastInfo: WeatherForecast | null;
}

export default function TodayDetail({ currentWeatherInfo }: Props) {
  return (
    <Widget className="!bg-black-1e">
      <h3 className="font-semibold text-2xl leading-none">Today’s Highlight</h3>
      <div className="grid md:grid-cols-4 lg:grid-cols-2 2xl:grid-cols-4 gap-4 mt-6">
        <DetailItem
          type="wind"
          value={currentWeatherInfo ? convertMsToKmh(currentWeatherInfo.wind.speed) : '0'}
          className="order-1"
        />
        <DetailItem
          type="humidity"
          value={currentWeatherInfo ? currentWeatherInfo.main.humidity : '0'}
          className="order-2"
        />
        <SunDetailItem
          type="sunrise"
          value={currentWeatherInfo ? format_hmmA(currentWeatherInfo.sys.sunrise) : '0'}
          className="order-5 md:order-3 col-span-2 lg:order-5 2xl:order-3"
        />
        <DetailItem
          type="pressure"
          value={currentWeatherInfo ? currentWeatherInfo.main.pressure : '0'}
          className="order-3 md:order-4 lg:order-3 2xl:order-4"
        />
        <DetailItem
          type="visibility"
          value={currentWeatherInfo ? convertMeterToKm(currentWeatherInfo.visibility) : '0'}
          className="order-4 md:order-5 lg:order-4 2xl:order-5"
        />
        <SunDetailItem
          type="sunset"
          value={currentWeatherInfo ? format_hmmA(currentWeatherInfo.sys.sunset) : '0'}
          className="order-6 col-span-2 "
        />
      </div>
    </Widget>
  );
}

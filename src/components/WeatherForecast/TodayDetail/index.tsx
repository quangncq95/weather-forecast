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
      <div className="grid grid-cols-4 gap-4 mt-6">
        <DetailItem
          type="wind"
          value={currentWeatherInfo ? convertMsToKmh(currentWeatherInfo.wind.speed) : '0'}
        />
        <DetailItem
          type="humidity"
          value={currentWeatherInfo ? currentWeatherInfo.main.humidity : '0'}
        />
        <SunDetailItem
          type="sunrise"
          value={currentWeatherInfo ? format_hmmA(currentWeatherInfo.sys.sunrise) : '0'}
          className="col-span-2"
        />
        <DetailItem
          type="pressure"
          value={currentWeatherInfo ? currentWeatherInfo.main.pressure : '0'}
        />
        <DetailItem
          type="visibility"
          value={currentWeatherInfo ? convertMeterToKm(currentWeatherInfo.visibility) : '0'}
        />
        <SunDetailItem
          type="sunset"
          value={currentWeatherInfo ? format_hmmA(currentWeatherInfo.sys.sunset) : '0'}
          className="col-span-2"
        />
      </div>
    </Widget>
  );
}

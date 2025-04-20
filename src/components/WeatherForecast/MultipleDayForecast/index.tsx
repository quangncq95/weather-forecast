import Widget from '@/components/common/Widget';
import DayDetail from './DayDetail';
import { WeatherForecast } from '@/lib/types/weather';

interface Props {
  foreCastInfo: WeatherForecast | null;
}

export default function MultipleDayForecast({ foreCastInfo }: Props) {
  return (
    <Widget className="!bg-black-1e">
      <h3 className="font-semibold text-2xl leading-none">7 Days Forecast</h3>
      {foreCastInfo && (
        <div className="flex gap-[18px] mt-6 w-full overflow-x-auto pb-4">
          {foreCastInfo?.list.map((dailyForecast) => {
            return <DayDetail key={dailyForecast.dt} dailyForecast={dailyForecast} />;
          })}
        </div>
      )}
    </Widget>
  );
}

import Widget from '@/components/common/Widget';
import { DailyForecast } from '@/lib/types/weather';
import { getDayOfWeek } from '@/lib/utils/date';
import { getWeatherIcon } from '@/lib/utils/weather';
import { useMemo } from 'react';

interface Props {
  dailyForecast: DailyForecast;
}

export default function DayDetail({ dailyForecast }: Props) {
  const isToday = useMemo(() => {
    const today = new Date();
    const forecastDate = new Date(dailyForecast.dt * 1000);
    return (
      forecastDate.getDate() === today.getDate() &&
      forecastDate.getMonth() === today.getMonth() &&
      forecastDate.getFullYear() === today.getFullYear()
    );
  }, [dailyForecast]);

  return (
    <Widget className="px-4 pt-[22px] shrink-0">
      <div className="flex flex-col items-center gap-6">
        <div className="w-full flex flex-col items-center gap-3">
          <h3 className="font-medium text-sm leading-none">
            {isToday ? 'Today' : getDayOfWeek(dailyForecast.dt)}
          </h3>
          <div className="w-full h-0.5 bg-gradient-to-b from-black-36 via-black-7e to-black-36"></div>
        </div>
        <img
          src={getWeatherIcon(dailyForecast.weather[0].icon)}
          alt="Weather icon"
          className="w-auto h-[72px] object-contain"
        />
        <span className="font-medium text-lg leading-none">{`${Math.round(dailyForecast.temp.day)}°C`}</span>
      </div>
    </Widget>
  );
}

import Widget from '@/components/common/Widget';
import LocationIcon from '@/components/Icons/LocationIcon';
import { CurrentWeather, WeatherForecast } from '@/lib/types/weather';
import { getLocationName } from '@/lib/utils/location';
import { Location } from '@/lib/types/location';
import { format_ddmmmyyyy, getDayOfWeek } from '@/lib/utils/date';
import { getWeatherIcon } from '@/lib/utils/weather';

interface Props {
  className?: string;
  location: Location | null;
  currentWeatherInfo: CurrentWeather | null;
  foreCastInfo: WeatherForecast | null;
}

export default function TodayCommon({
  className,
  location,
  currentWeatherInfo,
  foreCastInfo,
}: Props) {
  const todayForecast = foreCastInfo?.list.find((item) => {
    const date = new Date(item.dt * 1000);
    const today = new Date();
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    );
  });

  return (
    <Widget className="!bg-black-1e">
      <div className={`flex flex-col items-center 2xl:items-start gap-2 ${className}`}>
        <div className="py-2 px-4 bg-black-36 rounded-2xl flex items-center gap-2 w-fit">
          <LocationIcon />
          <p className="text-lg leading-none">{location ? getLocationName(location) : '~'}</p>
        </div>
        <div className=" mt-2 flex flex-col sm:flex-row lg:flex-col 2xl:flex-row sm:items-start items-center lg:items-center 2xl:items-start justify-between gap-[29px]">
          <div>
            <h3 className="font-medium text-2xl  md:text-[2.25rem]">
              {currentWeatherInfo ? getDayOfWeek(currentWeatherInfo.dt) : '~'}
            </h3>
            <h3 className="text-base leading-none">
              {currentWeatherInfo ? format_ddmmmyyyy(currentWeatherInfo.dt) : '~'}
            </h3>
          </div>
          <div className="mt-6 2xl:mt-[46px] flex flex-col sm:flex-row lg:flex-col 2xl:flex-row items-center justify-between xl:gap-6 2xl:gap-[93px]">
            <img
              src={
                currentWeatherInfo
                  ? getWeatherIcon(currentWeatherInfo.weather[0].icon)
                  : '/icons/weather/01d.png'
              }
              alt={`${currentWeatherInfo ? currentWeatherInfo.weather[0].main : 'Weather'} icon`}
              className=" w-auto h-[170px] object-fill"
            />
            <div className="flex flex-row sm:flex-col lg:flex-row 2xl:flex-col gap-[45px]">
              <div className="text-right">
                <h3 className="font-medium text-2xl sm:text-[2.5rem] leading-none">
                  {currentWeatherInfo ? `${Math.round(currentWeatherInfo?.main.temp)}°C` : '~'}
                </h3>
                <h3 className="font-medium text-xl leading-none text-black-b9 mt-2">
                  {todayForecast ? `Hight : ${Math.round(todayForecast.temp.max)}°C` : '~'}
                </h3>
                <h3 className="font-medium text-xl leading-none text-black-b9 mt-2">
                  {todayForecast ? `Low : ${Math.round(todayForecast.temp.min)}°C` : '~'}
                </h3>
              </div>
              <div className="text-right">
                <h3 className="font-medium text-xl leading-none first-letter:uppercase">
                  {currentWeatherInfo ? currentWeatherInfo.weather[0].description : ''}
                </h3>
                <h3 className="mt-[7px] text-base leading-none">
                  {currentWeatherInfo
                    ? `Feels like ${Math.round(currentWeatherInfo?.main.feels_like)}°C`
                    : '~'}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Widget>
  );
}

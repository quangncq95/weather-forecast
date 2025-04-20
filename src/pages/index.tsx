import { useAppConfig } from '@/components/context/AppConfigProvider';
import DefaultLayout from '@/components/layout/DefaultLayout';
import MultipleDayForecast from '@/components/WeatherForecast/MultipleDayForecast';
import OthersCountries from '@/components/WeatherForecast/OthersCountries';
import SearchCurrentLocation from '@/components/WeatherForecast/SearchCurrentLocation';
import TodayCommon from '@/components/WeatherForecast/TodayCommon';
import TodayDetail from '@/components/WeatherForecast/TodayDetail';
import { weatherApi } from '@/lib/apis/weatherApi';
import { CurrentWeather, WeatherForecast } from '@/lib/types/weather';
import { useEffect, useState } from 'react';
import { Location } from '@/lib/types/location';
import { getHelloString } from '@/lib/utils/date';

export default function MainPage() {
  const [currentWeatherInfo, setCurrentWeatherInfo] = useState<CurrentWeather | null>(null);
  const [weatherForeCast, setWeatherForecast] = useState<WeatherForecast | null>(null);
  const { userName, currentLocation, setCurrentLocation } = useAppConfig();

  useEffect(() => {
    if (!currentLocation) return;
    getCurrentWeatherData(currentLocation);
    getForecastWeatherData(currentLocation);
  }, [currentLocation]);

  async function getCurrentWeatherData(location: Location) {
    const res = await weatherApi.getCurrentWeather({ lat: location.lat, lon: location.lon });
    if (res) {
      setCurrentWeatherInfo(res);
    }
  }

  async function getForecastWeatherData(location: Location) {
    const res = await weatherApi.getForecastWeather({
      lat: location.lat,
      lon: location.lon,
      cnt: 7,
    });

    if (res) {
      setWeatherForecast(res);
    }
  }

  function handleSelectLocation(location: Location) {
    setCurrentLocation(location);
  }

  return (
    <DefaultLayout>
      <div className="flex items-center justify-between mt-[44px]">
        <div className="flex flex-col gap-1.5">
          <h3 className="text-lg leading-none">Hi, {userName}</h3>
          <p className="font-semibold text-2xl leading-none">{getHelloString()}</p>
        </div>
        <SearchCurrentLocation onSelectLocation={handleSelectLocation} />
      </div>
      <div className="grid grid-cols-2 gap-6 mt-6">
        <TodayCommon
          location={currentLocation}
          currentWeatherInfo={currentWeatherInfo}
          foreCastInfo={weatherForeCast}
        />
        <TodayDetail currentWeatherInfo={currentWeatherInfo} foreCastInfo={weatherForeCast} />
        <OthersCountries />
        <MultipleDayForecast foreCastInfo={weatherForeCast} />
      </div>
    </DefaultLayout>
  );
}

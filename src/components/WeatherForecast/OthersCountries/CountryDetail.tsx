import Widget from '@/components/common/Widget';
import { Location } from '@/lib/types/location';
import { useEffect, useState } from 'react';
import { weatherApi } from '@/lib/apis/weatherApi';
import { CurrentWeather } from '@/lib/types/weather';
import { getCountryName } from '@/lib/utils/location';
import { getWeatherIcon } from '@/lib/utils/weather';
import CloseIcon from '@/components/Icons/CloseIcon';
import { useAppConfig } from '@/components/context/AppConfigProvider';
import { useDrag, useDrop } from 'react-dnd';

interface Props {
  itemIndex: number;
  location: Location;
  onDrop?: (fromIndex: number, toIndex: number) => void;
}

export default function CountryDetail({ location, itemIndex, onDrop }: Props) {
  const { listCountries, setListCountries } = useAppConfig();
  const [currentWeatherInfo, setCurrentWeatherInfo] = useState<CurrentWeather | null>(null);
  useEffect(() => {
    if (!location) return;
    getCurrentWeatherData(location);
  }, [location]);

  async function getCurrentWeatherData(location: Location) {
    const res = await weatherApi.getCurrentWeather({ lat: location.lat, lon: location.lon });
    if (res) {
      setCurrentWeatherInfo(res);
    }
  }

  function handleRemoveCountry() {
    const newListCountries = listCountries.filter(
      (item) => item.lat !== location.lat && item.lon !== location.lon,
    );
    setListCountries(newListCountries);
  }

  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'Country',
    item: { itemIndex },
    collect: (monitor: any) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  const [{ isOver, fromIndex }, drop] = useDrop(() => ({
    accept: 'Country',
    drop: (item: { itemIndex: number }) => {
      if (item.itemIndex !== itemIndex) {
        onDrop && onDrop(item.itemIndex, itemIndex);
      }
    },
    collect: (monitor: any) => ({
      isOver: !!monitor.isOver(),
      fromIndex: monitor.getItem()?.itemIndex,
    }),
  }));

  return (
    //@ts-ignore
    <div ref={drop}>
      <div
        className={`w-full rounded-2xl  border-black-5e transition-all ${isOver && !isDragging && fromIndex > itemIndex ? 'h-[120px] border mb-6' : 'h-0 border-none'}`}
      ></div>
      {/* @ts-ignore */}
      <Widget
        ref={drag}
        className={`group relative  ${isDragging ? 'opacity-0.5' : 'cursor-grab'}`}
      >
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-2 w-[200px]">
            <h3 className="text-sm leading-none text-black-b9">{getCountryName(location)}</h3>
            <h4 className="text-2xl leading-none">{location.name}</h4>
            <h3 className="font-medium text-sm leading-none">
              {currentWeatherInfo ? currentWeatherInfo.weather[0].main : '~'}
            </h3>
          </div>
          <img
            src={
              currentWeatherInfo
                ? getWeatherIcon(currentWeatherInfo.weather[0].icon)
                : '/icons/weather/01d.png'
            }
            alt={`${currentWeatherInfo ? currentWeatherInfo.weather[0].main : 'Weather'} icon`}
            className="w-auto h-[72px] object-contain"
          />
          <div>
            <p className="font-semibold text-2xl leading-none text-right">
              {currentWeatherInfo ? Math.round(currentWeatherInfo.main.temp) + '°C' : '~'}
            </p>
            <p className="text-lg leading-none text-black-b9 mt-2 text-right">
              {currentWeatherInfo ? currentWeatherInfo.main.humidity + '%' : '~'}
            </p>
          </div>
        </div>
        <button
          className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 hidden group-hover:block transition-all duration-200"
          onClick={() => {
            handleRemoveCountry();
          }}
        >
          <CloseIcon width={28} height={28} />
        </button>
      </Widget>
      <div
        className={`w-full rounded-2xl  border-black-5e transition-all ${isOver && !isDragging && fromIndex < itemIndex ? 'h-[120px] border mt-6' : 'h-0 border-none'}`}
      ></div>
    </div>
  );
}

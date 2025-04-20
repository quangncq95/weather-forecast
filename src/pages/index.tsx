import SearchInput from '@/components/common/SearchInput';
import DefaultLayout from '@/components/layout/DefaultLayout';
import MultipleDayForecast from '@/components/WeatherForecast/MultipleDayForecast';
import OthersCountries from '@/components/WeatherForecast/OthersCountries';
import TodayCommon from '@/components/WeatherForecast/TodayCommon';
import TodayDetail from '@/components/WeatherForecast/TodayDetail';

export default function MainPage() {
  return (
    <DefaultLayout>
      <div className="flex items-center justify-between mt-[44px]">
        <div className="flex flex-col gap-1.5">
          <h3 className="text-lg leading-none">Hi, Kajal</h3>
          <p className="font-semibold text-2xl leading-none">Good Morning </p>
        </div>
        <SearchInput placeholder="Search your location" />
      </div>
      <div className="grid grid-cols-2 gap-6 mt-6">
        <TodayCommon />
        <TodayDetail />
        <OthersCountries />
        <MultipleDayForecast />
      </div>
    </DefaultLayout>
  );
}

import SearchInput from '@/components/common/SearchInput';
import DefaultLayout from '@/components/layout/DefaultLayout';
import TodayCommon from '@/components/WeatherForecast/TodayCommon';

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
      <div className="grid grid-cols-2">
        <TodayCommon />
      </div>
    </DefaultLayout>
  );
}

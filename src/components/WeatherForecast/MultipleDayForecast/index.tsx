import Widget from '@/components/common/Widget';
import DayDetail from './DayDetail';

export default function MultipleDayForecast() {
  return (
    <Widget className="!bg-black-1e">
      <h3 className="font-semibold text-2xl leading-none">10 Day Forecast</h3>
      <div className="flex gap-[18px] mt-6 w-full overflow-x-auto pb-4">
        <DayDetail />
        <DayDetail />
        <DayDetail />
        <DayDetail />
        <DayDetail />
        <DayDetail />
      </div>
    </Widget>
  );
}

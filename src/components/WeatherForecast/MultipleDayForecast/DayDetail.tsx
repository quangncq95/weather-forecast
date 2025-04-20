import Widget from '@/components/common/Widget';

export default function DayDetail() {
  return (
    <Widget className="px-4 pt-[22px] shrink-0">
      <div className="flex flex-col items-center gap-6">
        <div className="w-full flex flex-col items-center gap-3">
          <h3 className="font-medium text-sm leading-none">Today</h3>
          <div className="w-full h-0.5 bg-gradient-to-b from-black-36 via-black-7e to-black-36"></div>
        </div>
        <img
          src="/images/weather/sunny.png"
          alt="Weather icon"
          className="size-[72px] object-contain"
        />
        <span className="font-medium text-lg leading-none">28°C</span>
      </div>
    </Widget>
  );
}

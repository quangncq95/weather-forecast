import Widget from '@/components/common/Widget';

export default function CountryDetail() {
  return (
    <Widget>
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-2">
          <h3 className="text-sm leading-none text-black-b9">Country</h3>
          <h4 className="text-2xl leading-none">India</h4>
          <h3 className="font-medium text-sm leading-none">Sunny</h3>
        </div>
        <img
          src="/images/weather/sunny.png"
          alt="Country icon"
          className="size-[72px] object-contain"
        />
        <p>
          <span className="font-semibold text-2xl leading-none">32°/</span>
          <span className="text-lg leading-none text-black-b9">24°</span>
        </p>
      </div>
    </Widget>
  );
}

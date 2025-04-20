import Widget from '../common/Widget';

export default function SunDetailItem() {
  return (
    <Widget className="!p-4">
      <div className="flex items-center justify-between">
        <img src="/images/sunrise.png" alt="Sun icon" className="size-16 object-cover" />
        <div>
          <h3 className="font-medium text-base leading-none">Sunrise</h3>
          <h4 className="font-semibold text-2xl leading-none">4:50 AM</h4>
        </div>
      </div>
    </Widget>
  );
}

import Widget from '@/components/common/Widget';

interface Props {
  type: 'pressure' | 'wind' | 'humidity' | 'visibility';
  value: string | number;
  info?: string;
  className?: string;
}

export function DetailItem({ type, value, info, className }: Props) {
  const { title, unit } = getTitleAndUnit(type);

  function getTitleAndUnit(type: Props['type']): { title: string; unit: string } {
    switch (type) {
      case 'pressure':
        return {
          title: 'Pressure',
          unit: 'hPa',
        };
      case 'wind':
        return {
          title: 'Wind Status',
          unit: 'km/h',
        };
      case 'humidity':
        return {
          title: 'Humidity',
          unit: '%',
        };
      case 'visibility':
        return {
          title: 'Visibility',
          unit: 'km',
        };
      default:
        return {
          title: 'Unknown',
          unit: 'N/A',
        };
    }
  }

  return (
    <Widget className={`p-4 ${className}`}>
      <div className="flex flex-col gap-4 items-end">
        <div className="flex items-center gap-2">
          <img src={`/icons/${type}.svg`} alt={`${type} icon`} className="size-6" />
          <span className="font-medium text-base leading-none">{title}</span>
        </div>
        <p className="font-semibold text-2xl leading-none">
          {value}
          <span className="text-sm leading-none"> {unit}</span>
        </p>
        {info && <p className="text-sm leading-none">{info}</p>}
      </div>
    </Widget>
  );
}

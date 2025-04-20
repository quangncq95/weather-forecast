import Widget from '@/components/common/Widget';

interface Props {
  type: 'sunrise' | 'sunset';
  value: string | number;
  className?: string;
}

export default function SunDetailItem({ className, type, value }: Props) {
  return (
    <Widget className={`!p-4 ${className}`}>
      <div className="flex items-center justify-between h-full">
        <img src={`/images/${type}.png`} alt="Sun icon" className="size-16 object-cover" />
        <div>
          <h3 className="font-medium text-base leading-none first-letter:uppercase">{type}</h3>
          <h4 className="font-semibold text-2xl leading-none mt-2.5">{value}</h4>
        </div>
      </div>
    </Widget>
  );
}

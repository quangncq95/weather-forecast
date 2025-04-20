import Widget from '@/components/common/Widget';

interface Props {
  indexName: string;
  indexValue: string;
}

export function DetailItem() {
  return (
    <Widget className="p-4">
      <div className="flex flex-col gap-4 items-end">
        <div className="flex items-center gap-2">
          <img src="/icons/uv.svg" alt="Wind icon" className="size-6" />
          <span className="font-medium text-base leading-none">Wind Status</span>
        </div>
        <p className="font-semibold text-2xl leading-none">
          7.90 <span className="text-sm leading-none">km/h</span>
        </p>
        <p className="text-sm leading-none">9:00 AM</p>
      </div>
    </Widget>
  );
}

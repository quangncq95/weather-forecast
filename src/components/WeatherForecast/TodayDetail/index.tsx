import Widget from '@/components/common/Widget';
import { DetailItem } from './DetailItem';

export default function TodayDetail() {
  return (
    <Widget className="!bg-black-1e">
      <h3 className="font-semibold text-2xl leading-none">Today’s Highlight</h3>
      <div className="grid grid-cols-4 gap-4 mt-6">
        <DetailItem />
        <DetailItem />
      </div>
    </Widget>
  );
}

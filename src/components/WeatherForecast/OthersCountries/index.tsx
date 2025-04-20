import Widget from '@/components/common/Widget';
import CountryDetail from './CountryDetail';

export default function OthersCountries() {
  return (
    <Widget className="!bg-black-1e">
      <h3 className="font-semibold text-2xl leading-none">Others Countries</h3>
      <div className="flex flex-col gap-[1.125rem] mt-6">
        <CountryDetail />
        <CountryDetail />
      </div>
    </Widget>
  );
}

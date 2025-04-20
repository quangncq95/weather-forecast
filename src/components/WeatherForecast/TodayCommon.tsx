import Widget from '@/components/common/Widget';
import LocationIcon from '@/components/Icons/LocationIcon';
import RainyImg from '@/assets/images/type/rainy.png';

interface Props {
  className?: string;
}

export default function TodayCommon({ className }: Props) {
  return (
    <Widget className="!bg-black-1e">
      <div className={`flex flex-col gap-2 ${className}`}>
        <div className="py-2 px-4 bg-black-36 rounded-2xl flex items-center gap-2 w-fit">
          <LocationIcon />
          <p className="text-lg leading-none">Dhaka, Bangladesh</p>
        </div>
        <div className="flex justify-between gap-[29px]">
          <div>
            <h3 className="font-medium text-[2.25rem]">Sunday</h3>
            <h3 className="text-base leading-none">04 Aug,2024</h3>
          </div>
          <div className="mt-[46px] flex items-center justify-between gap-[93px]">
            <img src={RainyImg} alt="Rainy" className="size-[150px] object-fill" />
            <div className="flex flex-col gap-[45px]">
              <div className="text-right">
                <h3 className="font-medium text-[2.5rem] leading-none">28°C</h3>
                <h3 className="font-medium text-2xl leading-none text-black-b9">/24°C</h3>
              </div>
              <div className="text-right">
                <h3 className="font-medium text-xl leading-none">30°</h3>
                <h3 className="mt-[7px] text-base leading-none">Feels like 32°</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Widget>
  );
}

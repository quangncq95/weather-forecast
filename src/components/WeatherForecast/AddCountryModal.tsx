import { useState } from 'react';
import { Location } from '@/lib/types/location';
import { useModal } from '@/components/common/Modal';
import SearchCurrentLocation from './SearchCurrentLocation';
import { getLocationName } from '@/lib/utils/location';
import { useAppConfig } from '@/components/context/AppConfigProvider';
import dayjs from 'dayjs';

export default function AddCountryModal() {
  const { closeModal } = useModal();
  const [location, setLocation] = useState<Location | null>(null);
  const { listCountries, setListCountries } = useAppConfig();

  function selectLocation(location: Location) {
    setLocation(location);
  }

  function handleAddCountry() {
    if (location) {
      const newCountry = {
        ...location,
        timeId: dayjs().unix(),
      };
      const newListCountries = [newCountry, ...listCountries];
      setListCountries(newListCountries);
      setLocation(null);
      closeModal();
    }
  }

  return (
    <div className="flex flex-col items-center ">
      <h3 className="text-center font-semibold text-xl leading-none">Add country</h3>
      <div className="mt-4">
        <SearchCurrentLocation onSelectLocation={selectLocation} />
      </div>
      {location && <p className="mt-4">Selected : {getLocationName(location)}</p>}
      <div className="flex items-center gap-6 justify-between w-full mt-4">
        <button
          className="justify-center py-3 px-6 bg-slate-200 rounded-[36px] flex items-center gap-2 mt-4 cursor-pointer text-slate-800 w-full"
          onClick={() => {
            closeModal();
          }}
        >
          Cancel
        </button>
        <button
          className="justify-center py-3 px-6 bg-black-1e rounded-[36px] flex items-center gap-2 mt-4 cursor-pointer disabled:text-black-b9 text-white w-full"
          onClick={handleAddCountry}
          disabled={!location}
        >
          Add
        </button>
      </div>
    </div>
  );
}

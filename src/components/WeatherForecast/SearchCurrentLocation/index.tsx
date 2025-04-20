import Input from '@/components/common/Input';
import { useEffect, useState } from 'react';
import { Location } from '@/lib/types/location';
import { locationApi } from '@/lib/apis/locationApi';
import { useDebounce } from '@/lib/hooks/useDebounce';
import { getLocationName } from '@/lib/utils/location';

interface Props {
  className?: string;
  onSelectLocation?: (location: Location) => void;
}

export default function SearchCurrentLocation({ onSelectLocation, className }: Props) {
  const [searchValue, setSearchValue] = useState<string>('');
  const debouncedSearch = useDebounce(searchValue, 900);
  const [focused, setFocused] = useState(false);
  const onFocus = () => setFocused(true);
  const onBlur = () => setFocused(false);

  const [locations, setLocations] = useState<Location[]>([]);

  useEffect(() => {
    if (debouncedSearch.length) {
      searchLocation(debouncedSearch);
    } else {
      setLocations([]);
    }
  }, [debouncedSearch]);

  async function searchLocation(searchValue: string) {
    const res = await locationApi.getLocationsByName(searchValue);
    if (res) {
      setLocations(res);
    } else {
      setLocations([]);
    }
  }

  function handleSelectLocation(location: Location) {
    setSearchValue('');
    setLocations([]);
    onSelectLocation && onSelectLocation(location);
  }

  return (
    <div className={`${className}`}>
      <Input
        showSearchIcon
        placeholder="Search your location"
        className="w-full"
        onChange={(e) => {
          setSearchValue(e.target.value);
        }}
      />
      {locations.length > 0 && (
        <div className="relative ">
          <div className="absolute top-3 left-0 rounded-2xl bg-black-36 w-full z-10 py-3 px-4">
            {locations.map((location, index) => (
              <div
                key={index}
                className="py-3 border-b last:border-none border-black-5e cursor-pointer"
                onClick={() => {
                  handleSelectLocation(location);
                }}
              >
                {getLocationName(location)}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

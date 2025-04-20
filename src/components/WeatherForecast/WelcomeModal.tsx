import Input from '@/components/common/Input';
import MyLocationIcon from '../Icons/MyLocationIcon';
import { useAppConfig } from '@/components/context/AppConfigProvider';
import { locationApi } from '@/lib/apis/locationApi';
import { useState } from 'react';
import { Location } from '@/lib/types/location';
import { useModal } from '@/components/common/Modal';

export default function WelcomeModal() {
  const { closeModal } = useModal();
  const { setUserName, setCurrentLocation } = useAppConfig();
  const [userName, setUserNameState] = useState<string>('');
  const [location, setLocation] = useState<Location | null>(null);

  function requestUseUserLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const { latitude, longitude } = position.coords;
        const response = await locationApi.getLocationByLatLon({
          lat: latitude,
          lon: longitude,
        });
        if (response && response.length > 0) {
          const location = response[0];
          setLocation(location);
        }
      });
    }
  }

  function handleSave() {
    if (userName && location) {
      setUserName(userName);
      setCurrentLocation(location);
      closeModal();
    }
  }

  return (
    <div className="flex flex-col items-center ">
      <h3 className="text-center font-semibold text-xl leading-none">Welcome to Weather app</h3>
      <div className="text-sm leading-none mt-6 w-full">Please add your information.</div>
      <Input
        placeholder="Enter your name"
        className="mt-4 w-full"
        onChange={(e) => {
          setUserNameState(e.target.value);
        }}
      />
      <Input placeholder="Search and select your location" className="mt-4 w-full" />
      <div className="text-center mt-4">Or</div>
      <button
        onClick={requestUseUserLocation}
        className="py-3 px-6 bg-black-1e rounded-[36px] flex items-center gap-2 mt-4 cursor-pointer w-full"
      >
        <MyLocationIcon /> Use your location
      </button>
      <button
        className="py-3 px-6 bg-black-1e rounded-[36px] flex items-center gap-2 mt-4 cursor-pointer w-fit disabled:text-black-b9 text-white"
        onClick={handleSave}
        disabled={!userName || !location}
      >
        Start Application
      </button>
    </div>
  );
}

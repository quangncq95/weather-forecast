import { createContext, useEffect, useState, useContext, useRef } from 'react';
import { StorageKey } from '@/lib/constant';
import { Location } from '@/lib/types/location';
import Modal from '@/components/common/Modal';
import WelcomeModal from '@/components/WeatherForecast/WelcomeModal';

const AppConfigContext = createContext({
  currentLocation: null as Location | null,
  setCurrentLocation: (location: Location) => {},
  listCountries: [] as Country[],
  setListCountries: (countries: Country[]) => {},
  userName: '',
  setUserName: (name: string) => {},
});

export type Country = Location & { timeId: number };

export default function AppConfigProvider({ children }: { children: React.ReactNode }) {
  const [currentLocation, setStateCurrentLocation] = useState<Location | null>(null);
  const [listCountries, setStateListCountries] = useState<Country[]>([]);
  const [userName, setStateUserName] = useState<string>('');

  const modalRef = useRef<any>(null);

  useEffect(() => {
    const currentLocation = localStorage.getItem(StorageKey.CurrentLocation);
    const listCountries = localStorage.getItem(StorageKey.ListCountries);
    const userName = localStorage.getItem(StorageKey.userName);

    if (!currentLocation || !userName) {
      modalRef.current.show();
    } else {
      setStateCurrentLocation(JSON.parse(currentLocation));
      setStateListCountries(JSON.parse(listCountries || '[]'));
      setStateUserName(userName);
    }
  }, []);

  const isInitialized = !!currentLocation && !!userName;

  function setUserName(name: string) {
    setStateUserName(name);
    localStorage.setItem(StorageKey.userName, name);
  }
  function setCurrentLocation(location: Location) {
    setStateCurrentLocation(location);
    localStorage.setItem(StorageKey.CurrentLocation, JSON.stringify(location));
  }
  function setListCountries(countries: Country[]) {
    setStateListCountries(countries);
    localStorage.setItem(StorageKey.ListCountries, JSON.stringify(countries));
  }

  return (
    <AppConfigContext
      value={{
        currentLocation,
        setCurrentLocation,
        listCountries,
        setListCountries,
        userName,
        setUserName,
      }}
    >
      {isInitialized ? children : null}
      <Modal ref={modalRef} className="w-[90%] max-w-[500px]">
        <WelcomeModal />
      </Modal>
    </AppConfigContext>
  );
}

export const useAppConfig = () => {
  const context = useContext(AppConfigContext);
  if (!context) {
    throw new Error('useAppConfig must be used within a AppConfigProvider');
  }
  return context;
};

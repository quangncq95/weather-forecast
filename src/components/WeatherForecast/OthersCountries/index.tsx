import Widget from '@/components/common/Widget';
import CountryDetail from './CountryDetail';
import AddIcon from '@/components/Icons/AddIcon';
import { useAppConfig } from '@/components/context/AppConfigProvider';
import Modal from '@/components/common/Modal';
import AddCountryModal from '../AddCountryModal';
import { useRef } from 'react';

export default function OthersCountries() {
  const { listCountries } = useAppConfig();
  const modalRef = useRef<any>(null);

  return (
    <Widget className="!bg-black-1e">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-2xl leading-none">Others Countries</h3>
        <button className="flex items-center gap-2" onClick={() => modalRef.current.show()}>
          <AddIcon /> Add country
        </button>
      </div>
      <div className="flex flex-col gap-[1.125rem] mt-6">
        {listCountries.map((location, index) => {
          return <CountryDetail key={index} location={location} />;
        })}
      </div>
      <Modal ref={modalRef}>
        <AddCountryModal />
      </Modal>
    </Widget>
  );
}

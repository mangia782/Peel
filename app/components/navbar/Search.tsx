'use client';

import { useSearchParams } from 'next/navigation';
import { useMemo } from 'react';
import { BiSearch } from 'react-icons/bi';
import { differenceInDays } from 'date-fns';

import useSearchModal from '@/app/hooks/useSearchModal';
import useCountries from '@/app/hooks/useCountries';

const Search = () => {
  const searchModal = useSearchModal();
  const params = useSearchParams();
  const { getByValue } = useCountries();

  const  locationValue = params?.get('locationValue'); 

  const locationLabel = useMemo(() => {
    if (locationValue) {
      return getByValue(locationValue as string)?.label;
    }

    return 'search for a store or fruit';
  }, [locationValue, getByValue]);

  return ( 
    <div
      onClick={searchModal.onOpen}
      className="
        border-[1px] 
        w-full 
        md:w-auto 
        py-2 
        rounded-full 
        shadow-sm 
        hover:shadow-md 
        transition 
        cursor-pointer
      "
    >
      <div 
        className="
          flex 
          items-center 
          justify-between
        "
      >
        <div 
          className="
            text-sm 
            text-gray-600 
            font-semibold 
            px-6
            items-center 
          "
        >
          {locationLabel}
          
        </div>
        <div 
          className="
            text-sm 
            pl-6 
            pr-2 
            text-gray-400 
            flex 
            flex-row 
            items-center 
            gap-3
          "
        >
          <div 
            className="
              p-2 
              bg-[#f7a92b]
              rounded-full 
              text-white
            "
          >
            <BiSearch size={18} />
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default Search;

// #f7a92b //
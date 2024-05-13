'use client';

import { Range } from "react-date-range";

import Button from "../Button";
import Calendar from "../inputs/Calendar";

interface ListingReservationProps {
  price: number;
  dateRange: Range,
  totalPrice: number;
  onChangeDate: (value: Range) => void;
  onSubmit: () => void;
  disabled?: boolean;
  disabledDates: Date[];
}

const ListingReservation: React.FC<
  ListingReservationProps
> = ({
  price,
  dateRange,
  totalPrice,
  onChangeDate,
  onSubmit,
  disabled,
  disabledDates
}) => {
  return ( 
    <div 
      className="
      bg-white 
        rounded-xl 
        border-[1px]
      border-neutral-200 
        overflow-hidden
      "
    >
      <div className="
      flex flex-col items-left gap-1 p-4">
        <div className="text-2xl font-semibold p-4">
          RATING PLACEHOLDER
        </div> 
        <hr />       
        <div className="text-2xl font-light text-neutral-900 p-4">
          $ {price}
        </div>
      </div>
    </div>
   );
}
 
export default ListingReservation;
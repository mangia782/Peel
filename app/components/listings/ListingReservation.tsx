'use client';

import { Range } from "react-date-range";

import Rating from "../Rating";

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
  guestRooms: number;
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
  disabledDates,
  guestRooms,
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
        <div className="text-2xl font-semibold p-8">
          RATING:  {guestRooms}/5
          <br />
          <br />
          <Rating 
            ratingValue={guestRooms}
            size="large"
          />
        </div> 
        <hr />       
        <div className="flex flex-row text-2xl font-light text-neutral-900 p-6">
          $ {price}
            <div className="font-light text-neutral-400">
            /unit
            </div>
        </div>
      </div>
    </div>
   );
}
 
export default ListingReservation;
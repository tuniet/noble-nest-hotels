import '../styles/Booking.css'
import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { IoIosArrowDropdown  } from "react-icons/io";
import { addDays, format } from 'date-fns';
import { DateRange, DayPicker } from 'react-day-picker';

const Booking = () => {
  const { t } = useTranslation();
  const [range, setRange] = useState();


  let footer = <p>Please pick the first day.</p>;
  if (range?.from) {
    if (!range.to) {
      footer = <p>{format(range.from, 'PPP')}</p>;
    } else if (range.to) {
      footer = (
        <p>
          {format(range.from, 'PPP')}–{format(range.to, 'PPP')}
        </p>
      );
    }
  }

  return (
    <div className="booking">
      <div className='book-field ppl'>Adults / Childs <IoIosArrowDropdown  /></div>
      <div className='book-field dates'>
        <DayPicker
            id="test"
            mode="range"
            selected={range}
            footer={footer}
            onSelect={setRange}
        />Dates <IoIosArrowDropdown  /></div>
      <div className='book-field rooms'>Room <IoIosArrowDropdown  /></div>
      <Link className='link' to='/bookings'><span className='booking-btn'>BOOK NOW</span></Link>
        
    </div>
  );
};

export default Booking;


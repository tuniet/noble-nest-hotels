import '../styles/BookingComp.css'
import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { MdOutlineKeyboardArrowDown} from "react-icons/md";
import { addDays, format } from 'date-fns';
import { DateRange, DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';


const Booking = () => {
  const { t } = useTranslation();

  const [selected, setSelected] = useState('');

  const [adults , setadults] = useState(0);
  const [child , setchild] = useState(0)
  const [openppl, setOpenppl] = useState(false);
  const handleOpenppl = () => {
    setOpenppl(!openppl);
  };

  const [range, setRange] = useState();
  const [opendates, setOpendates] = useState(false);
  const handleOpendates = () => {
    setOpendates(!opendates);
  };

  const [openrooms, setOpenrooms] = useState(false);
  const handleOpenrooms = () => {
    setOpenrooms(!openrooms);
  };

  let footer = <p> Please pick the date</p>;
  if (range?.from) {
    if (!range.to) {
      footer = <p>{format(range.from, 'P')}</p>;
    } else if (range.to) {
      footer = (
        <p>
          {format(range.from, 'P')}–{format(range.to, 'P')}
        </p>
      );
    }
  }

  

  return (
    <div className="bookingcomp">
      <div className="dropdown">
      <span className='dr-button' onClick={handleOpenppl}>Adults:   {adults} / Childs:   {child} <MdOutlineKeyboardArrowDown /></span>
        <div className={`dr ${openppl ? "active" : ""}`}>
          <div> Adults: <span className='addbutton' onClick={() => setadults(adults + 1)}>+</span> {adults} <span className='subbutton' onClick={() => (adults > 0) ? setadults(adults - 1) : null}>-</span></div>
          <div> Childs: <span className='addbutton' onClick={() => setchild(child + 1)}>+</span> {child} <span className='subbutton' onClick={() => (child > 0) ? setchild(child - 1) : null}>-</span></div>
        </div>
    </div>
      <div className="dropdown">
      <span className='dr-button' onClick={handleOpendates}>Dates: {footer} <MdOutlineKeyboardArrowDown /></span>
        <div className={`dr ${opendates ? "active" : ""}`}>
          <DayPicker
            id="test"
            mode="range"
            selected={range}
            footer={footer}
            onSelect={setRange}
          />
        </div>
    </div>
    <div className="dropdown">
      <span className='dr-button' onClick={handleOpenrooms}>Rooms <MdOutlineKeyboardArrowDown /></span>
        <div className={`dr ${openrooms ? "active" : ""}`}>
          <div>
            Rooms
          </div>
        </div>
    </div>
    <Link className='link' to='/bookings'><span className='booking-btn'>BOOK NOW</span></Link>
    </div>
  );
};

export default Booking;


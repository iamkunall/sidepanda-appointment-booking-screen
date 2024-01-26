import { FaChevronDown } from 'react-icons/fa';

import './timeSlot.css';

const TimeSlots = () => {
  return (
    <div className="time-slots-container">
      <div className="variant-wrapper">
        <p className="time-slot-title">Select FROM Variants</p>
        <button className="time-slot-variant-button">
          <p>30 Min</p>
          <span className="menu-button-icon">
            <FaChevronDown />
          </span>
        </button>
      </div>
      <p className="time-slot-title">Thursday, Dec 2 - Available Slots</p>
      <div>
        <button className="time-slot-variant-button select-time-slot-button">
          <p>03:30 AM - 04:00 AM</p>
        </button>
        <button className="time-slot-variant-button select-time-slot-button">
          <p>03:30 AM - 04:00 AM</p>
        </button>
        <button className="time-slot-variant-button select-time-slot-button">
          <p>03:30 AM - 04:00 AM</p>
        </button>
        <button className="time-slot-variant-button select-time-slot-button">
          <p>03:30 AM - 04:00 AM</p>
        </button>{' '}
      </div>
    </div>
  );
};

export default TimeSlots;

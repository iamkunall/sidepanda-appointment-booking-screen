import dayjs from 'dayjs';
import { FaChevronDown } from 'react-icons/fa';
import { FaRegCircleCheck } from 'react-icons/fa6';

import Loading from '../Loading';

import './timeSlot.css';
import { useState } from 'react';

const TimeSlots = ({ selectedDate, loading, availableTimeSlots }) => {
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);

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
      <p className="time-slot-title">
        {dayjs(selectedDate).format('dddd, MMM D')}- Available Slots
      </p>
      {loading && <Loading />}
      {!loading && (
        <div className="time-slots-wrapper">
          {availableTimeSlots.map((item) => {
            const isSelected = selectedTimeSlot
              ? item.start_time === selectedTimeSlot.start_time
              : false;
            return (
              <button
                onClick={() => setSelectedTimeSlot(item)}
                className={`time-slot-variant-button select-time-slot-button ${
                  isSelected ? 'selected-time-slot' : ''
                }`}
                key={item.start_time}
              >
                <p>
                  {dayjs(item.start_time).format('hh:mm a')} -{' '}
                  {dayjs(item.end_time).format('hh:mm a')}
                </p>
                {isSelected && <FaRegCircleCheck />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default TimeSlots;

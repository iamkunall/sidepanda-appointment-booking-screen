import { useState } from 'react';
import Calendar from 'react-calendar';

import './calender.css';
const CalendarComponent = () => {
  const [value, onChange] = useState(new Date());
  return (
    <div className="calender-container">
      <div className="calender-text-wrapper">
        <p className="calender-service-title">Test Service</p>
        <p>
          <span className="timezone-text">Timezone:</span>
          <span className="timezone-area-text"> Asia/Calcutta</span>
        </p>
      </div>
      <Calendar
        onChange={onChange}
        value={value}
        next2Label={null}
        prev2Label={null}
      />
    </div>
  );
};

export default CalendarComponent;

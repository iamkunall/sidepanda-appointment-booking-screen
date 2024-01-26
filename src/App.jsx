import { useState, useEffect, useCallback } from 'react';

import { Header, Calendar, TimeSlots, Footer } from './components';
import useApi from './hooks/useApi';

import './App.css';

function App() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [availableTimeSlots, setAvailableTimeSlots] = useState([]);
  const { loading, fetchAvailableAppointments } = useApi();

  const getAvailableAppointments = useCallback(async () => {
    const res = await fetchAvailableAppointments(selectedDate);
    if (res && res.length) {
      setAvailableTimeSlots(res);
    }
  }, [selectedDate]);

  useEffect(() => {
    setAvailableTimeSlots([]);
    getAvailableAppointments();
  }, [getAvailableAppointments]);

  return (
    <div className="container">
      <Header />
      <div className="columns">
        <div className="first-column" />
        <div className="second-column">
          <div className="home-container">
            <Calendar value={selectedDate} onChange={setSelectedDate} />
            <TimeSlots
              selectedDate={selectedDate}
              loading={loading}
              availableTimeSlots={availableTimeSlots}
            />
          </div>
          <Footer />
        </div>
        <div className="third-column" />
      </div>
    </div>
  );
}

export default App;

import { useState } from 'react';
import dayjs from 'dayjs';

const useApi = () => {
  const [loading, setLoading] = useState();

  const fetchAvailableAppointments = async (date) => {
    const endDate = dayjs(date).add(10, 'day').format('YYYY-MM-DD');
    setLoading(true);
    const res = await fetch(
      `https://app.appointo.me/scripttag/mock_timeslots?start_date=${dayjs(
        date,
      ).format('YYYY-MM-DD')}&end_date=${endDate}`,
    )
      .then((response) => response.json())
      .then((data) => {
        const result = data[0];
        setLoading(true);
        return result.slots;
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    setLoading(false);

    return res;
  };

  return { fetchAvailableAppointments, loading };
};

export default useApi;

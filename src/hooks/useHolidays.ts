import { Holiday } from '@/types/kh-calendar';
import { useEffect, useState } from 'react';

export const useHolidays = (year: number) => {
  const [holidays, setHolidays] = useState<Holiday[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchHolidays = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(`/api/holidays?year=${year}`);
        if (!response.ok) {
          throw new Error('Failed to fetch holidays');
        }

        const data = await response.json();
        console.log('...................', data?.response.holidays);
        setHolidays(data?.response.holidays || []);
      } catch (err) {
        console.error('Error fetching holidays:', err);
        setError('Unable to load holidays');
        setHolidays([]);
      } finally {
        setLoading(false);
      }
    };

    fetchHolidays();
  }, [year]);

  return { holidays, loading, error };
};

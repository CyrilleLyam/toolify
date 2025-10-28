import { useState } from 'react';

interface CalendarDate {
  month: number;
  year: number;
}

export const useCalendarDate = (initialDate: Date = new Date()) => {
  const [currentDate, setCurrentDate] = useState<CalendarDate>({
    month: initialDate.getMonth(),
    year: initialDate.getFullYear(),
  });

  const handlePrevMonth = () => {
    setCurrentDate((prev) => ({
      month: prev.month === 0 ? 11 : prev.month - 1,
      year: prev.month === 0 ? prev.year - 1 : prev.year,
    }));
  };

  const handleNextMonth = () => {
    setCurrentDate((prev) => ({
      month: prev.month === 11 ? 0 : prev.month + 1,
      year: prev.month === 11 ? prev.year + 1 : prev.year,
    }));
  };

  const handleToday = () => {
    const now = new Date();
    setCurrentDate({
      month: now.getMonth(),
      year: now.getFullYear(),
    });
  };

  return {
    currentDate,
    handlePrevMonth,
    handleNextMonth,
    handleToday,
    setCurrentDate,
  };
};

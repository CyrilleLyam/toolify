'use client';

import { khmerCalendarUtils } from '@/helpers/kh-calendar';
import { Holiday } from '@/types/kh-calendar';

interface CalendarGridProps {
  calendarDays: (number | null)[];
  selectedDay: number | null;
  holidays: Holiday[];
  year: number;
  month: number;
  today: Date;
  onSelectDay: (day: number | null) => void;
}

export const CalendarGrid: React.FC<CalendarGridProps> = ({
  calendarDays,
  selectedDay,
  holidays,
  year,
  month,
  today,
  onSelectDay,
}) => (
  <div className="grid grid-cols-7 gap-0 p-2">
    {calendarDays.map((day, idx) => {
      const isWeekend = khmerCalendarUtils.isWeekend(idx);
      const isCurrentDay = khmerCalendarUtils.isToday(day, year, month, today);
      const holiday = khmerCalendarUtils.getHolidayForDay(holidays, year, month, day);

      return (
        <div
          key={idx}
          onClick={() => day && onSelectDay(day)}
          className={`
            min-h-20 p-2 rounded border flex flex-col items-center justify-center cursor-pointer transition
            ${
              day === null
                ? 'bg-transparent'
                : isCurrentDay
                  ? 'bg-red-500 text-white font-bold border-red-600 shadow-lg'
                  : selectedDay === day
                    ? 'bg-neutral-500 border-green-500 font-bold'
                    : isWeekend
                      ? ' border-red-200 hover:bg-red-150'
                      : ' border-gray-200 hover:bg-neutral-500'
            }
          `}
        >
          {day && (
            <>
              <span className="font-semibold text-lg">
                {khmerCalendarUtils.toKhmerNumeral(day)}
              </span>
              {holiday && <span className="text-xs mt-1 text-orange-600 font-bold">🎉</span>}
            </>
          )}
        </div>
      );
    })}
  </div>
);

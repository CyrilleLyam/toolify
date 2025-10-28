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
  <div className="grid grid-cols-7 gap-0.5 rounded-lg border border-white/10 bg-linear-to-br from-neutral-900/40 to-neutral-800/80 p-2 shadow-inner sm:gap-1">
    {calendarDays.map((day, idx) => {
      const isWeekend = khmerCalendarUtils.isWeekend(idx);
      const isCurrentDay = khmerCalendarUtils.isToday(day, year, month, today);
      const holiday = khmerCalendarUtils.getHolidayForDay(holidays, year, month, day);
      const isSelected = selectedDay === day;

      return (
        <div
          key={idx}
          onClick={() => day && onSelectDay(day)}
          className={`flex aspect-square cursor-pointer flex-col items-center justify-center rounded-md text-sm font-medium transition-all duration-150 select-none sm:text-base ${
            day === null
              ? 'cursor-default bg-transparent'
              : isCurrentDay
                ? 'scale-[1.02] bg-orange-600/90 font-bold text-white shadow-md ring-2 ring-orange-400/80'
                : isSelected
                  ? 'scale-[1.01] border border-white/10 bg-neutral-700/80 text-white shadow-sm'
                  : holiday
                    ? 'border border-orange-700/40 bg-neutral-700/30 text-orange-400 hover:bg-orange-900/20'
                    : isWeekend
                      ? 'bg-neutral-800/60 text-red-300 hover:bg-neutral-700/80'
                      : 'bg-neutral-900/40 text-gray-300 hover:bg-neutral-700/60'
          } `}
        >
          {day && (
            <>
              <span className="font-semibold">{khmerCalendarUtils.toKhmerNumeral(day)}</span>
              {holiday && <span className="animate-bounce-slow mt-1 text-[10px]">🎉</span>}
            </>
          )}
        </div>
      );
    })}
  </div>
);

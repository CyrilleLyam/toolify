import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ButtonBase from '@/components/ui/Button';
import { khmerCalendarUtils } from '@/helpers/kh-calendar';

interface CalendarHeaderProps {
  monthName: string;
  year: number;
  onPrevMonth: () => void;
  onNextMonth: () => void;
  onToday: () => void;
}

export const CalendarHeader: React.FC<CalendarHeaderProps> = ({
  monthName,
  year,
  onPrevMonth,
  onNextMonth,
  onToday,
}) => {
  return (
    <div className="mb-6">
      <div className="flex items-center justify-between mb-4">
        <ButtonBase
          onClick={onPrevMonth}
          className="p-2 hover:bg-white rounded-lg transition"
          aria-label="Previous month"
        >
          <ChevronLeft size={20} className="text-red-400" />
        </ButtonBase>

        <div className="text-center">
          <h2 className="text-2xl font-bold text-neutral-50">{monthName}</h2>
          <p className="text-sm text-neutral-50">{khmerCalendarUtils.toKhmerNumeral(year)}</p>
        </div>

        <ButtonBase
          onClick={onNextMonth}
          className="p-2 hover:bg-white rounded-lg transition"
          aria-label="Next month"
        >
          <ChevronRight size={20} className="text-red-400" />
        </ButtonBase>
      </div>

      <ButtonBase
        onClick={onToday}
        className="w-full py-2 px-4 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition text-sm font-medium"
      >
        ថ្ងៃ​ថ្មី
      </ButtonBase>
    </div>
  );
};

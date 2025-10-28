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
      <div className="mb-4 flex items-center justify-between">
        <ButtonBase
          onClick={onPrevMonth}
          className="grid h-9 w-9 place-items-center rounded-full bg-white/5 ring-1 ring-white/10 transition hover:bg-white/10 hover:ring-white/20 focus-visible:ring-2 focus-visible:ring-orange-500/60 focus-visible:outline-none active:scale-95"
          aria-label="Previous month"
        >
          <ChevronLeft size={18} className="text-orange-300" />
        </ButtonBase>

        <div className="text-center" aria-live="polite">
          <h2 className="bg-linear-to-r from-orange-300 via-amber-300 to-yellow-200 bg-clip-text text-2xl font-extrabold tracking-tight text-transparent drop-shadow-[0_1px_0_rgba(0,0,0,0.4)]">
            {monthName}
          </h2>
          <p className="text-sm text-neutral-300/90">{khmerCalendarUtils.toKhmerNumeral(year)}</p>
        </div>

        {/* Next */}
        <ButtonBase
          onClick={onNextMonth}
          className="bg.white/5 grid h-9 w-9 place-items-center rounded-full bg-white/5 ring-1 ring-white/10 transition hover:bg-white/10 hover:ring-white/20 focus-visible:ring-2 focus-visible:ring-orange-500/60 focus-visible:outline-none active:scale-95"
          aria-label="Next month"
        >
          <ChevronRight size={18} className="text-orange-300" />
        </ButtonBase>
      </div>

      {/* Divider */}
      <div className="mb-3 h-px w-full bg-linear-to-r from-transparent via-white/10 to-transparent" />

      {/* Today button */}
      <ButtonBase
        onClick={onToday}
        className="w-full rounded-full bg-linear-to-r from-orange-600 to-amber-500 py-2.5 text-sm font-semibold shadow-lg shadow-orange-900/30 transition hover:brightness-110 focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-900 focus-visible:outline-none active:scale-[0.99]"
        aria-label="Go to today"
      >
        ថ្ងៃ​នេះ
      </ButtonBase>
    </div>
  );
};

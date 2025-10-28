import { KHMER_DAYS } from '@/constants/KHCalendar';

export const DayHeaders = () => (
  <div className="grid grid-cols-7 gap-0 bg-neutral-600">
    {KHMER_DAYS.map((day, idx) => (
      <div
        key={idx}
        className={`py-3 text-center text-sm font-bold text-white ${
          idx === 0 || idx === 6 ? 'bg-neutral-500' : 'bg-neutral-600'
        }`}
      >
        {day}
      </div>
    ))}
  </div>
);

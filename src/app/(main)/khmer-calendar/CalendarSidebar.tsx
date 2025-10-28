import { KHMER_DAYS } from '@/constants/KHCalendar';
import { khmerCalendarUtils } from '@/helpers/kh-calendar';
import { Holiday } from '@/types/kh-calendar';
import { Loader } from 'lucide-react';

interface SidebarProps {
  selectedDay: number | null;
  year: number;
  month: number;
  holidays: Holiday[];
  loading: boolean;
  error: string | null;
  onSelectDay: (day: number) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  selectedDay,
  year,
  month,
  holidays,
  loading,
  error,
  onSelectDay,
}) => {
  const monthHolidays = khmerCalendarUtils.getHolidaysForMonth(holidays, year, month);
  const selectedDayHoliday = khmerCalendarUtils.getHolidayForDay(
    holidays,
    year,
    month,
    selectedDay
  );

  return (
    <aside className="w-full lg:w-80">
      <div className="sticky top-6 overflow-hidden rounded-xl border border-white/10 bg-neutral-900/50 shadow-xl backdrop-blur">
        {/* Header */}
        <div className="bg-linear-to-r from-orange-600/90 via-amber-500/80 to-yellow-400/70 p-4 text-white">
          <h3 className="text-base font-extrabold tracking-tight drop-shadow sm:text-lg">
            ថ្ងៃបុណ្យដែលសំខាន់
          </h3>
        </div>

        {/* Loading */}
        {loading && (
          <div className="p-6 text-center text-neutral-300">
            <Loader className="mx-auto animate-spin" size={22} />
            <p className="mt-2 text-sm">កំពុងផ្ទុក…</p>
          </div>
        )}

        {/* Error */}
        {error && (
          <div className="border-b border-red-500/30 bg-red-900/30 p-4 text-red-200">
            <p className="text-sm">{error}</p>
          </div>
        )}

        {/* Selected Day */}
        {!loading && selectedDay && (
          <div className="border-b border-white/10 p-4">
            <div className="flex items-baseline gap-2">
              <div className="grid h-10 w-10 place-items-center rounded-lg bg-orange-600/90 font-bold text-white shadow ring-1 ring-orange-400/50">
                {khmerCalendarUtils.toKhmerNumeral(selectedDay)}
              </div>
              <div className="text-sm text-neutral-300">
                {KHMER_DAYS[new Date(year, month, selectedDay).getDay()]}
              </div>
            </div>

            <div className="mt-3">
              {selectedDayHoliday ? (
                <div className="rounded-lg border border-orange-400/30 bg-neutral-800/60 p-3">
                  <p className="font-semibold text-orange-200">{selectedDayHoliday.name}</p>
                  <p className="mt-1 text-xs text-neutral-300">{selectedDayHoliday.description}</p>
                </div>
              ) : (
                <p className="text-sm text-neutral-400 italic">គ្មានព្រឹត្តិការណ៍</p>
              )}
            </div>
          </div>
        )}

        {/* Month holidays */}
        <div className="p-4">
          <h4 className="mb-3 font-bold text-neutral-200">
            ថ្ងៃបុណ្យសរុបក្នុងខែ​នេះ ({monthHolidays.length})
          </h4>

          {monthHolidays.length === 0 ? (
            <p className="text-sm text-neutral-500 italic">គ្មានថ្ងៃបុណ្យក្នុងខែ​នេះ</p>
          ) : (
            <div className="max-h-96 space-y-2 overflow-y-auto pr-1 [scrollbar-width:none] [&::-webkit-scrollbar]:w-0">
              {monthHolidays.map((holiday) => {
                const day = new Date(holiday.date.iso).getDate();
                const isActive = selectedDay === day;

                return (
                  <button
                    key={holiday.date.iso}
                    onClick={() => onSelectDay(day)}
                    className={`w-full rounded-lg p-3 text-left transition focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500/70 ${
                      isActive
                        ? 'border border-white/15 bg-neutral-800/80 shadow-inner'
                        : 'border border-white/10 bg-neutral-900/50 hover:bg-neutral-800/70'
                    } `}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold text-neutral-200">
                        {khmerCalendarUtils.toKhmerNumeral(day)}
                      </span>
                      <span className="text-[11px] font-semibold text-amber-300">🎉 ថ្ងៃបុណ្យ</span>
                    </div>
                    <p className="mt-1 text-sm text-neutral-200">{holiday.name}</p>
                    <p className="mt-1 text-xs text-neutral-400">{holiday.description}</p>
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </aside>
  );
};

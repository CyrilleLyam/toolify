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
    <div className="w-80">
      <div className="bg-neutral-600 rounded-lg shadow-lg overflow-hidden sticky top-6">
        {/* Sidebar Header */}
        <div className="bg-linear-to-r from-neutral-700 to-emerald-100 p-4 text-white">
          <h3 className="font-bold text-lg">ថ្ងៃបុណ្យដែលសំខាន់</h3>
        </div>

        {/* Loading state */}
        {loading && (
          <div className="p-4 text-center">
            <Loader className="animate-spin mx-auto" size={24} />
            <p className="text-sm text-gray-600 mt-2">កំពុងផ្ទុក...</p>
          </div>
        )}

        {/* Error state */}
        {error && (
          <div className="border-b p-4 bg-red-50">
            <p className="text-sm text-red-600">{error}</p>
          </div>
        )}

        {/* Selected Day Details */}
        {!loading && selectedDay && (
          <div className="border-b p-4 bg-neutral-600">
            <div className="text-2xl font-bold text-white mb-2">
              {khmerCalendarUtils.toKhmerNumeral(selectedDay)}
            </div>
            <div className="text-sm text-white mb-3">
              {KHMER_DAYS[new Date(year, month, selectedDay).getDay()]}
            </div>
            {selectedDayHoliday ? (
              <div className=" p-3 rounded border-l-4 border-orange-300">
                <p className="font-semibold text-white">{selectedDayHoliday.name}</p>
                <p className="text-xs text-white mt-1">{selectedDayHoliday.description}</p>
              </div>
            ) : (
              <p className="text-white italic text-sm">គ្មានព្រឹត្តិការណ៍</p>
            )}
          </div>
        )}

        {/* Holidays List */}
        <div className="p-4">
          <h4 className="font-bold text-white mb-3">
            ថ្ងៃបុណ្យសរុបក្នងខែនេះ ({monthHolidays.length})
          </h4>
          {monthHolidays.length === 0 ? (
            <p className="text-gray-500 italic text-sm">គ្មានថ្ងៃបុណ្យក្នុងខែនេះ</p>
          ) : (
            <div className="space-y-2 max-h-96 overflow-y-auto" style={{ scrollbarWidth: 'none' }}>
              {monthHolidays.map((holiday) => {
                const day = new Date(holiday.date.iso).getDate();
                return (
                  <div
                    key={holiday.date.iso}
                    onClick={() => onSelectDay(day)}
                    className={`
                      p-3 rounded border-l-4 cursor-pointer transition
                      ${
                        selectedDay === day
                          ? 'bg-neutral-600 border-green-100 shadow'
                          : 'bg-neutral-500/80 border-orange-100 hover:bg-neutral-500'
                      }
                    `}
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-sm">
                        {khmerCalendarUtils.toKhmerNumeral(day)}
                      </span>
                      <span className="text-xs font-semibold text-yellow-300">🎉 ថ្ងៃបុណ្យ</span>
                    </div>
                    <p className="text-sm text-white mt-1">{holiday.name}</p>
                    <p className="text-xs text-white mt-1">{holiday.description}</p>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

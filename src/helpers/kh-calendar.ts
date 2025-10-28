import { KHMER_MONTHS, KHMER_NUMERALS } from '@/constants/KHCalendar';
import { Holiday, KhmerCalendarLogic } from '@/types/kh-calendar';

export const khmerCalendarUtils: KhmerCalendarLogic = {
  toKhmerNumeral(num: number): string {
    return String(num)
      .split('')
      .map((digit) => KHMER_NUMERALS[parseInt(digit)])
      .join('');
  },

  getKhmerMonthName(monthIndex: number): string {
    return KHMER_MONTHS[monthIndex];
  },

  getDaysInMonth(year: number, month: number): number {
    return new Date(year, month + 1, 0).getDate();
  },

  getFirstDayOfMonth(year: number, month: number): number {
    return new Date(year, month, 1).getDay();
  },

  generateCalendarDays(year: number, month: number): (number | null)[] {
    const firstDay = this.getFirstDayOfMonth(year, month);
    const daysInMonth = this.getDaysInMonth(year, month);
    const days: (number | null)[] = [];

    // Add null for empty cells before the first day
    for (let i = 0; i < firstDay; i++) {
      days.push(null);
    }

    // Add days of the month
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(i);
    }

    return days;
  },
  /**
   * Get holidays for a specific month
   */
  getHolidaysForMonth(holidays: Holiday[], year: number, month: number): Holiday[] {
    return holidays
      .filter((holiday) => {
        const holidayDate = new Date(holiday.date.iso);
        return holidayDate.getMonth() === month && holidayDate.getFullYear() === year;
      })
      .sort((a, b) => new Date(a.date.iso).getTime() - new Date(b.date.iso).getTime());
  },

  /**
   * Get holiday for a specific day
   */
  getHolidayForDay(
    holidays: Holiday[],
    year: number,
    month: number,
    day: number | null
  ): Holiday | null {
    if (!day) return null;
    const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    return holidays.find((h) => h.date.iso === dateStr) || null;
  },

  /**
   * Check if a date is today
   */
  isToday(day: number | null, currentYear: number, currentMonth: number, todayDate: Date): boolean {
    if (!day) return false;
    return (
      day === todayDate.getDate() &&
      currentMonth === todayDate.getMonth() &&
      currentYear === todayDate.getFullYear()
    );
  },

  /**
   * Check if a day index is weekend
   */
  isWeekend(dayIndex: number): boolean {
    return dayIndex % 7 === 0 || dayIndex % 7 === 6;
  },

  /**
   * Validate date range
   */
  isValidDate(year: number, month: number, day: number): boolean {
    const date = new Date(year, month, day);
    return date.getFullYear() === year && date.getMonth() === month && date.getDate() === day;
  },
};

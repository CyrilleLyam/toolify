export interface KhmerCalendarLogic {
  toKhmerNumeral(num: number): string;
  getKhmerMonthName(monthIndex: number): string;
  getDaysInMonth(year: number, month: number): number;
  getFirstDayOfMonth(year: number, month: number): number;
  generateCalendarDays(year: number, month: number): (number | null)[];
  getHolidaysForMonth(holidays: Holiday[], year: number, month: number): Holiday[];
  getHolidayForDay(
    holidays: Holiday[],
    year: number,
    month: number,
    day: number | null
  ): Holiday | null;
  isToday(day: number | null, currentYear: number, currentMonth: number, todayDate: Date): boolean;
  isWeekend(dayIndex: number): boolean;
  isValidDate(year: number, month: number, day: number): boolean;
}
export interface Holiday {
  name: string;
  type: string | string[];
  country: { id: string; name: string };
  date: { iso: string; datetime: any };
  description?: string;
  locations?: string;
  primary_type: string;
  states: string;
  urlid: string;
}

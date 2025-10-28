/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import useSWR from 'swr';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import { khmerCalendarUtils } from '@/helpers/kh-calendar';
import { useCalendarDate } from '@/hooks/useCalendarDate';

const Sidebar = dynamic(() => import('./CalendarSidebar').then((mod) => mod.Sidebar));
const CalendarGrid = dynamic(() => import('./CalendarGrid').then((mod) => mod.CalendarGrid));
const CalendarHeader = dynamic(() => import('./CalendarHeader').then((mod) => mod.CalendarHeader));
const DayHeaders = dynamic(() => import('./DayHeaders').then((mod) => mod.DayHeaders));

export default function KhmerCalendar() {
  const today = new Date();
  const [todayStr, setTodayStr] = useState('');
  const [selectedDay, setSelectedDay] = useState<number | null>(today.getDate());
  const { currentDate, handlePrevMonth, handleNextMonth, handleToday } = useCalendarDate(today);

  useEffect(() => {
    setTodayStr(new Intl.DateTimeFormat('km-KH', { dateStyle: 'short' }).format(today));
  }, [today]);

  type HolidaysResponse = { response?: { holidays?: any[] } };
  const { data, error, isLoading } = useSWR<HolidaysResponse>(
    `/api/holidays?year=${currentDate.year}`
  );

  const holidays = (data?.response?.holidays ?? []) as any[];
  const calendarDays = khmerCalendarUtils.generateCalendarDays(currentDate.year, currentDate.month);
  const monthName = khmerCalendarUtils.getKhmerMonthName(currentDate.month);

  return (
    <div
      className="mx-auto max-w-5xl rounded-xl bg-linear-to-br from-orange-50/5 to-neutral-700/90 p-4 shadow-lg sm:p-6"
      style={{ fontFamily: "'Kantumruy Pro', sans-serif" }}
    >
      <div className="flex flex-col gap-6 lg:flex-row">
        <div className="w-7/12 min-w-0">
          <CalendarHeader
            monthName={monthName}
            year={currentDate.year}
            onPrevMonth={handlePrevMonth}
            onNextMonth={handleNextMonth}
            onToday={handleToday}
          />
          <DayHeaders />
          <CalendarGrid
            calendarDays={calendarDays}
            selectedDay={selectedDay}
            holidays={holidays}
            year={currentDate.year}
            month={currentDate.month}
            today={today}
            onSelectDay={setSelectedDay}
          />
          <div className="mt-6 border-t border-orange-200 pt-4 text-center text-xs text-white">
            <p className="text-center text-gray-300">ប្រតិទិនខ្មែរ</p>
            <p className="mt-1 text-gray-400" suppressHydrationWarning>
              {todayStr || '—'}
            </p>
          </div>
        </div>

        <Sidebar
          selectedDay={selectedDay}
          year={currentDate.year}
          month={currentDate.month}
          holidays={holidays}
          loading={isLoading}
          error={error ? error.message : null}
          onSelectDay={setSelectedDay}
        />
      </div>
    </div>
  );
}

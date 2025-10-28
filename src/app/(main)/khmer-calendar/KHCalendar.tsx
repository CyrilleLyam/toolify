'use client';

import React, { useState } from 'react';
import { khmerCalendarUtils } from '@/helpers/kh-calendar';
import { useHolidays } from '@/hooks/useHolidays';
import { useCalendarDate } from '@/hooks/useCalendarDate';

import dynamic from 'next/dynamic';
const Sidebar = dynamic(() => import('./CalendarSidebar').then((mod) => mod.Sidebar));
const CalendarGrid = dynamic(() => import('./CalendarGrid').then((mod) => mod.CalendarGrid));
const CalendarHeader = dynamic(() => import('./CalendarHeader').then((mod) => mod.CalendarHeader));
const DayHeaders = dynamic(() => import('./DayHeaders').then((mod) => mod.DayHeaders));

export default function KhmerCalendar() {
  const today = new Date();
  const [selectedDay, setSelectedDay] = useState<number | null>(today.getDate());

  const { currentDate, handlePrevMonth, handleNextMonth, handleToday } = useCalendarDate(today);
  const { holidays, loading, error } = useHolidays(currentDate.year);

  const calendarDays = khmerCalendarUtils.generateCalendarDays(currentDate.year, currentDate.month);
  const monthName = khmerCalendarUtils.getKhmerMonthName(currentDate.month);

  return (
    <div
      className="w-[80%] p-6 bg-linear-to-br from-orange-50/5 to-neutral-500/90 rounded-lg shadow-lg"
      style={{ fontFamily: "'Kantumruy Pro', sans-serif" }}
    >
      <div className="w-full flex gap-6">
        {/* Left Column - Calendar */}
        <div className="min-w-7/12">
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

          {/* Footer info */}
          <div className="mt-6 pt-4 border-t border-orange-200 text-center text-xs text-white">
            <p>ប្រតិទិនខ្មែរ</p>
            <p className="mt-1">{today.toLocaleDateString('km-KH')}</p>
          </div>
        </div>

        {/* Right Column - Sidebar */}
        <Sidebar
          selectedDay={selectedDay}
          year={currentDate.year}
          month={currentDate.month}
          holidays={holidays}
          loading={loading}
          error={error}
          onSelectDay={setSelectedDay}
        />
      </div>
    </div>
  );
}

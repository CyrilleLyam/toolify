import { Metadata } from 'next';
import KhmerCalendar from './KHCalendar';

export const metadata: Metadata = {
  title: 'Khmer Calendar',
};
export default function KhmerCalendarPage() {
  return (
    <>
      <h1 className="text-3xl font-bold mb-4 text-orange-400">Khmer Calendar</h1>
      <p className="text-zinc-400 mb-8">
        A beautiful Khmer calendar displaying traditional Khmer months and days.
      </p>
      <KhmerCalendar />
    </>
  );
}

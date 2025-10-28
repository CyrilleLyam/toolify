import { Metadata } from 'next';
import KhmerCalendar from './KHCalendar';

export const metadata: Metadata = {
  title: 'Khmer Calendar',
};
export default function KhmerCalendarPage() {
  return (
    <>
      <h1 className="mb-4 text-3xl font-extrabold tracking-tight text-orange-400">
        Khmer Calendar
      </h1>
      <p className="mt-1 mb-6 text-sm text-gray-400">
        A beautiful Khmer calendar displaying traditional Khmer months and days.
      </p>
      <KhmerCalendar />
    </>
  );
}

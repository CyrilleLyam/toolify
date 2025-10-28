import { Metadata } from 'next';
import { CronGenerator } from './CronGenerator';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Cron Expression Builder',
};
export default function CronExpressionPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100 px-6 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="text-3xl font-bold mb-4 text-neutral-400">Cron Expression Builder</h1>
        <p className="text-zinc-400 mb-8">
          Easily create and validate cron expressions for scheduling tasks. Supports common patterns
          and custom configurations.
        </p>
        <CronGenerator />
        <Link
          href="/"
          className="inline-block mt-10 text-sm text-zinc-400 hover:text-zinc-200 transition"
        >
          ← Back to Tools
        </Link>
      </div>
    </main>
  );
}

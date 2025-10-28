import { Metadata } from 'next';
import { CronGenerator } from './CronGenerator';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Cron Expression Builder',
};
export default function CronExpressionPage() {
  return (
    <main className="min-h-screen bg-zinc-950 px-6 py-20 text-zinc-100">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="mb-4 text-3xl font-bold text-neutral-400">Cron Expression Builder</h1>
        <p className="mb-8 text-zinc-400">
          Easily create and validate cron expressions for scheduling tasks. Supports common patterns
          and custom configurations.
        </p>
        <CronGenerator />
        <Link
          href="/"
          className="mt-10 inline-block text-sm text-zinc-400 transition hover:text-zinc-200"
        >
          ← Back to Tools
        </Link>
      </div>
    </main>
  );
}

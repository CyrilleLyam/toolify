import BackButton from '@/components/BackButton';
import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-neutral-950 px-6 py-24 text-center">
      <div>
        <p className="text-sm font-semibold text-rose-500">404</p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
          Page not found
        </h1>
        <p className="mt-4 text-base text-gray-400">
          This page doesn’t exist or got moved. Happens.
        </p>
        <div className="mt-8 flex justify-center gap-3">
          <Link
            href="/"
            className="rounded-lg bg-white px-4 py-2 text-sm font-medium text-gray-900 transition hover:cursor-pointer hover:bg-gray-200"
          >
            Go home
          </Link>
          <BackButton />
        </div>
      </div>
    </main>
  );
}

import Link from 'next/link';
import { PasswordGenerator } from './PasswordGenerator';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Password Generator',
};
export default function PasswordGeneratorPage() {
  return (
    <main className="min-h-screen bg-zinc-950 px-6 py-20 text-zinc-100">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="mb-4 text-3xl font-bold text-green-400">Password Generator</h1>
        <p className="mb-8 text-zinc-400">
          Generate cryptographically secure passwords instantly in your browser.
        </p>

        <PasswordGenerator />

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

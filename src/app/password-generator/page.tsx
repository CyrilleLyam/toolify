import Link from 'next/link';
import { PasswordGenerator } from './PasswordGenerator';

export default function PasswordGeneratorPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100 px-6 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="text-3xl font-bold mb-4 text-green-400">Password Generator</h1>
        <p className="text-zinc-400 mb-8">
          Generate cryptographically secure passwords instantly in your browser.
        </p>

        <PasswordGenerator />

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

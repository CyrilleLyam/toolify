import Link from 'next/link';
import SecretGenerator from './SecretGenerator';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'JWT Secret Generator',
};
export default function JwtSecretGeneratorPage() {
  return (
    <main className="min-h-screen bg-zinc-950 px-6 py-20 text-zinc-100">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="mb-4 text-3xl font-bold text-blue-400">JWT Secret Generator</h1>
        <p className="mb-8 text-zinc-400">
          Generate cryptographically secure JWT signing secrets (Base64URL encoded).
        </p>

        <SecretGenerator />

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

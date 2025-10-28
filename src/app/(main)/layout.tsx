import Link from 'next/link';

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen bg-zinc-950 px-6 py-20 text-zinc-100">
      <div className="mx-auto max-w-5xl text-center">
        {children}
        <Link
          href="/"
          className="mt-10 inline-block text-center text-sm text-zinc-400 transition hover:text-zinc-200"
        >
          ← Back to Tools
        </Link>
      </div>
    </main>
  );
}

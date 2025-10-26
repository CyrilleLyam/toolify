import crypto from "crypto";
import Link from "next/link";
import CopyButton from "@/components/CopyButton";

function makePassword(len = 20) {
  const pool =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+[]{};:,.?/|~";
  const out: string[] = [];
  for (let i = 0; i < len; i++) out.push(pool[crypto.randomInt(pool.length)]);
  return out.join("");
}

export default async function PasswordGeneratorPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const params = await searchParams;
  const shouldGenerate = params?.gen === "1";
  const pwd = shouldGenerate ? makePassword(20) : "";

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100 px-6 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="text-3xl font-bold mb-4 text-green-400">
          Password Generator
        </h1>
        <p className="text-zinc-400 mb-8">
          Generate cryptographically secure passwords server-side.
        </p>

        <form
          method="GET"
          className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-6"
        >
          <input
            type="text"
            readOnly
            value={pwd}
            placeholder="Click Generate"
            className="w-full bg-zinc-950 border border-zinc-800 rounded-md p-3 text-center text-zinc-100 font-mono text-sm mb-4"
          />
          <div className="flex justify-center gap-3">
            <input type="hidden" name="gen" value="1" />
            <button
              type="submit"
              className="rounded-md bg-green-500 px-4 py-2 text-sm font-semibold text-black hover:bg-green-400 transition"
            >
              Generate
            </button>
            <CopyButton text={pwd} />
          </div>
        </form>

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

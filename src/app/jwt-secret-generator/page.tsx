import crypto from "crypto";
import Link from "next/link";
import CopyButton from "@/components/CopyButton";

function makeJwtSecret(byteLength = 64) {
  return crypto.randomBytes(byteLength).toString("base64url");
}

export default async function JwtSecretGeneratorPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const params = await searchParams;
  const shouldGenerate = params?.gen === "1";
  const secret = shouldGenerate ? makeJwtSecret(64) : "";

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100 px-6 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="text-3xl font-bold mb-4 text-blue-400">
          JWT Secret Generator
        </h1>
        <p className="text-zinc-400 mb-8">
          Generate cryptographically secure JWT signing secrets (Base64URL
          encoded).
        </p>

        <form
          method="GET"
          className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-6"
        >
          <input
            type="text"
            readOnly
            value={secret}
            placeholder="Click Generate"
            className="w-full bg-zinc-950 border border-zinc-800 rounded-md p-3 text-center text-zinc-100 font-mono text-xs mb-4 break-all"
          />
          <div className="flex justify-center gap-3">
            <input type="hidden" name="gen" value="1" />
            <button
              type="submit"
              className="rounded-md bg-blue-500 px-4 py-2 text-sm font-semibold text-black hover:bg-blue-400 transition"
            >
              Generate
            </button>
            <CopyButton text={secret} />
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

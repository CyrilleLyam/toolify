"use client";

export default function CopyButton({ text }: { text: string }) {
  async function handleCopy() {
    if (!text) return;
    await navigator.clipboard.writeText(text);
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      disabled={!text}
      className="rounded-md border border-zinc-700 px-4 py-2 text-sm text-zinc-300 hover:bg-zinc-800 transition disabled:opacity-40 hover:cursor-pointer"
    >
      Copy
    </button>
  );
}

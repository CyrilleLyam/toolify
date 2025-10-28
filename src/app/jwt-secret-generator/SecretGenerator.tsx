'use client';

import { useState } from 'react';
import CopyButton from '@/components/CopyButton';

function makeJwtSecret(byteLength = 64) {
  const bytes = new Uint8Array(byteLength);
  crypto.getRandomValues(bytes);

  const base64 = btoa(String.fromCharCode(...bytes))
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '');
  return base64;
}

export default function SecretGenerator() {
  const [secret, setSecret] = useState('');

  function handleGenerate() {
    setSecret(makeJwtSecret(64));
  }

  return (
    <div className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-6">
      <input
        type="text"
        readOnly
        value={secret}
        placeholder="Click Generate"
        className="mb-4 w-full rounded-md border border-zinc-800 bg-zinc-950 p-3 text-center font-mono text-xs break-all text-zinc-100"
      />
      <div className="flex justify-center gap-3">
        <button
          type="button"
          onClick={handleGenerate}
          className="rounded-md bg-blue-500 px-4 py-2 text-sm font-semibold text-black transition hover:cursor-pointer hover:bg-blue-400"
        >
          Generate
        </button>
        <CopyButton text={secret} />
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import CopyButton from "@/components/CopyButton";

function makePassword(length = 20) {
  const chars =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+[]{};:,.?/|~";
  const array = new Uint32Array(length);
  crypto.getRandomValues(array);
  return Array.from(array, (num) => chars[num % chars.length]).join("");
}

export default function PasswordGenerator() {
  const [password, setPassword] = useState("");

  function handleGenerate() {
    setPassword(makePassword(20));
  }

  return (
    <div className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-6">
      <input
        type="text"
        readOnly
        value={password}
        placeholder="Click Generate"
        className="w-full bg-zinc-950 border border-zinc-800 rounded-md p-3 text-center text-zinc-100 font-mono text-sm mb-4"
      />
      <div className="flex justify-center gap-3">
        <button
          type="button"
          onClick={handleGenerate}
          className="rounded-md bg-green-500 px-4 py-2 text-sm font-semibold text-black hover:bg-green-400 transition"
        >
          Generate
        </button>
        <CopyButton text={password} />
      </div>
    </div>
  );
}

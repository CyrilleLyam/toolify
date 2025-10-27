'use client';

import { useState } from 'react';
import CopyButton from '@/components/CopyButton';
import InputBase from '@/components/ui/Input';
import { CheckboxBase } from '@/components/ui/Checkbox';
import { PasswordOptions } from '@/types/password';

function makePassword(options: PasswordOptions) {
  if (options.length < 5) options.length = 5;
  const chars =
    'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+[]{};:,.?/|~';
  const array = new Uint32Array(options.length);
  crypto.getRandomValues(array);
  return Array.from(array, (num) => chars[num % chars.length]).join('');
}

export function PasswordGenerator() {
  const [password, setPassword] = useState('');
  const [options, setOptions] = useState<PasswordOptions>({
    length: 20,
    AZ: true,
    az: true,
    numbers: true,
    symbols: false,
  });

  function handleGenerate() {
    setPassword(makePassword(options));
  }

  return (
    <div className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-6">
      <div className="w-full grid grid-cols-1 mb-6 gap-4">
        <div className="space-y-2">
          <label htmlFor="Password Length" className="text-xs font-medium text-left block">
            Password Length
          </label>
          <InputBase
            className="focus-visible:ring-[1px]"
            id="password-length"
            type="number"
            min={5}
            value={options.length}
            onChange={(e) => setOptions({ ...options, length: Number(e.target.value) })}
          />
        </div>
        <div className="flex gap-6">
          <div className="flex items-center gap-2">
            <CheckboxBase
              id="AZ"
              checked={options.AZ}
              onChange={(e) => setOptions({ ...options, AZ: Boolean(e.target.checked) })}
            />
            <label htmlFor="AZ" className="text-sm font-medium">
              A-Z
            </label>
          </div>
          <div className="flex items-center gap-2">
            <CheckboxBase
              id="az"
              checked={options.az}
              onChange={(e) => setOptions({ ...options, az: Boolean(e.target.checked) })}
            />
            <label htmlFor="az" className="text-sm font-medium">
              a-z
            </label>
          </div>
          <div className="flex items-center gap-2">
            <CheckboxBase
              id="numbers"
              checked={options.numbers}
              onChange={(e) => setOptions({ ...options, numbers: Boolean(e.target.checked) })}
            />
            <label htmlFor="numbers" className="text-sm font-medium">
              0-9
            </label>
          </div>
          <div className="flex items-center gap-2">
            <CheckboxBase
              id="symbols"
              checked={options.symbols}
              onChange={(e) => setOptions({ ...options, symbols: Boolean(e.target.checked) })}
            />
            <label htmlFor="symbols" className="text-sm font-medium">
              !@#$%^&*
            </label>
          </div>
        </div>
      </div>
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

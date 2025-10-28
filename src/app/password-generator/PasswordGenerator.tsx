'use client';

import { useState } from 'react';
import CopyButton from '@/components/CopyButton';
import InputBase from '@/components/ui/Input';
import { CheckboxBase } from '@/components/ui/Checkbox';
import { PasswordOptions } from '@/types/password';
import { makePassword } from '@/helpers/generate-password';

type OptionId = Exclude<keyof PasswordOptions, 'length'>;
const checkboxOptions: Array<{ id: OptionId; label: string }> = [
  { id: 'AZ', label: 'A-Z' },
  { id: 'az', label: 'a-z' },
  { id: 'numbers', label: '0-9' },
  { id: 'symbols', label: '!@#$%^&*' },
];
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
      <div className="mb-6 grid w-full grid-cols-1 gap-4">
        <div className="space-y-2">
          <label htmlFor="Password Length" className="block text-left text-xs font-medium">
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
          {checkboxOptions.map(({ id, label }) => (
            <div className="flex items-center gap-2" key={id}>
              <CheckboxBase
                id={id}
                checked={options[id]}
                onChange={(e) => setOptions({ ...options, [id]: Boolean(e.target.checked) })}
              />
              <label htmlFor={id} className="text-sm font-medium">
                {label}
              </label>
            </div>
          ))}
        </div>
      </div>
      <input
        type="text"
        readOnly
        value={password}
        placeholder="Click Generate"
        className="mb-4 w-full rounded-md border border-zinc-800 bg-zinc-950 p-3 text-center font-mono text-sm text-zinc-100"
      />
      <div className="flex justify-center gap-3">
        <button
          type="button"
          onClick={handleGenerate}
          className="rounded-md bg-green-500 px-4 py-2 text-sm font-semibold text-black transition hover:bg-green-400"
        >
          Generate
        </button>
        <CopyButton text={password} />
      </div>
    </div>
  );
}

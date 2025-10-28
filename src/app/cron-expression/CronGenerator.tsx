'use client';

import { useState } from 'react';
import CopyButton from '@/components/CopyButton';
import InputBase from '@/components/ui/Input';

export function CronGenerator() {
  const [cronExpression, setCronExpression] = useState('*/5 * * * *');
  return (
    <div className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-6">
      <div className="mb-6 grid w-full grid-cols-1 gap-4">
        <div className="space-y-2">
          <label htmlFor="cron-expression" className="block text-left text-xs font-medium">
            Cron Expression
          </label>
          <div className="flex gap-2">
            <InputBase
              className="focus-visible:ring-[1px]"
              id="cron-expression"
              type="text"
              value={cronExpression}
              onChange={(e) => setCronExpression(e.target.value)}
              readOnly
            />
            <CopyButton text={cronExpression} />
          </div>
        </div>
        <div>Continue building...</div>
      </div>
    </div>
  );
}

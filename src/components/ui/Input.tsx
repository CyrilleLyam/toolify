'use client';
import * as React from 'react';
import { cn } from '@/libs/utils-classes';
import { InputVariant, UISize } from '@/types/ui';

export type InputBaseProps = React.InputHTMLAttributes<HTMLInputElement> & {
  variant?: InputVariant;
  inputSize?: UISize;
};

const variantStyles: Record<InputVariant, string> = {
  default: '',
  destructive:
    'border-destructive focus-visible:border-destructive focus-visible:ring-destructive/50',
  outline: 'border-2',
};

const sizeStyles: Record<UISize, string> = {
  sm: 'h-8 px-2.5 py-1 text-xs rounded',
  md: 'h-9 px-3 py-1 text-base md:text-sm rounded-md',
  lg: 'h-11 px-4 py-2 text-base rounded-md',
};
const InputBase = React.forwardRef<HTMLInputElement, InputBaseProps>(
  ({ className, type, variant = 'default', inputSize = 'md', ...props }, ref) => {
    return (
      <input
        type={type}
        data-slot="input"
        ref={ref}
        className={cn(
          'file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input w-full min-w-0 border bg-transparent shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50',
          'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-1',
          'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive',
          sizeStyles[inputSize],
          variantStyles[variant],
          className
        )}
        {...props}
      />
    );
  }
);

InputBase.displayName = 'InputBase';

export default InputBase;

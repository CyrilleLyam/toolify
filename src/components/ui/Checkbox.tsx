'use client';

import * as React from 'react';
import { cn } from '@/libs/utils-classes';
import { CheckboxVariant, UISize } from '@/types/ui';

export type CheckboxBaseProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> & {
  onCheckedChange?: (checked: boolean) => void;
  variant?: CheckboxVariant;
  checkboxSize?: UISize;
};
const variantStyles: Record<CheckboxVariant, string> = {
  default: 'checked:bg-primary checked:border-primary dark:checked:bg-primary',
  destructive:
    'border-destructive checked:bg-destructive checked:border-destructive focus-visible:border-destructive focus-visible:ring-destructive/50',
  outline: 'border-2',
};

const sizeStyles: Record<UISize, string> = {
  sm: 'size-3.5',
  md: 'size-4',
  lg: 'size-5',
};

const strokeWidths: Record<UISize, number> = {
  sm: 1.5,
  md: 2,
  lg: 2.5,
};
const CheckboxBase = React.forwardRef<HTMLInputElement, CheckboxBaseProps>(
  (
    {
      className,
      onCheckedChange,
      checked,
      defaultChecked,
      variant = 'default',
      checkboxSize = 'md',
      ...props
    },
    ref
  ) => {
    const [isChecked, setIsChecked] = React.useState(defaultChecked || false);
    const isControlled = checked !== undefined;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newChecked = e.target.checked;
      if (!isControlled) {
        setIsChecked(newChecked);
      }
      onCheckedChange?.(newChecked);
      props.onChange?.(e);
    };

    const checkedValue = isControlled ? checked : isChecked;

    return (
      <div className="relative inline-flex">
        <input
          type="checkbox"
          ref={ref}
          data-slot="checkbox"
          checked={checkedValue}
          onChange={handleChange}
          className={cn(
            'peer border-input shrink-0 appearance-none rounded-sm border bg-transparent shadow-xs transition-shadow outline-none',
            'dark:bg-input/30',
            'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
            'checked:text-primary-foreground',
            'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive',
            'disabled:cursor-not-allowed disabled:opacity-50',
            sizeStyles[checkboxSize],
            variantStyles[variant],
            className
          )}
          {...props}
        />
        <svg
          className={cn(
            'text-primary-foreground pointer-events-none absolute inset-0 opacity-0 transition-opacity peer-checked:opacity-100',
            sizeStyles[checkboxSize]
          )}
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 5L6.5 10.5L4 8"
            stroke="currentColor"
            strokeWidth={strokeWidths[checkboxSize]}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    );
  }
);

CheckboxBase.displayName = 'CheckboxBase';

export { CheckboxBase };

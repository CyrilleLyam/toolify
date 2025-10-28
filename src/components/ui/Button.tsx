'use client';
import * as React from 'react';
import { cn } from '@/libs/utils-classes';
import { ButtonVariant, UISize } from '@/types/ui';

export type ButtonBaseProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: UISize;
  isLoading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
};

const variantStyles: Record<ButtonVariant, string> = {
  default: 'bg-primary text-primary-foreground hover:bg-primary/90 active:bg-primary/80',
  destructive:
    'bg-destructive text-destructive-foreground hover:bg-destructive/90 active:bg-destructive/80',
  outline:
    'border-2 border-input bg-background text-foreground hover:bg-accent hover:text-accent-foreground active:bg-accent/80',
  secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80 active:bg-secondary/70',
  ghost: 'text-foreground hover:bg-accent/10 active:bg-accent/20',
  link: 'text-primary underline-offset-4 hover:underline',
};

const sizeStyles: Record<UISize, string> = {
  sm: 'h-8 px-3 py-1 text-xs rounded',
  md: 'h-9 px-4 py-2 text-sm rounded-md',
  lg: 'h-11 px-6 py-2.5 text-base rounded-md',
};

const iconSizeStyles: Record<UISize, string> = {
  sm: 'w-3.5 h-3.5',
  md: 'w-4 h-4',
  lg: 'w-5 h-5',
};

const ButtonBase = React.forwardRef<HTMLButtonElement, ButtonBaseProps>(
  (
    {
      className,
      variant = 'default',
      size = 'md',
      isLoading = false,
      icon,
      iconPosition = 'left',
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    const isDisabled = disabled || isLoading;

    const iconElement = icon && (
      <span className={cn(iconSizeStyles[size], 'inline-flex shrink-0')}>{icon}</span>
    );

    return (
      <button
        data-slot="button"
        ref={ref}
        disabled={isDisabled}
        className={cn(
          'inline-flex items-center justify-center gap-2 font-medium whitespace-nowrap transition-[color,background-color,border-color,box-shadow] outline-none',
          'focus-visible:ring-ring/50 focus-visible:ring-2 focus-visible:ring-offset-1',
          'disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50',
          sizeStyles[size],
          variantStyles[variant],
          className
        )}
        {...props}
      >
        {isLoading ? (
          <>
            <svg
              className="animate-spin h-full w-auto"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            {children && <span>{children}</span>}
          </>
        ) : (
          <>
            {icon && iconPosition === 'left' && iconElement}
            {children && <span>{children}</span>}
            {icon && iconPosition === 'right' && iconElement}
          </>
        )}
      </button>
    );
  }
);

ButtonBase.displayName = 'ButtonBase';

export default ButtonBase;

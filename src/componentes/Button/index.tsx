import type { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  className?: string;
}

export default function Button({
  children,
  variant = 'primary',
  onClick,
  type = 'button',
  disabled = false,
  className = '',
}: ButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer';
  
  const variantClasses = {
    primary: 'bg-(--brand-wine) text-white hover:bg-(--brand-wine)/90 focus:ring-(--brand-wine)',
    secondary: 'bg-(--brand-champagne) text-(--brand-ink) hover:bg-(--brand-champagne)/90 focus:ring-(--brand-champagne)',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variantClasses[variant]} ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
    >
      {children}
    </button>
  );
}

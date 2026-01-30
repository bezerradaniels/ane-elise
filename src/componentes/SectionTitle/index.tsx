import type { ReactNode } from 'react';

interface SectionTitleProps {
  children: ReactNode;
  subtitle?: string;
  className?: string;
}

export default function SectionTitle({ children, subtitle, className = '' }: SectionTitleProps) {
  return (
    <div className={`mb-12 ${className}`}>
      <h2 className="text-3xl font-bold tracking-tight text-(--brand-ink) md:text-4xl lg:text-5xl">
        {children}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg text-(--brand-ink)/60 md:text-xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}

// file: src/components/Button.tsx
import { ArrowRight } from 'lucide-react';

type ButtonProps = {
  children: React.ReactNode;
  href: string;
  variant?: 'primary' | 'secondary';
  className?: string;
};

export const Button = ({ children, href, variant = 'primary', className = '' }: ButtonProps) => {
  const baseClasses = "inline-flex items-center justify-center gap-2 px-6 py-3 font-semibold rounded-[var(--rounded-soft)] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[var(--color-background)]";

  const variantClasses = {
    primary: "bg-[var(--color-primary)] text-white hover:brightness-110 button-glow",
    secondary: "border border-white/20 text-white hover:bg-white/10 backdrop-blur-sm"
  };

  return (
    <a href={href} className={`${baseClasses} ${variantClasses[variant]} ${className}`}>
      {children}
      {variant === 'primary' && <ArrowRight size={18} />}
    </a>
  );
};
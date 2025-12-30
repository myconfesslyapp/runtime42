import { HTMLAttributes, forwardRef } from 'react';
import { cn } from '../../lib/utils';
import { useTheme } from '../../lib/ThemeContext';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'glass' | 'elevated' | 'bordered';
  hover?: boolean;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = 'default', hover = false, children, ...props }, ref) => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    const variants = {
      default: isDark ? 'bg-white/5 border border-white/10' : 'bg-black/5 border border-black/10',
      glass: isDark ? 'bg-white/5 backdrop-blur-xl border border-white/10' : 'bg-black/5 backdrop-blur-xl border border-black/10',
      elevated: isDark ? 'bg-white/10 border border-white/10 shadow-xl shadow-black/20' : 'bg-black/5 border border-black/10 shadow-xl shadow-black/10',
      bordered: isDark ? 'bg-transparent border-2 border-white/20' : 'bg-transparent border-2 border-black/20',
    };

    const hoverStyles = hover 
      ? isDark 
        ? 'hover:border-white/30 hover:bg-white/10 transition-all duration-300 cursor-pointer' 
        : 'hover:border-black/30 hover:bg-black/10 transition-all duration-300 cursor-pointer'
      : '';

    return (
      <div
        ref={ref}
        className={cn('rounded-2xl p-6', variants[variant], hoverStyles, className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';
export default Card;

import { HTMLAttributes, forwardRef } from 'react';
import { cn } from '../../lib/utils';
import { useTheme } from '../../lib/ThemeContext';

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'primary' | 'success' | 'warning';
}

const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = 'default', children, ...props }, ref) => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    const variants = {
      default: isDark ? 'bg-white/10 text-white/80 border border-white/20' : 'bg-black/10 text-black/80 border border-black/20',
      primary: isDark ? 'bg-white/10 text-white border border-white/20' : 'bg-black/10 text-black border border-black/20',
      success: 'bg-emerald-500/20 text-emerald-500 border border-emerald-500/30',
      warning: 'bg-amber-500/20 text-amber-500 border border-amber-500/30',
    };

    return (
      <span
        ref={ref}
        className={cn(
          'inline-flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-medium',
          variants[variant],
          className
        )}
        {...props}
      >
        {children}
      </span>
    );
  }
);

Badge.displayName = 'Badge';
export default Badge;

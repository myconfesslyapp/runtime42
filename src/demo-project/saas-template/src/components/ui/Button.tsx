import { ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '../../lib/utils';
import { useTheme } from '../../lib/ThemeContext';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  isLoading?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', isLoading, children, disabled, ...props }, ref) => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-lg sm:rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 disabled:opacity-50 disabled:cursor-not-allowed';
    
    const variants = {
      primary: isDark 
        ? 'bg-white text-black hover:bg-white/90 shadow-lg shadow-white/10 focus:ring-white/30' 
        : 'bg-black text-white hover:bg-black/90 shadow-lg shadow-black/10 focus:ring-black/30',
      secondary: isDark 
        ? 'bg-white/10 text-white border border-white/20 hover:bg-white/20 backdrop-blur-sm focus:ring-white/20' 
        : 'bg-black/5 text-black border border-black/20 hover:bg-black/10 backdrop-blur-sm focus:ring-black/20',
      outline: isDark 
        ? 'border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 focus:ring-white/20' 
        : 'border-2 border-black/30 text-black hover:bg-black/5 hover:border-black/50 focus:ring-black/20',
      ghost: isDark 
        ? 'text-white/70 hover:text-white hover:bg-white/10 focus:ring-white/20' 
        : 'text-black/70 hover:text-black hover:bg-black/5 focus:ring-black/20',
    };
    
    const sizes = {
      sm: 'px-3 py-1.5 text-xs sm:px-4 sm:py-2 sm:text-sm gap-1.5',
      md: 'px-4 py-2 text-xs sm:px-5 sm:py-2.5 sm:text-sm gap-1.5 sm:gap-2',
      lg: 'px-5 py-2.5 text-sm sm:px-6 sm:py-3 sm:text-base gap-2',
      xl: 'px-6 py-3 text-sm sm:px-8 sm:py-4 sm:text-lg gap-2 sm:gap-3',
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading && (
          <svg className="animate-spin h-3 w-3 sm:h-4 sm:w-4" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
          </svg>
        )}
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
export default Button;

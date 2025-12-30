import { InputHTMLAttributes, forwardRef } from 'react';
import { cn } from '../../lib/utils';
import { useTheme } from '../../lib/ThemeContext';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: React.ReactNode;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, icon, ...props }, ref) => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    return (
      <div className="w-full">
        {label && (
          <label className={`block text-xs sm:text-sm font-medium mb-1.5 sm:mb-2 ${isDark ? 'text-white/80' : 'text-black/80'}`}>
            {label}
          </label>
        )}
        <div className="relative">
          {icon && (
            <div className={`absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 ${isDark ? 'text-white/40' : 'text-black/40'}`}>
              {icon}
            </div>
          )}
          <input
            ref={ref}
            className={cn(
              'w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl text-sm transition-all duration-300',
              isDark 
                ? 'bg-white/5 border border-white/10 text-white placeholder:text-white/40 focus:ring-2 focus:ring-white/20 focus:border-white/30' 
                : 'bg-black/5 border border-black/10 text-black placeholder:text-black/40 focus:ring-2 focus:ring-black/20 focus:border-black/30',
              'focus:outline-none',
              icon && 'pl-10 sm:pl-12',
              error && 'border-red-500/50 focus:ring-red-500/30',
              className
            )}
            {...props}
          />
        </div>
        {error && (
          <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm text-red-400">{error}</p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';
export default Input;

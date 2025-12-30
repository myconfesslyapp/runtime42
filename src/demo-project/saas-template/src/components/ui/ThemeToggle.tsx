import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../lib/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`relative w-12 h-7 sm:w-14 sm:h-8 rounded-full transition-all duration-500 ${
        theme === 'dark' 
          ? 'bg-white/10 border border-white/20' 
          : 'bg-black/10 border border-black/20'
      }`}
      aria-label="Toggle theme"
    >
      {/* Background icons */}
      <div className="absolute inset-0 flex items-center justify-between px-1 sm:px-1.5">
        <Sun className={`w-3 h-3 sm:w-4 sm:h-4 transition-colors ${theme === 'light' ? 'text-amber-500' : 'text-white/30'}`} />
        <Moon className={`w-3 h-3 sm:w-4 sm:h-4 transition-colors ${theme === 'dark' ? 'text-blue-400' : 'text-black/30'}`} />
      </div>
      
      {/* Toggle ball */}
      <div
        className={`absolute top-0.5 sm:top-1 w-5 h-5 sm:w-6 sm:h-6 rounded-full transition-all duration-300 shadow-lg flex items-center justify-center ${
          theme === 'dark'
            ? 'left-6 sm:left-7 bg-white'
            : 'left-0.5 sm:left-1 bg-black'
        }`}
      >
        {theme === 'dark' ? (
          <Moon className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-black" />
        ) : (
          <Sun className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white" />
        )}
      </div>
    </button>
  );
};

export default ThemeToggle;

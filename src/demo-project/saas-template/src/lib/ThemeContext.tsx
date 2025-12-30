import { createContext, useContext, useState, ReactNode, useEffect } from 'react';

type Theme = 'dark' | 'light';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>('dark');

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

// Theme-aware color utilities
export const themeColors = {
  dark: {
    bg: 'bg-black',
    bgSecondary: 'bg-white/5',
    bgTertiary: 'bg-white/10',
    bgHover: 'hover:bg-white/10',
    bgActive: 'bg-white/20',
    text: 'text-white',
    textSecondary: 'text-white/60',
    textMuted: 'text-white/40',
    border: 'border-white/10',
    borderHover: 'hover:border-white/30',
    btnPrimary: 'bg-white text-black hover:bg-white/90',
    btnSecondary: 'bg-white/10 text-white border-white/20 hover:bg-white/20',
    cardBg: 'bg-white/5',
    inputBg: 'bg-white/5',
    shadow: 'shadow-white/10',
  },
  light: {
    bg: 'bg-white',
    bgSecondary: 'bg-black/5',
    bgTertiary: 'bg-black/10',
    bgHover: 'hover:bg-black/5',
    bgActive: 'bg-black/10',
    text: 'text-black',
    textSecondary: 'text-black/60',
    textMuted: 'text-black/40',
    border: 'border-black/10',
    borderHover: 'hover:border-black/30',
    btnPrimary: 'bg-black text-white hover:bg-black/90',
    btnSecondary: 'bg-black/5 text-black border-black/10 hover:bg-black/10',
    cardBg: 'bg-black/5',
    inputBg: 'bg-black/5',
    shadow: 'shadow-black/10',
  },
};

export function getThemeColors(theme: Theme) {
  return themeColors[theme];
}


import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import { useTheme } from '../../lib/ThemeContext';

interface AppShellProps {
  children: ReactNode;
  currentRoute: string;
  onNavigate: (route: string) => void;
}

const AppShell = ({ children, currentRoute, onNavigate }: AppShellProps) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div className={`min-h-screen transition-colors duration-500 ${isDark ? 'bg-black text-white' : 'bg-white text-black'}`}>
      {/* Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Subtle gradient orbs */}
        <div className={`absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full blur-[128px] transition-colors duration-500 ${
          isDark ? 'bg-white/[0.02]' : 'bg-black/[0.02]'
        }`} />
        <div className={`absolute bottom-0 right-1/4 w-[600px] h-[600px] rounded-full blur-[128px] transition-colors duration-500 ${
          isDark ? 'bg-white/[0.02]' : 'bg-black/[0.02]'
        }`} />
        
        {/* Grid Pattern */}
        <div 
          className={`absolute inset-0 transition-opacity duration-500 ${isDark ? 'opacity-[0.03]' : 'opacity-[0.05]'}`}
          style={{
            backgroundImage: isDark 
              ? `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                 linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`
              : `linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px),
                 linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Header currentRoute={currentRoute} onNavigate={onNavigate} />
        <main>{children}</main>
        <Footer onNavigate={onNavigate} />
      </div>
    </div>
  );
};

export default AppShell;

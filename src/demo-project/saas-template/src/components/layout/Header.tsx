import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Button from '../ui/Button';
import ThemeToggle from '../ui/ThemeToggle';
import { useTheme } from '../../lib/ThemeContext';

interface HeaderProps {
  currentRoute: string;
  onNavigate: (route: string) => void;
}

const Header = ({ currentRoute, onNavigate }: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme } = useTheme();

  const navItems = [
    { label: 'Features', path: '/features' },
    { label: 'Pricing', path: '/pricing' },
    { label: 'About', path: '/about' },
    { label: 'Blog', path: '/blog' },
    { label: 'Contact', path: '/contact' },
  ];

  const handleNavClick = (path: string) => {
    onNavigate(path);
    setIsMobileMenuOpen(false);
  };

  const isDark = theme === 'dark';

  return (
    <header className={`sticky top-0 z-50 backdrop-blur-xl border-b transition-colors duration-300 ${
      isDark ? 'bg-black/80 border-white/10' : 'bg-white/80 border-black/10'
    }`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button 
            onClick={() => handleNavClick('/')}
            className="flex items-center gap-2 sm:gap-3 hover:opacity-80 transition-opacity"
          >
            <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg transition-colors duration-300 ${
              isDark ? 'bg-white' : 'bg-black'
            }`}>
              <span className={`font-bold text-base sm:text-lg ${isDark ? 'text-black' : 'text-white'}`}>S</span>
            </div>
            <span className={`font-bold text-lg sm:text-xl transition-colors duration-300 ${isDark ? 'text-white' : 'text-black'}`}>
              SaaSify
            </span>
          </button>

          {/* Desktop Navigation - Hidden on mobile & tablet (< 1024px) */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.path}
                onClick={() => handleNavClick(item.path)}
                className={`px-3 xl:px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  currentRoute === item.path
                    ? isDark ? 'text-white bg-white/10' : 'text-black bg-black/10'
                    : isDark ? 'text-white/60 hover:text-white hover:bg-white/5' : 'text-black/60 hover:text-black hover:bg-black/5'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Desktop CTAs + Theme Toggle - Hidden on mobile & tablet */}
          <div className="hidden lg:flex items-center gap-2 xl:gap-3">
            <ThemeToggle />
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => handleNavClick('/login')}
            >
              Log in
            </Button>
            <Button 
              variant="primary" 
              size="sm"
              onClick={() => handleNavClick('/signup')}
            >
              Start Free
            </Button>
          </div>

          {/* Mobile & Tablet: Theme Toggle + Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              className={`p-2 transition-colors rounded-lg ${isDark ? 'text-white/80 hover:text-white hover:bg-white/10' : 'text-black/80 hover:text-black hover:bg-black/10'}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile & Tablet Menu */}
        {isMobileMenuOpen && (
          <div className={`lg:hidden mt-4 pb-4 border-t pt-4 animate-fade-in ${isDark ? 'border-white/10' : 'border-black/10'}`}>
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <button
                  key={item.path}
                  onClick={() => handleNavClick(item.path)}
                  className={`px-4 py-3 rounded-lg text-left text-sm font-medium transition-colors ${
                    currentRoute === item.path
                      ? isDark ? 'text-white bg-white/10' : 'text-black bg-black/10'
                      : isDark ? 'text-white/60 hover:text-white hover:bg-white/5' : 'text-black/60 hover:text-black hover:bg-black/5'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className={`flex flex-col gap-2 mt-4 pt-4 border-t ${isDark ? 'border-white/10' : 'border-black/10'}`}>
                <Button variant="ghost" onClick={() => handleNavClick('/login')}>
                  Log in
                </Button>
                <Button variant="primary" onClick={() => handleNavClick('/signup')}>
                  Start Free Trial
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;

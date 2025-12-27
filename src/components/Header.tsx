import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from 'next-themes';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const navItems = ['Product', 'How it works', 'Pricing', 'Docs'];

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 py-4">
      <div className="max-w-5xl mx-auto">
        {/* Glassmorphic floating pill header */}
        <div className="bg-white/70 dark:bg-white/5 backdrop-blur-2xl border border-black/5 dark:border-white/10 rounded-full px-6 py-2.5 shadow-lg shadow-black/5 dark:shadow-black/20">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="/" className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-full bg-foreground flex items-center justify-center">
                <span className="text-background font-bold text-xs">▶</span>
              </div>
              <span className="text-base font-semibold text-foreground">YourBrand</span>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-7">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
                >
                  {item}
                </a>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-2.5">
              {/* Theme Toggle */}
              {mounted && (
                <button
                  onClick={toggleTheme}
                  className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
                  aria-label="Toggle theme"
                >
                  {theme === 'dark' ? (
                    <Sun size={18} className="text-foreground" />
                  ) : (
                    <Moon size={18} className="text-foreground" />
                  )}
                </button>
              )}
              <a
                href="#demo"
                className="px-4 py-2 bg-foreground text-background text-sm font-medium rounded-full hover:bg-foreground/90 transition-colors"
              >
                Request a demo
              </a>
              <a
                href="#signup"
                className="px-4 py-2 border border-border dark:border-white/20 text-foreground text-sm font-medium rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
              >
                Sign up
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center gap-2">
              {mounted && (
                <button
                  onClick={toggleTheme}
                  className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
                  aria-label="Toggle theme"
                >
                  {theme === 'dark' ? (
                    <Sun size={18} className="text-foreground" />
                  ) : (
                    <Moon size={18} className="text-foreground" />
                  )}
                </button>
              )}
              <button
                className="p-2 text-foreground"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-2 bg-white/90 dark:bg-black/90 backdrop-blur-2xl border border-black/5 dark:border-white/10 rounded-2xl p-4 shadow-xl">
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                  className="text-muted-foreground hover:text-foreground transition-colors py-2 px-3 rounded-lg hover:bg-black/5 dark:hover:bg-white/10"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <div className="flex flex-col gap-2 mt-3 pt-3 border-t border-border">
                <a
                  href="#demo"
                  className="px-5 py-2.5 bg-foreground text-background text-sm font-medium rounded-full text-center"
                >
                  Request a demo
                </a>
                <a
                  href="#signup"
                  className="px-5 py-2.5 border border-border text-foreground text-sm font-medium rounded-full text-center"
                >
                  Sign up
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

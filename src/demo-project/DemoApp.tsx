import { useState, useEffect, useRef } from 'react';

// Import components from saas-template
import { AppShell } from './saas-template/src/components/layout';
import { 
  Home, 
  Pricing, 
  About, 
  Features, 
  Contact, 
  Blog, 
  Login, 
  Signup 
} from './saas-template/src/pages';
import { ThemeProvider, useTheme } from './saas-template/src/lib/ThemeContext';

interface DemoAppProps {
  currentRoute?: string;
  onRouteChange?: (route: string) => void;
}

// Auth page wrapper with theme support
const AuthPageWrapper = ({ children }: { children: React.ReactNode }) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div className={`min-h-full transition-colors duration-500 ${isDark ? 'bg-black text-white' : 'bg-white text-black'}`}>
      {/* Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-0 left-1/4 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] rounded-full blur-[80px] sm:blur-[128px] transition-colors duration-500 ${
          isDark ? 'bg-white/[0.02]' : 'bg-black/[0.02]'
        }`} />
        <div className={`absolute bottom-0 right-1/4 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] rounded-full blur-[80px] sm:blur-[128px] transition-colors duration-500 ${
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
            backgroundSize: '40px 40px'
          }}
        />
      </div>
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

const DemoAppInner = ({ currentRoute: externalRoute = '/', onRouteChange }: DemoAppProps) => {
  const [currentRoute, setCurrentRoute] = useState(externalRoute);
  const containerRef = useRef<HTMLDivElement>(null);

  // Sync with external route changes
  useEffect(() => {
    setCurrentRoute(externalRoute);
  }, [externalRoute]);

  // Scroll to top when route changes
  useEffect(() => {
    // Find the scrollable parent and scroll to top
    const scrollContainer = containerRef.current?.closest('.overflow-auto, .overflow-y-auto');
    if (scrollContainer) {
      scrollContainer.scrollTop = 0;
    }
    // Also try scrolling the container itself
    if (containerRef.current) {
      containerRef.current.scrollTop = 0;
    }
    // And window scroll for good measure
    window.scrollTo(0, 0);
  }, [currentRoute]);

  const handleNavigate = (route: string) => {
    setCurrentRoute(route);
    onRouteChange?.(route);
  };

  // Auth pages have their own layout (no header/footer) but with theme toggle
  if (currentRoute === '/login') {
    return (
      <div ref={containerRef}>
        <AuthPageWrapper>
          <Login onNavigate={handleNavigate} />
        </AuthPageWrapper>
      </div>
    );
  }

  if (currentRoute === '/signup') {
    return (
      <div ref={containerRef}>
        <AuthPageWrapper>
          <Signup onNavigate={handleNavigate} />
        </AuthPageWrapper>
      </div>
    );
  }

  const renderPage = () => {
    switch (currentRoute) {
      case '/pricing':
        return <Pricing onNavigate={handleNavigate} />;
      case '/about':
        return <About onNavigate={handleNavigate} />;
      case '/features':
        return <Features onNavigate={handleNavigate} />;
      case '/contact':
        return <Contact onNavigate={handleNavigate} />;
      case '/blog':
        return <Blog onNavigate={handleNavigate} />;
      default:
        return <Home onNavigate={handleNavigate} />;
    }
  };

  return (
    <div ref={containerRef}>
      <AppShell currentRoute={currentRoute} onNavigate={handleNavigate}>
        {renderPage()}
      </AppShell>
    </div>
  );
};

// Main component wrapped with ThemeProvider
const DemoApp = (props: DemoAppProps) => {
  return (
    <ThemeProvider>
      <DemoAppInner {...props} />
    </ThemeProvider>
  );
};

export default DemoApp;

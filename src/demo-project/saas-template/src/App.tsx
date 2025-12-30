import { useState } from 'react';
import { AppShell } from './components/layout';
import { Home, Pricing, About, Features, Contact, Blog, Login, Signup } from './pages';

interface AppProps {
  initialRoute?: string;
  onRouteChange?: (route: string) => void;
}

function App({ initialRoute = '/', onRouteChange }: AppProps) {
  const [currentRoute, setCurrentRoute] = useState(initialRoute);

  const handleNavigate = (route: string) => {
    setCurrentRoute(route);
    onRouteChange?.(route);
  };

  // Auth pages have their own layout
  if (currentRoute === '/login') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-950 to-slate-900 text-white">
        <Login onNavigate={handleNavigate} />
      </div>
    );
  }

  if (currentRoute === '/signup') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-950 to-slate-900 text-white">
        <Signup onNavigate={handleNavigate} />
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
    <AppShell currentRoute={currentRoute} onNavigate={handleNavigate}>
      {renderPage()}
    </AppShell>
  );
}

export default App;


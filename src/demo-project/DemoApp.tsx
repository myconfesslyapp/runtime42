import Home from './pages/Home';
import Pricing from './pages/Pricing';
import About from './pages/About';

interface DemoAppProps {
  currentRoute: string;
}

const DemoApp = ({ currentRoute }: DemoAppProps) => {
  switch (currentRoute) {
    case '/pricing':
      return <Pricing />;
    case '/about':
      return <About />;
    default:
      return <Home />;
  }
};

export default DemoApp;

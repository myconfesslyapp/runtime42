import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Pricing from './pages/Pricing';
import About from './pages/About';

const DemoApp = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default DemoApp;

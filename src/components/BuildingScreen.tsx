import { useState, useEffect } from 'react';
import { History } from 'lucide-react';
import logo from '@/assets/runtime42-logo.png';

const tips = [
  { icon: History, text: 'Restore any previous version with Version History' },
  { icon: History, text: 'Use keyboard shortcuts for faster navigation' },
  { icon: History, text: 'Preview your app on different device sizes' },
  { icon: History, text: 'Edit code directly in the Code tab' },
];

interface BuildingScreenProps {
  message?: string;
}

const BuildingScreen = ({ message = 'Building your idea..' }: BuildingScreenProps) => {
  const [progress, setProgress] = useState(0);
  const [currentTip, setCurrentTip] = useState(0);

  useEffect(() => {
    // Animate progress bar
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 85) return prev;
        return prev + Math.random() * 15;
      });
    }, 500);

    // Rotate tips
    const tipInterval = setInterval(() => {
      setCurrentTip(prev => (prev + 1) % tips.length);
    }, 4000);

    return () => {
      clearInterval(progressInterval);
      clearInterval(tipInterval);
    };
  }, []);

  const CurrentTipIcon = tips[currentTip].icon;

  return (
    <div className="h-full w-full flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(180deg, hsl(var(--background)) 0%, hsl(40 30% 95%) 50%, hsl(25 60% 90%) 100%)',
        }}
      />
      
      {/* Subtle radial glow */}
      <div 
        className="absolute inset-0 opacity-40"
        style={{
          background: 'radial-gradient(ellipse at 50% 80%, hsl(25 70% 85%) 0%, transparent 60%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Logo with ring */}
        <div className="relative mb-10">
          <div className="w-24 h-24 rounded-full bg-gradient-to-b from-orange-50 to-orange-100 flex items-center justify-center shadow-lg ring-8 ring-orange-50/50">
            <img 
              src={logo} 
              alt="runtime42" 
              className="w-14 h-14 object-contain"
            />
          </div>
          {/* Subtle pulse animation */}
          <div className="absolute inset-0 w-24 h-24 rounded-full bg-primary/10 animate-ping" style={{ animationDuration: '2s' }} />
        </div>

        {/* Message */}
        <h2 className="text-2xl font-semibold text-foreground mb-8 tracking-tight">
          {message}
        </h2>

        {/* Progress bar */}
        <div className="w-64 h-1 bg-muted/50 rounded-full overflow-hidden mb-16">
          <div 
            className="h-full bg-gradient-to-r from-primary/60 to-primary rounded-full transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Did you know section */}
        <div className="flex flex-col items-center gap-3 text-muted-foreground">
          <span className="text-sm font-medium">Did you know?</span>
          <div className="flex items-center gap-2 transition-opacity duration-300">
            <CurrentTipIcon className="w-4 h-4" />
            <span className="text-sm">{tips[currentTip].text}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuildingScreen;
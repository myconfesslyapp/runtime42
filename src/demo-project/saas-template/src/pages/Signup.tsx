import { ArrowRight, Github, Mail, CheckCircle2 } from 'lucide-react';
import { Button, Input, ThemeToggle } from '../components/ui';
import { useTheme } from '../lib/ThemeContext';

interface SignupProps {
  onNavigate: (path: string) => void;
}

const Signup = ({ onNavigate }: SignupProps) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const benefits = [
    '14-day free trial',
    'No credit card',
  ];

  return (
    <div className="min-h-[80vh] flex items-center justify-center py-10 sm:py-16 lg:py-20">
      {/* Theme Toggle - Fixed Position */}
      <div className="fixed top-4 sm:top-6 right-4 sm:right-6 z-50">
        <ThemeToggle />
      </div>
      
      <div className="w-full max-w-sm sm:max-w-md px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-8">
          <button 
            onClick={() => onNavigate('/')}
            className="inline-flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6"
          >
            <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl flex items-center justify-center ${
              isDark ? 'bg-white' : 'bg-black'
            }`}>
              <span className={`font-bold text-lg sm:text-xl ${isDark ? 'text-black' : 'text-white'}`}>S</span>
            </div>
          </button>
          <h1 className={`text-2xl sm:text-3xl font-bold mb-1 sm:mb-2 ${isDark ? 'text-white' : 'text-black'}`}>
            Start your free trial
          </h1>
          <p className={`text-xs sm:text-sm ${isDark ? 'text-white/50' : 'text-black/50'}`}>
            Create an account to get started
          </p>
        </div>

        {/* Benefits */}
        <div className="flex items-center justify-center gap-3 sm:gap-4 mb-6 sm:mb-8">
          {benefits.map((benefit) => (
            <div key={benefit} className={`flex items-center gap-1 sm:gap-1.5 text-[10px] sm:text-sm ${isDark ? 'text-white/50' : 'text-black/50'}`}>
              <CheckCircle2 size={12} className="sm:w-3.5 sm:h-3.5 text-emerald-500" />
              <span>{benefit}</span>
            </div>
          ))}
        </div>

        {/* Social Signup */}
        <div className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
          <button
            className={`w-full flex items-center justify-center gap-2 sm:gap-3 px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl border text-sm transition-all ${
              isDark 
                ? 'bg-white/5 border-white/10 text-white hover:bg-white/10 hover:border-white/20' 
                : 'bg-black/5 border-black/10 text-black hover:bg-black/10 hover:border-black/20'
            }`}
          >
            <Github size={18} className="sm:w-5 sm:h-5" />
            <span className="font-medium">Sign up with GitHub</span>
          </button>
          <button
            className={`w-full flex items-center justify-center gap-2 sm:gap-3 px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl border text-sm transition-all ${
              isDark 
                ? 'bg-white/5 border-white/10 text-white hover:bg-white/10 hover:border-white/20' 
                : 'bg-black/5 border-black/10 text-black hover:bg-black/10 hover:border-black/20'
            }`}
          >
            <Mail size={18} className="sm:w-5 sm:h-5" />
            <span className="font-medium">Sign up with Google</span>
          </button>
        </div>

        {/* Divider */}
        <div className="relative mb-6 sm:mb-8">
          <div className={`absolute inset-0 flex items-center`}>
            <div className={`w-full border-t ${isDark ? 'border-white/10' : 'border-black/10'}`} />
          </div>
          <div className="relative flex justify-center">
            <span className={`px-3 sm:px-4 text-xs sm:text-sm ${isDark ? 'bg-black text-white/40' : 'bg-white text-black/40'}`}>
              or sign up with email
            </span>
          </div>
        </div>

        {/* Signup Form */}
        <form className="space-y-3 sm:space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            <Input
              label="First name"
              placeholder="John"
            />
            <Input
              label="Last name"
              placeholder="Doe"
            />
          </div>
          <Input
            label="Work email"
            type="email"
            placeholder="you@company.com"
          />
          <Input
            label="Password"
            type="password"
            placeholder="Create a password"
          />
          
          <div className="flex items-start gap-2">
            <input
              type="checkbox"
              className={`mt-0.5 sm:mt-1 w-3.5 h-3.5 sm:w-4 sm:h-4 rounded border ${
                isDark 
                  ? 'bg-white/5 border-white/20' 
                  : 'bg-black/5 border-black/20'
              }`}
            />
            <span className={`text-[10px] sm:text-sm leading-tight ${isDark ? 'text-white/50' : 'text-black/50'}`}>
              I agree to the{' '}
              <button className={`font-medium ${isDark ? 'text-white' : 'text-black'}`}>
                Terms
              </button>
              {' '}and{' '}
              <button className={`font-medium ${isDark ? 'text-white' : 'text-black'}`}>
                Privacy
              </button>
            </span>
          </div>

          <Button className="w-full" size="lg">
            Create account
            <ArrowRight size={16} className="sm:w-[18px] sm:h-[18px]" />
          </Button>
        </form>

        {/* Footer */}
        <p className={`mt-6 sm:mt-8 text-center text-xs sm:text-sm ${isDark ? 'text-white/40' : 'text-black/40'}`}>
          Already have an account?{' '}
          <button
            onClick={() => onNavigate('/login')}
            className={`font-medium transition-colors ${
              isDark ? 'text-white hover:text-white/80' : 'text-black hover:text-black/80'
            }`}
          >
            Sign in
          </button>
        </p>
      </div>
    </div>
  );
};

export default Signup;

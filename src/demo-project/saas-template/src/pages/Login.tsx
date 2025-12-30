import { ArrowRight, Github, Mail } from 'lucide-react';
import { Button, Input, ThemeToggle } from '../components/ui';
import { useTheme } from '../lib/ThemeContext';

interface LoginProps {
  onNavigate: (path: string) => void;
}

const Login = ({ onNavigate }: LoginProps) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

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
            Welcome back
          </h1>
          <p className={`text-xs sm:text-sm ${isDark ? 'text-white/50' : 'text-black/50'}`}>
            Sign in to continue
          </p>
        </div>

        {/* Social Login */}
        <div className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
          <button
            className={`w-full flex items-center justify-center gap-2 sm:gap-3 px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl border text-sm transition-all ${
              isDark 
                ? 'bg-white/5 border-white/10 text-white hover:bg-white/10 hover:border-white/20' 
                : 'bg-black/5 border-black/10 text-black hover:bg-black/10 hover:border-black/20'
            }`}
          >
            <Github size={18} className="sm:w-5 sm:h-5" />
            <span className="font-medium">Continue with GitHub</span>
          </button>
          <button
            className={`w-full flex items-center justify-center gap-2 sm:gap-3 px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl border text-sm transition-all ${
              isDark 
                ? 'bg-white/5 border-white/10 text-white hover:bg-white/10 hover:border-white/20' 
                : 'bg-black/5 border-black/10 text-black hover:bg-black/10 hover:border-black/20'
            }`}
          >
            <Mail size={18} className="sm:w-5 sm:h-5" />
            <span className="font-medium">Continue with Google</span>
          </button>
        </div>

        {/* Divider */}
        <div className="relative mb-6 sm:mb-8">
          <div className={`absolute inset-0 flex items-center`}>
            <div className={`w-full border-t ${isDark ? 'border-white/10' : 'border-black/10'}`} />
          </div>
          <div className="relative flex justify-center">
            <span className={`px-3 sm:px-4 text-xs sm:text-sm ${isDark ? 'bg-black text-white/40' : 'bg-white text-black/40'}`}>
              or continue with email
            </span>
          </div>
        </div>

        {/* Login Form */}
        <form className="space-y-3 sm:space-y-4" onSubmit={(e) => e.preventDefault()}>
          <Input
            label="Email"
            type="email"
            placeholder="you@example.com"
          />
          <Input
            label="Password"
            type="password"
            placeholder="Enter your password"
          />
          
          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                className={`w-3.5 h-3.5 sm:w-4 sm:h-4 rounded border ${
                  isDark 
                    ? 'bg-white/5 border-white/20' 
                    : 'bg-black/5 border-black/20'
                }`}
              />
              <span className={`text-xs sm:text-sm ${isDark ? 'text-white/60' : 'text-black/60'}`}>Remember me</span>
            </label>
            <button 
              type="button"
              className={`text-xs sm:text-sm font-medium transition-colors ${
                isDark ? 'text-white hover:text-white/80' : 'text-black hover:text-black/80'
              }`}
            >
              Forgot password?
            </button>
          </div>

          <Button className="w-full" size="lg">
            Sign in
            <ArrowRight size={16} className="sm:w-[18px] sm:h-[18px]" />
          </Button>
        </form>

        {/* Footer */}
        <p className={`mt-6 sm:mt-8 text-center text-xs sm:text-sm ${isDark ? 'text-white/40' : 'text-black/40'}`}>
          Don't have an account?{' '}
          <button
            onClick={() => onNavigate('/signup')}
            className={`font-medium transition-colors ${
              isDark ? 'text-white hover:text-white/80' : 'text-black hover:text-black/80'
            }`}
          >
            Sign up free
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;

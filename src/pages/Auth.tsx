import { useState, useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '@/assets/runtime42-logo.png';

type AuthMode = 'signup' | 'signin' | 'forgot-password';

const features = [
  'Scalable infrastructure out of the box',
  'Authentication & authorization built-in',
  'Real system design, not broken code',
];

const TypewriterText = ({ text, delay = 0 }: { text: string; delay?: number }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      let currentIndex = 0;
      const interval = setInterval(() => {
        if (currentIndex <= text.length) {
          setDisplayedText(text.slice(0, currentIndex));
          currentIndex++;
        } else {
          setIsComplete(true);
          clearInterval(interval);
        }
      }, 30);
      return () => clearInterval(interval);
    }, delay);
    return () => clearTimeout(timeout);
  }, [text, delay]);

  return (
    <span className="text-sm text-muted-foreground font-mono inline-flex items-center">
      {displayedText}
      {!isComplete && (
        <span 
          className="inline-block w-[2px] h-[1.1em] bg-primary ml-0.5"
          style={{ animation: 'blink 1s step-end infinite' }}
        />
      )}
    </span>
  );
};

const Auth = () => {
  const navigate = useNavigate();
  const [mode, setMode] = useState<AuthMode>('signin');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: 'venkatagovindneelapu@gmail.com',
    password: 'Neelapu@123',
    agreeToEmails: false,
    acceptTerms: false,
  });
  const [resetEmailSent, setResetEmailSent] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
    setError('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (mode === 'forgot-password') {
      setResetEmailSent(true);
    } else if (mode === 'signin') {
      // Default login check
      if (formData.email === 'venkatagovindneelapu@gmail.com' && formData.password === 'Neelapu@123') {
        navigate('/dashboard');
      } else {
        setError('Invalid email or password');
      }
    } else {
      // Signup - just redirect for demo
      navigate('/dashboard');
    }
  };

  const renderForm = () => {
    if (mode === 'forgot-password') {
      if (resetEmailSent) {
        return (
          <div className="text-center space-y-6">
            <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-2">Check your email</h2>
              <p className="text-sm text-muted-foreground">
                We've sent a password reset link to <span className="text-foreground font-medium">{formData.email}</span>
              </p>
            </div>
            <button
              onClick={() => {
                setMode('signin');
                setResetEmailSent(false);
              }}
              className="w-full py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors"
            >
              Back to sign in
            </button>
            <p className="text-xs text-muted-foreground">
              Didn't receive the email?{' '}
              <button
                onClick={() => setResetEmailSent(false)}
                className="text-foreground font-medium hover:text-primary transition-colors"
              >
                Try again
              </button>
            </p>
          </div>
        );
      }

      return (
        <form onSubmit={handleSubmit} className="space-y-5">
          <p className="text-sm text-muted-foreground mb-6">
            Enter your email address and we'll send you a link to reset your password.
          </p>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
              Email address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors"
          >
            Send reset link
          </button>

          <button
            type="button"
            onClick={() => setMode('signin')}
            className="w-full py-3 bg-background border border-border text-foreground font-medium rounded-lg hover:bg-muted/50 transition-colors"
          >
            Back to sign in
          </button>
        </form>
      );
    }

    return (
      <form onSubmit={handleSubmit} className="space-y-5">
        {mode === 'signup' && (
          <>
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-2">
                First name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="Enter your first name"
                className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
              />
            </div>

            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-2">
                Last name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Enter your last name"
                className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
              />
            </div>
          </>
        )}

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
            Work email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your work email"
            className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
          />
        </div>

        <div>
          <div className="flex items-center justify-between mb-2">
            <label htmlFor="password" className="block text-sm font-medium text-foreground">
              Password
            </label>
            {mode === 'signin' && (
              <button
                type="button"
                onClick={() => setMode('forgot-password')}
                className="text-sm text-primary hover:text-primary/80 transition-colors"
              >
                Forgot password?
              </button>
            )}
          </div>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder={mode === 'signup' ? "Create a password" : "Enter your password"}
            className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
          />
        </div>

        {mode === 'signup' && (
          <>
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                id="agreeToEmails"
                name="agreeToEmails"
                checked={formData.agreeToEmails}
                onChange={handleChange}
                className="mt-1 w-4 h-4 rounded border-border bg-background text-primary focus:ring-primary/50"
              />
              <label htmlFor="agreeToEmails" className="text-sm text-muted-foreground">
                I agree to receive emails and updates from runtime42, including newsletters, product news, and occasional marketing content.
              </label>
            </div>

            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                id="acceptTerms"
                name="acceptTerms"
                checked={formData.acceptTerms}
                onChange={handleChange}
                className="mt-1 w-4 h-4 rounded border-border bg-background text-primary focus:ring-primary/50"
              />
              <label htmlFor="acceptTerms" className="text-sm text-muted-foreground">
                I accept{' '}
                <a href="#terms" className="text-foreground underline hover:text-primary">
                  terms of use
                </a>
                .
              </label>
            </div>
          </>
        )}

        {/* Error message */}
        {error && (
          <p className="text-sm text-red-500 text-center">{error}</p>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors"
        >
          {mode === 'signup' ? 'Sign up' : 'Sign in'}
        </button>

        {/* Google Sign In */}
        <button
          type="button"
          className="w-full py-3 bg-background border border-border text-foreground font-medium rounded-lg hover:bg-muted/50 transition-colors flex items-center justify-center gap-2"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
            <path
              fill="currentColor"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
              fill="currentColor"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
            />
            <path
              fill="currentColor"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            />
          </svg>
          {mode === 'signup' ? 'Sign up with Google' : 'Sign in with Google'}
        </button>

        <p className="text-xs text-center text-muted-foreground">
          By clicking "Sign up with Google", I agree to the{' '}
          <a href="#terms" className="text-foreground underline hover:text-primary">
            terms of use
          </a>
          .
        </p>
      </form>
    );
  };

  const getTitle = () => {
    switch (mode) {
      case 'signup':
        return 'Create an account';
      case 'signin':
        return 'Welcome back';
      case 'forgot-password':
        return 'Reset your password';
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Left side - Form */}
      <div className="w-full lg:w-1/2 bg-card flex flex-col justify-center px-8 md:px-16 lg:px-20 py-12">
        <div className="max-w-md mx-auto w-full">
          {/* Back to home */}
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft size={16} />
            <span className="text-sm">Back to home</span>
          </Link>

          {/* Logo */}
          <div className="flex items-center gap-2.5 mb-6">
            <img src={logo} alt="runtime42" className="w-8 h-8" />
            <span className="text-lg font-semibold text-foreground">runtime42</span>
          </div>

          {/* Title */}
          {!(mode === 'forgot-password' && resetEmailSent) && (
            <h1 className="text-2xl font-bold text-foreground mb-8">
              {getTitle()}
            </h1>
          )}

          {/* Form */}
          {renderForm()}

          {/* Toggle Sign In / Sign Up */}
          {mode !== 'forgot-password' && (
            <p className="text-center text-sm text-muted-foreground mt-6">
              {mode === 'signup' ? 'Already have an account?' : "Don't have an account?"}{' '}
              <button
                onClick={() => setMode(mode === 'signup' ? 'signin' : 'signup')}
                className="text-foreground font-medium hover:text-primary transition-colors"
              >
                {mode === 'signup' ? 'Sign in' : 'Sign up'}
              </button>
            </p>
          )}
        </div>
      </div>

      {/* Right side - Branding */}
      <div className="hidden lg:flex lg:w-1/2 bg-background relative overflow-hidden items-center justify-center">
        {/* Gradient from bottom-right corner like hero section */}
        <div 
          className="absolute bottom-0 right-0 w-full h-full pointer-events-none"
          style={{ 
            background: 'radial-gradient(ellipse at 100% 100%, rgba(249,115,22,0.35) 0%, rgba(251,146,60,0.2) 25%, rgba(234,88,12,0.1) 45%, transparent 70%)'
          }}
        />
        <div 
          className="absolute bottom-0 right-0 w-[70%] h-[70%] pointer-events-none"
          style={{ 
            background: 'radial-gradient(ellipse at 100% 100%, rgba(251,191,36,0.2) 0%, rgba(249,115,22,0.1) 30%, transparent 60%)'
          }}
        />
        <div 
          className="absolute bottom-0 right-0 w-[50%] h-[50%] pointer-events-none blur-3xl"
          style={{ 
            background: 'radial-gradient(ellipse at 100% 100%, rgba(251,146,60,0.25) 0%, transparent 70%)'
          }}
        />

        {/* Content */}
        <div className="relative z-10 text-center px-12 max-w-lg">
          {/* Live indicator */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border/50 bg-card/30 backdrop-blur-sm mb-8">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-xs font-medium text-muted-foreground tracking-widest uppercase">
              Live Now
            </span>
          </div>

          {/* Headline with typewriter style */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
            Backend has evolved.
            <br />
            <span className="text-gradient">Discover it now.</span>
          </h2>

          {/* Description */}
          <p className="text-base text-muted-foreground leading-relaxed mb-8">
            Build production-ready backends with AI-powered code generation. 
            Ship faster with scalable infrastructure, authentication, and APIs — all in one platform.
          </p>

          {/* Animated Typewriter feature list */}
          <div className="text-left space-y-3">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-3">
                <span className="text-primary animate-pulse">▸</span>
                <TypewriterText text={feature} delay={index * 1500} />
              </div>
            ))}
          </div>
        </div>

        {/* Decorative 3D elements */}
        <div className="absolute bottom-0 right-0 w-2/3 h-1/2 opacity-50">
          <div className="absolute bottom-10 right-10 w-64 h-64 border border-primary/30 rounded-2xl transform rotate-12 bg-gradient-to-br from-primary/10 to-transparent" />
          <div className="absolute bottom-20 right-32 w-48 h-48 border border-primary/20 rounded-xl transform -rotate-6 bg-gradient-to-br from-primary/5 to-transparent" />
        </div>
      </div>
    </div>
  );
};

export default Auth;

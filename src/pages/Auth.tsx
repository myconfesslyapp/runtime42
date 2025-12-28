import { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '@/assets/runtime42-logo.png';

const Auth = () => {
  const [isSignUp, setIsSignUp] = useState(true);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    agreeToEmails: false,
    acceptTerms: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle authentication logic here
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
          <h1 className="text-2xl font-bold text-foreground mb-8">
            {isSignUp ? 'Create an account' : 'Welcome back'}
          </h1>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {isSignUp && (
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
              <label htmlFor="password" className="block text-sm font-medium text-foreground mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder={isSignUp ? "Create a password" : "Enter your password"}
                className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
              />
            </div>

            {isSignUp && (
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

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors"
            >
              {isSignUp ? 'Sign up' : 'Sign in'}
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
              {isSignUp ? 'Sign up with Google' : 'Sign in with Google'}
            </button>

            <p className="text-xs text-center text-muted-foreground">
              By clicking "Sign up with Google", I agree to the{' '}
              <a href="#terms" className="text-foreground underline hover:text-primary">
                terms of use
              </a>
              .
            </p>
          </form>

          {/* Toggle Sign In / Sign Up */}
          <p className="text-center text-sm text-muted-foreground mt-6">
            {isSignUp ? 'Already have an account?' : "Don't have an account?"}{' '}
            <button
              onClick={() => setIsSignUp(!isSignUp)}
              className="text-foreground font-medium hover:text-primary transition-colors"
            >
              {isSignUp ? 'Sign in' : 'Sign up'}
            </button>
          </p>
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

          {/* Typewriter-style feature list */}
          <div className="text-left space-y-3">
            <div className="flex items-center gap-3">
              <span className="text-primary animate-pulse">▸</span>
              <span className="text-sm text-muted-foreground font-mono">Scalable infrastructure out of the box</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-primary animate-pulse">▸</span>
              <span className="text-sm text-muted-foreground font-mono">Authentication & authorization built-in</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-primary animate-pulse">▸</span>
              <span className="text-sm text-muted-foreground font-mono">Real system design, not broken code</span>
            </div>
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

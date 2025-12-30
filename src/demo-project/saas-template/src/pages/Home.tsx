import { ArrowRight, Zap, Shield, BarChart3, Sparkles, Star } from 'lucide-react';
import { Button, Badge } from '../components/ui';
import { useTheme } from '../lib/ThemeContext';

interface HomeProps {
  onNavigate: (path: string) => void;
}

const Home = ({ onNavigate }: HomeProps) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const features = [
    { icon: Zap, title: 'Lightning Fast', desc: 'Built for speed' },
    { icon: Shield, title: 'Secure', desc: 'Enterprise-grade' },
    { icon: BarChart3, title: 'Analytics', desc: 'Built-in insights' },
    { icon: Sparkles, title: 'AI Powered', desc: 'Smart automation' },
  ];

  const stats = [
    { value: '10K+', label: 'Users' },
    { value: '99.9%', label: 'Uptime' },
    { value: '24/7', label: 'Support' },
    { value: '150+', label: 'Integrations' },
  ];

  const testimonials = [
    { name: 'Sarah C.', role: 'CEO, TechFlow', quote: 'Best investment for our team.' },
    { name: 'Marcus J.', role: 'CTO, DataSync', quote: 'Incredible product!' },
    { name: 'Elena R.', role: 'Founder, StartupX', quote: 'Transformed our workflow.' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-12 sm:pt-16 lg:pt-20 pb-16 sm:pb-24 lg:pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="primary" className="mb-4 sm:mb-6">
              <Sparkles size={12} />
              <span className="text-[10px] sm:text-xs">AI-powered features</span>
            </Badge>
            
            <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight tracking-tight ${isDark ? 'text-white' : 'text-black'}`}>
              Build products
              <br />
              <span className={isDark ? 'text-white/60' : 'text-black/60'}>10x faster</span>
            </h1>
            
            <p className={`text-sm sm:text-base lg:text-xl max-w-2xl mx-auto mb-6 sm:mb-10 px-4 ${isDark ? 'text-white/50' : 'text-black/50'}`}>
              The all-in-one platform for modern teams. Ship better products faster.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <Button size="lg" className="w-full sm:w-auto text-sm sm:text-base" onClick={() => onNavigate('/signup')}>
                Start Free Trial
                <ArrowRight size={16} className="sm:w-[18px] sm:h-[18px]" />
              </Button>
              <Button variant="secondary" size="lg" className="w-full sm:w-auto text-sm sm:text-base" onClick={() => onNavigate('/features')}>
                View Features
              </Button>
            </div>

            {/* Social Proof - Simplified on mobile */}
            <div className={`mt-8 sm:mt-12 flex items-center justify-center gap-2 ${isDark ? 'text-white/40' : 'text-black/40'}`}>
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 flex items-center justify-center text-[10px] sm:text-xs font-medium ${
                      isDark ? 'bg-white/10 border-black text-white/60' : 'bg-black/10 border-white text-black/60'
                    }`}
                  >
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <div className="ml-2 sm:ml-3 flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} size={12} className="sm:w-3.5 sm:h-3.5 fill-amber-400 text-amber-400" />
                ))}
                <span className="ml-1 sm:ml-2 text-[10px] sm:text-sm">10K+ users</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className={`py-10 sm:py-16 border-y ${isDark ? 'bg-white/[0.02] border-white/10' : 'bg-black/[0.02] border-black/10'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className={`text-2xl sm:text-3xl lg:text-5xl font-bold mb-1 sm:mb-2 ${isDark ? 'text-white' : 'text-black'}`}>
                  {stat.value}
                </div>
                <div className={`text-xs sm:text-sm ${isDark ? 'text-white/50' : 'text-black/50'}`}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-12 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-16">
            <Badge variant="primary" className="mb-3 sm:mb-4">Features</Badge>
            <h2 className={`text-2xl sm:text-3xl lg:text-5xl font-bold mb-3 sm:mb-4 ${isDark ? 'text-white' : 'text-black'}`}>
              Everything you need
            </h2>
            <p className={`text-sm sm:text-base max-w-2xl mx-auto ${isDark ? 'text-white/50' : 'text-black/50'}`}>
              Powerful tools to help your team build better products.
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className={`group p-4 sm:p-6 rounded-xl sm:rounded-2xl border transition-all duration-300 cursor-pointer ${
                  isDark 
                    ? 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20' 
                    : 'bg-black/5 border-black/10 hover:bg-black/10 hover:border-black/20'
                }`}
              >
                <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-4 transition-colors ${
                  isDark ? 'bg-white/10 text-white' : 'bg-black/10 text-black'
                }`}>
                  <feature.icon size={20} className="sm:w-6 sm:h-6" />
                </div>
                <h3 className={`text-sm sm:text-lg font-semibold mb-1 sm:mb-2 ${isDark ? 'text-white' : 'text-black'}`}>
                  {feature.title}
                </h3>
                <p className={`text-xs sm:text-sm ${isDark ? 'text-white/50' : 'text-black/50'}`}>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials - Hidden on mobile, simplified on tablet */}
      <section className={`hidden sm:block py-16 lg:py-24 border-y ${isDark ? 'bg-white/[0.02] border-white/10' : 'bg-black/[0.02] border-black/10'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 lg:mb-16">
            <Badge variant="primary" className="mb-4">Testimonials</Badge>
            <h2 className={`text-2xl lg:text-5xl font-bold ${isDark ? 'text-white' : 'text-black'}`}>
              Loved by teams
            </h2>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className={`p-5 lg:p-6 rounded-xl lg:rounded-2xl border ${
                  isDark ? 'bg-white/5 border-white/10' : 'bg-black/5 border-black/10'
                }`}
              >
                <div className="flex items-center gap-1 mb-3 lg:mb-4">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} size={14} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className={`mb-4 lg:mb-6 text-sm lg:text-base ${isDark ? 'text-white/70' : 'text-black/70'}`}>"{testimonial.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className={`w-9 h-9 lg:w-10 lg:h-10 rounded-full flex items-center justify-center text-xs lg:text-sm font-medium ${
                    isDark ? 'bg-white/10 text-white' : 'bg-black/10 text-black'
                  }`}>
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className={`font-medium text-sm ${isDark ? 'text-white' : 'text-black'}`}>{testimonial.name}</div>
                    <div className={`text-xs ${isDark ? 'text-white/50' : 'text-black/50'}`}>{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-20 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className={`text-2xl sm:text-3xl lg:text-5xl font-bold mb-4 sm:mb-6 ${isDark ? 'text-white' : 'text-black'}`}>
            Ready to get started?
          </h2>
          <p className={`text-sm sm:text-base lg:text-lg mb-6 sm:mb-10 max-w-2xl mx-auto ${isDark ? 'text-white/50' : 'text-black/50'}`}>
            Join thousands of teams building the future.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <Button size="lg" className="w-full sm:w-auto" onClick={() => onNavigate('/signup')}>
              Start Free Trial
              <ArrowRight size={18} />
            </Button>
            <Button variant="secondary" size="lg" className="w-full sm:w-auto" onClick={() => onNavigate('/contact')}>
              Contact Sales
            </Button>
          </div>
          <p className={`mt-4 sm:mt-6 text-xs sm:text-sm ${isDark ? 'text-white/40' : 'text-black/40'}`}>
            No credit card required • 14-day free trial
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;

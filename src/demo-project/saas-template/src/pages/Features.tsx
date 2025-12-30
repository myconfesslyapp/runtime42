import { 
  Zap, Shield, BarChart3, Sparkles, 
  Code2, Cloud, Lock, Workflow,
  ArrowRight, CheckCircle2
} from 'lucide-react';
import { Button, Badge } from '../components/ui';
import { useTheme } from '../lib/ThemeContext';

interface FeaturesProps {
  onNavigate: (path: string) => void;
}

const Features = ({ onNavigate }: FeaturesProps) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const mainFeatures = [
    {
      icon: Zap,
      title: 'Lightning Performance',
      description: 'Blazing-fast load times with optimized infrastructure.',
      benefits: ['Sub-50ms response', 'Global CDN', 'Auto-scaling']
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with SOC2 compliance.',
      benefits: ['SOC2 certified', 'E2E encryption', 'Threat detection']
    },
    {
      icon: Sparkles,
      title: 'AI Automation',
      description: 'Smart workflows that learn and adapt.',
      benefits: ['Task automation', 'Predictive analytics', 'NL commands']
    },
    {
      icon: BarChart3,
      title: 'Real-time Analytics',
      description: 'Comprehensive dashboards with live insights.',
      benefits: ['Live streaming', 'Custom dashboards', 'Advanced reports']
    },
  ];

  const additionalFeatures = [
    { icon: Code2, title: 'API', desc: 'REST & GraphQL' },
    { icon: Cloud, title: 'Cloud', desc: 'K8s ready' },
    { icon: Lock, title: 'SSO', desc: 'Enterprise auth' },
    { icon: Workflow, title: 'Workflows', desc: 'Visual builder' },
  ];

  return (
    <div className="min-h-screen py-12 sm:py-16 lg:py-20">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 text-center mb-12 sm:mb-16 lg:mb-24">
        <Badge variant="primary" className="mb-4 sm:mb-6">Features</Badge>
        <h1 className={`text-3xl sm:text-4xl lg:text-6xl font-bold mb-4 sm:mb-6 ${isDark ? 'text-white' : 'text-black'}`}>
          Powerful features
        </h1>
        <p className={`text-sm sm:text-base lg:text-xl max-w-2xl mx-auto mb-6 sm:mb-10 ${isDark ? 'text-white/50' : 'text-black/50'}`}>
          Everything you need to build, deploy, and scale.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <Button size="lg" className="w-full sm:w-auto" onClick={() => onNavigate('/signup')}>
            Start Free Trial
            <ArrowRight size={18} />
          </Button>
          <Button variant="secondary" size="lg" className="w-full sm:w-auto" onClick={() => onNavigate('/pricing')}>
            View Pricing
          </Button>
        </div>
      </section>

      {/* Main Features */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 mb-12 sm:mb-16 lg:mb-24">
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {mainFeatures.map((feature) => (
            <div
              key={feature.title}
              className={`p-5 sm:p-6 lg:p-8 rounded-2xl lg:rounded-3xl border transition-all duration-300 ${
                isDark 
                  ? 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20' 
                  : 'bg-black/5 border-black/10 hover:bg-black/10 hover:border-black/20'
              }`}
            >
              <div className={`w-11 h-11 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-xl lg:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 ${
                isDark ? 'bg-white/10 text-white' : 'bg-black/10 text-black'
              }`}>
                <feature.icon size={24} className="sm:w-6 sm:h-6 lg:w-7 lg:h-7" />
              </div>
              <h3 className={`text-lg sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-3 ${isDark ? 'text-white' : 'text-black'}`}>
                {feature.title}
              </h3>
              <p className={`text-xs sm:text-sm lg:text-base mb-4 sm:mb-6 ${isDark ? 'text-white/60' : 'text-black/60'}`}>
                {feature.description}
              </p>
              <ul className="space-y-2 sm:space-y-3">
                {feature.benefits.map((benefit) => (
                  <li key={benefit} className={`flex items-center gap-2 sm:gap-3 text-xs sm:text-sm ${isDark ? 'text-white/70' : 'text-black/70'}`}>
                    <CheckCircle2 size={16} className="text-emerald-500 flex-shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Additional Features Grid */}
      <section className={`py-12 sm:py-16 lg:py-24 border-y ${isDark ? 'bg-white/[0.02] border-white/10' : 'bg-black/[0.02] border-black/10'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 ${isDark ? 'text-white' : 'text-black'}`}>
              And more...
            </h2>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
            {additionalFeatures.map((feature) => (
              <div
                key={feature.title}
                className={`p-4 sm:p-5 lg:p-6 rounded-xl lg:rounded-2xl border text-center transition-all duration-300 ${
                  isDark 
                    ? 'bg-white/5 border-white/10 hover:bg-white/10' 
                    : 'bg-black/5 border-black/10 hover:bg-black/10'
                }`}
              >
                <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl mx-auto flex items-center justify-center mb-3 sm:mb-4 ${
                  isDark ? 'bg-white/10 text-white' : 'bg-black/10 text-black'
                }`}>
                  <feature.icon size={20} className="sm:w-6 sm:h-6" />
                </div>
                <h3 className={`font-semibold text-sm sm:text-base mb-1 ${isDark ? 'text-white' : 'text-black'}`}>
                  {feature.title}
                </h3>
                <p className={`text-xs sm:text-sm ${isDark ? 'text-white/50' : 'text-black/50'}`}>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 ${isDark ? 'text-white' : 'text-black'}`}>
            Ready to try?
          </h2>
          <p className={`text-sm sm:text-base lg:text-lg mb-6 sm:mb-10 ${isDark ? 'text-white/50' : 'text-black/50'}`}>
            Start your free trial today.
          </p>
          <Button size="lg" className="w-full sm:w-auto" onClick={() => onNavigate('/signup')}>
            Get Started Free
            <ArrowRight size={18} />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Features;

import { Check, ArrowRight, Sparkles } from 'lucide-react';
import { Button, Badge } from '../components/ui';
import { useTheme } from '../lib/ThemeContext';

interface PricingProps {
  onNavigate: (path: string) => void;
}

const Pricing = ({ onNavigate }: PricingProps) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const plans = [
    {
      name: 'Starter',
      price: 'Free',
      period: 'forever',
      description: 'Perfect for trying out',
      features: [
        'Up to 3 team members',
        '1 GB storage',
        'Basic analytics',
        'Community support',
      ],
      cta: 'Get Started',
      popular: false,
    },
    {
      name: 'Pro',
      price: '$29',
      period: '/month',
      description: 'For growing teams',
      features: [
        'Unlimited members',
        '100 GB storage',
        'Advanced analytics',
        'Priority support',
        'Full API access',
        'AI-powered features',
      ],
      cta: 'Start Free Trial',
      popular: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'pricing',
      description: 'For large orgs',
      features: [
        'Everything in Pro',
        'Unlimited storage',
        'Dedicated support',
        'Custom SLAs',
        'On-premise option',
      ],
      cta: 'Contact Sales',
      popular: false,
    },
  ];

  const faqs = [
    {
      q: 'Can I change plans anytime?',
      a: 'Yes, upgrade or downgrade anytime.',
    },
    {
      q: 'What happens after my trial?',
      a: 'You\'ll move to the free plan unless you upgrade.',
    },
  ];

  return (
    <div className="min-h-screen py-12 sm:py-16 lg:py-20">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 text-center mb-12 sm:mb-16 lg:mb-20">
        <Badge variant="primary" className="mb-4 sm:mb-6">Pricing</Badge>
        <h1 className={`text-3xl sm:text-4xl lg:text-6xl font-bold mb-4 sm:mb-6 ${isDark ? 'text-white' : 'text-black'}`}>
          Simple pricing
        </h1>
        <p className={`text-sm sm:text-base lg:text-xl max-w-2xl mx-auto ${isDark ? 'text-white/50' : 'text-black/50'}`}>
          Start free and scale as you grow. No hidden fees.
        </p>
      </section>

      {/* Pricing Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 mb-16 sm:mb-20 lg:mb-24">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative p-5 sm:p-6 lg:p-8 rounded-2xl lg:rounded-3xl border transition-all duration-300 ${
                plan.popular
                  ? isDark 
                    ? 'bg-white/10 border-white/30 ring-2 ring-white/20' 
                    : 'bg-black/10 border-black/30 ring-2 ring-black/20'
                  : isDark 
                    ? 'bg-white/5 border-white/10 hover:border-white/20' 
                    : 'bg-black/5 border-black/10 hover:border-black/20'
              }`}
            >
              {plan.popular && (
                <div className={`absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-xs font-medium ${
                  isDark ? 'bg-white text-black' : 'bg-black text-white'
                }`}>
                  <span className="flex items-center gap-1">
                    <Sparkles size={12} />
                    Popular
                  </span>
                </div>
              )}

              <div className="mb-4 sm:mb-6">
                <h3 className={`text-lg sm:text-xl font-bold mb-1 sm:mb-2 ${isDark ? 'text-white' : 'text-black'}`}>
                  {plan.name}
                </h3>
                <p className={`text-xs sm:text-sm ${isDark ? 'text-white/50' : 'text-black/50'}`}>{plan.description}</p>
              </div>

              <div className="mb-4 sm:mb-6">
                <span className={`text-3xl sm:text-4xl lg:text-5xl font-bold ${isDark ? 'text-white' : 'text-black'}`}>{plan.price}</span>
                <span className={`text-sm ${isDark ? 'text-white/50' : 'text-black/50'}`}>{plan.period}</span>
              </div>

              <Button
                variant={plan.popular ? 'primary' : 'secondary'}
                className="w-full mb-5 sm:mb-8 text-sm"
                onClick={() => onNavigate(plan.name === 'Enterprise' ? '/contact' : '/signup')}
              >
                {plan.cta}
                <ArrowRight size={14} className="sm:w-4 sm:h-4" />
              </Button>

              <ul className="space-y-2 sm:space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className={`flex items-center gap-2 sm:gap-3 text-xs sm:text-sm ${isDark ? 'text-white/70' : 'text-black/70'}`}>
                    <Check size={16} className="text-emerald-500 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* FAQs - Simplified */}
      <section className={`py-12 sm:py-16 lg:py-24 border-y ${isDark ? 'bg-white/[0.02] border-white/10' : 'bg-black/[0.02] border-black/10'}`}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-bold ${isDark ? 'text-white' : 'text-black'}`}>
              FAQ
            </h2>
          </div>
          
          <div className="space-y-4 sm:space-y-6">
            {faqs.map((faq) => (
              <div
                key={faq.q}
                className={`p-4 sm:p-6 rounded-xl lg:rounded-2xl border ${
                  isDark ? 'bg-white/5 border-white/10' : 'bg-black/5 border-black/10'
                }`}
              >
                <h3 className={`font-semibold mb-1 sm:mb-2 text-sm sm:text-base ${isDark ? 'text-white' : 'text-black'}`}>{faq.q}</h3>
                <p className={`text-xs sm:text-sm ${isDark ? 'text-white/60' : 'text-black/60'}`}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 ${isDark ? 'text-white' : 'text-black'}`}>
            Questions?
          </h2>
          <p className={`text-sm sm:text-base lg:text-lg mb-6 sm:mb-10 ${isDark ? 'text-white/50' : 'text-black/50'}`}>
            Our team is here to help.
          </p>
          <Button size="lg" className="w-full sm:w-auto" onClick={() => onNavigate('/contact')}>
            Contact Sales
            <ArrowRight size={18} />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Pricing;

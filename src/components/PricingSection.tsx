import { Check, Sparkles } from 'lucide-react';

const PricingSection = () => {
  const plans = [
    {
      name: 'Free',
      description: 'Try the builder',
      price: '$0',
      period: '',
      features: ['Limited generations', 'Preview only', 'Basic support'],
      popular: false,
      cta: 'Get started',
    },
    {
      name: 'Starter',
      description: 'Unlimited projects',
      price: '$19',
      period: '/ month',
      features: ['Unlimited projects', 'Higher generation limits', 'Export code', 'Priority builds'],
      popular: true,
      cta: 'Start building',
    },
    {
      name: 'Pro',
      description: 'Highest limits',
      price: '$39',
      period: '/ month',
      features: ['Highest limits', 'Faster generations', 'Advanced architecture options', 'Priority support'],
      popular: false,
      cta: 'Go Pro',
    },
  ];

  return (
    <section id="pricing" className="relative py-24 overflow-hidden">
      {/* Background glows */}
      <div className="glow-orb glow-orb-primary w-[400px] h-[400px] top-0 left-1/4 opacity-15" />
      <div className="glow-orb glow-orb-accent w-[400px] h-[400px] bottom-0 right-1/4 opacity-15" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="section-badge mb-6 inline-block">Pricing</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Simple pricing.{' '}
            <span className="text-gradient">No surprises.</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the plan that fits your needs. Upgrade or downgrade anytime.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`glass-card p-8 relative ${
                plan.popular ? 'border-primary/50 scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1 px-4 py-1 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground text-sm font-medium">
                    <Sparkles className="w-4 h-4" />
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-bold text-foreground mb-2">{plan.name}</h3>
                <p className="text-sm text-muted-foreground">{plan.description}</p>
              </div>

              <div className="mb-6">
                <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                <span className="text-muted-foreground">{plan.period}</span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 rounded-full font-medium transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-primary to-accent text-primary-foreground hover:shadow-lg hover:shadow-primary/30'
                    : 'border border-border text-foreground hover:border-primary/50 hover:bg-primary/10'
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;

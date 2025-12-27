import { Shield, Zap, TrendingUp, Code2 } from 'lucide-react';

const TrustSection = () => {
  const badges = [
    { icon: Shield, label: 'System-first planning' },
    { icon: Zap, label: 'Production-ready output' },
    { icon: TrendingUp, label: 'Scalable by default' },
    { icon: Code2, label: 'Built for real SaaS apps' },
  ];

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background glow */}
      <div className="glow-orb glow-orb-accent w-[500px] h-[500px] top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 opacity-30" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Built for founders who{' '}
            <span className="text-gradient">actually ship</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Most vibe coding tools generate code.
            <br />
            We design the system first — like a real engineering team.
          </p>
        </div>

        {/* Badges Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {badges.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="glass-card-hover p-6 flex flex-col items-center text-center gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Icon className="w-6 h-6 text-primary" />
              </div>
              <span className="text-sm font-medium text-foreground">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;

import { Check, Users } from 'lucide-react';

const DeepFeatureSection = () => {
  const bulletPoints = [
    'Clear system design before generation',
    'Safe handling of API keys and configs',
    'Scalable backend patterns',
    'Frontend + backend awareness',
    'Export to GitHub or ZIP anytime',
  ];

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background glow */}
      <div className="glow-orb glow-orb-primary w-[500px] h-[500px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-6xl mx-auto">
          {/* Visual Side */}
          <div className="order-2 lg:order-1">
            <div className="glass-card p-6 relative">
              <div className="aspect-square rounded-xl bg-gradient-to-br from-muted/30 to-background overflow-hidden relative">
                {/* Simulated team interface */}
                <div className="absolute inset-0 p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                      <Users className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <div className="h-3 bg-foreground/20 rounded w-24 mb-1" />
                      <div className="h-2 bg-muted-foreground/20 rounded w-16" />
                    </div>
                  </div>
                  <div className="space-y-3">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="flex items-center gap-3 p-3 rounded-lg bg-muted/20"
                        style={{ opacity: 1 - i * 0.15 }}
                      >
                        <div className="w-8 h-8 rounded-full bg-primary/20" />
                        <div className="flex-1">
                          <div className="h-2 bg-foreground/20 rounded w-3/4 mb-1" />
                          <div className="h-2 bg-muted-foreground/10 rounded w-1/2" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              </div>

              {/* Floating accent */}
              <div className="absolute -top-4 -right-4 w-24 h-24 rounded-2xl bg-gradient-to-br from-primary/30 to-accent/30 blur-2xl" />
            </div>
          </div>

          {/* Content Side */}
          <div className="order-1 lg:order-2">
            <span className="section-badge mb-6 inline-block">Why us</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Feels like a{' '}
              <span className="text-gradient">senior engineering team</span>
            </h2>

            <ul className="space-y-4 mb-8">
              {bulletPoints.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-muted-foreground">{point}</span>
                </li>
              ))}
            </ul>

            <p className="text-sm text-muted-foreground border-l-2 border-primary/50 pl-4">
              You stay in control. The AI assists — it doesn't guess.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeepFeatureSection;

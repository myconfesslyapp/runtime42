import { Layers, Eye, DollarSign } from 'lucide-react';

const ScalingSection = () => {
  const features = [
    {
      icon: Layers,
      title: 'Multiple architecture options',
      description: 'Choose between MVP, scalable SaaS, or production-grade systems.',
    },
    {
      icon: Eye,
      title: 'Zero infra guesswork',
      description: 'We design backend patterns so you don\'t fight scaling issues later.',
    },
    {
      icon: DollarSign,
      title: 'Clear, usage-based pricing',
      description: 'Start small, test freely, and scale when you\'re ready.',
    },
  ];

  return (
    <section className="relative py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Label */}
        <div className="section-label">
          <div className="section-label-line" />
          <span className="section-label-text flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary" />
            Scaling
          </span>
          <div className="section-label-line" />
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Main card with visual */}
          <div className="bento-card p-8 mb-4 relative overflow-hidden min-h-[350px]">
            <div className="relative z-10 max-w-md">
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                Scale without
                <br />
                thinking
              </h3>
              <p className="text-muted-foreground mb-8">
                From MVP to production — without rewriting everything.
              </p>
              <a
                href="#sales"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-foreground text-background rounded-full text-sm font-medium hover:bg-foreground/90 transition-colors"
              >
                Talk to sales
              </a>
            </div>
            
            {/* Abstract 3D visual placeholder */}
            <div className="absolute top-0 right-0 w-1/2 h-full">
              <div className="absolute top-10 right-10 w-40 h-40 bg-gradient-to-br from-violet-500/30 to-fuchsia-500/20 rounded-2xl transform rotate-12 blur-sm" />
              <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-cyan-400/20 to-blue-500/30 rounded-xl transform -rotate-6" />
            </div>
          </div>

          {/* Feature cards grid */}
          <div className="grid md:grid-cols-3 gap-4">
            {features.map(({ icon: Icon, title, description }) => (
              <div key={title} className="bento-card p-6">
                <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-foreground" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">{title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScalingSection;

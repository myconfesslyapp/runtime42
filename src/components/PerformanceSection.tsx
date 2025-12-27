import { Zap, Layers, Activity, Globe } from 'lucide-react';

const PerformanceSection = () => {
  const features = [
    {
      icon: Zap,
      title: 'Sub-second generation loops',
      description: 'Design → approve → generate without long wait times or broken retries.',
    },
    {
      icon: Layers,
      title: 'Production-ready architecture',
      description: 'Pages, APIs, data models, and backend flows designed before code is written.',
    },
    {
      icon: Activity,
      title: 'Predictable, stable output',
      description: 'No random rewrites. No architectural chaos. Just clean, structured code.',
    },
    {
      icon: Globe,
      title: 'Web-first, backend-aware',
      description: 'Built specifically for modern web applications with real backend needs.',
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
            Performance
          </span>
          <div className="section-label-line" />
        </div>

        {/* Bento Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-4">
            {/* Large feature card */}
            <div className="lg:row-span-2 bento-card p-8 relative overflow-hidden min-h-[400px]">
              <div className="relative z-10">
                <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                  Performance that
                  <br />
                  won't disappoint
                </h3>
                <p className="text-muted-foreground mb-8 max-w-sm">
                  In real-world app building, consistency matters more than demos.
                  runtime42 generates stable, predictable systems — every time.
                </p>
                <a
                  href="#benchmarks"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-foreground text-background rounded-full text-sm font-medium hover:bg-foreground/90 transition-colors"
                >
                  Check our benchmarks
                </a>
              </div>
              
              {/* Gradient visual */}
              <div className="absolute bottom-0 right-0 w-full h-2/3 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/40 via-violet-600/50 to-transparent rounded-tl-[100px]" />
                <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-card to-transparent" />
              </div>
            </div>

            {/* Small feature cards */}
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

export default PerformanceSection;

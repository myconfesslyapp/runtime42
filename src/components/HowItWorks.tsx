import { MessageSquare, FileSearch, CheckCircle, Download } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: MessageSquare,
      step: '01',
      title: 'Describe what you want to build',
      description: 'Tell us your idea in plain language.',
    },
    {
      icon: FileSearch,
      step: '02',
      title: 'Review the proposed system design',
      description: 'See the architecture before any code is written.',
    },
    {
      icon: CheckCircle,
      step: '03',
      title: 'Approve and generate code',
      description: 'One click to generate production-ready code.',
    },
    {
      icon: Download,
      step: '04',
      title: 'Preview, refine, and export',
      description: 'Test your app and export when ready.',
    },
  ];

  return (
    <section id="how-it-works" className="relative py-24 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="section-badge mb-6 inline-block">Process</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            How it{' '}
            <span className="text-gradient">works</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From idea to deployed app in four simple steps.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {steps.map(({ icon: Icon, step, title, description }, index) => (
            <div key={step} className="relative">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-full w-full h-px bg-gradient-to-r from-primary/50 to-transparent z-0" />
              )}

              <div className="glass-card-hover p-6 relative z-10">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <span className="text-4xl font-bold text-muted/30">{step}</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

import { FileCode, GitBranch, Box, Database } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: FileCode,
      title: 'Plan before code',
      description: "Design your app's structure first. Pages, APIs, and data models are generated and reviewed before coding begins.",
    },
    {
      icon: GitBranch,
      title: 'Multiple architecture options',
      description: 'Choose from different system designs based on your needs — MVP, scalable SaaS, or production-grade setups.',
    },
    {
      icon: Box,
      title: 'Clean, production-ready code',
      description: 'No demo-only snippets. Export structured, readable code you can deploy and maintain.',
    },
    {
      icon: Database,
      title: 'Real backend awareness',
      description: 'Environment variables, APIs, databases, and auth are treated like real systems — not magic.',
    },
  ];

  return (
    <section id="product" className="relative py-24 overflow-hidden">
      {/* Background glows */}
      <div className="glow-orb glow-orb-accent w-[400px] h-[400px] top-0 left-1/4 opacity-20" />
      <div className="glow-orb glow-orb-primary w-[400px] h-[400px] bottom-0 right-1/4 opacity-20" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="section-badge mb-6 inline-block">Features</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Everything you need to{' '}
            <span className="text-gradient">build fast</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Powerful features designed to help you ship production-ready applications faster than ever.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {features.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="glass-card-hover p-6 group"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <Icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">{title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

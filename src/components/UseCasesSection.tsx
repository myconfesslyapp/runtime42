import { ArrowRight } from 'lucide-react';

const UseCasesSection = () => {
  const useCases = [
    {
      title: 'SaaS products',
      description: 'Build dashboards, auth flows, APIs, billing-ready systems, and scalable backends.',
      cta: 'Learn more',
      link: '#',
    },
    {
      title: 'Internal tools',
      description: 'Generate admin panels, data tools, and operational apps with clean structure.',
      cta: 'Learn more',
      link: '#',
    },
    {
      title: 'AI-powered apps',
      description: 'Design backend-safe AI workflows with real API handling and data models.',
      cta: 'Learn more',
      link: '#',
    },
    {
      title: 'Startup MVPs',
      description: 'Go from idea → system design → code → export without guesswork.',
      cta: 'Learn more',
      link: '#',
    },
  ];

  return (
    <section className="relative py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary mb-4 block">
            Use Cases
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            What you can build with runtime42
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Powering modern web apps across industries
          </p>
        </div>

        <div className="max-w-6xl mx-auto relative">
          {/* Decorative gradient */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-to-r from-violet-600/20 via-fuchsia-500/20 to-violet-600/20 blur-[100px] pointer-events-none rounded-full" />
          
          <div className="relative bento-card overflow-hidden">
            <div className="grid md:grid-cols-2">
              {useCases.map((useCase, index) => (
                <div
                  key={useCase.title}
                  className={`p-8 ${
                    index < 2 ? 'border-b border-border' : ''
                  } ${index % 2 === 0 ? 'md:border-r border-border' : ''}`}
                >
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    {useCase.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {useCase.description}
                  </p>
                  <a
                    href={useCase.link}
                    className="inline-flex items-center gap-2 text-foreground hover:text-primary transition-colors group"
                  >
                    {useCase.cta}
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;

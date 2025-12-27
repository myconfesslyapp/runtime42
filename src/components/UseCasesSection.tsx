import { ArrowRight } from 'lucide-react';

const UseCasesSection = () => {
  const useCases = [
    {
      title: 'Customer support',
      description: 'Deliver natural conversations at scale — with agents that answer instantly, never drop a call, and handle thousands of interactions in parallel, inbound and outbound.',
      cta: 'aircall transcribed 95% faster',
      link: '#',
    },
    {
      title: 'Sales enablement',
      description: 'Capture names, emails, and company details across accents and languages, then sync seamlessly into CRMs to supercharge sales teams with top-tier AI assistance.',
      cta: 'Attention closed more deals globally',
      link: '#',
    },
    {
      title: 'Note-takers',
      description: 'Capture every detail automatically — with real-time or async transcription that tags speakers, generates summaries, and more across all your tools.',
      cta: 'How we support note-takers?',
      link: '#',
    },
    {
      title: 'Financial services',
      description: 'Run voice agents that can engage customers in sensitive, compliance-heavy contexts, with stable transcription and top numerical accuracy.',
      cta: 'How we support financial services?',
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
            What you can build with our API
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Powering the next generation of AI assistants and voice agents across industries
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

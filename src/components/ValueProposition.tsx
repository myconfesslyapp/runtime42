import { Layers } from 'lucide-react';

const ValueProposition = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background glow */}
      <div className="glow-orb glow-orb-primary w-[600px] h-[600px] top-1/2 right-0 -translate-y-1/2 translate-x-1/2 opacity-20" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-8 sm:p-12 lg:p-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                <Layers className="w-5 h-5 text-primary" />
              </div>
              <span className="text-sm font-medium text-primary uppercase tracking-wider">Core Philosophy</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Built for clarity,{' '}
              <span className="text-gradient">not chaos</span>
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
              Before a single line of code is generated, we design your application's structure — 
              pages, APIs, data models, and architecture. So you don't end up rewriting everything later.
            </p>

            {/* Visual element */}
            <div className="mt-12 grid grid-cols-3 gap-4">
              <div className="h-2 rounded-full bg-gradient-to-r from-primary to-primary/50" />
              <div className="h-2 rounded-full bg-gradient-to-r from-primary/50 to-accent/50" />
              <div className="h-2 rounded-full bg-gradient-to-r from-accent/50 to-accent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;

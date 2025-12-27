import { ArrowRight, Play } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Glow Effects */}
      <div className="glow-orb glow-orb-primary w-[600px] h-[600px] top-0 left-1/4 -translate-x-1/2 animate-pulse-glow" />
      <div className="glow-orb glow-orb-accent w-[500px] h-[500px] top-20 right-1/4 translate-x-1/2 animate-pulse-glow" style={{ animationDelay: '2s' }} />
      <div className="glow-orb glow-orb-primary w-[400px] h-[400px] bottom-0 left-1/3 animate-pulse-glow" style={{ animationDelay: '1s' }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-medium text-primary">AI-Powered Development Platform</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            <span className="text-foreground">Vibe coding, done</span>
            <br />
            <span className="text-gradient">the right way.</span>
          </h1>

          {/* Sub-headline */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Design, generate, and ship scalable web apps using AI —
            <br className="hidden sm:block" />
            with real system design, not broken code.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <a href="#start" className="btn-primary flex items-center gap-2 text-base">
              Start building for free
              <ArrowRight size={18} />
            </a>
            <a href="#demo" className="btn-secondary flex items-center gap-2 text-base">
              <Play size={18} />
              View demo
            </a>
          </div>

          {/* Supporting Line */}
          <p className="text-sm text-muted-foreground">
            No setup. No guesswork. Export real code anytime.
          </p>
        </div>

        {/* Hero Visual */}
        <div className="mt-16 relative">
          <div className="glass-card p-2 max-w-5xl mx-auto">
            <div className="relative rounded-xl overflow-hidden bg-gradient-to-br from-muted/50 to-background aspect-video">
              {/* Simulated UI Preview */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-full p-4 sm:p-8">
                  {/* Header bar */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-destructive/60" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                    <div className="w-3 h-3 rounded-full bg-green-500/60" />
                    <div className="flex-1 h-6 bg-muted/30 rounded ml-4" />
                  </div>
                  {/* Content skeleton */}
                  <div className="grid grid-cols-12 gap-4 h-[calc(100%-2rem)]">
                    <div className="col-span-3 bg-muted/20 rounded-lg p-3 hidden sm:block">
                      <div className="h-4 bg-muted/40 rounded mb-3 w-3/4" />
                      <div className="h-3 bg-muted/30 rounded mb-2" />
                      <div className="h-3 bg-muted/30 rounded mb-2 w-5/6" />
                      <div className="h-3 bg-muted/30 rounded w-2/3" />
                    </div>
                    <div className="col-span-12 sm:col-span-9 bg-muted/10 rounded-lg p-4">
                      <div className="h-8 bg-gradient-to-r from-primary/30 to-accent/30 rounded-lg mb-4 w-1/2" />
                      <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
                        {[1, 2, 3, 4, 5, 6].map((i) => (
                          <div key={i} className="h-24 bg-muted/20 rounded-lg border border-border/30" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Glow overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Floating elements */}
          <div className="absolute -left-4 top-1/4 w-16 h-16 glass-card flex items-center justify-center animate-float hidden lg:flex">
            <span className="text-2xl">⚡</span>
          </div>
          <div className="absolute -right-4 top-1/3 w-20 h-20 glass-card flex items-center justify-center animate-float hidden lg:flex" style={{ animationDelay: '1s' }}>
            <span className="text-2xl">🚀</span>
          </div>
        </div>

        {/* Caption */}
        <p className="text-center text-sm text-muted-foreground mt-8">
          See your idea turn into a real, working application — step by step.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;

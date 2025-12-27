import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16">
      {/* Background Glow Effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full bg-gradient-to-b from-primary/20 via-accent/10 to-transparent blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/3 w-[400px] h-[400px] rounded-full bg-primary/15 blur-[100px] pointer-events-none animate-pulse-glow" />
      <div className="absolute top-1/3 right-1/3 w-[400px] h-[400px] rounded-full bg-accent/20 blur-[100px] pointer-events-none animate-pulse-glow" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-muted/50 border border-border/50 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">AI-Powered Development</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight mb-6">
            <span className="text-foreground">Vibe coding, done</span>
            <br />
            <span className="text-gradient">the right way.</span>
          </h1>

          {/* Sub-headline */}
          <p className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed">
            Design, generate, and ship scalable web apps using AI — with real system design, not broken code.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6">
            <a
              href="#start"
              className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background font-medium rounded-full hover:bg-foreground/90 transition-all hover:scale-105"
            >
              Start building for free
              <ArrowRight size={16} />
            </a>
            <a
              href="#demo"
              className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground font-medium rounded-full hover:bg-muted/30 transition-colors"
            >
              View demo
            </a>
          </div>

          {/* Supporting Line */}
          <p className="text-xs text-muted-foreground/70">
            No setup. No guesswork. Export real code anytime.
          </p>
        </div>

        {/* Hero Visual */}
        <div className="mt-20 relative max-w-5xl mx-auto">
          {/* Outer glow */}
          <div className="absolute -inset-4 bg-gradient-to-b from-primary/20 via-accent/10 to-transparent rounded-3xl blur-2xl pointer-events-none" />
          
          {/* Main preview card */}
          <div className="relative bg-card/60 backdrop-blur-xl border border-border/40 rounded-2xl p-1.5 shadow-2xl shadow-primary/5">
            <div className="relative rounded-xl overflow-hidden bg-gradient-to-b from-muted/40 to-background/80 aspect-[16/9]">
              {/* Browser chrome */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-border/30">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/40" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/40" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/40" />
                </div>
                <div className="flex-1 mx-8">
                  <div className="h-5 bg-muted/30 rounded-full max-w-xs mx-auto" />
                </div>
              </div>
              
              {/* App content skeleton */}
              <div className="p-6">
                <div className="grid grid-cols-12 gap-4 h-full">
                  {/* Sidebar */}
                  <div className="col-span-3 hidden sm:block">
                    <div className="h-6 bg-muted/30 rounded w-2/3 mb-4" />
                    <div className="space-y-2">
                      <div className="h-3 bg-muted/20 rounded" />
                      <div className="h-3 bg-primary/20 rounded" />
                      <div className="h-3 bg-muted/20 rounded w-4/5" />
                      <div className="h-3 bg-muted/20 rounded w-3/5" />
                    </div>
                  </div>
                  
                  {/* Main content */}
                  <div className="col-span-12 sm:col-span-9">
                    <div className="h-8 bg-gradient-to-r from-primary/30 to-accent/20 rounded-lg w-2/5 mb-6" />
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {[1, 2, 3, 4, 5, 6].map((i) => (
                        <div
                          key={i}
                          className="aspect-[4/3] bg-muted/15 rounded-lg border border-border/20 flex items-center justify-center"
                        >
                          <div className="w-8 h-8 rounded bg-muted/30" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Bottom gradient fade */}
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Caption */}
        <p className="text-center text-sm text-muted-foreground/60 mt-8">
          See your idea turn into a real, working application — step by step.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;

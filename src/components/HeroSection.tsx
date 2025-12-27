import { ArrowRight, Mic } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-background pt-28 pb-0">
      {/* Background Gradient Glows */}
      <div className="absolute top-0 left-0 w-[600px] h-[800px] bg-gradient-to-br from-purple-600/40 via-purple-500/20 to-transparent blur-[120px] pointer-events-none -translate-x-1/3" />
      <div className="absolute top-0 right-0 w-[600px] h-[800px] bg-gradient-to-bl from-fuchsia-500/40 via-purple-500/20 to-transparent blur-[120px] pointer-events-none translate-x-1/3" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/4 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <a
            href="#ebook"
            className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-muted/60 border border-border/40 mb-10 hover:bg-muted/80 transition-colors group"
          >
            <span className="px-2 py-0.5 bg-muted rounded text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
              Ebook
            </span>
            <span className="text-sm text-foreground/90">
              STT Buyer's Guide for <span className="text-foreground font-medium">Voice Agents</span>
            </span>
            <ArrowRight size={14} className="text-muted-foreground group-hover:translate-x-0.5 transition-transform" />
          </a>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-bold leading-[1.1] tracking-tight mb-8 text-foreground">
            Vibe coding, done
            <br />
            the right way.
          </h1>

          {/* Sub-headline */}
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Design, generate, and ship scalable web apps using AI — with real system design, not broken code.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-20">
            <a
              href="#demo"
              className="inline-flex items-center gap-2 px-6 py-3 border border-foreground/20 bg-transparent text-foreground font-medium rounded-full hover:bg-foreground/10 transition-all"
            >
              Request a demo
            </a>
            <a
              href="#start"
              className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background font-medium rounded-full hover:bg-foreground/90 transition-all"
            >
              Sign up for free
            </a>
          </div>
        </div>

        {/* Hero Preview Card */}
        <div className="relative max-w-4xl mx-auto">
          {/* Card glow effect */}
          <div className="absolute -inset-1 bg-gradient-to-b from-white/10 to-transparent rounded-3xl blur-sm pointer-events-none" />
          
          {/* Main card */}
          <div className="relative bg-[#1a1a24]/90 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
            {/* Card content */}
            <div className="p-8 min-h-[300px] relative">
              {/* Text preview */}
              <p className="text-foreground font-medium text-lg">
                Hello, hello, hello.
              </p>
              
              {/* Bottom bar */}
              <div className="absolute bottom-0 left-0 right-0 px-6 py-4 flex items-center justify-between border-t border-white/5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-fuchsia-500 flex items-center justify-center">
                    <div className="w-3 h-3 bg-white/80 rounded-full" />
                  </div>
                  <span className="text-sm text-muted-foreground">Time remaining 04:52</span>
                </div>
                
                <div className="flex items-center gap-4">
                  <span className="text-sm text-muted-foreground">
                    Restart live transcription in <span className="text-foreground underline">English</span>
                  </span>
                  <button className="w-10 h-10 rounded-full bg-foreground flex items-center justify-center hover:bg-foreground/90 transition-colors">
                    <Mic size={18} className="text-background" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Curved bottom shape */}
      <div className="relative mt-[-80px]">
        <svg
          viewBox="0 0 1440 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path
            d="M0 200V100C0 100 360 0 720 0C1080 0 1440 100 1440 100V200H0Z"
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;

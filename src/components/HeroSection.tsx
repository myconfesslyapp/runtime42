import { ArrowRight, Mic, Volume2 } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-background pt-28 pb-0">
      {/* Background Gradient Glows */}
      <div className="absolute top-0 left-0 w-[700px] h-[700px] bg-gradient-to-br from-violet-600/50 via-purple-500/30 to-transparent blur-[150px] pointer-events-none -translate-x-1/4 -translate-y-1/4" />
      <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-gradient-to-bl from-fuchsia-500/50 via-purple-500/30 to-transparent blur-[150px] pointer-events-none translate-x-1/4 -translate-y-1/4" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-purple-500/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <a
            href="#ebook"
            className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-muted/80 dark:bg-white/5 border border-border/50 dark:border-white/10 mb-10 hover:bg-muted dark:hover:bg-white/10 transition-colors group"
          >
            <span className="px-2.5 py-1 bg-muted-foreground/10 dark:bg-white/10 rounded text-[10px] font-bold uppercase tracking-wider text-muted-foreground dark:text-white/60">
              Ebook
            </span>
            <span className="text-sm text-foreground/80 dark:text-white/80">
              STT Buyer's Guide for <span className="text-foreground dark:text-white font-medium">Voice Agents</span>
            </span>
            <ArrowRight size={14} className="text-muted-foreground dark:text-white/50 group-hover:translate-x-0.5 transition-transform" />
          </a>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.08] tracking-tight mb-8 text-foreground">
            Vibe coding, done
            <br />
            the right way.
          </h1>

          {/* Sub-headline */}
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Design, generate, and ship scalable web apps using AI — with real system design, not broken code.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-24">
            <a
              href="#demo"
              className="inline-flex items-center gap-2 px-6 py-3 border border-foreground/20 dark:border-white/20 bg-transparent text-foreground dark:text-white font-medium rounded-full hover:bg-foreground/5 dark:hover:bg-white/5 transition-all"
            >
              Request a demo
            </a>
            <a
              href="#start"
              className="inline-flex items-center gap-2 px-6 py-3 bg-foreground dark:bg-white text-background dark:text-black font-medium rounded-full hover:bg-foreground/90 dark:hover:bg-white/90 transition-all"
            >
              Sign up for free
            </a>
          </div>
        </div>

        {/* Hero Chat Preview Card */}
        <div className="relative max-w-4xl mx-auto mb-0">
          {/* Card glow effect */}
          <div className="absolute -inset-[1px] rounded-[20px] bg-gradient-to-b from-white/20 via-white/5 to-transparent pointer-events-none" />
          
          {/* Main chat card - always dark */}
          <div className="relative bg-[#18181b] rounded-[20px] overflow-hidden shadow-2xl shadow-black/50 border border-white/[0.08]">
            {/* Chat content area */}
            <div className="p-8 pb-20 min-h-[280px]">
              {/* Chat messages */}
              <div className="space-y-4">
                <p className="text-white/90 font-medium text-lg leading-relaxed">
                  Hello, hello, hello.
                </p>
              </div>
            </div>
            
            {/* Bottom control bar */}
            <div className="absolute bottom-0 left-0 right-0 px-6 py-4 bg-[#18181b] border-t border-white/[0.06]">
              <div className="flex items-center justify-between">
                {/* Left side - Avatar and timer */}
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-500 via-purple-500 to-fuchsia-500 flex items-center justify-center shadow-lg shadow-purple-500/30">
                      <Volume2 size={16} className="text-white" />
                    </div>
                    {/* Pulse animation ring */}
                    <div className="absolute inset-0 rounded-full bg-purple-500/30 animate-ping" style={{ animationDuration: '2s' }} />
                  </div>
                  <span className="text-sm text-white/40 font-mono">Time remaining 04:52</span>
                </div>
                
                {/* Right side - Language and mic */}
                <div className="flex items-center gap-4">
                  <span className="text-sm text-white/40 hidden sm:block">
                    Restart live transcription in{' '}
                    <span className="text-white/70 underline underline-offset-2 cursor-pointer hover:text-white transition-colors">
                      English
                    </span>
                  </span>
                  <button className="w-11 h-11 rounded-full bg-white flex items-center justify-center hover:bg-white/90 transition-all hover:scale-105 shadow-lg">
                    <Mic size={18} className="text-black" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Curved bottom arc */}
      <div className="relative mt-[-60px] pointer-events-none">
        <svg
          viewBox="0 0 1440 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <ellipse
            cx="720"
            cy="200"
            rx="900"
            ry="180"
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;

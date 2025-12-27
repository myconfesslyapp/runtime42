import { ArrowRight, Plus, Paperclip, Palette, MessageSquare, AudioLines, ArrowUp } from 'lucide-react';

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

        {/* Hero Chat Input Box */}
        <div className="relative max-w-4xl mx-auto mb-0">
          {/* Main chat input card */}
          <div className="relative bg-[#2a2a2e] rounded-2xl overflow-hidden shadow-2xl shadow-black/40">
            {/* Input area */}
            <div className="px-5 py-4">
              <div className="flex items-start gap-3">
                <span className="text-white/40 text-base leading-relaxed pt-0.5">|</span>
                <p className="text-white/50 text-base leading-relaxed flex-1">
                  Ask Lovable to create a blog about...
                </p>
                {/* Green robot icon */}
                <div className="w-7 h-7 rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xs">🤖</span>
                </div>
              </div>
            </div>
            
            {/* Bottom toolbar */}
            <div className="px-4 py-3 flex items-center justify-between">
              {/* Left side buttons */}
              <div className="flex items-center gap-2">
                {/* Plus button */}
                <button className="w-9 h-9 rounded-xl bg-[#3a3a3e] hover:bg-[#454549] flex items-center justify-center transition-colors">
                  <Plus size={18} className="text-white/60" />
                </button>
                
                {/* Attach button */}
                <button className="h-9 px-3.5 rounded-xl bg-[#3a3a3e] hover:bg-[#454549] flex items-center gap-2 transition-colors">
                  <Paperclip size={16} className="text-white/60" />
                  <span className="text-sm text-white/70 font-medium">Attach</span>
                </button>
                
                {/* Theme dropdown */}
                <button className="h-9 px-3.5 rounded-xl bg-[#3a3a3e] hover:bg-[#454549] flex items-center gap-2 transition-colors">
                  <Palette size={16} className="text-white/60" />
                  <span className="text-sm text-white/50 font-medium">Theme</span>
                  <svg className="w-3 h-3 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
              
              {/* Right side buttons */}
              <div className="flex items-center gap-2">
                {/* Chat button */}
                <button className="h-9 px-4 rounded-xl bg-[#3a3a3e] hover:bg-[#454549] flex items-center gap-2 transition-colors">
                  <MessageSquare size={16} className="text-white/60" />
                  <span className="text-sm text-white/70 font-medium">Chat</span>
                </button>
                
                {/* Audio waveform button */}
                <button className="w-9 h-9 rounded-xl bg-[#3a3a3e] hover:bg-[#454549] flex items-center justify-center transition-colors">
                  <AudioLines size={18} className="text-white/60" />
                </button>
                
                {/* Send button */}
                <button className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors border border-white/10">
                  <ArrowUp size={18} className="text-white/50" />
                </button>
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

import { ArrowRight, Plus, Paperclip, Palette, MessageSquare, AudioLines, ArrowUp } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-background pt-40 sm:pt-48 pb-0">
      {/* Background Gradient Glows */}
      <div className="absolute top-0 left-0 w-[700px] h-[700px] bg-gradient-to-br from-violet-500/40 via-purple-400/25 to-transparent blur-[150px] pointer-events-none -translate-x-1/4 -translate-y-1/4" />
      <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-gradient-to-bl from-fuchsia-400/40 via-pink-400/25 to-transparent blur-[150px] pointer-events-none translate-x-1/4 -translate-y-1/4" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-purple-400/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <a
            href="#ebook"
            className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/60 dark:bg-white/5 backdrop-blur-xl border border-black/5 dark:border-white/10 mb-12 hover:bg-white/80 dark:hover:bg-white/10 transition-colors group shadow-sm"
          >
            <span className="px-2.5 py-1 bg-black/5 dark:bg-white/10 rounded text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
              Ebook
            </span>
            <span className="text-sm text-foreground/80">
              STT Buyer's Guide for <span className="text-foreground font-semibold">Voice Agents</span>
            </span>
            <ArrowRight size={14} className="text-muted-foreground group-hover:translate-x-0.5 transition-transform" />
          </a>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight mb-6 text-foreground">
            Vibe coding, done
            <br />
            the right way.
          </h1>

          {/* Sub-headline */}
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
            Design, generate, and ship scalable web apps using AI — with real system design, not broken code.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-20">
            <a
              href="#demo"
              className="inline-flex items-center gap-2 px-6 py-3 border border-black/10 dark:border-white/20 bg-white/50 dark:bg-transparent backdrop-blur-sm text-foreground font-medium rounded-full hover:bg-white/80 dark:hover:bg-white/5 transition-all shadow-sm"
            >
              Request a demo
            </a>
            <a
              href="#start"
              className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background font-medium rounded-full hover:bg-foreground/90 transition-all shadow-lg shadow-black/10"
            >
              Sign up for free
            </a>
          </div>
        </div>

        {/* Hero Chat Input Box */}
        <div className="relative max-w-3xl mx-auto mb-16">
          {/* Glassmorphic outer glow for light mode */}
          <div className="absolute -inset-1 rounded-[22px] bg-gradient-to-b from-black/5 to-transparent dark:from-white/10 dark:to-transparent blur-sm pointer-events-none" />
          
          {/* Main chat input card */}
          <div className="relative bg-[#323238] dark:bg-[#1e1e22] rounded-2xl overflow-hidden shadow-2xl shadow-black/20 dark:shadow-black/50 border border-black/10 dark:border-white/5">
            {/* Input area */}
            <div className="px-5 py-4">
              <div className="flex items-start gap-3">
                <span className="text-white/30 text-base leading-relaxed pt-0.5">|</span>
                <p className="text-white/40 text-base leading-relaxed flex-1">
                  Ask Lovable to create a blog about...
                </p>
                {/* Green indicator */}
                <div className="w-7 h-7 rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0 shadow-lg shadow-emerald-500/30">
                  <span className="text-white text-[10px] font-bold">−</span>
                </div>
              </div>
            </div>
            
            {/* Bottom toolbar */}
            <div className="px-4 py-3 flex items-center justify-between">
              {/* Left side buttons */}
              <div className="flex items-center gap-2">
                {/* Plus button */}
                <button className="w-9 h-9 rounded-xl bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors border border-white/5">
                  <Plus size={16} className="text-white/50" />
                </button>
                
                {/* Attach button */}
                <button className="h-9 px-3.5 rounded-xl bg-white/5 hover:bg-white/10 flex items-center gap-2 transition-colors border border-white/5">
                  <Paperclip size={14} className="text-white/50" />
                  <span className="text-sm text-white/60 font-medium">Attach</span>
                </button>
                
                {/* Theme dropdown */}
                <button className="h-9 px-3.5 rounded-xl bg-white/5 hover:bg-white/10 flex items-center gap-2 transition-colors border border-white/5">
                  <Palette size={14} className="text-white/50" />
                  <span className="text-sm text-white/50 font-medium">Theme</span>
                  <svg className="w-2.5 h-2.5 text-white/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
              
              {/* Right side buttons */}
              <div className="flex items-center gap-2">
                {/* Chat button */}
                <button className="h-9 px-3.5 rounded-xl bg-white/5 hover:bg-white/10 flex items-center gap-2 transition-colors border border-white/5">
                  <MessageSquare size={14} className="text-white/50" />
                  <span className="text-sm text-white/60 font-medium">Chat</span>
                </button>
                
                {/* Audio waveform button */}
                <button className="w-9 h-9 rounded-xl bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors border border-white/5">
                  <AudioLines size={16} className="text-white/50" />
                </button>
                
                {/* Send button */}
                <button className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/15 flex items-center justify-center transition-colors border border-white/10">
                  <ArrowUp size={16} className="text-white/40" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Curved bottom arc - removed for cleaner look */}
    </section>
  );
};

export default HeroSection;

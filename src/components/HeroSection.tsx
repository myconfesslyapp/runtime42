import { Plus, Paperclip, Palette, MessageSquare, AudioLines, ArrowUp } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden pt-32 sm:pt-40 pb-0">
      {/* Full gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-orange-600/30 via-amber-500/20 to-background" />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-orange-500/40 via-transparent to-transparent" />
      <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-amber-400/30 via-transparent to-transparent" />
      
      {/* Center glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-to-b from-orange-500/25 via-amber-400/15 to-transparent blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">

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
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-16">
            <a
              href="#demo"
              className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 bg-white/5 backdrop-blur-sm text-foreground font-medium rounded-full hover:bg-white/10 transition-all"
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

        {/* Hero Chat Input Box - positioned above curved arc */}
        <div className="relative max-w-3xl mx-auto z-20">
          {/* Glassmorphic outer glow */}
          <div className="absolute -inset-1 rounded-[22px] bg-gradient-to-b from-white/10 to-transparent blur-sm pointer-events-none" />
          
          {/* Main chat input card */}
          <div className="relative bg-[#1a1a1e]/90 backdrop-blur-xl rounded-2xl overflow-hidden shadow-2xl shadow-black/50 border border-white/10">
            {/* Input area */}
            <div className="px-5 py-4">
              <div className="flex items-start gap-3">
                <span className="text-white/30 text-base leading-relaxed pt-0.5">|</span>
                <p className="text-white/40 text-base leading-relaxed flex-1">
                  Ask runtime42 to build a SaaS dashboard with auth, APIs, and a scalable backend…
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

      {/* Curved dark arc at bottom with glowing edge */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[200%] aspect-[3/1] translate-y-[60%]">
        {/* Glow effect on top edge */}
        <div className="absolute inset-0 rounded-t-[50%] bg-gradient-to-b from-orange-500/40 via-orange-500/10 to-transparent blur-2xl" />
        {/* Dark arc */}
        <div className="absolute inset-0 rounded-t-[50%] bg-background border-t border-orange-500/30 shadow-[0_-20px_80px_-20px_rgba(249,115,22,0.4)]" />
      </div>
    </section>
  );
};

export default HeroSection;

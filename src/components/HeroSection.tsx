import { Plus, Paperclip, Palette, MessageSquare, AudioLines, ArrowUp } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden flex flex-col">
      {/* Orange gradient background - darker at bottom, orange at top */}
      <div className="absolute inset-0 bg-gradient-to-b from-amber-600/50 via-orange-500/30 to-transparent" />
      <div className="absolute top-0 left-0 w-full h-2/3 bg-gradient-to-br from-orange-500/40 via-amber-500/25 to-transparent" />
      <div className="absolute top-0 right-0 w-full h-2/3 bg-gradient-to-bl from-amber-400/35 via-orange-400/20 to-transparent" />
      
      {/* Center glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-b from-orange-500/30 via-amber-400/20 to-transparent blur-[80px] pointer-events-none" />

      {/* Content centered vertically */}
      <div className="container mx-auto px-6 relative z-10 flex-1 flex flex-col justify-center items-center pt-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-6 leading-[1.1]">
            Vibe coding, done<br />the right way.
          </h1>

          {/* Subheadline */}
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
            Design, generate, and ship scalable web apps using AI — with real system design, not broken code.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-12">
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

        {/* Hero Chat Input Box - centered */}
        <div className="relative max-w-3xl w-full mx-auto z-20">
          {/* Glassmorphic outer glow */}
          <div className="absolute -inset-1 rounded-[22px] bg-gradient-to-b from-white/10 to-transparent blur-sm pointer-events-none" />
          
          {/* Main chat input card */}
          <div className="relative bg-[#1a1a1e]/95 backdrop-blur-xl rounded-2xl overflow-hidden shadow-2xl shadow-black/50 border border-white/10">
            {/* Input area */}
            <div className="px-5 py-4">
              <div className="flex items-start gap-3">
                <div className="flex-1 relative">
                  <div className="flex items-center gap-1 text-muted-foreground/70">
                    <span className="text-orange-400">|</span>
                    <span className="text-sm">Ask runtime42 to build a SaaS dashboard with auth, APIs, and a scalable backend...</span>
                  </div>
                </div>
                {/* Status indicator */}
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 shadow-lg shadow-green-500/30 flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full" />
                </div>
              </div>
            </div>
            
            {/* Bottom toolbar */}
            <div className="flex items-center justify-between px-4 py-3 border-t border-white/5">
              <div className="flex items-center gap-2">
                {/* Plus button */}
                <button className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors">
                  <Plus className="w-4 h-4" />
                </button>
                
                {/* Attach button */}
                <button className="h-8 px-3 rounded-lg bg-white/5 hover:bg-white/10 flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm">
                  <Paperclip className="w-4 h-4" />
                  <span>Attach</span>
                </button>
                
                {/* Theme button */}
                <button className="h-8 px-3 rounded-lg bg-white/5 hover:bg-white/10 flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm">
                  <Palette className="w-4 h-4" />
                  <span>Theme</span>
                  <span className="text-[10px] opacity-50">▼</span>
                </button>
              </div>
              
              <div className="flex items-center gap-2">
                {/* Chat button */}
                <button className="h-8 px-3 rounded-lg bg-white/5 hover:bg-white/10 flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm">
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat</span>
                </button>
                
                {/* Voice button */}
                <button className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors">
                  <AudioLines className="w-4 h-4" />
                </button>
                
                {/* Send button */}
                <button className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/15 flex items-center justify-center text-foreground transition-colors">
                  <ArrowUp className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Curved dark arc at bottom - gradient from orange to dark */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[200%] aspect-[3/1] translate-y-[55%]">
        {/* Gradient glow on top edge */}
        <div className="absolute inset-0 rounded-t-[50%] bg-gradient-to-b from-orange-500/50 via-orange-600/20 to-transparent blur-xl" />
        {/* Dark arc with gradient overlay */}
        <div className="absolute inset-0 rounded-t-[50%] bg-gradient-to-b from-[#1a1a1e] to-background border-t border-orange-500/40 shadow-[0_-30px_100px_-20px_rgba(249,115,22,0.5)]" />
      </div>
    </section>
  );
};

export default HeroSection;

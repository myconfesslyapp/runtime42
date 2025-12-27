import { Plus, Paperclip, Palette, MessageSquare, AudioLines, ArrowUp } from 'lucide-react';

const HeroSection = () => {
  // Generate stable star positions
  const stars = Array.from({ length: 80 }, (_, i) => ({
    id: i,
    size: 1 + (i % 3),
    top: (i * 17) % 100,
    left: (i * 23) % 100,
    delay: (i * 0.3) % 5,
    duration: 2 + (i % 4),
  }));

  // Generate orbital particles
  const orbitals = Array.from({ length: 6 }, (_, i) => ({
    id: i,
    size: 3 + i * 2,
    orbitSize: 200 + i * 120,
    duration: 20 + i * 8,
    delay: i * 2,
  }));

  return (
    <section className="relative min-h-screen overflow-hidden flex flex-col bg-[#030014]">
      {/* Deep space gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0118] via-[#030014] to-[#020010]" />
      
      {/* Nebula clouds */}
      <div 
        className="absolute top-0 left-0 w-full h-full opacity-40 pointer-events-none"
        style={{ 
          background: 'radial-gradient(ellipse at 20% 30%, rgba(88,28,135,0.3) 0%, transparent 50%), radial-gradient(ellipse at 80% 20%, rgba(30,64,175,0.2) 0%, transparent 40%)'
        }}
      />
      
      {/* Half Sun - Coming from bottom left */}
      <div className="absolute bottom-[-40%] left-[-20%] w-[800px] h-[800px] pointer-events-none">
        {/* Sun core */}
        <div 
          className="absolute inset-0 rounded-full animate-pulse"
          style={{ 
            background: 'radial-gradient(circle, rgba(251,146,60,1) 0%, rgba(249,115,22,0.9) 30%, rgba(234,88,12,0.6) 50%, rgba(194,65,12,0.3) 70%, transparent 85%)',
            boxShadow: '0 0 150px 60px rgba(249,115,22,0.4), 0 0 300px 120px rgba(249,115,22,0.2)'
          }}
        />
        {/* Sun corona glow */}
        <div 
          className="absolute inset-[-20%] rounded-full blur-3xl"
          style={{ 
            background: 'radial-gradient(circle, rgba(251,146,60,0.3) 0%, rgba(249,115,22,0.15) 40%, transparent 70%)'
          }}
        />
        {/* Outer atmosphere */}
        <div 
          className="absolute inset-[-40%] rounded-full blur-[100px]"
          style={{ 
            background: 'radial-gradient(circle, rgba(249,115,22,0.15) 0%, rgba(251,191,36,0.05) 50%, transparent 70%)'
          }}
        />
      </div>

      {/* Twinkling Stars */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {stars.map((star) => (
          <div
            key={`star-${star.id}`}
            className="absolute rounded-full bg-white animate-twinkle"
            style={{
              width: `${star.size}px`,
              height: `${star.size}px`,
              top: `${star.top}%`,
              left: `${star.left}%`,
              animationDelay: `${star.delay}s`,
              animationDuration: `${star.duration}s`,
            }}
          />
        ))}
      </div>

      {/* Orbital rings around center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        {orbitals.map((orbital) => (
          <div
            key={`orbital-${orbital.id}`}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/5 animate-spin-slow"
            style={{
              width: `${orbital.orbitSize}px`,
              height: `${orbital.orbitSize}px`,
              animationDuration: `${orbital.duration}s`,
              animationDelay: `${orbital.delay}s`,
            }}
          >
            {/* Orbital particle */}
            <div 
              className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/60 shadow-lg"
              style={{
                width: `${orbital.size}px`,
                height: `${orbital.size}px`,
                boxShadow: `0 0 ${orbital.size * 3}px ${orbital.size}px rgba(255,255,255,0.3)`
              }}
            />
          </div>
        ))}
      </div>

      {/* Galaxy dust */}
      <div 
        className="absolute top-[20%] right-[10%] w-[400px] h-[300px] rounded-full blur-[80px] opacity-30 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(139,92,246,0.4) 0%, transparent 70%)' }}
      />
      <div 
        className="absolute top-[40%] left-[5%] w-[300px] h-[200px] rounded-full blur-[60px] opacity-20 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(59,130,246,0.5) 0%, transparent 70%)' }}
      />

      {/* Content */}
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

        {/* Hero Chat Input Box */}
        <div className="relative max-w-3xl w-full mx-auto z-20">
          {/* Glassmorphic outer glow */}
          <div className="absolute -inset-1 rounded-[22px] bg-gradient-to-b from-white/10 to-transparent blur-sm pointer-events-none" />
          
          {/* Main chat input card */}
          <div className="relative bg-[#1a1a1e]/90 backdrop-blur-xl rounded-2xl overflow-hidden shadow-2xl shadow-black/50 border border-white/10">
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
                <button className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors">
                  <Plus className="w-4 h-4" />
                </button>
                <button className="h-8 px-3 rounded-lg bg-white/5 hover:bg-white/10 flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm">
                  <Paperclip className="w-4 h-4" />
                  <span>Attach</span>
                </button>
                <button className="h-8 px-3 rounded-lg bg-white/5 hover:bg-white/10 flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm">
                  <Palette className="w-4 h-4" />
                  <span>Theme</span>
                  <span className="text-[10px] opacity-50">▼</span>
                </button>
              </div>
              
              <div className="flex items-center gap-2">
                <button className="h-8 px-3 rounded-lg bg-white/5 hover:bg-white/10 flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm">
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat</span>
                </button>
                <button className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors">
                  <AudioLines className="w-4 h-4" />
                </button>
                <button className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/15 flex items-center justify-center text-foreground transition-colors">
                  <ArrowUp className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
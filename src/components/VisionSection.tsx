const VisionSection = () => {
  return (
    <section className="relative py-32 bg-background overflow-hidden">
      {/* Top curved line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      {/* Bottom orange gradient glow */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-[60%] pointer-events-none"
        style={{ 
          background: 'radial-gradient(ellipse 80% 50% at 50% 100%, rgba(249,115,22,0.4) 0%, rgba(251,146,60,0.2) 30%, rgba(234,88,12,0.1) 50%, transparent 70%)'
        }}
      />
      {/* Left side glow */}
      <div 
        className="absolute bottom-0 left-0 w-1/2 h-[70%] pointer-events-none"
        style={{ 
          background: 'radial-gradient(ellipse at 0% 100%, rgba(180,83,9,0.35) 0%, rgba(249,115,22,0.15) 40%, transparent 70%)'
        }}
      />
      {/* Right side glow */}
      <div 
        className="absolute bottom-0 right-0 w-1/2 h-[70%] pointer-events-none"
        style={{ 
          background: 'radial-gradient(ellipse at 100% 100%, rgba(180,83,9,0.35) 0%, rgba(249,115,22,0.15) 40%, transparent 70%)'
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
            Voice is the ultimate interface.
            <br />
            Structure is the ultimate foundation.
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            We believe the future of building software is conversational —
            but systems must be designed before they are generated.
          </p>
          <a
            href="#about"
            className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background rounded-full font-medium hover:bg-foreground/90 transition-colors"
          >
            Read more
          </a>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;

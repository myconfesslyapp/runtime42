const VisionSection = () => {
  return (
    <section className="relative py-24 bg-background overflow-hidden">
      {/* Background gradient glows */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-orange-600/30 via-amber-500/20 to-transparent blur-[150px] pointer-events-none -translate-x-1/4" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-tl from-orange-500/40 via-amber-500/20 to-transparent blur-[150px] pointer-events-none translate-x-1/4" />

      {/* Curved arc at top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200%] h-[200px] -translate-y-1/2">
        <div className="w-full h-full rounded-b-[50%] border-b border-white/10" />
      </div>

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

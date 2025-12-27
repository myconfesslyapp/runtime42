const BenchmarksSection = () => {
  return (
    <section className="relative py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bento-card relative overflow-hidden py-16 px-8 text-center min-h-[350px]">
            {/* Background gradient arc */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[150%] h-[200px]">
              <div className="absolute inset-0 bg-gradient-to-t from-violet-600/40 via-purple-500/20 to-transparent rounded-t-[50%]" />
            </div>
            
            <div className="relative z-10">
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary mb-4 block">
                Benchmarks
              </span>
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                How we compare to other vibe tools
              </h3>
              <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
                Fewer rewrites.
                <br />
                Cleaner systems.
                <br />
                <span className="text-foreground font-medium">More shippable code.</span>
              </p>
              <a
                href="#benchmarks"
                className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background rounded-full font-medium hover:bg-foreground/90 transition-colors"
              >
                Check our benchmarks
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenchmarksSection;

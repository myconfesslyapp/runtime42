const TrustedBySection = () => {
  const logos = [
    { name: 'founders', display: '👁️ Startup founders' },
    { name: 'hackers', display: '⚡ Indie hackers' },
    { name: 'teams', display: '✦ Product teams' },
    { name: 'agencies', display: '📞 Agencies' },
    { name: 'engineers', display: '000 Engineers' },
  ];

  return (
    <section className="relative py-20 bg-background">
      <div className="container mx-auto px-6">
        <p className="text-center text-sm text-muted-foreground mb-10">
          Trusted by <span className="text-foreground font-medium">builders shipping real products</span>
        </p>

        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
          {logos.map((logo) => (
            <div
              key={logo.name}
              className="text-muted-foreground/60 hover:text-muted-foreground transition-colors text-lg font-medium"
            >
              {logo.display}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBySection;

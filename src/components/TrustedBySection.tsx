const TrustedBySection = () => {
  const logos = [
    { name: 'alan', display: '👁️ alan' },
    { name: 'Attention', display: '⚡ Attention' },
    { name: 'JELLYSMACK', display: 'JELLYSMACK✦' },
    { name: 'aircall', display: '📞 aircall' },
    { name: 'mojo', display: '000 mojo' },
  ];

  return (
    <section className="relative py-20 bg-background">
      <div className="container mx-auto px-6">
        <p className="text-center text-sm text-muted-foreground mb-10">
          Trusted by <span className="text-foreground font-medium">300,000+ developers</span> worldwide
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

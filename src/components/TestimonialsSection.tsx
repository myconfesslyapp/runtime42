const TestimonialsSection = () => {
  const testimonials = [
    {
      company: 'Startup Studio',
      quote: "This is the first vibe coding tool that actually understands system design. It feels like working with a senior engineering team.",
      author: 'Matthias Winckenburg',
      role: 'CTO & Founder',
    },
    {
      company: 'Engineering',
      quote: "We stopped rewriting generated code. The architecture finally makes sense.",
      author: 'Kojo Hinson',
      role: 'Engineering Manager',
    },
    {
      company: 'Founder',
      quote: "Other tools generate code. runtime42 generates systems.",
      author: 'Robin Bonduelle',
      role: 'Founder',
    },
  ];

  return (
    <section className="relative py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Badge */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted border border-border">
            <span className="text-orange-500">⭐</span>
            <span className="text-sm font-medium text-foreground">Rated 5 by builders who ship</span>
          </div>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Why builders choose runtime42
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Here's what founders and engineers say about runtime42
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Featured image placeholder */}
            <div className="bento-card overflow-hidden aspect-[4/5] relative">
              <div className="absolute inset-0 bg-gradient-to-br from-muted to-muted/50" />
              <div className="absolute bottom-6 left-6">
                <p className="text-foreground font-medium">Matthias Winckenburg</p>
                <p className="text-muted-foreground text-sm">CTO & Founder, Startup Studio</p>
              </div>
            </div>

            {/* Testimonials stack */}
            <div className="space-y-4">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bento-card p-6">
                  <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">
                    {testimonial.company}
                  </p>
                  <p className="text-foreground mb-4 leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-muted" />
                    <div>
                      <p className="text-sm font-medium text-foreground">{testimonial.author}</p>
                      <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

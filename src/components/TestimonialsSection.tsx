const TestimonialsSection = () => {
  const testimonials = [
    {
      company: 'claap',
      quote: "We are 100% benchmark and evaluation driven. The platform was one of the best providers selected on merit to transcribe user videos, especially for non-English languages. Their reactive customer support and data compliance make their offer really compelling.",
      author: 'Kojo Hinson',
      role: 'Group Engineering Manager',
    },
    {
      company: 'claap',
      quote: "It's the first time we've been able to transcribe video with such accuracy and speed - including when the conversation is technical. Whatever the language or accent, the quality is always there.",
      author: 'Robin Bonduelle',
      role: 'CEO',
    },
    {
      company: 'mojo',
      quote: "Having tried numerous speech-to-text solutions, I can confidently say: the API outshines the rest. Their balance of accuracy, speed, and precise word timings is unparalleled.",
      author: 'Alex Thompson',
      role: 'CTO',
    },
  ];

  return (
    <section className="relative py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Badge */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted border border-border">
            <span className="text-orange-500">⭐</span>
            <span className="text-sm font-medium text-foreground">Rated 5 on G2</span>
          </div>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Why customers choose us
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Here's what top-tier voice platform builders say about our product
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Featured image placeholder */}
            <div className="bento-card overflow-hidden aspect-[4/5] relative">
              <div className="absolute inset-0 bg-gradient-to-br from-muted to-muted/50" />
              <div className="absolute bottom-6 left-6">
                <p className="text-foreground font-medium">Matthias Winckenburg</p>
                <p className="text-muted-foreground text-sm">CTO & Founder, Attention</p>
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

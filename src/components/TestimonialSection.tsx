import { Quote } from 'lucide-react';

const TestimonialSection = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background glows */}
      <div className="glow-orb glow-orb-accent w-[600px] h-[600px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-8 sm:p-12 lg:p-16 text-center relative">
            {/* Quote icon */}
            <div className="absolute top-8 left-8 w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
              <Quote className="w-8 h-8 text-primary" />
            </div>

            <blockquote className="text-xl sm:text-2xl lg:text-3xl font-medium text-foreground leading-relaxed mb-8 mt-8">
              "This is the first vibe coding tool that actually feels like working with a{' '}
              <span className="text-gradient">real engineering team</span>{' '}
              — not just a code generator."
            </blockquote>

            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent" />
              <div className="text-left">
                <p className="font-semibold text-foreground">Founder</p>
                <p className="text-sm text-muted-foreground">Early-stage SaaS</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;

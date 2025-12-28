import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const FinalCTA = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background glows */}
      <div className="glow-orb glow-orb-primary w-[600px] h-[600px] top-1/2 left-1/4 -translate-y-1/2 opacity-30" />
      <div className="glow-orb glow-orb-accent w-[600px] h-[600px] top-1/2 right-1/4 -translate-y-1/2 opacity-30" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-foreground mb-6">
            Ready to build{' '}
            <span className="text-gradient">something real?</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-10">
            Start with clarity. Scale with confidence.
          </p>
          <Link
            to="/auth"
            className="btn-primary inline-flex items-center gap-2 text-lg px-8 py-4"
          >
            Start building for free
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;

import { ArrowLeft, Users, Target, Award } from 'lucide-react';

interface AboutProps {
  onNavigate?: (route: string) => void;
}

const About = ({ onNavigate }: AboutProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <button 
          onClick={() => onNavigate?.('/')}
          className="inline-flex items-center gap-2 text-white/60 hover:text-white mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </button>

        <h1 className="text-4xl md:text-5xl font-bold mb-6">About SaaSify</h1>
        <p className="text-xl text-white/60 mb-12">
          We're on a mission to make building products accessible to everyone, regardless of technical background.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            { icon: Users, label: '10,000+', description: 'Active Users' },
            { icon: Target, label: '50,000+', description: 'Projects Created' },
            { icon: Award, label: '99.9%', description: 'Uptime SLA' },
          ].map((stat, i) => (
            <div key={i} className="text-center p-8 rounded-2xl bg-white/5 border border-white/10">
              <stat.icon className="w-8 h-8 mx-auto mb-4 text-purple-400" />
              <div className="text-3xl font-bold mb-1">{stat.label}</div>
              <div className="text-white/60 text-sm">{stat.description}</div>
            </div>
          ))}
        </div>

        <div className="prose prose-invert max-w-none">
          <h2 className="text-2xl font-bold mb-4">Our Story</h2>
          <p className="text-white/70 mb-6">
            Founded in 2021, SaaSify started with a simple idea: what if anyone could build professional-grade software without writing a single line of code? Our founders, frustrated by the complexity of modern development tools, set out to create something different.
          </p>
          <p className="text-white/70 mb-6">
            Today, we serve over 10,000 customers worldwide, from solo entrepreneurs to Fortune 500 companies. Our platform has helped launch thousands of products, saving our users millions of hours in development time.
          </p>
          <h2 className="text-2xl font-bold mb-4 mt-12">Our Values</h2>
          <ul className="space-y-4 text-white/70">
            <li><strong className="text-white">Simplicity First:</strong> We believe the best tools are the ones that get out of your way.</li>
            <li><strong className="text-white">Customer Obsessed:</strong> Every feature we build starts with customer feedback.</li>
            <li><strong className="text-white">Always Improving:</strong> We ship updates weekly and never stop iterating.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;

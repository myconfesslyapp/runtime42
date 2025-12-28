import { ArrowRight, Zap, Shield, Globe, Star, ChevronRight } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-slate-900/70 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg" />
            <span className="font-bold text-xl">SaaSify</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm text-white/70 hover:text-white transition-colors">Features</a>
            <a href="#pricing" className="text-sm text-white/70 hover:text-white transition-colors">Pricing</a>
            <a href="#about" className="text-sm text-white/70 hover:text-white transition-colors">About</a>
            <a href="#contact" className="text-sm text-white/70 hover:text-white transition-colors">Contact</a>
          </div>
          <div className="flex items-center gap-3">
            <button className="px-4 py-2 text-sm text-white/80 hover:text-white transition-colors">Login</button>
            <button className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-8 border border-white/20">
            <Star className="w-4 h-4 text-yellow-400" />
            <span className="text-sm">Rated #1 SaaS Platform 2024</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
            Build Products<br />10x Faster
          </h1>
          <p className="text-xl text-white/60 max-w-2xl mx-auto mb-10">
            The all-in-one platform that helps teams ship beautiful products faster than ever before. No coding required.
          </p>
          <div className="flex items-center justify-center gap-4">
            <button className="group px-6 py-3 bg-white text-slate-900 rounded-xl font-semibold flex items-center gap-2 hover:bg-white/90 transition-colors">
              Start Free Trial
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-6 py-3 border border-white/20 rounded-xl font-semibold hover:bg-white/10 transition-colors">
              Watch Demo
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything you need</h2>
            <p className="text-white/60 max-w-xl mx-auto">Powerful features to help you build, launch, and scale your product.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Zap, title: 'Lightning Fast', description: 'Built for speed with optimized performance at every level.' },
              { icon: Shield, title: 'Enterprise Security', description: 'Bank-grade security to keep your data safe and compliant.' },
              { icon: Globe, title: 'Global Scale', description: 'Deploy worldwide with automatic scaling and redundancy.' },
            ].map((feature, i) => (
              <div key={i} className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/50 transition-colors group">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-white/60">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-purple-600/30 to-pink-600/30 rounded-3xl p-12 border border-white/10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to get started?</h2>
          <p className="text-white/60 mb-8 max-w-xl mx-auto">Join thousands of teams already using SaaSify to build better products.</p>
          <button className="group px-8 py-4 bg-white text-slate-900 rounded-xl font-semibold flex items-center gap-2 mx-auto hover:bg-white/90 transition-colors">
            Start Your Free Trial
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg" />
            <span className="font-bold text-xl">SaaSify</span>
          </div>
          <p className="text-white/40 text-sm">© 2024 SaaSify. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;

import { Target, Heart, Lightbulb, Users, ArrowRight } from 'lucide-react';
import { Button, Badge } from '../components/ui';
import { useTheme } from '../lib/ThemeContext';

interface AboutProps {
  onNavigate: (path: string) => void;
}

const About = ({ onNavigate }: AboutProps) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const values = [
    { icon: Target, title: 'Mission', description: 'Empowering teams to build the future.' },
    { icon: Heart, title: 'Customer First', description: 'Everything we do starts with you.' },
    { icon: Lightbulb, title: 'Innovation', description: 'Pushing boundaries constantly.' },
    { icon: Users, title: 'Collaboration', description: 'Great teams, great products.' },
  ];

  const team = [
    { name: 'Alex R.', role: 'CEO', initial: 'A' },
    { name: 'Jordan K.', role: 'CTO', initial: 'J' },
    { name: 'Sam C.', role: 'Design', initial: 'S' },
    { name: 'Taylor N.', role: 'Engineering', initial: 'T' },
  ];

  const milestones = [
    { year: '2020', event: 'Founded' },
    { year: '2021', event: '$10M Series A' },
    { year: '2022', event: '10K customers' },
    { year: '2024', event: 'Global expansion' },
  ];

  return (
    <div className="min-h-screen py-12 sm:py-16 lg:py-20">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 text-center mb-12 sm:mb-16 lg:mb-24">
        <Badge variant="primary" className="mb-4 sm:mb-6">About Us</Badge>
        <h1 className={`text-3xl sm:text-4xl lg:text-6xl font-bold mb-4 sm:mb-6 ${isDark ? 'text-white' : 'text-black'}`}>
          Building the future
        </h1>
        <p className={`text-sm sm:text-base lg:text-xl max-w-3xl mx-auto ${isDark ? 'text-white/50' : 'text-black/50'}`}>
          We're builders and dreamers on a mission to help teams work better together.
        </p>
      </section>

      {/* Values */}
      <section className={`py-12 sm:py-16 lg:py-24 border-y ${isDark ? 'bg-white/[0.02] border-white/10' : 'bg-black/[0.02] border-black/10'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 ${isDark ? 'text-white' : 'text-black'}`}>
              Our values
            </h2>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className={`p-4 sm:p-5 lg:p-6 rounded-xl lg:rounded-2xl border transition-all ${
                  isDark 
                    ? 'bg-white/5 border-white/10 hover:bg-white/10' 
                    : 'bg-black/5 border-black/10 hover:bg-black/10'
                }`}
              >
                <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-4 ${
                  isDark ? 'bg-white/10 text-white' : 'bg-black/10 text-black'
                }`}>
                  <value.icon size={20} className="sm:w-6 sm:h-6" />
                </div>
                <h3 className={`text-sm sm:text-base lg:text-lg font-semibold mb-1 sm:mb-2 ${isDark ? 'text-white' : 'text-black'}`}>
                  {value.title}
                </h3>
                <p className={`text-xs sm:text-sm ${isDark ? 'text-white/50' : 'text-black/50'}`}>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team - Simplified grid */}
      <section className="py-12 sm:py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 ${isDark ? 'text-white' : 'text-black'}`}>
              Our team
            </h2>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
            {team.map((member) => (
              <div
                key={member.name}
                className={`p-4 sm:p-5 lg:p-6 rounded-xl lg:rounded-2xl border text-center transition-all ${
                  isDark 
                    ? 'bg-white/5 border-white/10 hover:bg-white/10' 
                    : 'bg-black/5 border-black/10 hover:bg-black/10'
                }`}
              >
                <div className={`w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-xl lg:rounded-2xl mx-auto flex items-center justify-center mb-3 sm:mb-4 text-lg sm:text-xl lg:text-2xl font-bold ${
                  isDark ? 'bg-white/10 text-white' : 'bg-black/10 text-black'
                }`}>
                  {member.initial}
                </div>
                <h3 className={`font-semibold text-sm sm:text-base ${isDark ? 'text-white' : 'text-black'}`}>{member.name}</h3>
                <p className={`text-xs sm:text-sm ${isDark ? 'text-white/50' : 'text-black/50'}`}>{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline - Horizontal on desktop, vertical on mobile */}
      <section className={`py-12 sm:py-16 lg:py-24 border-y ${isDark ? 'bg-white/[0.02] border-white/10' : 'bg-black/[0.02] border-black/10'}`}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-bold ${isDark ? 'text-white' : 'text-black'}`}>
              Our journey
            </h2>
          </div>
          
          {/* Mobile/Tablet: Horizontal scroll */}
          <div className="flex gap-4 overflow-x-auto pb-4 sm:grid sm:grid-cols-4 sm:gap-4 sm:overflow-visible sm:pb-0">
            {milestones.map((milestone) => (
              <div key={milestone.year} className={`flex-shrink-0 w-32 sm:w-auto p-4 rounded-xl text-center ${isDark ? 'bg-white/5' : 'bg-black/5'}`}>
                <span className={`block text-xl sm:text-2xl font-bold mb-1 ${isDark ? 'text-white' : 'text-black'}`}>{milestone.year}</span>
                <p className={`text-xs sm:text-sm ${isDark ? 'text-white/60' : 'text-black/60'}`}>{milestone.event}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 ${isDark ? 'text-white' : 'text-black'}`}>
            Join our mission
          </h2>
          <p className={`text-sm sm:text-base lg:text-lg mb-6 sm:mb-10 ${isDark ? 'text-white/50' : 'text-black/50'}`}>
            We're always looking for talented people.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <Button size="lg" className="w-full sm:w-auto" onClick={() => onNavigate('/contact')}>
              View Careers
              <ArrowRight size={18} />
            </Button>
            <Button variant="secondary" size="lg" className="w-full sm:w-auto" onClick={() => onNavigate('/contact')}>
              Get in Touch
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

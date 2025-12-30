import { Mail, MapPin, Phone, MessageSquare, Send } from 'lucide-react';
import { Button, Badge, Input } from '../components/ui';
import { useTheme } from '../lib/ThemeContext';

interface ContactProps {
  onNavigate: (path: string) => void;
}

const Contact = ({ onNavigate }: ContactProps) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const contactMethods = [
    { icon: Mail, title: 'Email', action: 'hello@saasify.io' },
    { icon: MessageSquare, title: 'Live Chat', action: 'Start chat' },
    { icon: Phone, title: 'Phone', action: '+1 (555) 123-4567' },
  ];

  const offices = [
    { city: 'San Francisco', country: 'USA' },
    { city: 'London', country: 'UK' },
    { city: 'Singapore', country: 'SG' },
  ];

  return (
    <div className="min-h-screen py-12 sm:py-16 lg:py-20">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 text-center mb-10 sm:mb-16 lg:mb-20">
        <Badge variant="primary" className="mb-4 sm:mb-6">Contact</Badge>
        <h1 className={`text-3xl sm:text-4xl lg:text-6xl font-bold mb-4 sm:mb-6 ${isDark ? 'text-white' : 'text-black'}`}>
          Get in touch
        </h1>
        <p className={`text-sm sm:text-base lg:text-xl max-w-2xl mx-auto ${isDark ? 'text-white/50' : 'text-black/50'}`}>
          Have questions? We'd love to hear from you.
        </p>
      </section>

      {/* Contact Methods */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 mb-10 sm:mb-16 lg:mb-20">
        <div className="grid grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
          {contactMethods.map((method) => (
            <div
              key={method.title}
              className={`p-3 sm:p-4 lg:p-6 rounded-xl lg:rounded-2xl border text-center transition-all cursor-pointer ${
                isDark 
                  ? 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20' 
                  : 'bg-black/5 border-black/10 hover:bg-black/10 hover:border-black/20'
              }`}
            >
              <div className={`w-9 h-9 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-lg sm:rounded-xl mx-auto flex items-center justify-center mb-2 sm:mb-3 lg:mb-4 ${
                isDark ? 'bg-white/10 text-white' : 'bg-black/10 text-black'
              }`}>
                <method.icon size={18} className="sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
              </div>
              <h3 className={`text-xs sm:text-sm lg:text-lg font-semibold mb-1 ${isDark ? 'text-white' : 'text-black'}`}>
                {method.title}
              </h3>
              <p className={`text-[10px] sm:text-xs lg:text-sm font-medium truncate ${isDark ? 'text-white/70' : 'text-black/70'}`}>{method.action}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form */}
      <section className={`py-12 sm:py-16 lg:py-24 border-y ${isDark ? 'bg-white/[0.02] border-white/10' : 'bg-black/[0.02] border-black/10'}`}>
        <div className="max-w-xl lg:max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-10 lg:mb-12">
            <h2 className={`text-xl sm:text-2xl lg:text-4xl font-bold mb-2 sm:mb-4 ${isDark ? 'text-white' : 'text-black'}`}>
              Send us a message
            </h2>
            <p className={`text-xs sm:text-sm ${isDark ? 'text-white/50' : 'text-black/50'}`}>
              We'll get back to you as soon as possible.
            </p>
          </div>

          <form className="space-y-4 sm:space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
              <Input label="First name" placeholder="John" />
              <Input label="Last name" placeholder="Doe" />
            </div>
            <Input label="Email" type="email" placeholder="john@example.com" />
            <div>
              <label className={`block text-xs sm:text-sm font-medium mb-1.5 sm:mb-2 ${isDark ? 'text-white/80' : 'text-black/80'}`}>
                Message
              </label>
              <textarea
                rows={4}
                placeholder="How can we help?"
                className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl text-sm transition-all ${
                  isDark 
                    ? 'bg-white/5 border border-white/10 text-white placeholder:text-white/40 focus:ring-2 focus:ring-white/20 focus:border-white/30' 
                    : 'bg-black/5 border border-black/10 text-black placeholder:text-black/40 focus:ring-2 focus:ring-black/20 focus:border-black/30'
                } focus:outline-none resize-none`}
              />
            </div>
            <Button size="lg" className="w-full">
              Send Message
              <Send size={16} className="sm:w-[18px] sm:h-[18px]" />
            </Button>
          </form>
        </div>
      </section>

      {/* Offices */}
      <section className="py-12 sm:py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className={`text-xl sm:text-2xl lg:text-4xl font-bold mb-2 sm:mb-4 ${isDark ? 'text-white' : 'text-black'}`}>
              Our offices
            </h2>
          </div>

          <div className="grid grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
            {offices.map((office) => (
              <div
                key={office.city}
                className={`p-3 sm:p-4 lg:p-6 rounded-xl lg:rounded-2xl border text-center ${
                  isDark ? 'bg-white/5 border-white/10' : 'bg-black/5 border-black/10'
                }`}
              >
                <div className={`w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 rounded-lg mx-auto flex items-center justify-center mb-2 sm:mb-3 lg:mb-4 ${
                  isDark ? 'bg-white/10 text-white' : 'bg-black/10 text-black'
                }`}>
                  <MapPin size={16} className="sm:w-[18px] sm:h-[18px] lg:w-5 lg:h-5" />
                </div>
                <h3 className={`text-xs sm:text-sm lg:text-lg font-semibold ${isDark ? 'text-white' : 'text-black'}`}>
                  {office.city}
                </h3>
                <p className={`text-[10px] sm:text-xs lg:text-sm ${isDark ? 'text-white/50' : 'text-black/50'}`}>{office.country}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

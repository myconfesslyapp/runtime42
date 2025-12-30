import { Twitter, Github, Linkedin, Mail } from 'lucide-react';
import { useTheme } from '../../lib/ThemeContext';

interface FooterProps {
  onNavigate: (route: string) => void;
}

const Footer = ({ onNavigate }: FooterProps) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const footerLinks = {
    Product: [
      { label: 'Features', path: '/features' },
      { label: 'Pricing', path: '/pricing' },
    ],
    Company: [
      { label: 'About', path: '/about' },
      { label: 'Blog', path: '/blog' },
      { label: 'Contact', path: '/contact' },
    ],
    Legal: [
      { label: 'Privacy', path: '/about' },
      { label: 'Terms', path: '/about' },
    ],
  };

  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Mail, href: '#', label: 'Email' },
  ];

  return (
    <footer className={`border-t pt-10 sm:pt-16 pb-6 sm:pb-8 transition-colors duration-500 ${
      isDark ? 'bg-black border-white/10' : 'bg-white border-black/10'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Mobile: Simple stacked layout */}
        <div className="sm:hidden">
          {/* Brand */}
          <div className="text-center mb-8">
            <button 
              onClick={() => onNavigate('/')}
              className="inline-flex items-center gap-2 mb-3"
            >
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${isDark ? 'bg-white' : 'bg-black'}`}>
                <span className={`font-bold ${isDark ? 'text-black' : 'text-white'}`}>S</span>
              </div>
              <span className={`font-bold text-lg ${isDark ? 'text-white' : 'text-black'}`}>SaaSify</span>
            </button>
            <p className={`text-xs ${isDark ? 'text-white/50' : 'text-black/50'}`}>
              Build products faster.
            </p>
          </div>

          {/* Links Grid - 3 columns on mobile */}
          <div className="grid grid-cols-3 gap-4 mb-8 text-center">
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h4 className={`font-semibold text-xs mb-2 ${isDark ? 'text-white' : 'text-black'}`}>
                  {title}
                </h4>
                <ul className="space-y-1">
                  {links.map((link) => (
                    <li key={link.label}>
                      <button
                        onClick={() => onNavigate(link.path)}
                        className={`text-xs transition-colors ${isDark ? 'text-white/50 hover:text-white' : 'text-black/50 hover:text-black'}`}
                      >
                        {link.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-3 mb-6">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className={`w-9 h-9 rounded-lg border flex items-center justify-center transition-all duration-300 ${
                  isDark 
                    ? 'bg-white/5 border-white/10 text-white/50 hover:text-white' 
                    : 'bg-black/5 border-black/10 text-black/50 hover:text-black'
                }`}
                aria-label={social.label}
              >
                <social.icon size={16} />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className={`text-center text-xs ${isDark ? 'text-white/40' : 'text-black/40'}`}>
            © 2024 SaaSify
          </p>
        </div>

        {/* Tablet & Desktop Layout */}
        <div className="hidden sm:block">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-10">
            {/* Brand Column */}
            <div className="col-span-2">
              <button 
                onClick={() => onNavigate('/')}
                className="flex items-center gap-3 mb-4 hover:opacity-80 transition-opacity"
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors duration-300 ${
                  isDark ? 'bg-white' : 'bg-black'
                }`}>
                  <span className={`font-bold text-lg ${isDark ? 'text-black' : 'text-white'}`}>S</span>
                </div>
                <span className={`font-bold text-xl transition-colors duration-300 ${isDark ? 'text-white' : 'text-black'}`}>
                  SaaSify
                </span>
              </button>
              <p className={`text-sm mb-5 max-w-xs transition-colors duration-300 ${isDark ? 'text-white/50' : 'text-black/50'}`}>
                Build products 10x faster with the all-in-one platform for modern teams.
              </p>
              <div className="flex items-center gap-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className={`w-9 h-9 rounded-lg border flex items-center justify-center transition-all duration-300 ${
                      isDark 
                        ? 'bg-white/5 border-white/10 text-white/50 hover:text-white hover:bg-white/10' 
                        : 'bg-black/5 border-black/10 text-black/50 hover:text-black hover:bg-black/10'
                    }`}
                    aria-label={social.label}
                  >
                    <social.icon size={16} />
                  </a>
                ))}
              </div>
            </div>

            {/* Link Columns */}
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h4 className={`font-semibold mb-4 ${isDark ? 'text-white' : 'text-black'}`}>
                  {title}
                </h4>
                <ul className="space-y-2.5">
                  {links.map((link) => (
                    <li key={link.label}>
                      <button
                        onClick={() => onNavigate(link.path)}
                        className={`text-sm transition-colors ${
                          isDark ? 'text-white/50 hover:text-white' : 'text-black/50 hover:text-black'
                        }`}
                      >
                        {link.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom Bar */}
          <div className={`pt-6 border-t flex flex-col md:flex-row items-center justify-between gap-4 ${
            isDark ? 'border-white/10' : 'border-black/10'
          }`}>
            <p className={`text-sm ${isDark ? 'text-white/40' : 'text-black/40'}`}>
              © 2024 SaaSify. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <button 
                onClick={() => onNavigate('/about')}
                className={`text-sm transition-colors ${isDark ? 'text-white/40 hover:text-white' : 'text-black/40 hover:text-black'}`}
              >
                Privacy Policy
              </button>
              <button 
                onClick={() => onNavigate('/about')}
                className={`text-sm transition-colors ${isDark ? 'text-white/40 hover:text-white' : 'text-black/40 hover:text-black'}`}
              >
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

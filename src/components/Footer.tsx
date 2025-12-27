import logo from '@/assets/runtime42-logo.png';

const Footer = () => {
  const linkGroups = [
    {
      title: 'Product',
      links: ['Features', 'Pricing', 'API', 'Documentation'],
    },
    {
      title: 'Company',
      links: ['About', 'Blog', 'Careers', 'Contact'],
    },
    {
      title: 'Resources',
      links: ['Support', 'Status', 'Terms', 'Privacy'],
    },
  ];

  return (
    <footer className="relative py-16 bg-background border-t border-border">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <a href="/" className="flex items-center gap-2.5 mb-4">
              <img src={logo} alt="runtime42" className="w-7 h-7" />
              <span className="text-lg font-semibold text-foreground">runtime42</span>
            </a>
            <p className="text-sm text-muted-foreground">
              Vibe coding with real system design.
            </p>
          </div>

          {/* Link groups */}
          {linkGroups.map((group) => (
            <div key={group.title}>
              <h4 className="font-medium text-foreground mb-4">{group.title}</h4>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase()}`}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 runtime42. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#twitter" className="text-muted-foreground hover:text-foreground transition-colors">
              Twitter
            </a>
            <a href="#linkedin" className="text-muted-foreground hover:text-foreground transition-colors">
              LinkedIn
            </a>
            <a href="#github" className="text-muted-foreground hover:text-foreground transition-colors">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

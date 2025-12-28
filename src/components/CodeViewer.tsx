import { useState } from 'react';
import { ChevronRight, ChevronDown, File, Folder, FolderOpen } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';

interface FileNode {
  name: string;
  type: 'file' | 'folder';
  children?: FileNode[];
  content?: string;
}

const demoProjectFiles: FileNode[] = [
  {
    name: 'demo-project',
    type: 'folder',
    children: [
      {
        name: 'pages',
        type: 'folder',
        children: [
          {
            name: 'Home.tsx',
            type: 'file',
            content: `import { ArrowRight, Star, Zap, Shield, Users } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 backdrop-blur-xl bg-slate-900/70 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg" />
            <span className="font-bold text-xl">SaaSify</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm text-gray-300 hover:text-white transition-colors">Features</a>
            <a href="#pricing" className="text-sm text-gray-300 hover:text-white transition-colors">Pricing</a>
            <a href="#about" className="text-sm text-gray-300 hover:text-white transition-colors">About</a>
            <a href="#contact" className="text-sm text-gray-300 hover:text-white transition-colors">Contact</a>
          </div>
          <div className="flex items-center gap-4">
            <button className="text-sm text-gray-300 hover:text-white transition-colors">Login</button>
            <button className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/20 rounded-full text-purple-300 text-sm mb-8">
            <Star className="w-4 h-4" />
            Rated #1 SaaS Platform 2024
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent">
            Build Products
            <br />
            10x Faster
          </h1>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            The all-in-one platform that helps teams ship beautiful products faster than ever before. No coding required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-slate-900 rounded-xl font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2">
              Start Free Trial
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="px-8 py-4 border border-white/20 rounded-xl font-semibold hover:bg-white/5 transition-colors">
              Watch Demo
            </button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 px-6 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">Why Choose SaaSify?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Zap, title: 'Lightning Fast', desc: 'Build and deploy in minutes, not months.' },
              { icon: Shield, title: 'Enterprise Security', desc: 'Bank-grade security for your peace of mind.' },
              { icon: Users, title: 'Team Collaboration', desc: 'Work together seamlessly in real-time.' },
            ].map((feature, i) => (
              <div key={i} className="p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-purple-500/50 transition-colors">
                <feature.icon className="w-10 h-10 text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;`
          },
          {
            name: 'Pricing.tsx',
            type: 'file',
            content: `import { Check } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: 'Starter',
      price: '$9',
      features: ['5 Projects', '10GB Storage', 'Basic Support', 'API Access'],
    },
    {
      name: 'Pro',
      price: '$29',
      popular: true,
      features: ['Unlimited Projects', '100GB Storage', 'Priority Support', 'API Access', 'Custom Domains', 'Analytics'],
    },
    {
      name: 'Enterprise',
      price: '$99',
      features: ['Everything in Pro', 'Unlimited Storage', '24/7 Support', 'Custom Integrations', 'SLA', 'Dedicated Manager'],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">Simple, Transparent Pricing</h1>
        <p className="text-xl text-gray-400 text-center mb-16">Choose the plan that works for you</p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <div key={i} className={\`p-8 rounded-2xl border \${plan.popular ? 'bg-gradient-to-b from-purple-500/20 to-transparent border-purple-500' : 'bg-white/5 border-white/10'}\`}>
              {plan.popular && <div className="text-purple-400 text-sm font-medium mb-4">Most Popular</div>}
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="text-4xl font-bold mb-6">{plan.price}<span className="text-lg text-gray-400">/mo</span></div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-center gap-2 text-gray-300">
                    <Check className="w-5 h-5 text-purple-400" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button className={\`w-full py-3 rounded-xl font-semibold transition-colors \${plan.popular ? 'bg-purple-500 hover:bg-purple-600' : 'bg-white/10 hover:bg-white/20'}\`}>
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;`
          },
          {
            name: 'About.tsx',
            type: 'file',
            content: `const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">About SaaSify</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-xl text-gray-300 text-center mb-12">
            We're on a mission to democratize software development and make building products accessible to everyone.
          </p>
          
          <div className="grid md:grid-cols-2 gap-12 mt-16">
            <div>
              <h3 className="text-2xl font-bold mb-4">Our Story</h3>
              <p className="text-gray-400">
                Founded in 2024, SaaSify started with a simple idea: what if anyone could build software without writing code? Today, we power thousands of businesses worldwide.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-400">
                We believe that the best ideas should come to life, regardless of technical background. Our platform removes the barriers between imagination and creation.
              </p>
            </div>
          </div>

          <div className="mt-16 p-8 bg-white/5 rounded-2xl border border-white/10 text-center">
            <h3 className="text-3xl font-bold mb-4">Join 10,000+ Teams</h3>
            <p className="text-gray-400 mb-6">Start building your next big idea today.</p>
            <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl font-semibold hover:opacity-90 transition-opacity">
              Get Started Free
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;`
          }
        ]
      },
      {
        name: 'DemoApp.tsx',
        type: 'file',
        content: `import Home from './pages/Home';
import Pricing from './pages/Pricing';
import About from './pages/About';

interface DemoAppProps {
  currentRoute: string;
}

const DemoApp = ({ currentRoute }: DemoAppProps) => {
  switch (currentRoute) {
    case '/pricing':
      return <Pricing />;
    case '/about':
      return <About />;
    default:
      return <Home />;
  }
};

export default DemoApp;`
      }
    ]
  }
];

interface FileTreeItemProps {
  node: FileNode;
  depth: number;
  selectedFile: string | null;
  onSelectFile: (path: string, content: string) => void;
  path: string;
}

const FileTreeItem = ({ node, depth, selectedFile, onSelectFile, path }: FileTreeItemProps) => {
  const [isOpen, setIsOpen] = useState(depth === 0);
  const fullPath = path ? `${path}/${node.name}` : node.name;

  if (node.type === 'folder') {
    return (
      <div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center gap-1.5 px-2 py-1.5 hover:bg-muted/50 rounded text-left text-sm"
          style={{ paddingLeft: `${depth * 12 + 8}px` }}
        >
          {isOpen ? (
            <ChevronDown className="w-3.5 h-3.5 text-muted-foreground flex-shrink-0" />
          ) : (
            <ChevronRight className="w-3.5 h-3.5 text-muted-foreground flex-shrink-0" />
          )}
          {isOpen ? (
            <FolderOpen className="w-4 h-4 text-amber-400 flex-shrink-0" />
          ) : (
            <Folder className="w-4 h-4 text-amber-400 flex-shrink-0" />
          )}
          <span className="text-foreground truncate">{node.name}</span>
        </button>
        {isOpen && node.children && (
          <div>
            {node.children.map((child, i) => (
              <FileTreeItem
                key={i}
                node={child}
                depth={depth + 1}
                selectedFile={selectedFile}
                onSelectFile={onSelectFile}
                path={fullPath}
              />
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <button
      onClick={() => node.content && onSelectFile(fullPath, node.content)}
      className={`w-full flex items-center gap-1.5 px-2 py-1.5 rounded text-left text-sm ${
        selectedFile === fullPath ? 'bg-primary/20 text-primary' : 'hover:bg-muted/50 text-foreground'
      }`}
      style={{ paddingLeft: `${depth * 12 + 20}px` }}
    >
      <File className="w-4 h-4 text-blue-400 flex-shrink-0" />
      <span className="truncate">{node.name}</span>
    </button>
  );
};

interface CodeViewerProps {
  className?: string;
}

const CodeViewer = ({ className }: CodeViewerProps) => {
  const [selectedFile, setSelectedFile] = useState<string | null>('demo-project/DemoApp.tsx');
  const [fileContent, setFileContent] = useState<string>(demoProjectFiles[0].children?.[1]?.content || '');

  const handleSelectFile = (path: string, content: string) => {
    setSelectedFile(path);
    setFileContent(content);
  };

  return (
    <div className={`flex h-full ${className}`}>
      {/* File Tree */}
      <div className="w-56 border-r border-border flex flex-col bg-card/50">
        <div className="p-3 border-b border-border">
          <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Files</h3>
        </div>
        <ScrollArea className="flex-1">
          <div className="p-2">
            {demoProjectFiles.map((node, i) => (
              <FileTreeItem
                key={i}
                node={node}
                depth={0}
                selectedFile={selectedFile}
                onSelectFile={handleSelectFile}
                path=""
              />
            ))}
          </div>
        </ScrollArea>
      </div>

      {/* Code Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Tab Bar */}
        {selectedFile && (
          <div className="h-10 border-b border-border flex items-center px-2 bg-card/50">
            <div className="flex items-center gap-2 px-3 py-1.5 bg-muted/50 rounded-t text-sm text-foreground">
              <File className="w-3.5 h-3.5 text-blue-400" />
              {selectedFile.split('/').pop()}
            </div>
          </div>
        )}

        {/* Code */}
        <ScrollArea className="flex-1 bg-background">
          {fileContent ? (
            <pre className="p-4 text-sm font-mono text-foreground/90 leading-relaxed">
              <code>{fileContent}</code>
            </pre>
          ) : (
            <div className="h-full flex items-center justify-center text-muted-foreground text-sm">
              Select a file to view its contents
            </div>
          )}
        </ScrollArea>
      </div>
    </div>
  );
};

export default CodeViewer;
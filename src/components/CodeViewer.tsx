import { useState, useCallback, useEffect } from 'react';
import { ChevronRight, ChevronDown, File, Folder, FolderOpen, Save } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Highlight, themes, type PrismTheme } from 'prism-react-renderer';
import { toast } from 'sonner';

// Custom light theme similar to the reference image
const lightTheme: PrismTheme = {
  plain: {
    color: '#1e1e1e',
    backgroundColor: 'transparent',
  },
  styles: [
    { types: ['comment', 'prolog', 'doctype', 'cdata'], style: { color: '#6a9955' } },
    { types: ['punctuation'], style: { color: '#1e1e1e' } },
    { types: ['property', 'tag', 'boolean', 'number', 'constant', 'symbol'], style: { color: '#0000ff' } },
    { types: ['selector', 'attr-name', 'string', 'char', 'builtin', 'inserted'], style: { color: '#a31515' } },
    { types: ['operator', 'entity', 'url'], style: { color: '#1e1e1e' } },
    { types: ['atrule', 'attr-value', 'keyword'], style: { color: '#0000ff' } },
    { types: ['function', 'class-name'], style: { color: '#795e26' } },
    { types: ['regex', 'important', 'variable'], style: { color: '#ee0000' } },
  ],
};

// Custom grey theme
const greyTheme: PrismTheme = {
  plain: {
    color: '#d4d4d4',
    backgroundColor: 'transparent',
  },
  styles: [
    { types: ['comment', 'prolog', 'doctype', 'cdata'], style: { color: '#6a9955' } },
    { types: ['punctuation'], style: { color: '#d4d4d4' } },
    { types: ['property', 'tag', 'boolean', 'number', 'constant', 'symbol'], style: { color: '#4fc1ff' } },
    { types: ['selector', 'attr-name', 'string', 'char', 'builtin', 'inserted'], style: { color: '#ce9178' } },
    { types: ['operator', 'entity', 'url'], style: { color: '#d4d4d4' } },
    { types: ['atrule', 'attr-value', 'keyword'], style: { color: '#569cd6' } },
    { types: ['function', 'class-name'], style: { color: '#dcdcaa' } },
    { types: ['regex', 'important', 'variable'], style: { color: '#d16969' } },
  ],
};

interface FileNode {
  name: string;
  type: 'file' | 'folder';
  children?: FileNode[];
  content?: string;
}

const initialDemoProjectFiles: FileNode[] = [
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
            <a href="#features" className="text-sm text-gray-300 hover:text-white">Features</a>
            <a href="#pricing" className="text-sm text-gray-300 hover:text-white">Pricing</a>
            <a href="#about" className="text-sm text-gray-300 hover:text-white">About</a>
          </div>
          <div className="flex items-center gap-4">
            <button className="text-sm text-gray-300 hover:text-white">Login</button>
            <button className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg text-sm font-medium">
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
            The all-in-one platform that helps teams ship beautiful products faster than ever before.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-slate-900 rounded-xl font-semibold flex items-center justify-center gap-2">
              Start Free Trial
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="px-8 py-4 border border-white/20 rounded-xl font-semibold">
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
              { icon: Zap, title: 'Lightning Fast', desc: 'Build and deploy in minutes.' },
              { icon: Shield, title: 'Enterprise Security', desc: 'Bank-grade security.' },
              { icon: Users, title: 'Team Collaboration', desc: 'Work together seamlessly.' },
            ].map((feature, i) => (
              <div key={i} className="p-6 bg-white/5 rounded-2xl border border-white/10">
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
    { name: 'Starter', price: '$9', features: ['5 Projects', '10GB Storage', 'Basic Support'] },
    { name: 'Pro', price: '$29', popular: true, features: ['Unlimited Projects', '100GB Storage', 'Priority Support', 'Analytics'] },
    { name: 'Enterprise', price: '$99', features: ['Everything in Pro', 'Unlimited Storage', '24/7 Support', 'SLA'] },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">Simple Pricing</h1>
        <p className="text-xl text-gray-400 text-center mb-16">Choose the plan that works for you</p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <div key={i} className={\`p-8 rounded-2xl border \${plan.popular ? 'bg-purple-500/20 border-purple-500' : 'bg-white/5 border-white/10'}\`}>
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
              <button className={\`w-full py-3 rounded-xl font-semibold \${plan.popular ? 'bg-purple-500' : 'bg-white/10'}\`}>
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
        <p className="text-xl text-gray-300 text-center mb-12">
          We are on a mission to democratize software development.
        </p>
        
        <div className="grid md:grid-cols-2 gap-12 mt-16">
          <div>
            <h3 className="text-2xl font-bold mb-4">Our Story</h3>
            <p className="text-gray-400">
              Founded in 2024, SaaSify started with a simple idea: anyone should be able to build software.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-gray-400">
              We remove the barriers between imagination and creation.
            </p>
          </div>
        </div>

        <div className="mt-16 p-8 bg-white/5 rounded-2xl border border-white/10 text-center">
          <h3 className="text-3xl font-bold mb-4">Join 10,000+ Teams</h3>
          <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl font-semibold">
            Get Started Free
          </button>
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
  onCodeChange?: (filePath: string, newCode: string) => void;
}

const CodeViewer = ({ className, onCodeChange }: CodeViewerProps) => {
  const [selectedFile, setSelectedFile] = useState<string | null>('demo-project/pages/Home.tsx');
  const [fileContent, setFileContent] = useState<string>(
    initialDemoProjectFiles[0].children?.[0]?.children?.[0]?.content || ''
  );
  const [isEditing, setIsEditing] = useState(false);
  const [editedContent, setEditedContent] = useState<string>('');
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);
  const [currentTheme, setCurrentTheme] = useState<'light' | 'dark' | 'grey'>('dark');

  // Detect current theme
  useEffect(() => {
    const detectTheme = () => {
      const html = document.documentElement;
      if (html.classList.contains('grey')) {
        setCurrentTheme('grey');
      } else if (html.classList.contains('dark')) {
        setCurrentTheme('dark');
      } else {
        setCurrentTheme('light');
      }
    };

    detectTheme();
    
    // Observe class changes on html element
    const observer = new MutationObserver(detectTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    
    return () => observer.disconnect();
  }, []);

  // Get the appropriate theme for syntax highlighting
  const getCodeTheme = () => {
    switch (currentTheme) {
      case 'light':
        return lightTheme;
      case 'grey':
        return greyTheme;
      default:
        return themes.vsDark;
    }
  };

  const handleSelectFile = (path: string, content: string) => {
    if (hasUnsavedChanges) {
      const confirm = window.confirm('You have unsaved changes. Discard them?');
      if (!confirm) return;
    }
    setSelectedFile(path);
    setFileContent(content);
    setEditedContent(content);
    setHasUnsavedChanges(false);
    setIsEditing(false);
  };

  const handleCodeEdit = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setEditedContent(e.target.value);
    setHasUnsavedChanges(true);
  }, []);

  const handleSave = useCallback(() => {
    setFileContent(editedContent);
    setHasUnsavedChanges(false);
    if (selectedFile && onCodeChange) {
      onCodeChange(selectedFile, editedContent);
    }
    toast.success('Changes saved! Preview updated.');
  }, [editedContent, selectedFile, onCodeChange]);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if ((e.metaKey || e.ctrlKey) && e.key === 's') {
      e.preventDefault();
      handleSave();
    }
  }, [handleSave]);

  return (
    <div className={`flex h-full ${className}`}>
      {/* File Tree */}
      <div className="w-56 border-r border-border flex flex-col bg-card/50">
        <div className="p-3 border-b border-border">
          <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Files</h3>
        </div>
        <ScrollArea className="flex-1">
          <div className="p-2">
            {initialDemoProjectFiles.map((node, i) => (
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
          <div className="h-10 border-b border-border flex items-center justify-between px-2 bg-card/50">
            <div className="flex items-center gap-2 px-3 py-1.5 bg-muted/50 rounded-t text-sm text-foreground">
              <File className="w-3.5 h-3.5 text-blue-400" />
              {selectedFile.split('/').pop()}
              {hasUnsavedChanges && <span className="text-amber-400 ml-1">●</span>}
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsEditing(!isEditing)}
                className={`px-3 py-1 text-xs rounded-md transition-colors ${
                  isEditing ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground hover:text-foreground'
                }`}
              >
                {isEditing ? 'View Mode' : 'Edit Mode'}
              </button>
              {hasUnsavedChanges && (
                <button
                  onClick={handleSave}
                  className="flex items-center gap-1 px-3 py-1 text-xs rounded-md bg-green-600 text-white hover:bg-green-700 transition-colors"
                >
                  <Save className="w-3 h-3" />
                  Save
                </button>
              )}
            </div>
          </div>
        )}

        {/* Code Editor / Viewer */}
        <div className="flex-1 overflow-hidden bg-background relative">
          {isEditing ? (
            <div className="relative h-full">
              {/* Syntax highlighted background */}
              <div className="absolute inset-0 overflow-auto pointer-events-none">
                <Highlight
                  theme={getCodeTheme()}
                  code={editedContent || fileContent}
                  language="tsx"
                >
                  {({ style, tokens, getLineProps, getTokenProps }) => (
                    <pre
                      className="p-4 text-sm font-mono leading-relaxed min-h-full"
                      style={{ ...style, background: 'transparent' }}
                    >
                      {tokens.map((line, i) => (
                        <div key={i} {...getLineProps({ line })} className="flex">
                          <span className="w-10 text-right pr-4 text-muted-foreground/60 select-none text-xs">
                            {i + 1}
                          </span>
                          <span>
                            {line.map((token, key) => (
                              <span key={key} {...getTokenProps({ token })} />
                            ))}
                          </span>
                        </div>
                      ))}
                    </pre>
                  )}
                </Highlight>
              </div>
              {/* Transparent textarea for editing */}
              <textarea
                value={editedContent || fileContent}
                onChange={handleCodeEdit}
                onKeyDown={handleKeyDown}
                spellCheck={false}
                className="absolute inset-0 w-full h-full p-4 pl-14 font-mono text-sm bg-transparent text-transparent caret-foreground resize-none outline-none leading-relaxed overflow-auto"
                style={{ tabSize: 2, caretColor: 'hsl(var(--foreground))' }}
              />
            </div>
          ) : (
            <ScrollArea className="h-full">
              {fileContent ? (
                <Highlight
                  theme={getCodeTheme()}
                  code={fileContent}
                  language="tsx"
                >
                  {({ style, tokens, getLineProps, getTokenProps }) => (
                    <pre
                      className="p-4 text-sm font-mono leading-relaxed overflow-x-auto"
                      style={{ ...style, background: 'transparent' }}
                    >
                      {tokens.map((line, i) => (
                        <div key={i} {...getLineProps({ line })} className="flex">
                          <span className="w-10 text-right pr-4 text-muted-foreground/60 select-none text-xs">
                            {i + 1}
                          </span>
                          <span>
                            {line.map((token, key) => (
                              <span key={key} {...getTokenProps({ token })} />
                            ))}
                          </span>
                        </div>
                      ))}
                    </pre>
                  )}
                </Highlight>
              ) : (
                <div className="h-full flex items-center justify-center text-muted-foreground text-sm">
                  Select a file to view its contents
                </div>
              )}
            </ScrollArea>
          )}
        </div>
      </div>
    </div>
  );
};

export default CodeViewer;
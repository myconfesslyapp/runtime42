import { useState, useEffect, useCallback } from 'react';
import { 
  Plus, MessageSquare, AudioLines, ArrowUp, ChevronDown,
  Globe, Code, BarChart3, Lightbulb, Share2,
  History, Smartphone, Tablet, Monitor, RefreshCcw, Lock, ExternalLink, Check
} from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useParams, useLocation } from 'react-router-dom';
import logo from '@/assets/runtime42-logo.png';
import DemoApp from '@/demo-project/DemoApp';
import CodeViewer from '@/components/CodeViewer';
import FileSearch from '@/components/FileSearch';
import BuildingScreen from '@/components/BuildingScreen';
import { toast } from 'sonner';

interface Message {
  id: number;
  type: 'user' | 'assistant';
  content: string;
  timestamp: string;
}

type DeviceType = 'mobile' | 'tablet' | 'desktop';
type TabType = 'preview' | 'code' | 'analytics';

const ProjectEditor = () => {
  const { projectId } = useParams();
  const location = useLocation();
  const [inputValue, setInputValue] = useState('');
  const [isThinking, setIsThinking] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [showPreview, setShowPreview] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [projectName] = useState(projectId ? 'Demo Project' : 'New Project');
  const [previewRoute, setPreviewRoute] = useState('/');
  const [activeDevice, setActiveDevice] = useState<DeviceType>('desktop');
  const [activeTab, setActiveTab] = useState<TabType>('preview');
  const [previewKey, setPreviewKey] = useState(0);
  const [isFileSearchOpen, setIsFileSearchOpen] = useState(false);
  
  const availableRoutes = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/pricing', label: 'Pricing' },
  ];

  const deviceSizes = {
    mobile: 'w-[375px]',
    tablet: 'w-[768px]',
    desktop: 'w-full'
  };

  const handleRefreshPreview = () => {
    setPreviewKey(prev => prev + 1);
  };

  const cycleDevice = () => {
    const deviceOrder: DeviceType[] = ['desktop', 'tablet', 'mobile'];
    const currentIndex = deviceOrder.indexOf(activeDevice);
    const nextIndex = (currentIndex + 1) % deviceOrder.length;
    setActiveDevice(deviceOrder[nextIndex]);
  };

  const getDeviceIcon = () => {
    switch (activeDevice) {
      case 'mobile': return Smartphone;
      case 'tablet': return Tablet;
      default: return Monitor;
    }
  };

  const DeviceIcon = getDeviceIcon();

  const handleCodeChange = useCallback((filePath: string, newCode: string) => {
    setPreviewKey(prev => prev + 1);
    console.log(`Code changed in ${filePath}:`, newCode.substring(0, 100) + '...');
  }, []);

  const handleFileSelect = useCallback((path: string) => {
    setActiveTab('code');
    toast.success(`Opening ${path.split('/').pop()}`);
  }, []);

  // Global keyboard shortcuts
  useEffect(() => {
    const handleGlobalKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'p') {
        e.preventDefault();
        setIsFileSearchOpen(true);
      }
    };

    window.addEventListener('keydown', handleGlobalKeyDown);
    return () => window.removeEventListener('keydown', handleGlobalKeyDown);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const state = location.state as { initialPrompt?: string } | null;
    if (state?.initialPrompt) {
      const newMessage: Message = {
        id: Date.now(),
        type: 'user',
        content: state.initialPrompt,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages([newMessage]);
      setIsThinking(true);
      
      setTimeout(() => {
        setIsThinking(false);
        setShowPreview(true);
        const aiResponse: Message = {
          id: Date.now() + 1,
          type: 'assistant',
          content: "I've created a SaaS landing page for you! The preview is now showing on the right.",
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        };
        setMessages(prev => [...prev, aiResponse]);
      }, 3500);
    }
  }, [location.state]);

  const handleSubmit = () => {
    if (inputValue.trim()) {
      const newMessage: Message = {
        id: Date.now(),
        type: 'user',
        content: inputValue,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages([...messages, newMessage]);
      setInputValue('');
      setIsThinking(true);

      setTimeout(() => {
        setIsThinking(false);
        setShowPreview(true);
        const aiResponse: Message = {
          id: Date.now() + 1,
          type: 'assistant',
          content: "Done! I've updated the preview with your changes.",
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        };
        setMessages(prev => [...prev, aiResponse]);
      }, 3000);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <div className="h-screen flex flex-col bg-background overflow-hidden">
      {/* File Search Modal */}
      <FileSearch 
        isOpen={isFileSearchOpen} 
        onClose={() => setIsFileSearchOpen(false)}
        onSelectFile={handleFileSelect}
      />

      {/* Top Header */}
      <header className="h-14 flex items-center px-4 bg-card flex-shrink-0">
        {/* Left - Logo & Project Name */}
        <div className="flex items-center gap-3 w-[420px]">
          <img src={logo} alt="runtime42" className="w-7 h-7 rounded-lg" />
          <div className="flex items-center gap-1.5 cursor-pointer hover:bg-muted/50 px-2 py-1.5 rounded-lg transition-colors">
            <span className="font-semibold text-foreground">{projectName}</span>
            <ChevronDown className="w-4 h-4 text-muted-foreground" />
          </div>
          <div className="flex-1" />
          {/* History at end of chat panel */}
          <button className="w-9 h-9 rounded-lg hover:bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors">
            <History className="w-5 h-5" />
          </button>
        </div>

        {/* Preview area controls - aligned with preview panel start */}
        <div className="flex-1 flex items-center pl-3">
          {/* Tabs - left side */}
          <div className="flex items-center gap-0.5 bg-muted/50 rounded-full p-1">
            <button 
              onClick={() => setActiveTab('preview')}
              className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-colors ${
                activeTab === 'preview' ? 'bg-background text-foreground shadow-sm' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <Globe className="w-4 h-4" />
              Preview
            </button>
            <button 
              onClick={() => setActiveTab('code')}
              className={`flex items-center gap-2 px-3 py-2 rounded-full font-medium transition-colors ${
                activeTab === 'code' ? 'bg-background text-foreground shadow-sm' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <Code className="w-4 h-4" />
            </button>
            <button 
              onClick={() => setActiveTab('analytics')}
              className={`flex items-center gap-2 px-3 py-2 rounded-full font-medium transition-colors ${
                activeTab === 'analytics' ? 'bg-background text-foreground shadow-sm' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <BarChart3 className="w-4 h-4" />
            </button>
            <button className="flex items-center gap-2 px-3 py-2 rounded-full text-muted-foreground hover:text-foreground transition-colors">
              <Plus className="w-4 h-4" />
            </button>
          </div>
          
          {/* Address Bar - centered in preview area */}
          <div className="flex-1 flex justify-center">
            <div className="flex items-center bg-muted rounded-full px-1">
              {/* Device toggle button */}
              <button 
                onClick={cycleDevice}
                className="flex items-center gap-2 px-3 py-2 hover:bg-muted-foreground/10 rounded-lg transition-colors"
                title={`Current: ${activeDevice}. Click to switch.`}
              >
                <DeviceIcon className="w-4 h-4 text-muted-foreground transition-all duration-300" />
              </button>
              
              {/* Route dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-3 px-3 py-2 hover:bg-muted-foreground/10 rounded-lg transition-colors outline-none">
                  <span className="text-sm text-muted-foreground">{previewRoute}</span>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="center" className="min-w-[200px] bg-popover border border-border z-50">
                  {availableRoutes.map((route) => (
                    <DropdownMenuItem 
                      key={route.path}
                      onClick={() => setPreviewRoute(route.path)}
                      className="flex items-center justify-between cursor-pointer"
                    >
                      <span>{route.path}</span>
                      {previewRoute === route.path && (
                        <Check className="w-4 h-4 text-foreground" />
                      )}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
              
              {/* Refresh button */}
              <button 
                onClick={handleRefreshPreview}
                className="p-2 hover:bg-muted-foreground/10 rounded-lg transition-colors"
              >
                <RefreshCcw className="w-4 h-4 text-muted-foreground hover:text-foreground" />
              </button>
              
              {/* External link button */}
              <button className="p-2 hover:bg-muted-foreground/10 rounded-lg transition-colors">
                <ExternalLink className="w-4 h-4 text-muted-foreground hover:text-foreground" />
              </button>
            </div>
          </div>
          
          {/* Right side - Search */}
          <button
            onClick={() => setIsFileSearchOpen(true)}
            className="flex items-center gap-2 px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground bg-muted/50 rounded-full border border-border/50 hover:border-border transition-colors"
          >
            <span>Search</span>
            <kbd className="px-1.5 py-0.5 text-[10px] font-mono bg-muted rounded">⌘P</kbd>
          </button>
        </div>

        {/* Right - Share, Publish */}
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 font-medium text-foreground hover:bg-muted/50 rounded-full transition-colors">
            <Share2 className="w-4 h-4" />
            Share
          </button>
          <button 
            className="px-6 py-2 text-white font-medium rounded-full transition-all hover:opacity-90"
            style={{ background: 'var(--gradient-orange)' }}
          >
            Publish
          </button>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 flex overflow-hidden p-3 gap-3 bg-muted/30">
        {/* Left Panel - Chat */}
        <div className="w-[420px] flex flex-col bg-card rounded-3xl overflow-hidden">
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.length === 0 && (
              <div className="text-center text-muted-foreground text-sm py-8">
                Start a conversation to build your app
              </div>
            )}
            
            {messages.map((message) => (
              <div key={message.id} className="space-y-1">
                <div className="text-xs text-muted-foreground text-center">
                  {message.timestamp}
                </div>
                <div className={`p-4 rounded-xl ${
                  message.type === 'user' 
                    ? 'bg-muted ml-8' 
                    : 'bg-background border border-border mr-8'
                }`}>
                  <p className="text-sm text-foreground whitespace-pre-wrap">{message.content}</p>
                </div>
              </div>
            ))}

            {isThinking && (
              <div className="flex items-center gap-2 text-muted-foreground">
                <Lightbulb className="w-4 h-4" />
                <span className="text-sm">Thinking</span>
                <div className="flex gap-1">
                  <span className="w-1 h-1 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                  <span className="w-1 h-1 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                  <span className="w-1 h-1 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
              </div>
            )}
          </div>

          <div className="p-4 border-t border-border">
            <div className="bg-background border border-border rounded-xl overflow-hidden">
              <div className="p-3">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask runtime42..."
                  className="w-full bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none"
                />
              </div>
              <div className="flex items-center justify-between px-3 py-2 border-t border-border/50">
                <div className="flex items-center gap-1">
                  <button className="w-8 h-8 rounded-lg hover:bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors">
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
                <div className="flex items-center gap-1">
                  <button className="h-8 px-3 rounded-lg hover:bg-muted flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm">
                    <MessageSquare className="w-4 h-4" />
                    Chat
                  </button>
                  <button className="w-8 h-8 rounded-lg hover:bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors">
                    <AudioLines className="w-4 h-4" />
                  </button>
                  <button 
                    onClick={handleSubmit}
                    className="w-8 h-8 rounded-lg bg-foreground hover:bg-foreground/90 flex items-center justify-center text-background transition-colors"
                  >
                    <ArrowUp className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Panel - Preview/Code/Analytics */}
        <div className="flex-1 flex flex-col bg-card rounded-3xl overflow-hidden">
          <div className="flex-1 overflow-hidden bg-background rounded-3xl">
            {activeTab === 'preview' && (
              <div className="h-full flex flex-col">
                {isLoading || isThinking ? (
                  <BuildingScreen message={isLoading ? 'Getting ready..' : 'Building your idea..'} />
                ) : showPreview || projectId ? (
                  <div className={`h-full flex items-center justify-center ${activeDevice !== 'desktop' ? 'bg-muted/30 p-4' : ''} overflow-auto transition-all duration-500 ease-out`}>
                    <div className={`h-full ${deviceSizes[activeDevice]} transition-all duration-500 ease-out ${activeDevice !== 'desktop' ? 'border border-border rounded-3xl shadow-2xl bg-background overflow-hidden' : ''}`}>
                      <div className="h-full overflow-auto">
                        <DemoApp key={previewKey} currentRoute={previewRoute} />
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="h-full flex items-center justify-center">
                    <div className="text-center max-w-md">
                      <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                        <img src={logo} alt="runtime42" className="w-12 h-12" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">runtime42 Cloud</h3>
                      <p className="text-muted-foreground text-sm">
                        Describe features, get full apps. Data, hosting, auth, AI included.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            )}

            {activeTab === 'code' && (
              <CodeViewer onCodeChange={handleCodeChange} />
            )}

            {activeTab === 'analytics' && (
              <div className="h-full flex items-center justify-center">
                <div className="text-center max-w-md">
                  <BarChart3 className="w-16 h-16 mx-auto mb-4 text-muted-foreground/50" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">Analytics Coming Soon</h3>
                  <p className="text-muted-foreground text-sm">
                    Track your app performance, user engagement, and more.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectEditor;
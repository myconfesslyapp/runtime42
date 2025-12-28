import { useState, useEffect } from 'react';
import { 
  Plus, MessageSquare, AudioLines, ArrowUp, ChevronDown,
  Globe, Code, BarChart3, Lightbulb, Share2, Loader2, 
  History, Smartphone, Tablet, Monitor, RefreshCcw
} from 'lucide-react';
import { useParams, useLocation } from 'react-router-dom';
import logo from '@/assets/runtime42-logo.png';
import DemoApp from '@/demo-project/DemoApp';
import CodeViewer from '@/components/CodeViewer';

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
  const previewRoute = '/';
  const [activeDevice, setActiveDevice] = useState<DeviceType>('desktop');
  const [activeTab, setActiveTab] = useState<TabType>('preview');

  const deviceSizes = {
    mobile: 'w-[375px]',
    tablet: 'w-[768px]',
    desktop: 'w-full'
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  // Check if there's an initial prompt from navigation
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
      }, 2500);
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
      }, 2000);
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
      {/* Top Header */}
      <header className="h-12 border-b border-border flex items-center justify-between px-4 bg-card flex-shrink-0">
        {/* Left - Logo and Project Name */}
        <div className="flex items-center gap-3">
          <img src={logo} alt="runtime42" className="w-6 h-6 rounded-lg" />
          <div className="flex items-center gap-1.5 cursor-pointer hover:bg-muted/50 px-2 py-1 rounded-lg transition-colors">
            <span className="font-medium text-foreground text-sm">{projectName}</span>
            <ChevronDown className="w-3.5 h-3.5 text-muted-foreground" />
          </div>
        </div>

        {/* Center - History, Devices, Tabs */}
        <div className="flex items-center gap-2">
          {/* History */}
          <button className="w-8 h-8 rounded-lg hover:bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors">
            <History className="w-4 h-4" />
          </button>
          
          {/* Device Icons */}
          <div className="flex items-center gap-0.5">
            <button 
              onClick={() => setActiveDevice('mobile')}
              className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${
                activeDevice === 'mobile' ? 'bg-muted text-foreground' : 'hover:bg-muted text-muted-foreground hover:text-foreground'
              }`}
            >
              <Smartphone className="w-4 h-4" />
            </button>
            <button 
              onClick={() => setActiveDevice('tablet')}
              className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${
                activeDevice === 'tablet' ? 'bg-muted text-foreground' : 'hover:bg-muted text-muted-foreground hover:text-foreground'
              }`}
            >
              <Tablet className="w-4 h-4" />
            </button>
            <button 
              onClick={() => setActiveDevice('desktop')}
              className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${
                activeDevice === 'desktop' ? 'bg-muted text-foreground' : 'hover:bg-muted text-muted-foreground hover:text-foreground'
              }`}
            >
              <Monitor className="w-4 h-4" />
            </button>
          </div>

          {/* Main Tabs */}
          <div className="flex items-center gap-0.5 bg-muted/50 rounded-lg p-0.5 ml-2">
            <button 
              onClick={() => setActiveTab('preview')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                activeTab === 'preview' ? 'bg-background text-foreground shadow-sm' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <Globe className="w-4 h-4" />
              Preview
            </button>
            <button 
              onClick={() => setActiveTab('code')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                activeTab === 'code' ? 'bg-background text-foreground shadow-sm' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <Code className="w-4 h-4" />
            </button>
            <button 
              onClick={() => setActiveTab('analytics')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                activeTab === 'analytics' ? 'bg-background text-foreground shadow-sm' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <BarChart3 className="w-4 h-4" />
            </button>
            <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-muted-foreground text-sm hover:text-foreground transition-colors">
              <Plus className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Right - URL Bar, Share, Publish */}
        <div className="flex items-center gap-3">
          {/* URL Input */}
          <div className="flex items-center gap-2 px-3 py-1.5 bg-muted/50 rounded-lg border border-border/50">
            <span className="text-xs text-muted-foreground">🔒</span>
            <span className="text-xs text-muted-foreground">/editor/{projectId || '1'}</span>
            <RefreshCcw className="w-3 h-3 text-muted-foreground ml-2" />
          </div>
          
          <button className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-foreground hover:bg-muted/50 rounded-lg transition-colors">
            <Share2 className="w-4 h-4" />
            Share
          </button>
          <button className="px-4 py-1.5 bg-primary text-primary-foreground text-sm font-medium rounded-lg hover:bg-primary/90 transition-colors">
            Publish
          </button>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 flex overflow-hidden p-3 gap-3 bg-muted/30">
        {/* Left Panel - Chat */}
        <div className="w-[420px] flex flex-col bg-card rounded-2xl border border-border overflow-hidden">
          {/* Chat Messages */}
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

          {/* Chat Input */}
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
        <div className="flex-1 flex flex-col bg-card rounded-2xl border border-border overflow-hidden">
          <div className="flex-1 overflow-hidden bg-background">
            {activeTab === 'preview' && (
              <>
                {isLoading ? (
                  <div className="h-full flex items-center justify-center">
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span className="text-sm">Getting ready...</span>
                    </div>
                  </div>
                ) : showPreview || projectId ? (
                  <div className="h-full flex items-center justify-center bg-muted/30 p-4 overflow-auto">
                    <div className={`h-full ${deviceSizes[activeDevice]} transition-all duration-300 ${activeDevice !== 'desktop' ? 'border border-border rounded-xl shadow-2xl bg-background overflow-hidden' : ''}`}>
                      <div className="h-full overflow-auto">
                        <DemoApp currentRoute={previewRoute} />
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
              </>
            )}

            {activeTab === 'code' && (
              <CodeViewer />
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

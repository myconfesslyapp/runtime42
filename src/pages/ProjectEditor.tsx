import { useState, useEffect } from 'react';
import { 
  Plus, MessageSquare, AudioLines, ArrowUp, X, ChevronDown,
  Globe, Cloud, Code, BarChart3, Lightbulb, Share2, Loader2
} from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';
import logo from '@/assets/runtime42-logo.png';

interface Message {
  id: number;
  type: 'user' | 'assistant';
  content: string;
  timestamp: string;
}

const ProjectEditor = () => {
  const navigate = useNavigate();
  const { projectId } = useParams();
  const [inputValue, setInputValue] = useState('');
  const [isThinking, setIsThinking] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [messages, setMessages] = useState<Message[]>([]);
  const [projectName] = useState(projectId ? 'My Project' : 'New Project');

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

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

      // Simulate AI response
      setTimeout(() => {
        setIsThinking(false);
        const aiResponse: Message = {
          id: Date.now() + 1,
          type: 'assistant',
          content: "I'll help you build that. Let me set up the components and structure for your request...",
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
      {/* Top Header */}
      <header className="h-14 border-b border-border flex items-center justify-between px-4 bg-card flex-shrink-0">
        <div className="flex items-center gap-3">
          <img src={logo} alt="runtime42" className="w-7 h-7 rounded-lg" />
          <div className="flex items-center gap-1.5 cursor-pointer hover:bg-muted/50 px-2 py-1 rounded-lg transition-colors">
            <span className="font-medium text-foreground text-sm">{projectName}</span>
            <ChevronDown className="w-4 h-4 text-muted-foreground" />
          </div>
        </div>

        {/* Center Tabs */}
        <div className="flex items-center gap-1 bg-muted/50 rounded-lg p-1">
          <button className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-background text-foreground text-sm font-medium shadow-sm">
            <Globe className="w-4 h-4" />
            Preview
          </button>
          <button className="flex items-center gap-2 px-3 py-1.5 rounded-md text-muted-foreground text-sm hover:text-foreground transition-colors">
            <Cloud className="w-4 h-4" />
          </button>
          <button className="flex items-center gap-2 px-3 py-1.5 rounded-md text-muted-foreground text-sm hover:text-foreground transition-colors">
            <Code className="w-4 h-4" />
          </button>
          <button className="flex items-center gap-2 px-3 py-1.5 rounded-md text-muted-foreground text-sm hover:text-foreground transition-colors">
            <BarChart3 className="w-4 h-4" />
          </button>
          <button className="flex items-center gap-2 px-3 py-1.5 rounded-md text-muted-foreground text-sm hover:text-foreground transition-colors">
            <Plus className="w-4 h-4" />
          </button>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-2">
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
      <div className="flex-1 flex overflow-hidden">
        {/* Left Panel - Chat */}
        <div className="w-[420px] border-r border-border flex flex-col bg-card">
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

        {/* Right Panel - Preview */}
        <div className="flex-1 bg-muted/30 flex flex-col">
          {/* Preview Header */}
          <div className="h-10 border-b border-border flex items-center justify-center bg-card/50">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
            </div>
          </div>

          {/* Preview Content */}
          <div className="flex-1 flex items-center justify-center p-8">
            {isLoading ? (
              <div className="flex items-center gap-3 text-muted-foreground">
                <Loader2 className="w-5 h-5 animate-spin" />
                <span className="text-sm">Getting ready...</span>
              </div>
            ) : messages.length === 0 ? (
              <div className="text-center max-w-md">
                <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                  <img src={logo} alt="runtime42" className="w-12 h-12" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">runtime42 Cloud</h3>
                <p className="text-muted-foreground text-sm">
                  Describe features, get full apps. Data, hosting, auth, AI included.
                </p>
              </div>
            ) : (
              <div className="w-full h-full bg-background rounded-xl border border-border shadow-lg overflow-hidden">
                <div className="h-full flex items-center justify-center">
                  <div className="text-center">
                    <Loader2 className="w-8 h-8 animate-spin text-primary mx-auto mb-4" />
                    <p className="text-sm text-muted-foreground">Building your app...</p>
                  </div>
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

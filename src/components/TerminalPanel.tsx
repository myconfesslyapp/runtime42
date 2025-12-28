import { useState, useEffect, useRef } from 'react';
import { Terminal, X, Minus, Maximize2, ChevronUp, ChevronDown } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';

interface LogEntry {
  id: number;
  type: 'info' | 'success' | 'warning' | 'error' | 'system';
  message: string;
  timestamp: string;
}

interface TerminalPanelProps {
  isOpen: boolean;
  onToggle: () => void;
}

const TerminalPanel = ({ isOpen, onToggle }: TerminalPanelProps) => {
  const [logs, setLogs] = useState<LogEntry[]>([]);
  const [isMinimized, setIsMinimized] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Simulate build logs on mount
  useEffect(() => {
    const initialLogs: LogEntry[] = [
      { id: 1, type: 'system', message: '> runtime42 dev server starting...', timestamp: '10:30:01' },
      { id: 2, type: 'info', message: 'VITE v5.4.1 ready in 234 ms', timestamp: '10:30:01' },
      { id: 3, type: 'success', message: '➜ Local:   http://localhost:5173/', timestamp: '10:30:01' },
      { id: 4, type: 'success', message: '➜ Network: http://192.168.1.100:5173/', timestamp: '10:30:01' },
      { id: 5, type: 'info', message: 'watching for file changes...', timestamp: '10:30:01' },
    ];
    setLogs(initialLogs);

    // Simulate periodic log entries
    const interval = setInterval(() => {
      const randomLogs = [
        { type: 'info' as const, message: '[vite] hmr update /src/demo-project/pages/Home.tsx' },
        { type: 'success' as const, message: '[vite] hot updated: /src/components/CodeViewer.tsx' },
        { type: 'info' as const, message: 'page reload /src/pages/ProjectEditor.tsx' },
        { type: 'warning' as const, message: 'Prop "className" is not used in component' },
        { type: 'success' as const, message: '✓ built in 45ms' },
      ];
      
      const randomLog = randomLogs[Math.floor(Math.random() * randomLogs.length)];
      const newLog: LogEntry = {
        id: Date.now(),
        type: randomLog.type,
        message: randomLog.message,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }),
      };
      
      setLogs(prev => [...prev.slice(-50), newLog]);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Auto-scroll to bottom on new logs
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [logs]);

  const getLogColor = (type: LogEntry['type']) => {
    switch (type) {
      case 'success': return 'text-green-400';
      case 'warning': return 'text-yellow-400';
      case 'error': return 'text-red-400';
      case 'system': return 'text-blue-400';
      default: return 'text-gray-300';
    }
  };

  if (!isOpen) {
    return (
      <button
        onClick={onToggle}
        className="fixed bottom-4 right-4 flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-lg shadow-lg hover:bg-muted transition-colors z-50"
      >
        <Terminal className="w-4 h-4" />
        <span className="text-sm">Terminal</span>
        <ChevronUp className="w-3 h-3" />
      </button>
    );
  }

  return (
    <div className={`border-t border-border bg-[#1e1e1e] flex flex-col transition-all duration-200 ${isMinimized ? 'h-10' : 'h-48'}`}>
      {/* Terminal Header */}
      <div className="h-10 flex items-center justify-between px-3 border-b border-border/50 bg-card/50 flex-shrink-0">
        <div className="flex items-center gap-2">
          <Terminal className="w-4 h-4 text-muted-foreground" />
          <span className="text-sm font-medium text-foreground">Terminal</span>
          <span className="text-xs text-muted-foreground">— dev server</span>
        </div>
        <div className="flex items-center gap-1">
          <button
            onClick={() => setIsMinimized(!isMinimized)}
            className="w-7 h-7 rounded hover:bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
          >
            {isMinimized ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
          <button
            onClick={() => setIsMinimized(false)}
            className="w-7 h-7 rounded hover:bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
          >
            <Maximize2 className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={onToggle}
            className="w-7 h-7 rounded hover:bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Terminal Content */}
      {!isMinimized && (
        <ScrollArea className="flex-1" ref={scrollRef}>
          <div className="p-3 font-mono text-xs space-y-0.5">
            {logs.map((log) => (
              <div key={log.id} className="flex gap-3">
                <span className="text-muted-foreground/50 select-none w-16 flex-shrink-0">
                  {log.timestamp}
                </span>
                <span className={getLogColor(log.type)}>{log.message}</span>
              </div>
            ))}
            <div className="flex items-center gap-1 text-gray-400 mt-2">
              <span className="text-green-400">❯</span>
              <span className="animate-pulse">_</span>
            </div>
          </div>
        </ScrollArea>
      )}
    </div>
  );
};

export default TerminalPanel;
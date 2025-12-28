import { useState, useEffect, useCallback, useMemo } from 'react';
import { File, Folder, Search, X } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';

interface FileItem {
  name: string;
  path: string;
  type: 'file' | 'folder';
}

const allFiles: FileItem[] = [
  { name: 'DemoApp.tsx', path: 'demo-project/DemoApp.tsx', type: 'file' },
  { name: 'Home.tsx', path: 'demo-project/pages/Home.tsx', type: 'file' },
  { name: 'Pricing.tsx', path: 'demo-project/pages/Pricing.tsx', type: 'file' },
  { name: 'About.tsx', path: 'demo-project/pages/About.tsx', type: 'file' },
  { name: 'ProjectEditor.tsx', path: 'src/pages/ProjectEditor.tsx', type: 'file' },
  { name: 'CodeViewer.tsx', path: 'src/components/CodeViewer.tsx', type: 'file' },
  { name: 'TerminalPanel.tsx', path: 'src/components/TerminalPanel.tsx', type: 'file' },
  { name: 'FileSearch.tsx', path: 'src/components/FileSearch.tsx', type: 'file' },
  { name: 'App.tsx', path: 'src/App.tsx', type: 'file' },
  { name: 'main.tsx', path: 'src/main.tsx', type: 'file' },
  { name: 'index.css', path: 'src/index.css', type: 'file' },
  { name: 'tailwind.config.ts', path: 'tailwind.config.ts', type: 'file' },
  { name: 'vite.config.ts', path: 'vite.config.ts', type: 'file' },
  { name: 'package.json', path: 'package.json', type: 'file' },
  { name: 'tsconfig.json', path: 'tsconfig.json', type: 'file' },
];

interface FileSearchProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectFile: (path: string) => void;
}

const FileSearch = ({ isOpen, onClose, onSelectFile }: FileSearchProps) => {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);

  const filteredFiles = useMemo(() => {
    if (!query.trim()) return allFiles;
    const lowerQuery = query.toLowerCase();
    return allFiles.filter(
      file => 
        file.name.toLowerCase().includes(lowerQuery) ||
        file.path.toLowerCase().includes(lowerQuery)
    );
  }, [query]);

  // Reset selection when query changes
  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  // Reset state when closing
  useEffect(() => {
    if (!isOpen) {
      setQuery('');
      setSelectedIndex(0);
    }
  }, [isOpen]);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setSelectedIndex(prev => Math.min(prev + 1, filteredFiles.length - 1));
        break;
      case 'ArrowUp':
        e.preventDefault();
        setSelectedIndex(prev => Math.max(prev - 1, 0));
        break;
      case 'Enter':
        e.preventDefault();
        if (filteredFiles[selectedIndex]) {
          onSelectFile(filteredFiles[selectedIndex].path);
          onClose();
        }
        break;
      case 'Escape':
        e.preventDefault();
        onClose();
        break;
    }
  }, [filteredFiles, selectedIndex, onSelectFile, onClose]);

  const highlightMatch = (text: string, query: string) => {
    if (!query.trim()) return text;
    const regex = new RegExp(`(${query})`, 'gi');
    const parts = text.split(regex);
    return parts.map((part, i) => 
      regex.test(part) ? (
        <span key={i} className="bg-primary/30 text-primary-foreground rounded px-0.5">
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-[15vh]">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-background/80 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Search Dialog */}
      <div className="relative w-full max-w-xl bg-card border border-border rounded-xl shadow-2xl overflow-hidden animate-scale-in">
        {/* Search Input */}
        <div className="flex items-center gap-3 px-4 py-3 border-b border-border">
          <Search className="w-5 h-5 text-muted-foreground flex-shrink-0" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Search files by name..."
            className="flex-1 bg-transparent text-foreground placeholder:text-muted-foreground outline-none text-sm"
            autoFocus
          />
          <div className="flex items-center gap-1">
            <kbd className="px-1.5 py-0.5 text-[10px] font-mono bg-muted rounded text-muted-foreground">
              ↑↓
            </kbd>
            <span className="text-[10px] text-muted-foreground">navigate</span>
          </div>
          <button
            onClick={onClose}
            className="w-7 h-7 rounded-lg hover:bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results */}
        <ScrollArea className="max-h-80">
          {filteredFiles.length === 0 ? (
            <div className="p-8 text-center text-muted-foreground text-sm">
              No files found matching "{query}"
            </div>
          ) : (
            <div className="py-2">
              {filteredFiles.map((file, index) => (
                <button
                  key={file.path}
                  onClick={() => {
                    onSelectFile(file.path);
                    onClose();
                  }}
                  onMouseEnter={() => setSelectedIndex(index)}
                  className={`w-full flex items-center gap-3 px-4 py-2.5 text-left transition-colors ${
                    index === selectedIndex ? 'bg-primary/10 text-foreground' : 'hover:bg-muted/50 text-foreground/80'
                  }`}
                >
                  {file.type === 'folder' ? (
                    <Folder className="w-4 h-4 text-amber-400 flex-shrink-0" />
                  ) : (
                    <File className="w-4 h-4 text-blue-400 flex-shrink-0" />
                  )}
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-medium truncate">
                      {highlightMatch(file.name, query)}
                    </div>
                    <div className="text-xs text-muted-foreground truncate">
                      {highlightMatch(file.path, query)}
                    </div>
                  </div>
                  {index === selectedIndex && (
                    <kbd className="px-1.5 py-0.5 text-[10px] font-mono bg-muted rounded text-muted-foreground">
                      ↵
                    </kbd>
                  )}
                </button>
              ))}
            </div>
          )}
        </ScrollArea>

        {/* Footer */}
        <div className="flex items-center justify-between px-4 py-2 border-t border-border bg-muted/30 text-xs text-muted-foreground">
          <span>{filteredFiles.length} files</span>
          <div className="flex items-center gap-2">
            <kbd className="px-1.5 py-0.5 font-mono bg-muted rounded">esc</kbd>
            <span>to close</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FileSearch;
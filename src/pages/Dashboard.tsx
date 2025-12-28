import { useState } from 'react';
import { Plus, Paperclip, Palette, MessageSquare, AudioLines, ArrowUp, ExternalLink } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { SidebarProvider, SidebarInset } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/AppSidebar';

const userProjects = [
  {
    id: 1,
    title: 'E-commerce Dashboard',
    description: 'A complete admin dashboard with inventory management, order tracking, and analytics.',
    lastEdited: '2 hours ago',
    status: 'Published',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop',
  },
  {
    id: 2,
    title: 'AI Chat Application',
    description: 'Real-time chat app with AI-powered responses and conversation history.',
    lastEdited: '1 day ago',
    status: 'Draft',
    image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=400&h=250&fit=crop',
  },
  {
    id: 3,
    title: 'Project Management Tool',
    description: 'Kanban board with team collaboration, file sharing, and deadline tracking.',
    lastEdited: '3 days ago',
    status: 'Published',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop',
  },
];

const Dashboard = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState('');
  const userName = 'Venkata Govind Neelapu';

  const handleSubmit = () => {
    if (inputValue.trim()) {
      // Navigate to editor with the prompt
      navigate('/editor', { state: { initialPrompt: inputValue } });
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  const handleOpenProject = (projectId: number) => {
    navigate(`/editor/${projectId}`);
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <AppSidebar />
        <SidebarInset className="flex-1">
          {/* Hero Section */}
          <section className="relative min-h-[70vh] overflow-hidden flex flex-col">
            {/* Gradient background */}
        <div 
          className="absolute top-0 left-0 w-[70%] h-full pointer-events-none"
          style={{ 
            background: 'radial-gradient(ellipse at 0% 50%, rgba(249,115,22,0.35) 0%, rgba(251,146,60,0.2) 25%, rgba(234,88,12,0.1) 45%, transparent 70%)'
          }}
        />
        <div 
          className="absolute top-0 left-0 w-[50%] h-full pointer-events-none"
          style={{ 
            background: 'radial-gradient(ellipse at 0% 50%, rgba(251,191,36,0.2) 0%, rgba(249,115,22,0.1) 30%, transparent 60%)'
          }}
        />
        <div 
          className="absolute top-1/4 left-0 w-[40%] h-1/2 pointer-events-none blur-3xl"
          style={{ 
            background: 'radial-gradient(ellipse at 0% 50%, rgba(251,146,60,0.25) 0%, transparent 70%)'
          }}
        />

        {/* Content */}
        <div className="container mx-auto px-6 relative z-10 flex-1 flex flex-col justify-center items-center pt-20">
          <div className="max-w-4xl mx-auto text-center">
            {/* Greeting */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground mb-4 leading-[1.1]">
              Hello, {userName}
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground mb-12">
              What are you building today?
            </p>
          </div>

          {/* Chat Input Box */}
          <div className="relative max-w-3xl w-full mx-auto z-20">
            <div className="absolute -inset-1 rounded-[22px] bg-gradient-to-b from-white/10 to-transparent blur-sm pointer-events-none" />
            
            <div className="relative bg-card/90 backdrop-blur-xl rounded-2xl overflow-hidden shadow-2xl shadow-black/50 border border-border">
              <div className="px-5 py-4">
                <div className="flex items-start gap-3">
                  <div className="flex-1">
                    <input
                      type="text"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyDown={handleKeyDown}
                      placeholder="Describe what you want to build..."
                      className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground/70 outline-none w-full caret-primary"
                      style={{ caretColor: 'hsl(25, 95%, 55%)' }}
                    />
                  </div>
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 shadow-lg shadow-green-500/30 flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full" />
                  </div>
                </div>
              </div>
              
              <div className="flex items-center justify-between px-4 py-3 border-t border-border/50">
                <div className="flex items-center gap-2">
                  <button className="w-8 h-8 rounded-lg bg-muted/50 hover:bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors">
                    <Plus className="w-4 h-4" />
                  </button>
                  <button className="h-8 px-3 rounded-lg bg-muted/50 hover:bg-muted flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm">
                    <Paperclip className="w-4 h-4" />
                    <span>Attach</span>
                  </button>
                  <button className="h-8 px-3 rounded-lg bg-muted/50 hover:bg-muted flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm">
                    <Palette className="w-4 h-4" />
                    <span>Theme</span>
                    <span className="text-[10px] opacity-50">▼</span>
                  </button>
                </div>
                
                <div className="flex items-center gap-2">
                  <button className="h-8 px-3 rounded-lg bg-muted/50 hover:bg-muted flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm">
                    <MessageSquare className="w-4 h-4" />
                    <span>Chat</span>
                  </button>
                  <button className="w-8 h-8 rounded-lg bg-muted/50 hover:bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors">
                    <AudioLines className="w-4 h-4" />
                  </button>
                  <button 
                    onClick={handleSubmit}
                    className="w-8 h-8 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground flex items-center justify-center text-foreground transition-colors"
                  >
                    <ArrowUp className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Your Projects Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Your Projects
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Continue working on your projects or start something new.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {userProjects.map((project) => (
              <div 
                key={project.id}
                className="group bg-card rounded-xl border border-border overflow-hidden hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute top-3 left-3">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                      project.status === 'Published' 
                        ? 'bg-green-500/90 text-white' 
                        : 'bg-muted text-muted-foreground'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  <button className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors">
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
                
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">Edited {project.lastEdited}</span>
                    <button 
                      onClick={() => handleOpenProject(project.id)}
                      className="px-4 py-1.5 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors"
                    >
                      Open
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default Dashboard;

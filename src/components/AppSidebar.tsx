import { Home, Search, LayoutGrid, Star, Users, Compass, FileBox, GraduationCap, Share2, Zap, ChevronDown } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import logo from '@/assets/runtime42-logo.png';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarTrigger,
  useSidebar,
} from '@/components/ui/sidebar';

const mainItems = [
  { title: 'Home', url: '/dashboard', icon: Home },
  { title: 'Search', url: '/search', icon: Search },
];

const projectItems = [
  { title: 'All projects', url: '/projects', icon: LayoutGrid },
  { title: 'Starred', url: '/starred', icon: Star },
  { title: 'Shared with me', url: '/shared', icon: Users },
];

const resourceItems = [
  { title: 'Discover', url: '/discover', icon: Compass },
  { title: 'Templates', url: '/templates', icon: FileBox },
  { title: 'Learn', url: '/learn', icon: GraduationCap },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const collapsed = state === 'collapsed';

  return (
    <Sidebar collapsible="icon" className="border-r border-border">
      <SidebarHeader className="p-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src={logo} alt="runtime42" className="w-8 h-8" />
            {!collapsed && <span className="font-semibold text-foreground">runtime42</span>}
          </div>
          <SidebarTrigger className="text-muted-foreground hover:text-foreground" />
        </div>
        
        {/* User selector */}
        <div className={`mt-4 flex items-center gap-2 p-2 rounded-lg bg-muted/50 hover:bg-muted cursor-pointer ${collapsed ? 'justify-center' : ''}`}>
          <div className="w-7 h-7 rounded-lg bg-primary/80 flex items-center justify-center text-primary-foreground text-xs font-semibold">
            V
          </div>
          {!collapsed && (
            <>
              <span className="text-sm font-medium text-foreground flex-1 truncate">Venkata's Space</span>
              <ChevronDown className="w-4 h-4 text-muted-foreground" />
            </>
          )}
        </div>
      </SidebarHeader>

      <SidebarContent className="px-2">
        {/* Main Navigation */}
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {mainItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild tooltip={item.title}>
                    <NavLink 
                      to={item.url} 
                      className={({ isActive }) => 
                        `flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                          isActive ? 'bg-muted text-foreground font-medium' : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                        }`
                      }
                    >
                      <item.icon className="w-5 h-5" />
                      {!collapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Projects */}
        <SidebarGroup>
          {!collapsed && <SidebarGroupLabel className="text-xs text-muted-foreground px-3 mb-1">Projects</SidebarGroupLabel>}
          <SidebarGroupContent>
            <SidebarMenu>
              {projectItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild tooltip={item.title}>
                    <NavLink 
                      to={item.url} 
                      className="flex items-center gap-3 px-3 py-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
                    >
                      <item.icon className="w-5 h-5" />
                      {!collapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Resources */}
        <SidebarGroup>
          {!collapsed && <SidebarGroupLabel className="text-xs text-muted-foreground px-3 mb-1">Resources</SidebarGroupLabel>}
          <SidebarGroupContent>
            <SidebarMenu>
              {resourceItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild tooltip={item.title}>
                    <NavLink 
                      to={item.url} 
                      className="flex items-center gap-3 px-3 py-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
                    >
                      <item.icon className="w-5 h-5" />
                      {!collapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-3 space-y-2">
        {/* Share Card */}
        <div className={`p-3 rounded-lg bg-muted/30 border border-border ${collapsed ? 'hidden' : ''}`}>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-foreground">Share runtime42</p>
              <p className="text-xs text-muted-foreground">Get 10 credits each</p>
            </div>
            <Share2 className="w-5 h-5 text-muted-foreground" />
          </div>
        </div>

        {/* Upgrade Card */}
        <div className={`p-3 rounded-lg bg-muted/30 border border-border ${collapsed ? 'hidden' : ''}`}>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-foreground">Upgrade to Pro</p>
              <p className="text-xs text-muted-foreground">Unlock more features</p>
            </div>
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
              <Zap className="w-4 h-4 text-primary-foreground" />
            </div>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}

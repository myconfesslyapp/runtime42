import { useState } from 'react';
import { Home, Search, LayoutGrid, Star, Users, Compass, FileBox, GraduationCap, Settings, Moon, HelpCircle, FileText, Users2, LogOut, ChevronRight } from 'lucide-react';
import { NavLink, useNavigate } from 'react-router-dom';
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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

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
  const navigate = useNavigate();
  const collapsed = state === 'collapsed';

  const handleSignOut = () => {
    navigate('/auth');
  };

  return (
    <Sidebar collapsible="icon" className="border-r border-border">
      <SidebarHeader className={`p-3 ${collapsed ? 'items-center' : ''}`}>
        <div className={`flex items-center ${collapsed ? 'justify-center' : 'justify-between'}`}>
          <div className={`flex items-center gap-2 ${collapsed ? 'justify-center' : ''}`}>
            <img src={logo} alt="runtime42" className={`${collapsed ? 'w-8 h-8' : 'w-8 h-8'}`} />
            {!collapsed && <span className="font-semibold text-foreground">runtime42</span>}
          </div>
          {!collapsed && <SidebarTrigger className="text-muted-foreground hover:text-foreground" />}
        </div>
        
        {collapsed && (
          <SidebarTrigger className="mt-2 text-muted-foreground hover:text-foreground" />
        )}
        
        {/* User selector - only when expanded */}
        {!collapsed && (
          <div className="mt-4 flex items-center gap-2 p-2 rounded-lg bg-primary/10 border border-primary/20 cursor-pointer hover:bg-primary/20 transition-colors">
            <div className="w-7 h-7 rounded-lg bg-primary flex items-center justify-center text-primary-foreground text-xs font-semibold">
              V
            </div>
            <span className="text-sm font-medium text-foreground flex-1 truncate">Venkata's Space</span>
          </div>
        )}
      </SidebarHeader>

      <SidebarContent className={`px-2 ${collapsed ? 'items-center' : ''}`}>
        {/* Main Navigation */}
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className={collapsed ? 'items-center' : ''}>
              {mainItems.map((item) => (
                <SidebarMenuItem key={item.title} className={collapsed ? 'flex justify-center' : ''}>
                  <SidebarMenuButton asChild tooltip={item.title}>
                    <NavLink 
                      to={item.url} 
                      className={({ isActive }) => 
                        `flex items-center gap-3 ${collapsed ? 'justify-center px-2' : 'px-3'} py-2.5 rounded-lg transition-colors ${
                          isActive ? 'bg-muted text-foreground font-medium' : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                        }`
                      }
                    >
                      <item.icon className="w-5 h-5 flex-shrink-0" />
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
            <SidebarMenu className={collapsed ? 'items-center' : ''}>
              {projectItems.map((item) => (
                <SidebarMenuItem key={item.title} className={collapsed ? 'flex justify-center' : ''}>
                  <SidebarMenuButton asChild tooltip={item.title}>
                    <NavLink 
                      to={item.url} 
                      className={`flex items-center gap-3 ${collapsed ? 'justify-center px-2' : 'px-3'} py-2.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors`}
                    >
                      <item.icon className="w-5 h-5 flex-shrink-0" />
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
            <SidebarMenu className={collapsed ? 'items-center' : ''}>
              {resourceItems.map((item) => (
                <SidebarMenuItem key={item.title} className={collapsed ? 'flex justify-center' : ''}>
                  <SidebarMenuButton asChild tooltip={item.title}>
                    <NavLink 
                      to={item.url} 
                      className={`flex items-center gap-3 ${collapsed ? 'justify-center px-2' : 'px-3'} py-2.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors`}
                    >
                      <item.icon className="w-5 h-5 flex-shrink-0" />
                      {!collapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className={`p-3 ${collapsed ? 'items-center' : ''}`}>
        {/* User Avatar with Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className={`flex items-center gap-3 p-2 rounded-lg hover:bg-muted/50 transition-colors w-full ${collapsed ? 'justify-center' : ''}`}>
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center text-white text-sm font-semibold flex-shrink-0">
                VG
              </div>
              {!collapsed && (
                <div className="flex-1 text-left">
                  <p className="text-sm font-medium text-foreground">Venkata Govind</p>
                  <p className="text-xs text-muted-foreground truncate">venkatagovind@gmail.com</p>
                </div>
              )}
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align={collapsed ? "center" : "start"} side="top" className="w-56">
            <div className="px-3 py-2 border-b border-border">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center text-white text-sm font-semibold">
                  VG
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">Venkata Govind</p>
                  <p className="text-xs text-muted-foreground">venkatagovind@gmail.com</p>
                </div>
              </div>
            </div>
            <DropdownMenuItem className="gap-3 py-2.5 cursor-pointer">
              <Settings className="w-4 h-4" />
              <span>Settings</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="gap-3 py-2.5 cursor-pointer">
              <Moon className="w-4 h-4" />
              <span>Appearance</span>
              <ChevronRight className="w-4 h-4 ml-auto" />
            </DropdownMenuItem>
            <DropdownMenuItem className="gap-3 py-2.5 cursor-pointer">
              <HelpCircle className="w-4 h-4" />
              <span>Support</span>
              <ChevronRight className="w-4 h-4 ml-auto" />
            </DropdownMenuItem>
            <DropdownMenuItem className="gap-3 py-2.5 cursor-pointer">
              <FileText className="w-4 h-4" />
              <span>Documentation</span>
              <ChevronRight className="w-4 h-4 ml-auto" />
            </DropdownMenuItem>
            <DropdownMenuItem className="gap-3 py-2.5 cursor-pointer">
              <Users2 className="w-4 h-4" />
              <span>Community</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={handleSignOut} className="gap-3 py-2.5 cursor-pointer text-destructive focus:text-destructive">
              <LogOut className="w-4 h-4" />
              <span>Sign out</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarFooter>
    </Sidebar>
  );
}

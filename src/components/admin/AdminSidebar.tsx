import { NavLink, useLocation } from 'react-router-dom';
import {
  MessageSquare,
  Image,
  LayoutDashboard,
  Settings,
  Home,
} from 'lucide-react';
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
  useSidebar,
} from '@/components/ui/sidebar';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const menuItems = [
  { title: 'Dashboard', url: '/admin', icon: LayoutDashboard },
  { title: 'Inquiries', url: '/admin?module=inquiries', icon: MessageSquare },
  { title: 'Gallery', url: '/admin?module=gallery', icon: Image },
  { title: 'Settings', url: '/admin?module=settings', icon: Settings },
];

interface AdminSidebarProps {
  activeModule: string;
  onModuleChange: (module: string) => void;
}

export function AdminSidebar({ activeModule, onModuleChange }: AdminSidebarProps) {
  const { state } = useSidebar();
  const collapsed = state === 'collapsed';

  const getModuleFromUrl = (url: string) => {
    if (url === '/admin') return 'dashboard';
    const match = url.match(/module=(\w+)/);
    return match ? match[1] : 'dashboard';
  };

  return (
    <Sidebar collapsible="icon" className="border-r">
      <SidebarHeader className="border-b px-4 py-3">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
            <LayoutDashboard className="w-4 h-4 text-primary" />
          </div>
          {!collapsed && (
            <div>
              <h2 className="font-semibold text-foreground">Admin Panel</h2>
              <p className="text-xs text-muted-foreground">Manage your school</p>
            </div>
          )}
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Modules</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => {
                const module = getModuleFromUrl(item.url);
                const isActive = activeModule === module;
                
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      onClick={() => onModuleChange(module)}
                      className={cn(
                        'w-full cursor-pointer',
                        isActive && 'bg-primary/10 text-primary'
                      )}
                      tooltip={item.title}
                    >
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t p-4">
        <Button
          variant="outline"
          size="sm"
          className="w-full justify-start gap-2"
          asChild
        >
          <NavLink to="/">
            <Home className="h-4 w-4" />
            {!collapsed && <span>Back to Site</span>}
          </NavLink>
        </Button>
      </SidebarFooter>
    </Sidebar>
  );
}

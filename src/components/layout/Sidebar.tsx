import { Link, useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
  Building2,
  Lightbulb,
  BarChart3,
  Sparkles,
  Clock,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';

interface NavItem {
  label: string;
  path: string;
  icon: React.ElementType;
  enabled: boolean;
  comingSoonReason?: string;
}

const navItems: NavItem[] = [
  {
    label: 'Dashboard',
    path: '/',
    icon: LayoutDashboard,
    enabled: true,
  },
  {
    label: 'Companies',
    path: '/companies',
    icon: Building2,
    enabled: true,
  },
  {
    label: 'Skills',
    path: '/skills',
    icon: Lightbulb,
    enabled: false,
    comingSoonReason: 'Requires skill & role tables integration',
  },
  {
    label: 'Analytics',
    path: '/analytics',
    icon: BarChart3,
    enabled: true,
  },
  {
    label: 'Innovation',
    path: '/innovation',
    icon: Sparkles,
    enabled: false,
    comingSoonReason: 'Requires research & IP datasets',
  },
];

export function Sidebar() {
  const location = useLocation();

  return (
    <aside className="w-64 border-r border-border bg-sidebar flex-shrink-0 hidden lg:flex flex-col">
      {/* Logo */}
      <div className="h-16 flex items-center px-6 border-b border-border">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-semibold text-sm">DC</span>
          </div>
          <div>
            <span className="font-semibold text-foreground">SRM DCC</span>
            <span className="text-[10px] text-muted-foreground block -mt-0.5">Digital Career Compass</span>
          </div>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-1">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path || 
            (item.path !== '/' && location.pathname.startsWith(item.path));
          const Icon = item.icon;

          if (!item.enabled) {
            return (
              <Tooltip key={item.path} delayDuration={0}>
                <TooltipTrigger asChild>
                  <div className="nav-item-disabled">
                    <Icon className="w-5 h-5" />
                    <span>{item.label}</span>
                    <Clock className="w-3.5 h-3.5 ml-auto text-warning" />
                  </div>
                </TooltipTrigger>
                <TooltipContent side="right" className="max-w-[200px]">
                  <div className="text-xs">
                    <span className="font-medium">Coming Soon</span>
                    <p className="text-muted-foreground mt-0.5">{item.comingSoonReason}</p>
                  </div>
                </TooltipContent>
              </Tooltip>
            );
          }

          return (
            <Link
              key={item.path}
              to={item.path}
              className={cn(isActive ? 'nav-item-active' : 'nav-item')}
            >
              <Icon className="w-5 h-5" />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-border">
        <p className="text-[10px] text-muted-foreground leading-relaxed">
          Platform developed by students under structured training at{' '}
          <span className="font-medium">Talenciaglobal</span>
        </p>
      </div>
    </aside>
  );
}

import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, LayoutDashboard, Building2, BarChart3, Lightbulb, Sparkles, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

const navItems = [
  { label: 'Dashboard', path: '/', icon: LayoutDashboard, enabled: true },
  { label: 'Companies', path: '/companies', icon: Building2, enabled: true },
  { label: 'Skills', path: '/skills', icon: Lightbulb, enabled: false },
  { label: 'Analytics', path: '/analytics', icon: BarChart3, enabled: true },
  { label: 'Innovation', path: '/innovation', icon: Sparkles, enabled: false },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="h-16 border-b border-border bg-background flex items-center px-4 lg:px-6">
      {/* Mobile Menu */}
      <div className="lg:hidden">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="mr-2">
              <Menu className="w-5 h-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-64 p-0">
            <div className="h-16 flex items-center px-6 border-b border-border">
              <Link to="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
                <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                  <span className="text-primary-foreground font-semibold text-sm">DC</span>
                </div>
                <span className="font-semibold text-foreground">SRM DCC</span>
              </Link>
            </div>
            <nav className="p-4 space-y-1">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                const Icon = item.icon;

                if (!item.enabled) {
                  return (
                    <div key={item.path} className="nav-item-disabled">
                      <Icon className="w-5 h-5" />
                      <span>{item.label}</span>
                      <Clock className="w-3.5 h-3.5 ml-auto text-warning" />
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={cn(isActive ? 'nav-item-active' : 'nav-item')}
                    onClick={() => setOpen(false)}
                  >
                    <Icon className="w-5 h-5" />
                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </nav>
          </SheetContent>
        </Sheet>
      </div>

      {/* Mobile Logo */}
      <div className="lg:hidden flex items-center gap-2">
        <div className="w-7 h-7 rounded-lg bg-primary flex items-center justify-center">
          <span className="text-primary-foreground font-semibold text-xs">DC</span>
        </div>
        <span className="font-semibold text-foreground text-sm">SRM DCC</span>
      </div>

      {/* Page Title - Desktop */}
      <div className="hidden lg:block">
        <h1 className="text-lg font-medium text-foreground">
          {getPageTitle(location.pathname)}
        </h1>
      </div>

      {/* Spacer */}
      <div className="flex-1" />
    </header>
  );
}

function getPageTitle(pathname: string): string {
  if (pathname === '/') return 'Dashboard';
  if (pathname === '/companies') return 'Companies';
  if (pathname.startsWith('/companies/')) return 'Company Details';
  if (pathname === '/analytics') return 'Analytics';
  if (pathname === '/skills') return 'Skills';
  if (pathname === '/innovation') return 'Innovation';
  return 'SRM DCC';
}

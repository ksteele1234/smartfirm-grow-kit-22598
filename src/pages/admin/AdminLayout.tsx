import { useEffect } from 'react';
import { Outlet, useNavigate, Link, useLocation } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import ErrorBoundary from '@/components/ErrorBoundary';
import {
  LayoutDashboard,
  FileText,
  FolderOpen,
  Tags,
  Users,
  LogOut,
  Loader2,
  Menu,
  X,
  BarChart3,
  DollarSign,
  Activity,
  Mail,
  Contact,
} from 'lucide-react';
import { toast } from 'sonner';
import { useState } from 'react';
import { cn } from '@/lib/utils';

interface NavSection {
  title: string;
  items: { href: string; label: string; icon: React.ComponentType<{ size?: number }> }[];
}

const navSections: NavSection[] = [
  {
    title: 'CRM',
    items: [
      { href: '/admin/crm', label: 'Overview', icon: BarChart3 },
      { href: '/admin/crm/pipeline', label: 'Pipeline', icon: DollarSign },
      { href: '/admin/crm/contacts', label: 'Contacts', icon: Contact },
      { href: '/admin/crm/activity', label: 'Activity', icon: Activity },
      { href: '/admin/crm/emails', label: 'Emails', icon: Mail },
    ],
  },
  {
    title: 'Blog',
    items: [
      { href: '/admin', label: 'Dashboard', icon: LayoutDashboard },
      { href: '/admin/posts', label: 'Posts', icon: FileText },
      { href: '/admin/categories', label: 'Categories', icon: FolderOpen },
      { href: '/admin/tags', label: 'Tags', icon: Tags },
      { href: '/admin/profiles', label: 'Authors', icon: Users },
    ],
  },
];

export default function AdminLayout() {
  const { user, isLoading, isAdmin, isEditor, signOut } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (!isLoading) {
      if (!user) {
        navigate('/auth');
      } else if (!isAdmin && !isEditor) {
        toast.error('You do not have permission to access this area');
        navigate('/');
      }
    }
  }, [user, isLoading, isAdmin, isEditor, navigate]);

  const handleSignOut = async () => {
    const { error } = await signOut();
    if (error) {
      toast.error('Error signing out');
    } else {
      toast.success('Signed out successfully');
      navigate('/auth');
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!user || (!isAdmin && !isEditor)) {
    return null;
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Mobile header */}
      <div className="lg:hidden bg-white border-b border-slate-200 px-4 py-3 flex items-center justify-between">
        <Link to="/admin" className="font-bold text-primary text-lg">
          SmartFirm Admin
        </Link>
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 text-slate-600 hover:text-primary"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div className="flex">
        {/* Sidebar */}
        <aside
          className={cn(
            'fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-slate-200 transform transition-transform duration-200 lg:translate-x-0 lg:static',
            mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
          )}
        >
          <div className="h-full flex flex-col">
            {/* Logo */}
            <div className="p-6 border-b border-slate-200 hidden lg:block">
              <Link to="/admin" className="font-bold text-primary text-xl">
                SmartFirm Admin
              </Link>
            </div>

            {/* Navigation */}
            <nav className="flex-1 p-4 space-y-4 mt-16 lg:mt-0">
              {navSections.map((section) => (
                <div key={section.title}>
                  <div className="px-3 mb-1 text-xs font-semibold uppercase tracking-wider text-slate-400">
                    {section.title}
                  </div>
                  <div className="space-y-1">
                    {section.items.map((item) => {
                      const isActive =
                        item.href === '/admin'
                          ? location.pathname === '/admin'
                          : location.pathname.startsWith(item.href);
                      return (
                        <Link
                          key={item.href}
                          to={item.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className={cn(
                            'flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors',
                            isActive
                              ? 'bg-primary text-white'
                              : 'text-slate-600 hover:bg-slate-100 hover:text-primary'
                          )}
                        >
                          <item.icon size={18} />
                          {item.label}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              ))}
            </nav>

            {/* User section */}
            <div className="p-4 border-t border-slate-200">
              <div className="text-sm text-slate-600 mb-2 truncate">
                {user.email}
              </div>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  asChild
                  className="flex-1"
                >
                  <Link to="/">View Site</Link>
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleSignOut}
                  className="text-slate-600"
                >
                  <LogOut size={16} />
                </Button>
              </div>
            </div>
          </div>
        </aside>

        {/* Mobile overlay */}
        {mobileMenuOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={() => setMobileMenuOpen(false)}
          />
        )}

        {/* Main content */}
        <main className="flex-1 p-4 lg:p-8 min-h-screen">
          <ErrorBoundary title="Admin page error">
            <Outlet />
          </ErrorBoundary>
        </main>
      </div>
    </div>
  );
}

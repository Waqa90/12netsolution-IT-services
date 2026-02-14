import { useAuth } from '../../contexts/AuthContext';
import { LogOut, Calendar, FileText, LayoutDashboard } from 'lucide-react';

interface AdminLayoutProps {
  children: React.ReactNode;
  currentPage: 'dashboard' | 'bookings' | 'quotes';
}

export default function AdminLayout({ children, currentPage }: AdminLayoutProps) {
  const { signOut, user } = useAuth();

  const handleSignOut = async () => {
    await signOut();
  };

  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard, href: '/admin' },
    { id: 'bookings', label: 'Bookings', icon: Calendar, href: '/admin/bookings' },
    { id: 'quotes', label: 'Quotes', icon: FileText, href: '/admin/quotes' },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <nav className="bg-white border-b border-slate-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-8">
              <h1 className="text-xl font-bold text-slate-800">Admin Panel</h1>
              <div className="hidden md:flex space-x-1">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = item.id === currentPage;
                  return (
                    <a
                      key={item.id}
                      href={item.href}
                      className={`flex items-center px-4 py-2 rounded-lg font-medium transition-colors ${
                        isActive
                          ? 'bg-blue-50 text-blue-600'
                          : 'text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      <Icon className="w-4 h-4 mr-2" />
                      {item.label}
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="text-sm text-slate-600">
                {user?.email}
              </div>
              <button
                onClick={handleSignOut}
                className="flex items-center px-4 py-2 text-slate-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
              >
                <LogOut className="w-4 h-4 mr-2" />
                <span className="hidden sm:inline">Sign Out</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
    </div>
  );
}

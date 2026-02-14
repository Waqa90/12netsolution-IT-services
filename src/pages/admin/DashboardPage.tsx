import { useEffect, useState } from 'react';
import AdminLayout from '../../components/admin/AdminLayout';
import { supabase } from '../../lib/supabase';
import { Calendar, FileText, TrendingUp } from 'lucide-react';

interface Stats {
  totalBookings: number;
  totalQuotes: number;
  pendingBookings: number;
  pendingQuotes: number;
}

export default function DashboardPage() {
  const [stats, setStats] = useState<Stats>({
    totalBookings: 0,
    totalQuotes: 0,
    pendingBookings: 0,
    pendingQuotes: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const [bookingsRes, quotesRes, pendingBookingsRes, pendingQuotesRes] = await Promise.all([
        supabase.from('service_bookings').select('*', { count: 'exact', head: true }),
        supabase.from('quote_requests').select('*', { count: 'exact', head: true }),
        supabase.from('service_bookings').select('*', { count: 'exact', head: true }).eq('status', 'pending'),
        supabase.from('quote_requests').select('*', { count: 'exact', head: true }).eq('status', 'pending'),
      ]);

      setStats({
        totalBookings: bookingsRes.count || 0,
        totalQuotes: quotesRes.count || 0,
        pendingBookings: pendingBookingsRes.count || 0,
        pendingQuotes: pendingQuotesRes.count || 0,
      });
    } catch (error) {
      console.error('Error fetching stats:', error);
    } finally {
      setLoading(false);
    }
  };

  const statCards = [
    {
      label: 'Total Bookings',
      value: stats.totalBookings,
      icon: Calendar,
      color: 'blue',
      pending: stats.pendingBookings,
    },
    {
      label: 'Total Quotes',
      value: stats.totalQuotes,
      icon: FileText,
      color: 'green',
      pending: stats.pendingQuotes,
    },
    {
      label: 'Pending Items',
      value: stats.pendingBookings + stats.pendingQuotes,
      icon: TrendingUp,
      color: 'orange',
    },
  ];

  return (
    <AdminLayout currentPage="dashboard">
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">Dashboard Overview</h2>
          <p className="text-slate-600 mt-1">Monitor your business requests and bookings</p>
        </div>

        {loading ? (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {statCards.map((stat) => {
              const Icon = stat.icon;
              const colorClasses = {
                blue: 'bg-blue-50 text-blue-600',
                green: 'bg-green-50 text-green-600',
                orange: 'bg-orange-50 text-orange-600',
              }[stat.color];

              return (
                <div key={stat.label} className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-lg ${colorClasses}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <p className="text-slate-600 text-sm font-medium">{stat.label}</p>
                    <p className="text-3xl font-bold text-slate-800">{stat.value}</p>
                    {stat.pending !== undefined && stat.pending > 0 && (
                      <p className="text-sm text-orange-600 font-medium">
                        {stat.pending} pending
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <a
            href="/admin/bookings"
            className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-slate-800">View Bookings</h3>
                <p className="text-slate-600 mt-1">Manage service booking requests</p>
              </div>
              <Calendar className="w-8 h-8 text-blue-600" />
            </div>
          </a>

          <a
            href="/admin/quotes"
            className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-slate-800">View Quotes</h3>
                <p className="text-slate-600 mt-1">Review quote requests</p>
              </div>
              <FileText className="w-8 h-8 text-green-600" />
            </div>
          </a>
        </div>
      </div>
    </AdminLayout>
  );
}

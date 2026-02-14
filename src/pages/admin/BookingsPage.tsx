import { useEffect, useState } from 'react';
import AdminLayout from '../../components/admin/AdminLayout';
import { supabase } from '../../lib/supabase';
import { Calendar, Clock, Mail, Phone, MapPin, MessageSquare } from 'lucide-react';

interface Booking {
  id: string;
  customer_name: string;
  email: string;
  phone: string;
  service_type: string;
  preferred_date: string;
  preferred_time: string;
  address: string;
  message: string;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  created_at: string;
}

export default function BookingsPage() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<string>('all');

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const { data, error } = await supabase
        .from('service_bookings')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setBookings(data || []);
    } catch (error) {
      console.error('Error fetching bookings:', error);
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (id: string, newStatus: Booking['status']) => {
    try {
      const { error } = await supabase
        .from('service_bookings')
        .update({ status: newStatus })
        .eq('id', id);

      if (error) throw error;

      setBookings(bookings.map(b => b.id === id ? { ...b, status: newStatus } : b));
    } catch (error) {
      console.error('Error updating status:', error);
    }
  };

  const filteredBookings = filter === 'all'
    ? bookings
    : bookings.filter(b => b.status === filter);

  const statusColors = {
    pending: 'bg-orange-100 text-orange-700',
    confirmed: 'bg-blue-100 text-blue-700',
    completed: 'bg-green-100 text-green-700',
    cancelled: 'bg-red-100 text-red-700',
  };

  return (
    <AdminLayout currentPage="bookings">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold text-slate-800">Service Bookings</h2>
            <p className="text-slate-600 mt-1">Manage all service booking requests</p>
          </div>

          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">All Bookings</option>
            <option value="pending">Pending</option>
            <option value="confirmed">Confirmed</option>
            <option value="completed">Completed</option>
            <option value="cancelled">Cancelled</option>
          </select>
        </div>

        {loading ? (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          </div>
        ) : filteredBookings.length === 0 ? (
          <div className="bg-white rounded-xl p-12 text-center">
            <Calendar className="w-16 h-16 text-slate-300 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-slate-800 mb-2">No bookings found</h3>
            <p className="text-slate-600">
              {filter === 'all' ? 'No bookings have been submitted yet.' : `No ${filter} bookings found.`}
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredBookings.map((booking) => (
              <div key={booking.id} className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                  <div className="flex-1 space-y-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-lg font-semibold text-slate-800">{booking.customer_name}</h3>
                        <p className="text-sm text-slate-600 mt-1">
                          Service: <span className="font-medium">{booking.service_type}</span>
                        </p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${statusColors[booking.status]}`}>
                        {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div className="flex items-center text-sm text-slate-600">
                        <Mail className="w-4 h-4 mr-2 text-slate-400" />
                        {booking.email}
                      </div>
                      <div className="flex items-center text-sm text-slate-600">
                        <Phone className="w-4 h-4 mr-2 text-slate-400" />
                        {booking.phone}
                      </div>
                      <div className="flex items-center text-sm text-slate-600">
                        <Calendar className="w-4 h-4 mr-2 text-slate-400" />
                        {new Date(booking.preferred_date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center text-sm text-slate-600">
                        <Clock className="w-4 h-4 mr-2 text-slate-400" />
                        {booking.preferred_time}
                      </div>
                      <div className="flex items-start text-sm text-slate-600 md:col-span-2">
                        <MapPin className="w-4 h-4 mr-2 text-slate-400 mt-0.5 flex-shrink-0" />
                        <span>{booking.address}</span>
                      </div>
                      {booking.message && (
                        <div className="flex items-start text-sm text-slate-600 md:col-span-2">
                          <MessageSquare className="w-4 h-4 mr-2 text-slate-400 mt-0.5 flex-shrink-0" />
                          <span>{booking.message}</span>
                        </div>
                      )}
                    </div>

                    <div className="text-xs text-slate-500">
                      Submitted: {new Date(booking.created_at).toLocaleString()}
                    </div>
                  </div>

                  <div className="flex lg:flex-col gap-2">
                    <button
                      onClick={() => updateStatus(booking.id, 'confirmed')}
                      disabled={booking.status === 'confirmed'}
                      className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Confirm
                    </button>
                    <button
                      onClick={() => updateStatus(booking.id, 'completed')}
                      disabled={booking.status === 'completed'}
                      className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white text-sm font-medium rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Complete
                    </button>
                    <button
                      onClick={() => updateStatus(booking.id, 'cancelled')}
                      disabled={booking.status === 'cancelled'}
                      className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </AdminLayout>
  );
}
